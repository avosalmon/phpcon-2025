import { getNextSlide, getPreviousSlide } from "@/lib/slides";
import { router } from "@inertiajs/react";
import { useEffect } from "react";

export const useKeyboard = () => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const previousSlide = getPreviousSlide();
      const nextSlide = getNextSlide();

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
  }, []);
};
