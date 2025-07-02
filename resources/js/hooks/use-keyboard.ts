import { useSlides } from "@/hooks/use-slides";
import { router } from "@inertiajs/react";
import { useEffect } from "react";

export const useKeyboard = () => {
  const { previousSlide, nextSlide } = useSlides();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const activeElement = document.activeElement;
      const isFormField =
        activeElement &&
        (activeElement.tagName === "INPUT" ||
          activeElement.tagName === "TEXTAREA" ||
          activeElement.tagName === "SELECT" ||
          (activeElement as HTMLElement).isContentEditable ||
          activeElement.getAttribute("contenteditable") === "true");

      if (isFormField) {
        return;
      }

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
  }, [previousSlide, nextSlide]);
};
