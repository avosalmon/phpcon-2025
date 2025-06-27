import { Button } from "@/components/ui/button";
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Skeleton } from "@/components/ui/skeleton";
import { SlideLayout } from "@/layouts/slide-layout";
import { cn } from "@/lib/utils";
import { Deferred, router, usePoll } from "@inertiajs/react";
import { BarChart3, Building, DollarSign, Globe, Mic, Pause, Play, RefreshCw, Users } from "lucide-react";
import { motion } from "motion/react";
import { ReactNode, useState } from "react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Pie, PieChart, XAxis, YAxis } from "recharts";

interface DashboardProps {
  totalRevenue: number;
  totalAttendees: number;
  totalTalkProposals: number;
  totalSponsors: number;
  ticketSalesData: {
    month: string;
    sales: number;
    early: number;
    regular: number;
  }[];
  attendeesByCountry: {
    country: string;
    attendees: number;
    fill: string;
  }[];
  talkCategoriesData: {
    category: string;
    submissions: number;
    fill: string;
  }[];
  trafficData: {
    time: string;
    visitors: number;
  }[];
}

const attendeeChartConfig = {
  attendees: {
    label: "参加者数",
  },
  jp: {
    label: "日本",
    color: "#ef4444",
  },
  us: {
    label: "アメリカ",
    color: "var(--chart-2)",
  },
  in: {
    label: "インド",
    color: "var(--chart-3)",
  },
  de: {
    label: "ドイツ",
    color: "var(--chart-4)",
  },
  gb: {
    label: "イギリス",
    color: "var(--chart-5)",
  },
  ca: {
    label: "カナダ",
    color: "#3b82f6",
  },
  other: {
    label: "その他",
    color: "#8b5cf6",
  },
} satisfies ChartConfig;

const salesChartConfig = {
  early: {
    label: "早期割引",
    color: "#10b981",
  },
  regular: {
    label: "通常価格",
    color: "#f59e0b",
  },
} satisfies ChartConfig;

const talkCategoryChartConfig = {
  laravel: {
    label: "Laravel/PHP",
    color: "#ef4444",
  },
  frontend: {
    label: "Frontend",
    color: "#3b82f6",
  },
  devops: {
    label: "DevOps",
    color: "#10b981",
  },
  ai: {
    label: "AI",
    color: "#f59e0b",
  },
  other: {
    label: "その他",
    color: "#8b5cf6",
  },
} satisfies ChartConfig;

const websiteTrafficChartConfig = {
  visitors: {
    label: "訪問者数",
    color: "rgb(139, 92, 246)",
  },
} satisfies ChartConfig;

