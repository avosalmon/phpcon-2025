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
        Sponsor::insert([
            ['name' => 'Laravel', 'tier' => 'platinum'],
            ['name' => 'AWS', 'tier' => 'gold'],
            ['name' => 'Google Cloud', 'tier' => 'gold'],
            ['name' => 'OpenAI', 'tier' => 'gold'],
            ['name' => 'GitHub', 'tier' => 'silver'],
            ['name' => 'Stripe', 'tier' => 'silver'],
            ['name' => 'Twilio', 'tier' => 'silver'],
            ['name' => 'DigitalOcean', 'tier' => 'bronze'],
            ['name' => 'Pusher', 'tier' => 'bronze'],
            ['name' => 'Mailgun', 'tier' => 'bronze'],
            ['name' => 'Algolia', 'tier' => 'bronze'],
            ['name' => 'Vonage', 'tier' => 'bronze'],
        ]);
    }
}
