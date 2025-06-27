<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Attendee;
use App\Models\Sponsor;
use App\Models\TalkProposal;
use App\Models\Ticket;
use App\Models\WebsiteTraffic;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __invoke(): Response
    {
        $totalRevenue = fn () => Ticket::sum('price');
        $totalAttendees = fn () => Attendee::count();
        $totalTalkProposals = fn () => TalkProposal::count();
        $totalSponsors = fn () => Sponsor::count();

        $ticketSales = Inertia::defer(function () {
            [$monthFormat, $yearMonthFormat] = match (DB::getDriverName()) {
                'sqlite' => ['CAST(strftime("%m", purchased_at) AS INTEGER)', 'strftime("%Y-%m", purchased_at)'],
                'pgsql' => ["TO_CHAR(purchased_at, 'FMMM')", "TO_CHAR(purchased_at, 'YYYY-MM')"],
                default => ['DATE_FORMAT(purchased_at, "%c")', 'DATE_FORMAT(purchased_at, "%Y-%m")'],
            };

            return Ticket::select(
                DB::raw("{$monthFormat} as month"),
                DB::raw('SUM(price) as sales'),
                DB::raw("SUM(CASE WHEN type = 'early_bird' THEN 1 ELSE 0 END) as early"),
                DB::raw("SUM(CASE WHEN type = 'regular' THEN 1 ELSE 0 END) as regular")
            )
                ->groupBy(DB::raw($yearMonthFormat), DB::raw($monthFormat))
                ->orderBy(DB::raw($yearMonthFormat))
                ->get();
        });

        $attendeesByCountry = fn () => Attendee::selectRaw(<<<'SQL'
                LOWER(country_code) as country, COUNT(*) as attendees
            SQL)
            ->groupBy('country')
            ->orderByDesc('attendees')
            ->get()
            ->map(fn ($item) => [
                'country' => $item->country,
                'attendees' => $item->attendees,
                'fill' => "var(--color-{$item->country})",
            ]);

        $talkCategories = fn () => TalkProposal::selectRaw(<<<'SQL'
                category, COUNT(*) as submissions
            SQL)
            ->groupBy('category')
            ->get()
            ->map(fn ($item) => [
                'category' => $item->category,
                'submissions' => $item->submissions,
                'fill' => "var(--color-{$item->category})",
            ]);

        $websiteTraffic = fn () => WebsiteTraffic::where('date', Carbon::today())
            ->orderBy('hour')
            ->get()
            ->map(fn ($item) => [
                'time' => sprintf('%02d:00', $item->hour),
                'visitors' => $item->visitors,
            ]);

        return Inertia::render('slide/dashboard', [
            'totalRevenue' => $totalRevenue,
            'totalAttendees' => $totalAttendees,
            'totalTalkProposals' => $totalTalkProposals,
            'totalSponsors' => $totalSponsors,
            'attendeesByCountry' => $attendeesByCountry,
            'ticketSales' => $ticketSales,
            'talkCategories' => $talkCategories,
            'websiteTraffic' => $websiteTraffic,
        ]);
    }
}
