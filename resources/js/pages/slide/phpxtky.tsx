import { SlideLayout } from "@/layouts/slide-layout";
import { motion } from "motion/react";
import { ReactElement } from "react";

const PHPxTKY = () => {
  return (
    <div className="flex min-h-full items-center justify-center">
      {/* White Card Container with Glow Effect */}
      <motion.div className="relative" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
        {/* Glow Effect Layers */}
        <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-pink-500/30 blur-2xl"></div>
        <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-pink-400/20 blur-xl"></div>
        <div className="absolute -inset-2 rounded-[2rem] bg-white/10 blur-lg"></div>

        {/* Main Card */}
        <div className="relative w-full max-w-6xl overflow-hidden rounded-3xl border border-white/20 bg-white p-32 shadow-2xl">
          {/* Grey Dots Background Pattern */}
          <div className="absolute inset-0">
            {[...Array(120)].map((_, i) => (
              <div
                key={i}
                className="absolute h-1.5 w-1.5 rounded-full bg-gray-300 opacity-40"
                style={{
                  left: `${(i % 15) * 6.5}%`,
                  top: `${Math.floor(i / 15) * 12}%`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 space-y-16">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="flex items-center justify-center text-6xl font-black tracking-tight text-black md:text-8xl lg:text-9xl">
                <span className="inline-block">PHP</span>
                <span className="relative top-1 mx-2 inline-block text-5xl text-black md:text-6xl lg:text-7xl">×</span>
                <span className="inline-block">Tokyo</span>
              </h1>
            </motion.div>

            {/* Terminal Window */}
            <motion.div
              className="mx-auto w-full max-w-4xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {/* Terminal Header */}
              <div className="flex items-center space-x-3 rounded-t-2xl bg-gray-800 px-6 py-4">
                <div className="flex space-x-2">
                  <div className="h-4 w-4 rounded-full bg-red-500 shadow-lg"></div>
                  <div className="h-4 w-4 rounded-full bg-yellow-500 shadow-lg"></div>
                  <div className="h-4 w-4 rounded-full bg-green-500 shadow-lg"></div>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="rounded-b-2xl bg-black px-8 py-12 shadow-xl">
                <motion.div
                  className="font-mono text-2xl md:text-3xl lg:text-4xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0, duration: 1.0 }}
                >
                  <span className="text-orange-400">Http</span>
                  <span className="text-white">::</span>
                  <span className="text-purple-400">get</span>
                  <span className="text-white">(</span>
                  <span className="text-green-400">'https://phpxtky.com'</span>
                  <span className="text-white">);</span>
                  <motion.span className="ml-2 text-white" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                    |
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated Glow Pulse */}
        <motion.div
          className="absolute -inset-12 rounded-[4rem] bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Floating decorative elements outside the card */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-gradient-to-r from-white/30 to-purple-200/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

PHPxTKY.layout = (page: ReactElement) => <SlideLayout>{page}</SlideLayout>;

export default PHPxTKY;
