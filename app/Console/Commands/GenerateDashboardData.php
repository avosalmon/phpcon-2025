<?php

declare(strict_types=1);

namespace App\Console\Commands;

use App\Models\Attendee;
use App\Models\Sponsor;
use App\Models\TalkProposal;
use App\Models\Ticket;
use App\Models\WebsiteTraffic;
use App\TalkProposalStatus;
use Exception;
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
    protected $signature = 'dashboard:seed';

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
                    $this->generateAttendeeAndTicket();
                    $this->generateTalkProposal();
                    $this->generateSponsor();
                    $this->generateWebsiteTraffic();
                });

                $this->info('['.now()->format('Y-m-d H:i:s').'] Generated new dashboard data');

                sleep(3);
            } catch (Exception $e) {
                $this->error('Error generating data: '.$e->getMessage());
                sleep(1);
            }
        }
    }

    private function generateAttendeeAndTicket(): void
    {
        $count = rand(2, 5);

        for ($i = 0; $i < $count; $i++) {
            $attendee = Attendee::create([
                'name' => fake()->name(),
                'email' => fake()->unique()->safeEmail(),
                'country_code' => $this->countries[array_rand($this->countries)],
            ]);

            $ticketType = $this->ticketTypes[array_rand($this->ticketTypes)];
            $price = $ticketType === 'early_bird' ? fake()->numberBetween(15000, 25000) : fake()->numberBetween(25000, 35000);

            Ticket::create([
                'attendee_id' => $attendee->id,
                'type' => $ticketType,
                'price' => $price,
                'purchased_at' => now()->subDays(rand(0, 90)),
            ]);
        }
    }

    private function generateTalkProposal(): void
    {
        $count = rand(1, 3);

        for ($i = 0; $i < $count; $i++) {
            TalkProposal::create([
                'name' => fake()->name(),
                'email' => fake()->safeEmail(),
                'talk_title' => fake()->sentence(4),
                'talk_description' => fake()->paragraph(3),
                'category' => $this->talkCategories[array_rand($this->talkCategories)],
                'status' => fake()->randomElement(TalkProposalStatus::cases())->value,
            ]);
        }
    }

    private function generateSponsor(): void
    {
        if (Sponsor::count() >= 20) {
            return;
        }

        Sponsor::create([
            'name' => fake()->company(),
            'tier' => $this->sponsorTiers[array_rand($this->sponsorTiers)],
        ]);
    }

    private function generateWebsiteTraffic(): void
    {
        $date = now()->toDateString();

        // Always update current hour
        $this->updateOrCreateTrafficRecord($date, now()->hour);

        // Generate data for multiple random hours to show variety
        $count = rand(2, 4);
        for ($i = 0; $i < $count; $i++) {
            $randomHour = rand(0, 23);
            $this->updateOrCreateTrafficRecord($date, $randomHour);
        }
    }

    private function updateOrCreateTrafficRecord(string $date, int $hour): void
    {
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
    }
}
