import { SlideLayout } from "@/layouts/slide-layout";
import { motion } from "motion/react";
import { ReactNode } from "react";

const Installation = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <motion.div
        className="flex items-center space-x-4 rounded-t-3xl bg-gray-800 px-8 py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <div className="flex space-x-3">
          <div className="h-6 w-6 rounded-full bg-red-500 shadow-lg"></div>
          <div className="h-6 w-6 rounded-full bg-yellow-500 shadow-lg"></div>
          <div className="h-6 w-6 rounded-full bg-green-500 shadow-lg"></div>
        </div>
      </motion.div>

      <motion.div
        className="rounded-b-3xl bg-black px-12 py-20 shadow-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <motion.div
          className="font-mono text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 1.0 }}
        >
          <span className="text-green-400">$</span>
          <span className="ml-4 text-white">laravel new</span>
          <motion.span className="ml-4 text-white" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }}>
            |
          </motion.span>
        </motion.div>
      </motion.div>

      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 blur-2xl"></div>
    </motion.div>
  );
};

Installation.layout = (page: ReactNode) => <SlideLayout>{page}</SlideLayout>;

export default Installation;
