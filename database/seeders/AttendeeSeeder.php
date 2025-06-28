<?php

namespace Database\Seeders;

use App\Models\Attendee;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AttendeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Attendee::truncate();

        $attendees = [
            // Japan
            ['name' => '田中太郎', 'email' => 'tanaka@example.com', 'country_code' => 'JP'],
            ['name' => '佐藤花子', 'email' => 'sato@example.com', 'country_code' => 'JP'],
            ['name' => '鈴木一郎', 'email' => 'suzuki@example.com', 'country_code' => 'JP'],
            ['name' => '高橋美咲', 'email' => 'takahashi@example.com', 'country_code' => 'JP'],
            ['name' => '伊藤健太', 'email' => 'ito@example.com', 'country_code' => 'JP'],

            // USA
            ['name' => 'John Smith', 'email' => 'john@example.com', 'country_code' => 'US'],
            ['name' => 'Jane Doe', 'email' => 'jane@example.com', 'country_code' => 'US'],
            ['name' => 'Mike Johnson', 'email' => 'mike@example.com', 'country_code' => 'US'],

            // India
            ['name' => 'Raj Patel', 'email' => 'raj@example.com', 'country_code' => 'IN'],
            ['name' => 'Priya Sharma', 'email' => 'priya@example.com', 'country_code' => 'IN'],

            // Germany
            ['name' => 'Hans Mueller', 'email' => 'hans@example.com', 'country_code' => 'DE'],
            ['name' => 'Anna Schmidt', 'email' => 'anna@example.com', 'country_code' => 'DE'],

            // UK
            ['name' => 'James Wilson', 'email' => 'james@example.com', 'country_code' => 'GB'],

            // Canada
            ['name' => 'Sarah Brown', 'email' => 'sarah@example.com', 'country_code' => 'CA'],
        ];

        foreach ($attendees as $attendee) {
            Attendee::create($attendee);
        }
    }
}
