import { SlideLayout } from "@/layouts/slide-layout";
import { Navigation } from "@/types";
import { Users } from "lucide-react";
import { motion } from "motion/react";
import React, { ReactElement } from "react";

const XIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LaravelLogo: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1888 1888" className={className} fill="#ff2d20">
    <path d="M791.5 1714L215 1381.5c-8.5-5.5-15-8.5-15-19.5V357.5c0-8.158 5-13.5 9.5-16L502 173c9.5-5.5 17.5-5.5 26.5 0L819 340c11.5 6.5 12 15 12 22.5v622L1073.5 845V527c0-11 5-17.5 17-24.5L1380 336c7-4 12.5-4 19.5 0l295 170c9.5 5.5 10.5 12 10.5 21.5V858c0 10.5-2.5 16-13 22.5l-278.5 160v317c0 12.5-3 17.5-14 24L821 1714c-11 6-18.5 6-29.5 0zm-9-61.5v-279l-276-156c-9-5.5-15.5-9.5-15.5-23V543L248 403.5V1345zm583-307.5v-277L831 1373.5v279zm-25.528-318.167L1098 886.5 565 1194l241 137zM782.5 1012V403L540 543v609zm583-28V708l-243-140v277zm291-139V568l-243 140v276zm-267-179.5l242-139.5-242-139.5L1147 526zM757.635 361.004L515 221.5 273 361l242 140z" />
  </svg>
);

const Profile = ({ navigation }: { navigation: Navigation }) => {
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
                <img src="/images/avatar.jpg" alt="profile" className="h-full w-full object-cover" />
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
              <p className="text-xl font-medium text-gray-600 md:text-2xl">濱崎 竜太s</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-md">
                  <LaravelLogo className="h-6 w-6" />
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
                href={`https://x.com/avosalmon`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex transform items-center space-x-3 rounded-full bg-gray-900 px-6 py-3 text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-gray-800 hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ y: -2 }}
              >
                <XIcon className="h-5 w-5" />
                <span className="font-medium">avosalmon</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

Profile.layout = (page: ReactElement & { props: { navigation: Navigation } }) => (
  <SlideLayout navigation={page.props.navigation} className="text-center">
    {page}
  </SlideLayout>
);

export default Profile;
