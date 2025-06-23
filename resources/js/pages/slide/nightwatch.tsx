import { SlideLayout } from "@/layouts/slide-layout";
import { motion } from "motion/react";
import { ReactElement } from "react";

const Nightwatch = () => {
  return (
    <div className="flex min-h-full items-center justify-center">
      <motion.div
        className="relative mx-auto w-full max-w-6xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.0 }}
      >
        <div className="relative">
          <motion.div
            className="overflow-hidden rounded-2xl border-4 border-white/20 bg-white shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img src="/images/nightwatch.png" alt="Laravel Nightwatch" className="h-auto w-full" />
          </motion.div>

          {/* Decorative glow effect */}
          <div className="absolute -inset-8 -z-10 rounded-3xl bg-gradient-to-br from-purple-300/60 via-pink-300/70 to-blue-300/60 blur-3xl"></div>
        </div>
      </motion.div>

      {/* Floating decoration elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

Nightwatch.layout = (page: ReactElement) => <SlideLayout currentSlide="nightwatch">{page}</SlideLayout>;

export default Nightwatch;