const Dashboard = ({
  totalRevenue,
  totalAttendees,
  totalTalkProposals,
  totalSponsors,
  ticketSalesData,
  attendeesByCountry,
  talkCategoriesData,
  trafficData,
}: DashboardProps) => {
  const [isPolling, setIsPolling] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { start, stop } = usePoll(3000, {}, { autoStart: false });

  const togglePolling = () => {
    if (isPolling) {
      stop();
      setIsPolling(false);
    } else {
      start();
      setIsPolling(true);
    }
  };

  return (
    <div className="space-y-6 rounded-2xl border border-white/20 bg-white/95 p-8 shadow-lg backdrop-blur-sm">
      <motion.div
        className="mb-6 flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-600">
            <BarChart3 className="h-6 w-6 text-white" />
          </div>
          <div>
            <span className="text-xl font-semibold text-gray-900">Conference Dashboard</span>
            <p className="text-sm text-gray-600">Laravel Live Japan 2026</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            onClick={togglePolling}
            variant="outline"
            size="icon"
            className={cn(isPolling && "border-green-200 bg-green-50 text-green-600 hover:bg-green-100")}
          >
            {isPolling ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
          <Button onClick={() => router.reload()} variant="outline" size="icon">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>

      <motion.div
        className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <motion.div
          className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          whileHover={{ y: -5 }}
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-emerald-600">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
          </div>
          <h3 className="mb-1 text-2xl font-bold text-gray-900">¥{totalRevenue.toLocaleString()}</h3>
          <p className="mb-1 text-sm text-gray-600">チケット売上</p>
          <p className="text-xs text-gray-500">目標の {Math.round((totalRevenue / (15_000 * 1500)) * 100)}% 達成</p>
        </motion.div>

        <motion.div
          className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ y: -5 }}
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-600">
              <Users className="h-6 w-6 text-white" />
            </div>
          </div>
          <h3 className="mb-1 text-2xl font-bold text-gray-900">{totalAttendees.toLocaleString()}名</h3>
          <p className="mb-1 text-sm text-gray-600">参加者数</p>
          <p className="text-xs text-gray-500">定員 1,500 名</p>
        </motion.div>

        <motion.div
          className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileHover={{ y: -5 }}
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-purple-600">
              <Mic className="h-6 w-6 text-white" />
            </div>
          </div>
          <h3 className="mb-1 text-2xl font-bold text-gray-900">{totalTalkProposals}件</h3>
          <p className="mb-1 text-sm text-gray-600">トーク応募</p>
          <p className="text-xs text-gray-500">採択予定 24 件</p>
        </motion.div>

        <motion.div
          className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ y: -5 }}
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-orange-600">
              <Building className="h-6 w-6 text-white" />
            </div>
          </div>
          <h3 className="mb-1 text-2xl font-bold text-gray-900">{totalSponsors}社</h3>
          <p className="mb-1 text-sm text-gray-600">スポンサー</p>
          <p className="text-xs text-gray-500">目標 20 社</p>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Ticket sales chart */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
          <div className="h-full rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
            <>
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">チケット売上枚数</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    onClick={() =>
                      router.reload({
                        only: ["ticketSalesData"],
                        onStart: () => setIsLoading(true),
                        onFinish: () => setIsLoading(false),
                      })
                    }
                    variant="outline"
                    size="icon"
                  >
                    <RefreshCw className={cn("h-4 w-4", isLoading && "animate-spin")} />
                  </Button>
                </div>
              </div>
              <div className="w-full">
                <Deferred data="ticketSalesData" fallback={<Skeleton className="h-[300px] w-full" />}>
                  <ChartContainer config={salesChartConfig} className="h-[300px] w-full">
                    <BarChart data={ticketSalesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" tickLine={false} axisLine={false} className="text-xs" />
                      <YAxis tickLine={false} axisLine={false} className="text-xs" tickFormatter={(value) => `${value}枚`} />
                      <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                      <ChartLegend content={<ChartLegendContent />} />
                      <Bar dataKey="early" stackId="a" fill="var(--color-early)" radius={[0, 0, 8, 8]} />
                      <Bar dataKey="regular" stackId="a" fill="var(--color-regular)" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ChartContainer>
                </Deferred>
              </div>
            </>
          </div>
        </motion.div>

        {/* Attendees by country */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>
          <div className="h-full rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">国別参加者数</h3>
              </div>
            </div>

            <div className="w-full">
              <ChartContainer config={attendeeChartConfig} className="h-[240px] w-full">
                <BarChart accessibilityLayer data={attendeesByCountry} layout="vertical">
                  <YAxis
                    dataKey="country"
                    type="category"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => attendeeChartConfig[value as keyof typeof attendeeChartConfig]?.label}
                  />
                  <XAxis dataKey="attendees" type="number" hide />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                  <Bar dataKey="attendees" radius={8} />
                </BarChart>
              </ChartContainer>
            </div>

            <motion.div
              className="mt-4 border-t border-gray-200 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">総参加者数</span>
                <span className="text-xl font-bold text-gray-900">{totalAttendees}名</span>
              </div>
              <p className="mt-1 text-xs text-gray-500">{attendeesByCountry.length}カ国からの参加</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="grid grid-cols-1 gap-6 lg:grid-cols-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        {/* Talk submission categories */}
        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl lg:col-span-2">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900">トーク応募カテゴリ</h3>
          </div>
          <div className="flex items-center justify-center">
            <ChartContainer config={talkCategoryChartConfig} className="h-[200px] w-full">
              <PieChart>
                <Pie data={talkCategoriesData} dataKey="submissions" nameKey="category" />
                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                <ChartLegend content={<ChartLegendContent />} />
              </PieChart>
            </ChartContainer>
          </div>
        </div>

        {/* Website traffic */}
        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl lg:col-span-3">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Webサイトトラフィック</h3>
            <p className="text-sm text-gray-600">24時間の訪問者数推移</p>
          </div>
          <div className="w-full">
            <ChartContainer config={websiteTrafficChartConfig} className="h-[200px] w-full">
              <AreaChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" tickLine={false} axisLine={false} className="text-xs" />
                <YAxis tickLine={false} axisLine={false} className="text-xs" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area type="monotone" dataKey="visitors" stroke="var(--color-visitors)" fill="var(--color-visitors)" fillOpacity={0.3} />
              </AreaChart>
            </ChartContainer>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

Dashboard.layout = (page: ReactNode) => <SlideLayout>{page}</SlideLayout>;

export default Dashboard;
