import { SharedData } from "@/types";
import { router, usePage } from "@inertiajs/react";
import { useEffect } from "react";

export const useKeyboard = (currentSlide: string) => {
  const {
    props: { slides },
  } = usePage<SharedData>();

  useEffect(() => {
    const currentIndex = slides.indexOf(currentSlide);
    const previousSlide = slides[currentIndex - 1];
    const nextSlide = slides[currentIndex + 1];

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
  }, [currentSlide, slides]);
};
