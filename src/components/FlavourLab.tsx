import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CupSoda, Sparkles, RefreshCw, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PRODUCTS_DATA } from '../data/products';
import type { Product } from '../data/products';

interface FlavourLabProps {
  preselectedProduct?: Product | null;
}

export const FlavourLab: React.FC<FlavourLabProps> = ({ preselectedProduct }) => {
  const [baseProduct, setBaseProduct] = useState<Product>(preselectedProduct || PRODUCTS_DATA[0]);
  const [vanillaRatio, setVanillaRatio] = useState<number>(20);
  const [cherryRatio, setCherryRatio] = useState<number>(30);
  const [limeRatio, setLimeRatio] = useState<number>(0);
  const [cosmicRatio, setCosmicRatio] = useState<number>(10);
  const [blendName, setBlendName] = useState<string>("My Signature Refreshment");
  const [isSaved, setIsSaved] = useState<boolean>(false);

  // Compute calculated metrics
  const totalFlavorShots = vanillaRatio + cherryRatio + limeRatio + cosmicRatio;
  const basePercent = Math.max(10, 100 - Math.min(80, totalFlavorShots));

  const calculatedCalories = Math.round(baseProduct.caloriesCount * (basePercent / 100) + (vanillaRatio * 0.4) + (cherryRatio * 0.4));
  const effervescenceLevel = Math.min(100, Math.round(75 + limeRatio * 0.5 + cosmicRatio * 0.4));
  const sweetnessScore = Math.min(10, Math.max(1, ((basePercent * 0.08) + (vanillaRatio * 0.1) + (cherryRatio * 0.09)).toFixed(1) as any));

  const handleMixCraft = () => {
    setIsSaved(true);
    // Fire festive confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#E41E3F', '#F40009', '#D4AF37', '#ffffff']
    });

    setTimeout(() => {
      setIsSaved(false);
    }, 4000);
  };

  const handleResetMix = () => {
    setVanillaRatio(0);
    setCherryRatio(0);
    setLimeRatio(0);
    setCosmicRatio(0);
    setBlendName("Pure Classic Cola");
  };

  return (
    <section id="flavour-lab" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#121212] via-[#1A1A1A] to-[#251016] text-white shadow-2xl relative overflow-hidden border border-white/10">
        
        {/* Background glow graphics */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#E41E3F]/20 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-amber-500/10 blur-[100px] pointer-events-none" />

        {/* Section Header */}
        <div className="max-w-3xl mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E41E3F]/20 border border-[#E41E3F]/40 text-[#E41E3F] text-xs font-bold uppercase tracking-widest">
            <CupSoda className="w-4 h-4" />
            Interactive Tasting Room
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Coca-Cola® Flavour Tasting Lab
          </h2>
          <p className="text-sm text-slate-300 font-normal leading-relaxed">
            Craft your own custom Coca-Cola beverage blend! Select your base formula, inject artisanal flavor infusions, and calculate your exact taste profile live.
          </p>
        </div>

        {/* Main Grid: Controls & Live Liquid Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Controls: Base Selector & Flavor Sliders */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Base Cola Formula Selector */}
            <div className="space-y-3">
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                1. Select Base Cola Formula ({basePercent}% Base):
              </label>
              <div className="grid grid-cols-3 gap-3">
                {PRODUCTS_DATA.slice(0, 3).map((p) => {
                  const isSelected = baseProduct.id === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setBaseProduct(p)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#E41E3F] border-[#E41E3F] text-white shadow-lg shadow-red-600/30'
                          : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-300'
                      }`}
                    >
                      <p className="text-xs font-bold">{p.name.replace('Coca-Cola® ', '')}</p>
                      <p className="text-[10px] opacity-80">{p.nutritionalFacts.calories} Cal Base</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Flavor Infusion Sliders */}
            <div className="space-y-4 pt-2">
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                <span>2. Inject Craft Flavor Shots:</span>
                <span className="text-[#E41E3F] font-bold">{totalFlavorShots}% Infused</span>
              </label>

              {/* Vanilla Slider */}
              <div className="space-y-1.5 bg-white/5 p-3.5 rounded-2xl border border-white/5">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-amber-300">🍦 Vanilla Bean Shot</span>
                  <span>{vanillaRatio}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={vanillaRatio}
                  onChange={(e) => setVanillaRatio(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>

              {/* Cherry Slider */}
              <div className="space-y-1.5 bg-white/5 p-3.5 rounded-2xl border border-white/5">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-rose-400">🍒 Dark Cherry Burst</span>
                  <span>{cherryRatio}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={cherryRatio}
                  onChange={(e) => setCherryRatio(Number(e.target.value))}
                  className="w-full accent-rose-500 cursor-pointer"
                />
              </div>

              {/* Lime Slider */}
              <div className="space-y-1.5 bg-white/5 p-3.5 rounded-2xl border border-white/5">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-emerald-400">🍋 Fresh Zesty Lime</span>
                  <span>{limeRatio}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="40"
                  value={limeRatio}
                  onChange={(e) => setLimeRatio(Number(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer"
                />
              </div>

              {/* Cosmic Sparkle Slider */}
              <div className="space-y-1.5 bg-white/5 p-3.5 rounded-2xl border border-white/5">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-purple-300">✨ Cosmic Starlight Sparkle</span>
                  <span>{cosmicRatio}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="30"
                  value={cosmicRatio}
                  onChange={(e) => setCosmicRatio(Number(e.target.value))}
                  className="w-full accent-purple-400 cursor-pointer"
                />
              </div>

            </div>

            {/* Custom Name Generator Field */}
            <div className="space-y-2">
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                3. Name Your Custom Blend:
              </label>
              <input
                type="text"
                value={blendName}
                onChange={(e) => setBlendName(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm font-bold focus:outline-none focus:border-[#E41E3F] focus:ring-2 focus:ring-[#E41E3F]/30"
              />
            </div>

            {/* Mixer Action Buttons */}
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={handleMixCraft}
                className="flex-1 py-4 px-6 rounded-full bg-[#E41E3F] hover:bg-[#C8102E] text-white font-extrabold text-sm shadow-xl shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSaved ? (
                  <>
                    <Check className="w-5 h-5 text-emerald-300" />
                    Blend Formulated!
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Create Custom Blend
                  </>
                )}
              </button>

              <button
                onClick={handleResetMix}
                className="p-4 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Reset to pure classic"
              >
                <RefreshCw className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* Right Visualizer Stage: Animated Dynamic Liquid Flask */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-3xl bg-slate-900/80 border border-white/15 p-6 flex flex-col justify-between items-center overflow-hidden shadow-2xl backdrop-blur-xl">
              
              {/* Glass Header Tag */}
              <div className="z-10 w-full flex items-center justify-between text-xs font-bold text-slate-400 border-b border-white/10 pb-3">
                <span className="text-[#E41E3F]">COKE TASTING ROOM</span>
                <span className="bg-white/10 px-2.5 py-0.5 rounded-full text-white">#1886-LAB</span>
              </div>

              {/* Dynamic Fluid Liquid Glass Tank Container */}
              <div className="relative w-40 h-56 rounded-b-full rounded-t-2xl border-4 border-white/20 p-1.5 overflow-hidden my-4 shadow-inner bg-slate-950">
                
                {/* Liquid Level Gradient */}
                <motion.div
                  animate={{
                    background: `linear-gradient(to top, rgba(228, 30, 63, 0.9), rgba(${200 + cherryRatio * 1.5}, ${150 + vanillaRatio * 2}, ${100 + limeRatio * 3}, 0.85))`,
                  }}
                  transition={{ duration: 0.8 }}
                  className="absolute bottom-0 left-0 right-0 rounded-b-full w-full h-[85%] transition-all overflow-hidden"
                >
                  {/* Effervescent Rising Bubbles in Liquid */}
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [-10, -180],
                        opacity: [0, 0.8, 0],
                        x: [Math.sin(i) * 5, Math.cos(i) * 8],
                      }}
                      transition={{
                        duration: 1.8 + (i % 4) * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.15,
                      }}
                      className="absolute bottom-2 w-2 h-2 rounded-full bg-white/60 blur-[0.4px]"
                      style={{ left: `${(i * 18) % 85 + 5}%` }}
                    />
                  ))}
                </motion.div>

                {/* Ice Cube Floating in Liquid */}
                <motion.div
                  animate={{ y: [0, 8, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-12 left-12 w-10 h-10 rounded-xl bg-white/40 border border-white/60 backdrop-blur-md shadow-md z-10 flex items-center justify-center"
                >
                  <div className="w-3 h-3 bg-red-400/30 rounded-full" />
                </motion.div>
              </div>

              {/* Live Metric Readouts */}
              <div className="z-10 w-full space-y-2 bg-white/5 p-4 rounded-2xl border border-white/10 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-semibold">Custom Blend Name:</span>
                  <span className="text-white font-extrabold truncate max-w-[150px]">{blendName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-semibold">Estimated Calories:</span>
                  <span className="text-amber-400 font-extrabold">{calculatedCalories} Cal</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-semibold">Effervescence Rating:</span>
                  <span className="text-emerald-400 font-extrabold">{effervescenceLevel}% Crisp</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-semibold">Sweetness Index:</span>
                  <span className="text-rose-400 font-extrabold">{sweetnessScore} / 10</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
