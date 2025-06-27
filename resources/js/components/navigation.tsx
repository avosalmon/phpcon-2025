import { getNextSlide, getPreviousSlide } from "@/lib/slides";
import { Link } from "@inertiajs/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export const Navigation: React.FC = () => {
  const previousSlide = getPreviousSlide();
  const nextSlide = getNextSlide();

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
          prefetch="mount"
          href={`/slides/${nextSlide}`}
          className="rounded-full bg-white p-3 text-gray-700 shadow-lg transition-all duration-200 hover:scale-110 hover:bg-gray-100"
        >
          <ChevronRight className="h-6 w-6" />
        </Link>
      )}
    </div>
  );
};
