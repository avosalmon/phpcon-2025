import type { SharedData } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export const Navigation: React.FC<{ currentSlide: string }> = ({ currentSlide }) => {
  const {
    props: { slides },
  } = usePage<SharedData>();

  const currentIndex = slides.indexOf(currentSlide);
  const previousSlide = slides[currentIndex - 1];
  const nextSlide = slides[currentIndex + 1];

  return (
    <div className="fixed bottom-8 left-8 z-50 flex space-x-4">
      {previousSlide && (
        <Link
          href={`/slides/${previousSlide}`}
          className="rounded-full bg-white p-3 text-gray-700 shadow-lg transition-all duration-200 hover:scale-110 hover:bg-gray-100"
        >
          <ChevronLeft className="h-6 w-6" />
        </Link>
      )}

      {nextSlide && (
        <Link
          href={`/slides/${nextSlide}`}
          className="rounded-full bg-white p-3 text-gray-700 shadow-lg transition-all duration-200 hover:scale-110 hover:bg-gray-100"
        >
          <ChevronRight className="h-6 w-6" />
        </Link>
      )}
    </div>
  );
};
