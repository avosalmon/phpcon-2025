import { Navigation } from "@/components/navigation";
import { ProgressBar } from "@/components/progress-bar";
import { useKeyboard } from "@/hooks/use-keyboard";
import { cn } from "@/lib/utils";
import type { Navigation as NavigationType } from "@/types";
import { motion } from "motion/react";
import React, { ComponentProps } from "react";

export const SlideLayout: React.FC<ComponentProps<"div"> & { navigation: NavigationType }> = ({ children, className = "", navigation }) => {
  useKeyboard(navigation);

  return (
    <motion.div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-blue-900 px-8 py-12 md:px-16 lg:px-24",
        className,
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Floating decoration elements */}
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

      <div className="relative z-10 w-full max-w-7xl">{children}</div>

      <Navigation navigation={navigation} />

      <ProgressBar currentSlide={navigation.currentIndex} totalSlides={navigation.totalSlides} />
    </motion.div>
  );
};
