import { useSlides } from "@/hooks/use-slides";
import { router } from "@inertiajs/react";
import { motion } from "motion/react";
import React from "react";

export const ProgressBar: React.FC = () => {
  const { currentSlide, slides } = useSlides();
  const currentIndex = slides.indexOf(currentSlide);
  const totalSlides = slides.length;
  const progress = ((currentIndex + 1) / totalSlides) * 100;

  const handleProgressBarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickPercent = clickX / rect.width;
    const targetSlideIndex = Math.floor(clickPercent * totalSlides);
    const clampedIndex = Math.max(0, Math.min(targetSlideIndex, totalSlides - 1));
    const targetSlide = slides[clampedIndex];

    if (targetSlide && targetSlide !== currentSlide) {
      router.visit(`/slides/${targetSlide}`);
    }
  };

  return (
    <div className="fixed right-0 bottom-0 left-0 z-50">
      <div className="h-3 cursor-pointer bg-gray-200" onClick={handleProgressBarClick}>
        <motion.div
          className="pointer-events-none h-full bg-gradient-to-r from-blue-500 to-purple-600"
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
