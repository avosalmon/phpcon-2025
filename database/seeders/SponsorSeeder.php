<?php

namespace Database\Seeders;

use App\Models\Sponsor;
use Illuminate\Database\Seeder;

class SponsorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $sponsors = [
            ['name' => 'Laravel Japan', 'tier' => 'platinum'],
            ['name' => 'Amazon Web Services', 'tier' => 'gold'],
            ['name' => 'Google Cloud', 'tier' => 'gold'],
            ['name' => 'Microsoft Azure', 'tier' => 'gold'],
            ['name' => 'GitHub', 'tier' => 'silver'],
            ['name' => 'Stripe', 'tier' => 'silver'],
            ['name' => 'Twilio', 'tier' => 'silver'],
            ['name' => 'DigitalOcean', 'tier' => 'bronze'],
            ['name' => 'Pusher', 'tier' => 'bronze'],
            ['name' => 'Mailgun', 'tier' => 'bronze'],
            ['name' => 'Algolia', 'tier' => 'bronze'],
            ['name' => 'Vonage', 'tier' => 'bronze'],
        ];

        foreach ($sponsors as $sponsor) {
            Sponsor::create($sponsor);
        }
    }
}
