import { Navigation } from "@/types";
import { router } from "@inertiajs/react";
import { useEffect } from "react";

export const useKeyboard = (navigation: Navigation) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowRight":
        case " ":
          event.preventDefault();
          if (navigation.nextSlide) {
            router.visit(`/slides/${navigation.nextSlide}`);
          }
          break;
        case "ArrowLeft":
          event.preventDefault();
          if (navigation.previousSlide) {
            router.visit(`/slides/${navigation.previousSlide}`);
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [navigation]);
};
