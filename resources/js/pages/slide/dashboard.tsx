import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { SlideLayout } from "@/layouts/slide-layout";
import { ArrowDownRight, ArrowUpRight, BarChart3, Building, Calendar, DollarSign, Download, Globe, Mic, Users } from "lucide-react";
import { motion } from "motion/react";
import { ReactNode } from "react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Pie, PieChart, XAxis, YAxis } from "recharts";

const Dashboard = () => {
  const metrics = [
    {
      title: "チケット売上",
      value: "¥12,847,500",
      change: "+18.5%",
      trend: "up",
      icon: DollarSign,
      color: "from-green-500 to-emerald-600",
      subtitle: "目標の 85% 達成",
    },
    {
      title: "参加者数",
      value: "1,247",
      change: "+12.3%",
      trend: "up",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      subtitle: "定員 1,500 名",
    },
    {
      title: "トーク応募",
      value: "89",
      change: "+5.2%",
      trend: "up",
      icon: Mic,
      color: "from-purple-500 to-purple-600",
      subtitle: "採択予定 24 件",
    },
    {
      title: "スポンサー",
      value: "18",
      change: "+2.1%",
      trend: "up",
      icon: Building,
      color: "from-orange-500 to-orange-600",
      subtitle: "目標 20 社",
    },
  ];

  const attendeesByCountry = [
    { country: "japan", attendees: 892, fill: "var(--color-japan)" },
    { country: "usa", attendees: 156, fill: "var(--color-usa)" },
    { country: "india", attendees: 78, fill: "var(--color-india)" },
    { country: "germany", attendees: 45, fill: "var(--color-germany)" },
    { country: "uk", attendees: 32, fill: "var(--color-uk)" },
    { country: "canada", attendees: 24, fill: "var(--color-canada)" },
    { country: "other", attendees: 20, fill: "var(--color-other)" },
  ];

  const ticketSalesData = [
    { month: "8月", sales: 2_400_000, early: 280, regular: 40 },
    { month: "9月", sales: 3_200_000, early: 350, regular: 75 },
    { month: "10月", sales: 4_100_000, early: 380, regular: 167 },
    { month: "11月", sales: 5_800_000, early: 420, regular: 353 },
    { month: "12月", sales: 7_200_000, early: 450, regular: 510 },
    { month: "1月", sales: 9_100_000, early: 480, regular: 641 },
    { month: "2月", sales: 10_800_000, early: 500, regular: 747 },
  ];

  const talkCategoriesData = [
    { category: "laravel", submissions: 28, fill: "var(--color-laravel)" },
    { category: "frontend", submissions: 22, fill: "var(--color-frontend)" },
    { category: "devops", submissions: 15, fill: "var(--color-devops)" },
    { category: "ai", submissions: 12, fill: "var(--color-ai)" },
    { category: "other", submissions: 12, fill: "var(--color-other)" },
  ];

  const trafficData = [
    { time: "00:00", visitors: 45 },
    { time: "04:00", visitors: 23 },
    { time: "08:00", visitors: 156 },
    { time: "12:00", visitors: 289 },
    { time: "16:00", visitors: 234 },
    { time: "20:00", visitors: 178 },
    { time: "24:00", visitors: 89 },
  ];

  const attendeeChartConfig = {
    attendees: {
      label: "参加者数",
    },
    japan: {
      label: "日本",
      color: "#ef4444",
    },
    usa: {
      label: "アメリカ",
      color: "var(--chart-2)",
    },
    india: {
      label: "インド",
      color: "var(--chart-3)",
    },
    germany: {
      label: "ドイツ",
      color: "var(--chart-4)",
    },
    uk: {
      label: "イギリス",
      color: "var(--chart-5)",
    },
    canada: {
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
            <p className="text-sm text-gray-600">PHP Conference Japan 2025</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 rounded-lg border bg-white px-3 py-2 shadow-sm">
            <Calendar className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-700">2025年6月28日</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="mb-4 flex items-center justify-between">
              <div className={`h-12 w-12 bg-gradient-to-r ${metric.color} flex items-center justify-center rounded-lg`}>
                <metric.icon className="h-6 w-6 text-white" />
              </div>
              <div className={`flex items-center space-x-1 text-sm font-medium ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                {metric.trend === "up" ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                <span>{metric.change}</span>
              </div>
            </div>
            <h3 className="mb-1 text-2xl font-bold text-gray-900">{metric.value}</h3>
            <p className="mb-1 text-sm text-gray-600">{metric.title}</p>
            <p className="text-xs text-gray-500">{metric.subtitle}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Ticket sales chart */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
          <div className="h-full rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">チケット売上枚数</h3>
              </div>
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-2 px-3 py-2 text-sm text-purple-600 transition-colors hover:text-purple-700">
                  <Download className="h-4 w-4" />
                  <span>エクスポート</span>
                </button>
              </div>
            </div>
            <div className="w-full">
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
            </div>
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
              <button className="text-sm font-medium text-purple-600 transition-colors hover:text-purple-700">詳細表示</button>
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
                  <Bar dataKey="attendees" layout="vertical" radius={8} />
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
                <span className="text-xl font-bold text-gray-900">1,247名</span>
              </div>
              <p className="mt-1 text-xs text-gray-500">7カ国からの参加</p>
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
                <ChartLegend content={<ChartLegendContent nameKey="category" />} />
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
