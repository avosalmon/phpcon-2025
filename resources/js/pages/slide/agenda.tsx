import { SlideLayout } from "@/layouts/slide-layout";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { ReactElement } from "react";

const bullets = [
  { id: "1", text: "Inertia.jsとは", delay: 0.2 },
  { id: "2", text: "Inertia.jsによる画面遷移の仕組み", delay: 0.4 },
  { id: "3", text: "フォーム処理とバリデーション", delay: 0.6 },
  { id: "4", text: "リアルタイムダッシュボードの実装", delay: 0.8 },
  { id: "5", text: "Inertia.jsを使ったテストの書き方", delay: 1.0 },
];

const Agenda = () => {
  return (
    <div className="mx-auto max-w-5xl space-y-12">
      <motion.h1
        className="text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        今日お話しする内容
      </motion.h1>

      <motion.div className="space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}>
        {bullets.map((bullet, index) => (
          <motion.div
            key={bullet.id}
            className="flex items-center space-x-4 rounded-xl border border-white/20 bg-white/95 p-6 shadow-lg backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.5 + (bullet.delay || index * 0.2),
              duration: 0.6,
              ease: "easeOut",
            }}
            whileHover={{ x: 8 }}
          >
            <div className="flex-shrink-0">
              <motion.div
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-600 shadow-md"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.7 + (bullet.delay || index * 0.2),
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <ArrowRight className="h-4 w-4 text-white" />
              </motion.div>
            </div>
            <p className="flex-1 text-xl text-gray-700 md:text-2xl">{bullet.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

Agenda.layout = (page: ReactElement) => <SlideLayout currentSlide="agenda">{page}</SlideLayout>;

export default Agenda;
