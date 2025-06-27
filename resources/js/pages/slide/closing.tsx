import { X } from "@/components/icons/x";
import { SlideLayout } from "@/layouts/slide-layout";
import { motion } from "motion/react";
import { ReactNode } from "react";

const DummyQRCode: React.FC<{ className?: string }> = ({ className = "w-48 h-48" }) => (
  <div className={`${className} rounded-2xl border-4 border-white/20 bg-white p-4 shadow-2xl`}>
    <div className="relative h-full w-full overflow-hidden rounded-lg bg-black">
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-0">
        {[...Array(64)].map((_, i) => (
          <div key={i} className={`${Math.random() > 0.5 ? "bg-black" : "bg-white"}`} />
        ))}
      </div>

      <div className="absolute top-2 left-2 h-6 w-6 border-2 border-white bg-black">
        <div className="m-1 h-2 w-2 bg-white">
          <div className="m-0.5 h-1 w-1 bg-black"></div>
        </div>
      </div>
      <div className="absolute top-2 right-2 h-6 w-6 border-2 border-white bg-black">
        <div className="m-1 h-2 w-2 bg-white">
          <div className="m-0.5 h-1 w-1 bg-black"></div>
        </div>
      </div>
      <div className="absolute bottom-2 left-2 h-6 w-6 border-2 border-white bg-black">
        <div className="m-1 h-2 w-2 bg-white">
          <div className="m-0.5 h-1 w-1 bg-black"></div>
        </div>
      </div>
    </div>
  </div>
);

const Closing = () => {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
      <h1 className="mb-8 text-4xl leading-12 font-bold text-white md:text-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="mb-6">
          Modern full-stack web application
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-white/90"
        >
          with Laravel and Inertia.js
        </motion.div>
      </h1>

      <motion.p
        className="mb-24 text-xl leading-relaxed text-purple-100 md:text-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        Laravel + Inertia.jsで始めるモダンフルスタックWebアプリケーション
      </motion.p>

      <div className="grid grid-cols-1 items-center lg:grid-cols-2">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
          >
            <DummyQRCode className="h-80 w-80" />
          </motion.div>
        </motion.div>

        <motion.div
          className="space-y-8 text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <div className="h-16 w-16 overflow-hidden rounded-full border-4 border-white shadow-lg">
              <img src="/images/avatar.jpeg" alt="avatar" className="h-full w-full object-cover" />
            </div>

            <h2 className="text-3xl font-bold text-white md:text-4xl">Ryuta Hamasaki</h2>
          </motion.div>

          <motion.a
            href="https://x.com/avosalmon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex transform items-center space-x-3 rounded-full bg-gray-900 px-6 py-3 text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-gray-800 hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            whileHover={{ y: -2 }}
          >
            <X className="size-5" />
            <span className="font-medium">avosalmon</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

Closing.layout = (page: ReactNode) => <SlideLayout className="text-center">{page}</SlideLayout>;

export default Closing;
