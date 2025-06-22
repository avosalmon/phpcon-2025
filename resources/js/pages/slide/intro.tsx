import { Laravel } from "@/components/icons/laravel";
import { SlideLayout } from "@/layouts/slide-layout";
import { motion } from "motion/react";
import { ReactElement } from "react";

const Intro = () => {
  // Array of coordinates and sizes that simulate 3D space
  const generate3DPath = () => {
    const paths = [];
    const maxX = 300;
    const maxY = 200;

    for (let i = 0; i < 12; i++) {
      const x = (Math.random() * 2 - 1) * maxX;
      const y = (Math.random() * 2 - 1) * maxY;

      // Simulate Z-axis (range from -1 to 1)
      const z = Math.random() * 2 - 1;

      // Calculate scale based on Z value (farther = smaller, closer = larger)
      // z = -1 (farthest): scale = 0.5
      // z = 0 (middle): scale = 1.0
      // z = 1 (closest): scale = 1.5
      const scale = 0.5 + (z + 1) * 0.5; // Range of 0.5 - 1.5

      // Also adjust opacity based on Z value (farther = more transparent)
      const opacity = 0.6 + (z + 1) * 0.2; // Range of 0.6 - 1.0

      paths.push({ x, y, scale, opacity });
    }
    return paths;
  };

  const path3D = generate3DPath();

  return (
    <div className="relative flex h-full min-h-full w-full items-center justify-center">
      <div className="relative flex h-full w-full items-center justify-center">
        <motion.div
          className="relative z-20"
          initial={{ scale: 0, rotate: 0 }}
          animate={{
            scale: path3D.map((p) => p.scale),
            x: path3D.map((p) => p.x),
            y: path3D.map((p) => p.y),
            rotate: [0, 360],
            opacity: path3D.map((p) => p.opacity),
          }}
          transition={{
            scale: {
              duration: 25,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            },
            x: {
              duration: 25,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            },
            y: {
              duration: 25,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            },
            opacity: {
              duration: 25,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            },
            rotate: {
              duration: 5,
              ease: "linear",
              repeat: Infinity,
            },
          }}
        >
          <Laravel className="size-32 drop-shadow-2xl md:h-40 md:w-40" />

          {/* Glow effect around logo - linked to size */}
          <motion.div
            className="absolute inset-0 -z-10 rounded-full bg-red-500/30 blur-2xl"
            animate={{
              scale: path3D.map((p) => p.scale * 1.8), // Glow slightly larger than logo
              opacity: path3D.map((p) => p.opacity * 0.5),
            }}
            transition={{
              scale: {
                duration: 25,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              },
              opacity: {
                duration: 25,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          />
        </motion.div>

        {/* Small particles representing trajectory - with perspective */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`trail-${i}`}
            className="absolute h-1 w-1 rounded-full bg-red-400/60"
            style={{
              left: "50%",
              top: "50%",
            }}
            animate={{
              x: path3D.map((p) => p.x * 0.8),
              y: path3D.map((p) => p.y * 0.8),
              scale: path3D.map((p) => p.scale * 0.6),
              opacity: [0, 0.8, 0],
            }}
            transition={{
              x: {
                duration: 25,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.2,
              },
              y: {
                duration: 25,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.2,
              },
              scale: {
                duration: 25,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.2,
              },
              opacity: {
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                delay: i * 0.2,
              },
            }}
          />
        ))}
      </div>

      {/* Decorative background particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`bg-particle-${i}`}
            className="absolute h-1 w-1 rounded-full bg-white/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              ease: "easeInOut",
              repeat: Infinity,
              delay: Math.random() * 6,
            }}
          />
        ))}
      </div>

      {/* Concentric rings to emphasize perspective */}
      <motion.div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <div className="h-96 w-96 rounded-full border-2 border-red-400/20"></div>
      </motion.div>

      {/* Middle ring */}
      <motion.div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        animate={{
          scale: [1.1, 1.4, 1.1],
          opacity: [0.08, 0.2, 0.08],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 2,
        }}
      >
        <div className="h-[500px] w-[500px] rounded-full border border-red-400/15"></div>
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        animate={{
          scale: [1.2, 1.6, 1.2],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 4,
        }}
      >
        <div className="h-[600px] w-[600px] rounded-full border border-red-400/10"></div>
      </motion.div>
    </div>
  );
};

Intro.layout = (page: ReactElement) => <SlideLayout currentSlide="intro">{page}</SlideLayout>;

export default Intro;
