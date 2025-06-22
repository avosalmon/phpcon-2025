import type { Navigation as NavigationType } from "@/types";
import { Link } from "@inertiajs/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export const Navigation: React.FC<{ navigation: NavigationType }> = ({ navigation }) => {
  return (
    <div className="fixed bottom-8 left-8 z-50 flex space-x-4">
      {navigation.previousSlide && (
        <Link
          href={`/slides/${navigation.previousSlide}`}
          className="rounded-full bg-white p-3 text-gray-700 shadow-lg transition-all duration-200 hover:scale-110 hover:bg-gray-100"
        >
          <ChevronLeft className="h-6 w-6" />
        </Link>
      )}

      {navigation.nextSlide && (
        <Link
          href={`/slides/${navigation.nextSlide}`}
          className="rounded-full bg-white p-3 text-gray-700 shadow-lg transition-all duration-200 hover:scale-110 hover:bg-gray-100"
        >
          <ChevronRight className="h-6 w-6" />
        </Link>
      )}
    </div>
  );
};
