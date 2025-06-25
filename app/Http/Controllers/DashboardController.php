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

        $metrics = [
            [
                'title' => 'チケット売上',
                'value' => '¥'.number_format($totalRevenue),
                'change' => '+18.5%',
                'trend' => 'up',
                'subtitle' => '目標の 85% 達成',
            ],
            [
                'title' => '参加者数',
                'value' => number_format($totalAttendees),
                'change' => '+12.3%',
                'trend' => 'up',
                'subtitle' => '定員 1,500 名',
            ],
            [
                'title' => 'トーク応募',
                'value' => (string) $totalTalkProposals,
                'change' => '+5.2%',
                'trend' => 'up',
                'subtitle' => '採択予定 24 件',
            ],
            [
                'title' => 'スポンサー',
                'value' => (string) $totalSponsors,
                'change' => '+2.1%',
                'trend' => 'up',
                'subtitle' => '目標 20 社',
            ],
        ];

        $attendeesByCountry = Attendee::select('country_code')
            ->selectRaw('COUNT(*) as attendees')
            ->groupBy('country_code')
            ->orderByDesc('attendees')
            ->get()
            ->map(function ($item) {
                return [
                    'country' => strtolower($item->country_code),
                    'attendees' => $item->attendees,
                    'fill' => $this->getCountryColor($item->country_code),
                ];
            });

        $dbDriver = DB::getDriverName();

        if ($dbDriver === 'sqlite') {
            $monthFormat = 'strftime("%m", purchased_at) || "月"';
            $yearMonthFormat = 'strftime("%Y-%m", purchased_at)';
        } elseif ($dbDriver === 'pgsql') {
            $monthFormat = "TO_CHAR(purchased_at, 'MM') || '月'";
            $yearMonthFormat = "TO_CHAR(purchased_at, 'YYYY-MM')";
        }

        $ticketSalesData = Ticket::select(
            DB::raw("{$monthFormat} as month"),
            DB::raw('SUM(price) as sales'),
            DB::raw('SUM(CASE WHEN type = \'early_bird\' THEN 1 ELSE 0 END) as early'),
            DB::raw('SUM(CASE WHEN type = \'regular\' THEN 1 ELSE 0 END) as regular')
        )
            ->groupBy(DB::raw($yearMonthFormat))
            ->orderBy(DB::raw($yearMonthFormat))
            ->get()
            ->map(function ($item) {
                return [
                    'month' => $item->month,
                    'sales' => (int) $item->sales,
                    'early' => $item->early,
                    'regular' => $item->regular,
                ];
            });

        $talkCategoriesData = TalkProposal::select('category')
            ->selectRaw('COUNT(*) as submissions')
            ->groupBy('category')
            ->get()
            ->map(function ($item) {
                return [
                    'category' => $item->category,
                    'submissions' => $item->submissions,
                    'fill' => $this->getCategoryColor($item->category),
                ];
            });

        $trafficData = WebsiteTraffic::where('date', Carbon::today())
            ->orderBy('hour')
            ->get()
            ->map(function ($item) {
                return [
                    'time' => sprintf('%02d:00', $item->hour),
                    'visitors' => $item->visitors,
                ];
            });

        return Inertia::render('slide/dashboard', [
            'metrics' => $metrics,
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
