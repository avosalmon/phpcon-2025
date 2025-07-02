import { useMemo } from "react";

const slides = [
  "intro",
  "title",
  "profile",
  "nightwatch",
  "phpxtky",
  "agenda",
  "inertia",
  "inertia-tagline",
  "speakers",
  "comparison",
  "who-is-it-for",
  "installation",
  "talk-proposals/create",
  "talk-proposals",
  "dashboard",
  "modular-monolith",
  "closing",
];

function getCurrentSlideFromUrl(): string {
  if (typeof window === "undefined") return "";

  const match = window.location.pathname.match(/^\/slides\/(.+)$/);
  return match ? match[1] : "";
}

export function useSlides() {
  const currentSlide = getCurrentSlideFromUrl();

  const { nextSlide, previousSlide } = useMemo(() => {
    const currentIndex = slides.indexOf(currentSlide);

    return {
      nextSlide: slides[currentIndex + 1] || null,
      previousSlide: slides[currentIndex - 1] || null,
    };
  }, [currentSlide]);

  return {
    slides,
    currentSlide,
    nextSlide,
    previousSlide,
  };
}
