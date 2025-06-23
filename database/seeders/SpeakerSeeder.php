<?php

namespace Database\Seeders;

use App\Models\Speaker;
use Illuminate\Database\Seeder;

class SpeakerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Speaker::truncate();

        Speaker::insert([
            [
                'name' => 'Jess Archer',
                'tagline' => 'Engineering Team Lead at Laravel',
                'twitter' => 'jessarchercodes',
                'avatar' => 'https://pbs.twimg.com/profile_images/1727582257509277696/v4dIgS5-_400x400.jpg',
            ],
            [
                'name' => 'Tim MacDonald',
                'tagline' => 'Developer at Laravel',
                'twitter' => 'timacdonald87',
                'avatar' => 'https://pbs.twimg.com/profile_images/1550646512384114688/zZE9rQay_400x400.jpg',
            ],
            [
                'name' => 'Jeremy Butler',
                'tagline' => 'Designer at Laravel',
                'twitter' => 'jrmymbtlr',
                'avatar' => 'https://pbs.twimg.com/profile_images/1927208453644206080/GnBNNcR0_400x400.jpg',
            ],
            [
                'name' => 'Phillip Hartin',
                'tagline' => 'Product Manager at Laravel',
                'twitter' => 'philliphartin',
                'avatar' => 'https://pbs.twimg.com/profile_images/1833005868176314368/nij9cp2__400x400.jpg',
            ],
            [
                'name' => 'James Carpenter',
                'tagline' => 'Infrastructure Engineer at Laravel',
                'twitter' => 'JamesCarpe47780',
                'avatar' => 'https://ca.slack-edge.com/T030VF85W-U07UV4J0JAE-9cff4444dbde-512',
            ],
            [
                'name' => 'Sabrina Bourouis',
                'tagline' => 'Frontend Engineer at Laravel',
                'twitter' => 'yayydev',
                'avatar' => 'https://pbs.twimg.com/profile_images/1725445366412386304/aty15LU1_400x400.jpg',
            ],
        ]);
    }
}
