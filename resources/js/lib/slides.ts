/**
 * The route paths for the slides, in the order they should be displayed.
 */
export const slides = [
  "intro",
  "title",
  "profile",
  "nightwatch",
  "phpxtky",
  "agenda",
  "inertia",
  "inertia-tagline",
  "speakers",
  "talk-proposals/create",
  "talk-proposals",
  "dashboard",
  "closing",
];

/**
 * Get the current slide from the URL path
 */
export function getCurrentSlideFromUrl(): string {
  // Extract slide path from /slides/{slide} format
  const match = window.location.pathname.match(/^\/slides\/(.+)$/);
  return match ? match[1] : "";
}

export function getNextSlide(): string {
  const currentSlide = getCurrentSlideFromUrl();
  return slides[slides.indexOf(currentSlide) + 1];
}

export function getPreviousSlide(): string {
  const slide = getCurrentSlideFromUrl();
  return slides[slides.indexOf(slide) - 1];
}
