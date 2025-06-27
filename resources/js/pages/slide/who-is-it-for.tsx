import { SlideLayout } from "@/layouts/slide-layout";
import { motion } from "motion/react";
import { ReactNode } from "react";

const WhoIsItFor = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center"
    >
      <div className="relative w-full max-w-4xl">
        <motion.div
          className="relative z-10"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <img src="/images/fullstack-dev.png" alt="Fullstack Developer" className="w-full" />
        </motion.div>

        {/* Decorative glow effect */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-blue-400/40 via-purple-400/40 to-pink-400/40 blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 1.2,
            ease: "easeOut",
          }}
        />

        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 -z-20 rounded-2xl bg-gradient-to-r from-blue-300/15 via-purple-300/15 to-pink-300/15 blur-2xl"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
};

WhoIsItFor.layout = (page: ReactNode) => <SlideLayout>{page}</SlideLayout>;

export default WhoIsItFor;
