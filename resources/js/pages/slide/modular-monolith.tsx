import { SlideLayout } from "@/layouts/slide-layout";
import { motion } from "motion/react";
import { ReactNode } from "react";

const ModularMonolith = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.0 }}
      className="flex justify-center"
    >
      <iframe
        width="1120"
        height="630"
        src="https://www.youtube.com/embed/X6xPG6DJibg?si=3M0STv-Nb-llhpoq"
        title="Modularising Inertia"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </motion.div>
  );
};

ModularMonolith.layout = (page: ReactNode) => <SlideLayout>{page}</SlideLayout>;

export default ModularMonolith;
