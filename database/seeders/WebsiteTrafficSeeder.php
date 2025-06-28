<?php

namespace Database\Seeders;

use App\Models\WebsiteTraffic;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class WebsiteTrafficSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        WebsiteTraffic::truncate();

        $today = Carbon::today();

        // Create traffic data for each hour of today
        for ($hour = 0; $hour < 24; $hour++) {
            // Simulate realistic traffic patterns
            $baseVisitors = 50;
            if ($hour >= 8 && $hour <= 17) {
                // Business hours - higher traffic
                $baseVisitors = 150 + rand(0, 100);
            } elseif ($hour >= 18 && $hour <= 22) {
                // Evening - moderate traffic
                $baseVisitors = 100 + rand(0, 50);
            } else {
                // Night/early morning - lower traffic
                $baseVisitors = 20 + rand(0, 30);
            }

            WebsiteTraffic::create([
                'date' => $today,
                'hour' => $hour,
                'visitors' => $baseVisitors,
                'page_views' => $baseVisitors * rand(2, 5), // 2-5 page views per visitor
            ]);
        }
    }
}
