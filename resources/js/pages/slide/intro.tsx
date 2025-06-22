import { SlideLayout } from "@/layouts/slide-layout";
import { Navigation } from "@/types";
import { motion } from "motion/react";
import React from "react";

const LaravelLogo: React.FC<{ className?: string }> = ({ className = "w-32 h-32" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1888 1888" className={className} fill="#ff2d20">
    <path d="M791.5 1714L215 1381.5c-8.5-5.5-15-8.5-15-19.5V357.5c0-8.158 5-13.5 9.5-16L502 173c9.5-5.5 17.5-5.5 26.5 0L819 340c11.5 6.5 12 15 12 22.5v622L1073.5 845V527c0-11 5-17.5 17-24.5L1380 336c7-4 12.5-4 19.5 0l295 170c9.5 5.5 10.5 12 10.5 21.5V858c0 10.5-2.5 16-13 22.5l-278.5 160v317c0 12.5-3 17.5-14 24L821 1714c-11 6-18.5 6-29.5 0zm-9-61.5v-279l-276-156c-9-5.5-15.5-9.5-15.5-23V543L248 403.5V1345zm583-307.5v-277L831 1373.5v279zm-25.528-318.167L1098 886.5 565 1194l241 137zM782.5 1012V403L540 543v609zm583-28V708l-243-140v277zm291-139V568l-243 140v276zm-267-179.5l242-139.5-242-139.5L1147 526zM757.635 361.004L515 221.5 273 361l242 140z" />
  </svg>
);

const Intro: React.FC<{ navigation: Navigation }> = ({ navigation }) => {
  // 3D空間をシミュレートする座標とサイズの配列
  const generate3DPath = () => {
    const paths = [];
    const maxX = 300;
    const maxY = 200;

    for (let i = 0; i < 12; i++) {
      const x = (Math.random() * 2 - 1) * maxX;
      const y = (Math.random() * 2 - 1) * maxY;

      // Z軸をシミュレート（-1から1の範囲）
      const z = Math.random() * 2 - 1;

      // Z値に基づいてスケールを計算（遠いほど小さく、近いほど大きく）
      // z = -1（最も遠い）: scale = 0.5
      // z = 0（中間）: scale = 1.0
      // z = 1（最も近い）: scale = 1.5
      const scale = 0.5 + (z + 1) * 0.5; // 0.5 - 1.5の範囲

      // Z値に基づいて透明度も調整（遠いほど薄く）
      const opacity = 0.6 + (z + 1) * 0.2; // 0.6 - 1.0の範囲

      paths.push({ x, y, scale, opacity });
    }
    return paths;
  };

  const path3D = generate3DPath();

  return (
    <SlideLayout navigation={navigation} className="bg-gradient-to-br from-purple-600 via-purple-700 to-blue-900">
      {/* メインコンテナ */}
      <div className="relative flex h-full min-h-full w-full items-center justify-center">
        {/* ロゴ移動エリア */}
        <div className="relative flex h-full w-full items-center justify-center">
          {/* メインのLaravelロゴ - 3D的な動きとサイズ変化 */}
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
            <LaravelLogo className="h-32 w-32 drop-shadow-2xl md:h-40 md:w-40" />

            {/* ロゴの周りのグロー効果 - サイズに連動 */}
            <motion.div
              className="absolute inset-0 -z-10 rounded-full bg-red-500/30 blur-2xl"
              animate={{
                scale: path3D.map((p) => p.scale * 1.8), // ロゴより少し大きめのグロー
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

          {/* 軌跡を表現する小さなパーティクル - 遠近感付き */}
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

        {/* 背景の装飾的なパーティクル */}
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

        {/* 遠近感を強調する同心円リング */}
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

        {/* 中間のリング */}
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

        {/* 外側のリング */}
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
    </SlideLayout>
  );
};

export default Intro;
