import { SlideLayout } from "@/layouts/slide-layout";
import { motion } from "motion/react";
import { ReactElement } from "react";

const InertiaTagline = () => {
  return (
    <div className="flex min-h-full items-center justify-center">
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        <motion.div
          className="relative z-10"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <img src="/images/inertia-tagline.png" alt="Inertia.js" className="h-96 w-auto max-w-full object-contain md:h-[500px] lg:h-[600px]" />
        </motion.div>

        {/* Decorative glow effect */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-purple-400/50 via-pink-400/50 to-blue-400/50 blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 1 }}
          transition={{
            delay: 0.6,
            duration: 1.5,
            ease: "easeOut",
          }}
        />

        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 -z-20 rounded-full bg-gradient-to-r from-purple-300/20 via-pink-300/20 to-blue-300/20 blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Floating decoration elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-3 w-3 rounded-full bg-gradient-to-r from-white/40 to-purple-200/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

InertiaTagline.layout = (page: ReactElement) => <SlideLayout>{page}</SlideLayout>;

export default InertiaTagline;
