import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Droplets } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products';
import type { Product } from '../data/products';

interface HeroSectionProps {
  onSelectProduct: (product: Product) => void;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectProduct, onExploreClick }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS_DATA[0]);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden coke-gradient-bg">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#E41E3F]/15 via-rose-300/10 to-amber-200/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Dynamic floating ice cube micro-elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-36 left-[8%] w-12 h-12 rounded-2xl bg-white/40 border border-white/60 backdrop-blur-md shadow-lg rotate-12 flex items-center justify-center opacity-80"
        >
          <div className="w-4 h-4 bg-red-500/20 rounded-full blur-xs" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 18, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 right-[10%] w-16 h-16 rounded-2xl bg-white/50 border border-white/70 backdrop-blur-md shadow-xl -rotate-6 flex items-center justify-center opacity-85"
        >
          <Droplets className="w-6 h-6 text-[#E41E3F]/40" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & CTA Column */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#E41E3F]/20 text-[#E41E3F] text-xs font-bold tracking-wide uppercase shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Worldwide Refreshment Since 1886</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-[#111111] tracking-tight leading-[1.08]"
            >
              Real Magic™ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E41E3F] via-[#C8102E] to-amber-600">
                In Every Sip.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 font-normal max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Experience the unmatched effervescence, timeless secret recipe, and rich heritage of Coca-Cola's legendary product portfolio.
            </motion.p>

            {/* Interactive Flavor Picker Selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Select Taste Profile:
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {PRODUCTS_DATA.map((p) => {
                  const isActive = selectedProduct.id === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setSelectedProduct(p)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-[#E41E3F] text-white shadow-md shadow-red-500/30 scale-105 ring-2 ring-[#E41E3F]/30'
                          : 'bg-white/80 hover:bg-white text-slate-700 border border-slate-200'
                      }`}
                    >
                      {p.name.replace('Coca-Cola® ', '')}
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#E41E3F] hover:bg-[#C8102E] text-white font-bold text-sm shadow-xl shadow-red-600/25 hover:shadow-red-600/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onSelectProduct(selectedProduct)}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm border border-slate-200 hover:border-slate-300 shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Nutritional Specs</span>
              </button>
            </motion.div>
          </div>

          {/* Right Product Image Visual Stage Column */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <motion.div
              key={selectedProduct.id}
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden glass-panel p-4 shadow-2xl border border-white/60 group"
            >
              {/* Product Badge Pill */}
              <div className="absolute top-6 left-6 z-20">
                <span className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wide shadow-md ${selectedProduct.badgeColor}`}>
                  {selectedProduct.badge}
                </span>
              </div>

              {/* Price Pill */}
              <div className="absolute top-6 right-6 z-20 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full border border-slate-200 text-xs font-black text-slate-900 shadow-md">
                {selectedProduct.price}
              </div>

              {/* Main AI Render Image */}
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 shadow-inner"
              />

              {/* Bottom Spec Preview Bar inside Card */}
              <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/90 backdrop-blur-lg rounded-2xl p-3.5 border border-white/80 shadow-lg flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{selectedProduct.name}</h4>
                  <p className="text-xs text-slate-500">{selectedProduct.categoryLabel} • {selectedProduct.nutritionalFacts.calories} Cal</p>
                </div>
                <button
                  onClick={() => onSelectProduct(selectedProduct)}
                  className="px-3 py-1.5 rounded-xl bg-[#E41E3F] text-white text-xs font-bold hover:bg-[#C8102E] transition-colors cursor-pointer"
                >
                  Full Specs
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Key Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-white/80 backdrop-blur-md border border-[#E41E3F]/10 shadow-lg"
        >
          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-2xl bg-[#E41E3F]/10 text-[#E41E3F] flex items-center justify-center font-bold">
              1886
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Heritage</p>
              <p className="text-base font-black text-slate-900">138+ Years</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
              200+
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Presence</p>
              <p className="text-base font-black text-slate-900">Global Reach</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
              100%
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Packaging</p>
              <p className="text-base font-black text-slate-900">Recyclable Goal</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
              1.9B+
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Daily Servings</p>
              <p className="text-base font-black text-slate-900">Shared Smiles</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
