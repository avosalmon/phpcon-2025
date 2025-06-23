import { X } from "@/components/icons/x";
import { SlideLayout } from "@/layouts/slide-layout";
import { motion } from "motion/react";
import { ReactElement } from "react";

interface Speaker {
  id: number;
  name: string;
  tagline: string;
  twitter: string;
  avatar: string;
}

const Speakers = ({ speakers }: { speakers: Speaker[] }) => {
  return (
    <div>
      <motion.div className="mb-16 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">Speakers</h1>
      </motion.div>

      <motion.div
        className="mx-auto mb-12 grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {speakers.map((speaker, index) => (
          <motion.div
            key={speaker.id}
            className="rounded-2xl border border-white/20 bg-white/95 p-6 shadow-xl backdrop-blur-sm"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.5 + index * 0.1,
              duration: 0.6,
              type: "spring",
              stiffness: 100,
            }}
          >
            <div className="mb-4 flex justify-center">
              <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-lg">
                <img src={speaker.avatar} alt={speaker.name} className="h-full w-full object-cover" />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900">{speaker.name}</h3>
              <p className="mb-4 text-sm text-neutral-500">{speaker.tagline}</p>
              <motion.a
                href={`https://x.com/${speaker.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 rounded-full bg-gray-900 px-4 py-2 text-sm text-white shadow-md transition-all duration-200 hover:bg-gray-800 hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="h-4 w-4" />
                <span>{speaker.twitter}</span>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="flex justify-center space-x-4 opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="h-2 w-2 rounded-full bg-white"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

Speakers.layout = (page: ReactElement) => <SlideLayout currentSlide="speakers">{page}</SlideLayout>;

export default Speakers;
