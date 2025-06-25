import { getNextSlide, getPreviousSlide } from "@/lib/slides";
import { router } from "@inertiajs/react";
import { useEffect } from "react";

export const useKeyboard = (currentSlide: string) => {
  useEffect(() => {
    const previousSlide = getPreviousSlide(currentSlide);
    const nextSlide = getNextSlide(currentSlide);

    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowRight":
        case " ":
          event.preventDefault();
          if (nextSlide) {
            router.visit(`/slides/${nextSlide}`);
          }
          break;
        case "ArrowLeft":
          event.preventDefault();
          if (previousSlide) {
            router.visit(`/slides/${previousSlide}`);
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentSlide]);
};
