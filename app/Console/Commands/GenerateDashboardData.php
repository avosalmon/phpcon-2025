<?php

declare(strict_types=1);

namespace App\Console\Commands;

use App\Models\Attendee;
use App\Models\Sponsor;
use App\Models\TalkProposal;
use App\Models\Ticket;
use App\Models\WebsiteTraffic;
use App\TalkProposalStatus;
use Illuminate\Console\Command;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\DB;

class GenerateDashboardData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'dashboard:generate-data';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Continuously generate new dashboard data every 3 seconds';

    private array $countries = [
        'jp', 'us', 'in', 'de', 'gb', 'ca',
    ];

    private array $ticketTypes = ['early_bird', 'regular'];

    private array $sponsorTiers = ['platinum', 'gold', 'silver', 'bronze'];

    private array $talkCategories = [
        'laravel', 'frontend', 'devops', 'ai',
    ];

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Starting dashboard data generation... Press Ctrl+C to stop.');

        while (true) {
            try {
                DB::transaction(function () {
                    $this->generateRandomData();
                });

                $this->info('['.now()->format('Y-m-d H:i:s').'] Generated new dashboard data');

                sleep(3);
            } catch (\Exception $e) {
                $this->error('Error generating data: '.$e->getMessage());
                sleep(1);
            }
        }
    }

    private function generateRandomData(): void
    {
        // Randomly decide what type of data to generate
        $actions = [
            'attendee_and_ticket',
            'talk_proposal',
            'sponsor',
            'website_traffic',
        ];

        $action = $actions[array_rand($actions)];

        match ($action) {
            'attendee_and_ticket' => $this->generateAttendeeAndTicket(),
            'talk_proposal' => $this->generateTalkProposal(),
            'sponsor' => $this->generateSponsor(),
            'website_traffic' => $this->generateWebsiteTraffic(),
        };
    }

    private function generateAttendeeAndTicket(): void
    {
        $attendee = Attendee::create([
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'country_code' => $this->countries[array_rand($this->countries)],
        ]);

        $ticketType = $this->ticketTypes[array_rand($this->ticketTypes)];
        $price = $ticketType === 'early_bird' ? fake()->randomFloat(2, 15000, 25000) : fake()->randomFloat(2, 25000, 35000);

        Ticket::create([
            'attendee_id' => $attendee->id,
            'type' => $ticketType,
            'price' => $price,
            'purchased_at' => now()->subDays(rand(0, 90)),
        ]);
    }

    private function generateTalkProposal(): void
    {
        TalkProposal::create([
            'name' => fake()->name(),
            'email' => fake()->safeEmail(),
            'talk_title' => fake()->sentence(4),
            'talk_description' => fake()->paragraph(3),
            'category' => $this->talkCategories[array_rand($this->talkCategories)],
            'status' => fake()->randomElement(TalkProposalStatus::cases())->value,
        ]);
    }

    private function generateSponsor(): void
    {
        Sponsor::create([
            'name' => fake()->company(),
            'tier' => $this->sponsorTiers[array_rand($this->sponsorTiers)],
        ]);
    }

    private function generateWebsiteTraffic(): void
    {
        $hour = now()->hour;
        $date = now()->toDateString();

        // Try to update existing record or create new one
        try {
            $existingRecord = WebsiteTraffic::where('date', $date)->where('hour', $hour)->first();

            if ($existingRecord) {
                // Update existing record by incrementing values
                $existingRecord->increment('visitors', rand(1, 10));
                $existingRecord->increment('page_views', rand(1, 20));
            } else {
                // Create new record with initial values
                WebsiteTraffic::create([
                    'date' => $date,
                    'hour' => $hour,
                    'visitors' => rand(50, 200),
                    'page_views' => rand(100, 500),
                ]);
            }
        } catch (QueryException $e) {
            // If unique constraint violation, just increment the existing record
            if (str_contains($e->getMessage(), 'UNIQUE constraint failed')) {
                $existingRecord = WebsiteTraffic::where('date', $date)->where('hour', $hour)->first();
                if ($existingRecord) {
                    $existingRecord->increment('visitors', rand(1, 10));
                    $existingRecord->increment('page_views', rand(1, 20));
                }
            } else {
                throw $e;
            }
        }

        // Sometimes also generate data for other hours to show variety
        if (rand(1, 4) === 1) {
            $randomHour = rand(0, 23);

            try {
                $existingRandomRecord = WebsiteTraffic::where('date', $date)->where('hour', $randomHour)->first();

                if ($existingRandomRecord) {
                    $existingRandomRecord->increment('visitors', rand(1, 5));
                    $existingRandomRecord->increment('page_views', rand(1, 10));
                } else {
                    WebsiteTraffic::create([
                        'date' => $date,
                        'hour' => $randomHour,
                        'visitors' => rand(50, 200),
                        'page_views' => rand(100, 500),
                    ]);
                }
            } catch (QueryException $e) {
                // If unique constraint violation, just increment the existing record
                if (str_contains($e->getMessage(), 'UNIQUE constraint failed')) {
                    $existingRandomRecord = WebsiteTraffic::where('date', $date)->where('hour', $randomHour)->first();
                    if ($existingRandomRecord) {
                        $existingRandomRecord->increment('visitors', rand(1, 5));
                        $existingRandomRecord->increment('page_views', rand(1, 10));
                    }
                } else {
                    throw $e;
                }
            }
        }
    }
}
