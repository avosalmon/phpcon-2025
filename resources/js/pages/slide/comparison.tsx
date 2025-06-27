import { SlideLayout } from "@/layouts/slide-layout";
import { ArrowRight, Code, Database, Zap } from "lucide-react";
import { motion } from "motion/react";
import { ReactNode } from "react";

const Comparison = () => {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
      {/* SPA */}
      <motion.div className="space-y-10" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
        <div className="text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">従来のSPA</h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-red-500"></div>
        </div>

        <div className="space-y-8">
          {[
            { icon: Code, text: "フロントエンドとバックエンドを別々に開発" },
            { icon: Database, text: "API経由でデータ取得" },
            { icon: Zap, text: "フロントエンドで状態管理" },
            { icon: ArrowRight, text: "フロントエンドのルーティングが必要" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="rounded-xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
            >
              <div className="flex items-center space-x-6">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-red-500">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <p className="text-xl font-medium text-white">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Inertia */}
      <motion.div className="space-y-10" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
        <div className="text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">Inertia.js</h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-green-500"></div>
        </div>

        <div className="space-y-8">
          {[
            { icon: Code, text: "フロントエンドとバックエンドを1つのコードベースで開発" },
            { icon: Database, text: "コントローラーから直接データを渡す" },
            { icon: Zap, text: "コンポーネントのPropsとしてデータを受け取る" },
            { icon: ArrowRight, text: "バックエンドのルーティングで画面遷移" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="rounded-xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
            >
              <div className="flex items-center space-x-6">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-green-500">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <p className="text-xl font-medium text-white">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

Comparison.layout = (page: ReactNode) => <SlideLayout>{page}</SlideLayout>;

export default Comparison;
