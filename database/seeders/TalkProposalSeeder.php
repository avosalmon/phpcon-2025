<?php

namespace Database\Seeders;

use App\Models\TalkProposal;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TalkProposalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TalkProposal::factory()->count(10)->create();
    }
}
