import { SlideLayout } from "@/layouts/slide-layout";
import { Navigation } from "@/types";
import { motion } from "motion/react";
import React, { ReactElement } from "react";

const LaravelLogo: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1888 1888" className={className} fill="#ff2d20">
    <path d="M791.5 1714L215 1381.5c-8.5-5.5-15-8.5-15-19.5V357.5c0-8.158 5-13.5 9.5-16L502 173c9.5-5.5 17.5-5.5 26.5 0L819 340c11.5 6.5 12 15 12 22.5v622L1073.5 845V527c0-11 5-17.5 17-24.5L1380 336c7-4 12.5-4 19.5 0l295 170c9.5 5.5 10.5 12 10.5 21.5V858c0 10.5-2.5 16-13 22.5l-278.5 160v317c0 12.5-3 17.5-14 24L821 1714c-11 6-18.5 6-29.5 0zm-9-61.5v-279l-276-156c-9-5.5-15.5-9.5-15.5-23V543L248 403.5V1345zm583-307.5v-277L831 1373.5v279zm-25.528-318.167L1098 886.5 565 1194l241 137zM782.5 1012V403L540 543v609zm583-28V708l-243-140v277zm291-139V568l-243 140v276zm-267-179.5l242-139.5-242-139.5L1147 526zM757.635 361.004L515 221.5 273 361l242 140z" />
  </svg>
);

const Title = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="space-y-16"
    >
      <motion.div
        className="mb-12 flex items-center justify-center space-x-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50, rotate: -10 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <div className="relative">
            <LaravelLogo className="h-20 w-20 drop-shadow-2xl md:h-24 md:w-24" />
            {/* Glow effect */}
            <div className="absolute inset-0 -z-10 scale-150 rounded-full bg-red-500/30 blur-xl"></div>
          </div>
        </motion.div>

        {/* Connection line */}
        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="h-0.5 w-8 bg-gradient-to-r from-red-400 to-purple-400"></div>
          <div className="h-3 w-3 rounded-full bg-white shadow-lg"></div>
          <div className="h-0.5 w-8 bg-gradient-to-r from-purple-400 to-blue-400"></div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50, rotate: 10 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ delay: 0.7, duration: 0.8, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.1, rotate: -5 }}
        >
          <div className="relative">
            <img src="/images/inertia-logo-square.png" alt="Inertia.js" className="h-20 w-20 drop-shadow-2xl md:h-24 md:w-24" />
            {/* Glow effect */}
            <div className="absolute inset-0 -z-10 scale-150 rounded-full bg-purple-500/30 blur-xl"></div>
          </div>
        </motion.div>
      </motion.div>

      <div className="space-y-6">
        <h1 className="text-4xl leading-12 font-bold text-white md:text-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }} className="mb-6">
            Modern full-stack web application
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="text-white/90"
          >
            with Laravel and Inertia.js
          </motion.div>
        </h1>

        <motion.p
          className="mx-auto max-w-4xl text-xl leading-relaxed text-purple-100 md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          Laravel + Inertia.jsで始めるモダンフルスタックWebアプリケーション
        </motion.p>
      </div>

      <motion.div
        className="mx-auto max-w-2xl rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.h2
          className="mb-2 text-2xl font-bold text-white md:text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.6 }}
        >
          PHP Conference Japan 2025
        </motion.h2>
        <motion.div
          className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-red-400 via-purple-400 to-blue-400"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 1.9, duration: 0.8 }}
        />
      </motion.div>

      {/* Decorative elements - more refined design */}
      <motion.div
        className="flex justify-center space-x-6 opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2.1, duration: 0.8 }}
      >
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            className="relative"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 2.3 + i * 0.1,
              duration: 0.4,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 3,
            }}
          >
            <div className={`h-2 w-2 rounded-full ${i % 3 === 0 ? "bg-red-400" : i % 3 === 1 ? "bg-purple-400" : "bg-blue-400"}`} />
            <div
              className={`absolute inset-0 rounded-full blur-sm ${
                i % 3 === 0 ? "bg-red-400/50" : i % 3 === 1 ? "bg-purple-400/50" : "bg-blue-400/50"
              } scale-150`}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Floating technology icons */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 2) * 60}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
          >
            <div className={`h-4 w-4 rounded-full ${i % 3 === 0 ? "bg-red-400/40" : i % 3 === 1 ? "bg-purple-400/40" : "bg-blue-400/40"} blur-sm`} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

Title.layout = (page: ReactElement & { props: { navigation: Navigation } }) => (
  <SlideLayout navigation={page.props.navigation} className="text-center">
    {page}
  </SlideLayout>
);

export default Title;
