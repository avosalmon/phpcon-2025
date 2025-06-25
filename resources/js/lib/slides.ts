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
];

export function getNextSlide(currentSlide: string) {
  return slides[slides.indexOf(currentSlide) + 1];
}

export function getPreviousSlide(currentSlide: string) {
  return slides[slides.indexOf(currentSlide) - 1];
}
