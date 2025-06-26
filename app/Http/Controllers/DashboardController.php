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
        $totalRevenue = Ticket::sum('price');
        $totalAttendees = Attendee::count();
        $totalTalkProposals = TalkProposal::count();
        $totalSponsors = Sponsor::count();

        $attendeesByCountry = Attendee::select('country_code')
            ->selectRaw('COUNT(*) as attendees')
            ->groupBy('country_code')
            ->orderByDesc('attendees')
            ->get()
            ->map(fn ($item) => [
                'country' => strtolower($item->country_code),
                'attendees' => $item->attendees,
                'fill' => $this->getCountryColor($item->country_code),
            ]);

        $ticketSalesData = Inertia::defer(function () {
            [$monthFormat, $yearMonthFormat] = match (DB::getDriverName()) {
                'sqlite' => ['strftime("%m", purchased_at) || "月"', 'strftime("%Y-%m", purchased_at)'],
                'pgsql' => ["TO_CHAR(purchased_at, 'MM') || '月'", "TO_CHAR(purchased_at, 'YYYY-MM')"],
                default => ['DATE_FORMAT(purchased_at, "%m月")', 'DATE_FORMAT(purchased_at, "%Y-%m")'],
            };

            return Ticket::select(
                DB::raw("{$monthFormat} as month"),
                DB::raw('SUM(price) as sales'),
                DB::raw("SUM(CASE WHEN type = 'early_bird' THEN 1 ELSE 0 END) as early"),
                DB::raw("SUM(CASE WHEN type = 'regular' THEN 1 ELSE 0 END) as regular")
            )
                ->groupBy(DB::raw($yearMonthFormat))
                ->orderBy(DB::raw($yearMonthFormat))
                ->get();
        });

        $talkCategoriesData = TalkProposal::select('category')
            ->selectRaw('COUNT(*) as submissions')
            ->groupBy('category')
            ->get()
            ->map(fn ($item) => [
                'category' => $item->category,
                'submissions' => $item->submissions,
                'fill' => $this->getCategoryColor($item->category),
            ]);

        $trafficData = WebsiteTraffic::where('date', Carbon::today())
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
            'ticketSalesData' => $ticketSalesData,
            'talkCategoriesData' => $talkCategoriesData,
            'trafficData' => $trafficData,
        ]);
    }

    private function getCountryColor(string $countryCode): string
    {
        $colors = [
            'JP' => 'var(--chart-1)',
            'US' => 'var(--chart-2)',
            'IN' => 'var(--chart-3)',
            'DE' => 'var(--chart-4)',
            'GB' => 'var(--chart-5)',
            'CA' => '#3b82f6',
        ];

        return $colors[$countryCode] ?? '#8b5cf6';
    }

    private function getCategoryColor(string $category): string
    {
        $colors = [
            'laravel' => '#ef4444',
            'frontend' => '#3b82f6',
            'devops' => '#10b981',
            'ai' => '#f59e0b',
            'other' => '#8b5cf6',
        ];

        return $colors[$category] ?? '#8b5cf6';
    }
}
