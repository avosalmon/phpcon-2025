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

        // Define names for each country
        $countryNames = [
            'JP' => [
                'first' => ['太郎', '花子', '一郎', '美咲', '健太', '由美', '翔', '愛', '拓也', '麻衣',
                         '大輔', '恵', '智也', '美穂', '裕太', '香織', '雄介', '真理', '聡', '美紀'],
                'last' => ['田中', '佐藤', '鈴木', '高橋', '伊藤', '渡辺', '山本', '中村', '小林', '加藤',
                          '吉田', '山田', '松本', '井上', '木村', '林', '清水', '山崎', '森', '池田']
            ],
            'US' => [
                'first' => ['John', 'Jane', 'Mike', 'Sarah', 'David', 'Lisa', 'Robert', 'Jennifer', 'William', 'Michelle',
                           'James', 'Jessica', 'Christopher', 'Ashley', 'Daniel', 'Amanda', 'Matthew', 'Stephanie', 'Andrew', 'Nicole'],
                'last' => ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez',
                          'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin']
            ],
            'IN' => [
                'first' => ['Raj', 'Priya', 'Amit', 'Sunita', 'Vikram', 'Kavita', 'Arjun', 'Meera', 'Rahul', 'Anjali',
                           'Sanjay', 'Deepika', 'Ravi', 'Pooja', 'Ankit', 'Nisha', 'Suresh', 'Rekha', 'Ashok', 'Geeta'],
                'last' => ['Patel', 'Sharma', 'Singh', 'Kumar', 'Gupta', 'Agarwal', 'Jain', 'Bansal', 'Aggarwal', 'Goel',
                          'Mittal', 'Joshi', 'Shah', 'Chopra', 'Malhotra', 'Verma', 'Srivastava', 'Tiwari', 'Mishra', 'Yadav']
            ],
            'DE' => [
                'first' => ['Hans', 'Anna', 'Klaus', 'Ingrid', 'Wolfgang', 'Ursula', 'Helmut', 'Brigitte', 'Gerhard', 'Monika',
                           'Gunter', 'Sabine', 'Dieter', 'Petra', 'Jurgen', 'Gabriele', 'Manfred', 'Susanne', 'Bernd', 'Karin'],
                'last' => ['Mueller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Schulz', 'Hoffmann',
                          'Schafer', 'Koch', 'Bauer', 'Richter', 'Klein', 'Wolf', 'Schroeder', 'Neumann', 'Schwarz', 'Zimmermann']
            ],
            'GB' => [
                'first' => ['James', 'Mary', 'Robert', 'Patricia', 'John', 'Jennifer', 'Michael', 'Linda', 'William', 'Elizabeth',
                           'David', 'Barbara', 'Richard', 'Susan', 'Joseph', 'Jessica', 'Thomas', 'Sarah', 'Christopher', 'Karen'],
                'last' => ['Smith', 'Jones', 'Williams', 'Brown', 'Wilson', 'Taylor', 'Johnson', 'White', 'Martin', 'Anderson',
                          'Thompson', 'Garcia', 'Clark', 'Rodriguez', 'Lewis', 'Lee', 'Walker', 'Hall', 'Allen', 'Young']
            ],
            'CA' => [
                'first' => ['Michael', 'Sarah', 'David', 'Jennifer', 'Christopher', 'Jessica', 'Matthew', 'Ashley', 'Daniel', 'Amanda',
                           'Andrew', 'Melissa', 'Joshua', 'Nicole', 'James', 'Elizabeth', 'Justin', 'Megan', 'Robert', 'Stephanie'],
                'last' => ['Smith', 'Brown', 'Johnson', 'Williams', 'Jones', 'Miller', 'Davis', 'Wilson', 'Moore', 'Taylor',
                          'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson']
            ]
        ];

        // Country distribution (approximate percentages to reach 500+ attendees)
        $countryDistribution = [
            'JP' => 200,  // 40%
            'US' => 100,  // 20%
            'IN' => 80,   // 16%
            'DE' => 60,   // 12%
            'GB' => 40,   // 8%
            'CA' => 20,   // 4%
        ];

        $attendees = [];
        $emailCounter = 1;

        foreach ($countryDistribution as $countryCode => $count) {
            $names = $countryNames[$countryCode];

            for ($i = 0; $i < $count; $i++) {
                $firstName = $names['first'][array_rand($names['first'])];
                $lastName = $names['last'][array_rand($names['last'])];

                // Create name based on country format
                if ($countryCode === 'JP') {
                    $name = $lastName . $firstName;
                } else {
                    $name = $firstName . ' ' . $lastName;
                }

                $email = 'attendee' . $emailCounter . '@example.com';
                $emailCounter++;

                $attendees[] = [
                    'name' => $name,
                    'email' => $email,
                    'country_code' => $countryCode,
                ];
            }
        }

        // Shuffle the attendees array to randomize the order
        shuffle($attendees);

        foreach ($attendees as $attendee) {
            Attendee::create($attendee);
        }
    }
}
