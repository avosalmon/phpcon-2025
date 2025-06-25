import { slides } from "@/lib/slides";
import { motion } from "motion/react";
import React from "react";

export const ProgressBar: React.FC<{ currentSlide: string }> = ({ currentSlide }) => {
  const currentIndex = slides.indexOf(currentSlide);
  const totalSlides = slides.length;
  const progress = ((currentIndex + 1) / totalSlides) * 100;

  return (
    <div className="fixed right-0 bottom-0 left-0 z-50">
      <div className="h-1 bg-gray-200">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
      <div className="absolute right-4 bottom-2 rounded bg-white/80 px-2 py-1 text-sm text-gray-500 backdrop-blur-sm">
        {currentIndex + 1} / {totalSlides}
      </div>
    </div>
  );
};
