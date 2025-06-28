import { Nightwatch } from "@/components/icons/nightwatch";
import { X } from "@/components/icons/x";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";

const Reference = () => {
  const links = [
    {
      title: "Twitter",
      url: "https://x.com/avosalmon",
      icon: X,
      description: "@avosalmon",
    },
    {
      title: "GitHub Repository",
      url: "https://github.com/avosalmon/phpcon-2025",
      icon: Github,
      description: "スライドのソースコード",
    },
    {
      title: "PHPxTKY",
      url: "https://x.com/phpxtky",
      icon: X,
      description: "@phpxtky",
    },
    {
      title: "Laravel Nightwatch",
      url: "https://nightwatch.laravel.com",
      icon: Nightwatch,
      description: "Laravelアプリケーション監視ツール",
    },
  ];

  return (
    <motion.div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-blue-900 px-8 py-12 font-jp md:px-16 lg:px-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Floating decoration elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-gradient-to-r from-white/30 to-purple-200/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="space-y-16">
          <h1 className="mb-8 text-4xl leading-12 font-bold text-white md:text-6xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="mb-6">
              Modern full-stack web application
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-white/90"
            >
              with Laravel and Inertia.js
            </motion.div>
          </h1>

          <motion.p
            className="mb-8 text-xl leading-relaxed text-purple-100 md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Laravel + Inertia.jsで始めるモダンフルスタックWebアプリケーション
          </motion.p>

          <motion.div
            className="flex items-center justify-center space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-white/50 shadow-lg">
              <img src="/images/avatar.jpeg" alt="Ryuta Hamasaki" className="h-full w-full object-cover" />
            </div>

            <h2 className="text-3xl font-bold text-white md:text-4xl">Ryuta Hamasaki</h2>
          </motion.div>

          <motion.div
            className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {links.map((link, index) => (
              <motion.a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/20 bg-white/95 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: 0.8 + index * 0.1,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 transition-transform duration-200 group-hover:scale-110">
                    <link.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-200 group-hover:text-purple-600">{link.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{link.description}</p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-gray-400 transition-colors duration-200 group-hover:text-purple-600" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Reference;
