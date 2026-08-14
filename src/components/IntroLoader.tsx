import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

interface IntroLoaderProps {
  onComplete: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'drawing' | 'fill' | 'tagline' | 'done'>('drawing');

  useEffect(() => {
    // Stage timer sequence
    const fillTimer = setTimeout(() => {
      setStage('fill');
    }, 2800);

    const taglineTimer = setTimeout(() => {
      setStage('tagline');
    }, 4200);

    const completeTimer = setTimeout(() => {
      setStage('done');
      onComplete();
    }, 6000);

    return () => {
      clearTimeout(fillTimer);
      clearTimeout(taglineTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setStage('done');
    onComplete();
  };

  return (
    <AnimatePresence>
      {stage !== 'done' && (
        <motion.div
          key="intro-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#111111] text-white overflow-hidden"
        >
          {/* Ambient red glowing background blur */}
          <motion.div
            animate={{
              scale: stage === 'fill' ? [1, 1.2, 1.1] : 1,
              opacity: stage === 'fill' ? 0.6 : 0.25,
            }}
            transition={{ duration: 1.5 }}
            className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#E41E3F] via-[#C8102E] to-amber-500/20 blur-[130px] pointer-events-none"
          />

          {/* Floating subtle effervescent bubbles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
            {[...Array(18)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 20,
                  scale: 0.4 + Math.random() * 0.6,
                  opacity: 0.2 + Math.random() * 0.5,
                }}
                animate={{
                  y: -50,
                  x: `calc(${Math.random() * 100}vw + ${Math.sin(i) * 30}px)`,
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.2,
                }}
                className="absolute w-3 h-3 rounded-full bg-red-400/40 border border-white/20 blur-[0.5px]"
              />
            ))}
          </div>

          {/* Top subtle brand badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute top-8 left-8 flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-white/50"
          >
            <span className="w-2 h-2 rounded-full bg-[#E41E3F] animate-ping" />
            The Coca-Cola Company
          </motion.div>

          {/* Skip Button */}
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            onClick={handleSkip}
            className="absolute top-8 right-8 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-medium text-white/80 hover:text-white backdrop-blur-md transition-all duration-300 border border-white/10 group cursor-pointer"
          >
            Skip Intro
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          {/* Spencerian Script Handwriting Logo Container */}
          <div className="relative z-10 flex flex-col items-center max-w-2xl px-6 text-center">
            <div className="relative mb-6">
              {/* SVG Coca-Cola Spencerian Script Animation */}
              <svg
                viewBox="0 0 500 160"
                className="w-[320px] sm:w-[460px] h-auto drop-shadow-[0_10px_35px_rgba(228,30,63,0.6)]"
              >
                <defs>
                  <linearGradient id="cokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="50%" stopColor="#FFF2F2" />
                    <stop offset="100%" stopColor="#E41E3F" />
                  </linearGradient>
                </defs>

                {/* Drawn Signature Spencerian Script Path */}
                <motion.path
                  d="M40 70 C 35 45, 60 30, 85 45 C 105 57, 95 85, 75 90 C 55 95, 45 75, 70 65 C 95 55, 120 75, 140 85 C 150 90, 165 75, 160 60 C 155 45, 175 40, 185 55 C 195 70, 180 90, 200 85 C 220 80, 235 60, 255 75 C 275 90, 260 110, 290 85 C 310 70, 330 50, 350 70 C 370 90, 385 60, 410 75 C 430 85, 450 70, 465 60"
                  fill="none"
                  stroke="url(#cokeGradient)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0.8 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 3.2, ease: "easeInOut" }}
                />

                {/* Classic Spencerian Brand Script SVG text fallback fill */}
                <motion.text
                  x="50%"
                  y="62%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className="spencerian-font text-[88px] sm:text-[110px] font-bold tracking-tight select-none"
                  fill="url(#cokeGradient)"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: stage === 'fill' || stage === 'tagline' ? 1 : 0.1,
                    scale: stage === 'fill' || stage === 'tagline' ? 1 : 0.95,
                  }}
                  transition={{ duration: 1.2 }}
                >
                  Coca-Cola
                </motion.text>
              </svg>

              {/* Sparkle Pen tip motion indicator during handwriting stage */}
              {stage === 'drawing' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0.8] }}
                  className="absolute right-12 top-10 pointer-events-none"
                >
                  <Sparkles className="w-6 h-6 text-[#E41E3F] animate-spin-slow drop-shadow-[0_0_12px_#E41E3F]" />
                </motion.div>
              )}
            </div>

            {/* Subtitle / Tagline reveal */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{
                opacity: stage === 'tagline' || stage === 'fill' ? 1 : 0,
                y: stage === 'tagline' || stage === 'fill' ? 0 : 15,
              }}
              transition={{ duration: 0.8 }}
              className="space-y-3"
            >
              <h2 className="text-xl sm:text-2xl font-semibold tracking-wide text-white/90">
                Real Magic™ In Every Sip
              </h2>
              <p className="text-sm text-white/60 max-w-md mx-auto font-light">
                Crafted with passion since 1886. Discover the iconic taste portfolio.
              </p>
            </motion.div>

            {/* Progress Bar Indicator */}
            <div className="w-48 h-1 bg-white/10 rounded-full mt-10 overflow-hidden relative">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5.5, ease: "linear" }}
                className="h-full bg-gradient-to-r from-[#E41E3F] via-rose-400 to-amber-300"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
