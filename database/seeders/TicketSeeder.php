<?php

namespace Database\Seeders;

use App\Models\Attendee;
use App\Models\Ticket;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TicketSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $attendees = Attendee::all();

        foreach ($attendees as $attendee) {
            $type = rand(1, 10) <= 4 ? 'early_bird' : 'regular';
            $price = $type === 'early_bird' ? 12_000 : 18_000;

            // Random purchase date in the last 6 months
            $purchasedAt = Carbon::now()->subMonths(rand(1, 6))->subDays(rand(0, 30));

            Ticket::create([
                'attendee_id' => $attendee->id,
                'type' => $type,
                'price' => $price,
                'purchased_at' => $purchasedAt,
            ]);
        }
    }
}
