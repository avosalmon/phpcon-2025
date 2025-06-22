import { Laravel } from "@/components/icons/laravel";
import { X } from "@/components/icons/x";
import { SlideLayout } from "@/layouts/slide-layout";
import { Users } from "lucide-react";
import { motion } from "motion/react";
import { ReactElement } from "react";

const Profile = () => {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="space-y-8">
      <motion.div
        className="mx-auto max-w-5xl rounded-3xl border border-white/20 bg-white/95 p-8 shadow-xl backdrop-blur-sm md:p-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="relative">
              <div className="h-48 w-48 overflow-hidden rounded-full border-4 border-white/50 shadow-2xl md:h-56 md:w-56">
                <img src="/images/avatar.jpeg" alt="profile" className="h-full w-full object-cover" />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 animate-pulse rounded-full bg-gradient-to-r from-white/20 to-purple-200/30"></div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6 text-left lg:pl-8 lg:text-left"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Ryuta Hamasaki</h2>
              <p className="text-xl font-medium text-gray-600 md:text-2xl">濱崎 竜太</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-md">
                  <Laravel className="size-6" />
                </div>
                <span className="text-lg text-gray-700">Software Engineer at Laravel</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 shadow-md">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg text-gray-700">PHPxTKYオーガナイザー</span>
              </div>
            </div>

            <div className="pt-4">
              <motion.a
                href="https://x.com/avosalmon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex transform items-center space-x-3 rounded-full bg-gray-900 px-6 py-3 text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-gray-800 hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ y: -2 }}
              >
                <X className="size-5" />
                <span className="font-medium">avosalmon</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

Profile.layout = (page: ReactElement) => (
  <SlideLayout currentSlide="profile" className="text-center">
    {page}
  </SlideLayout>
);

export default Profile;
