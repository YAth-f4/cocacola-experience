import React from 'react';
import { Leaf, RefreshCw, Droplet, Globe } from 'lucide-react';

export const SustainabilitySection: React.FC = () => {
  return (
    <section id="sustainability" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-900 text-white shadow-2xl relative overflow-hidden border border-emerald-500/20">
        
        {/* Background glow graphics */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />

        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-widest">
            <Leaf className="w-4 h-4" />
            World Without Waste™
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Our Sustainable Tomorrow
          </h2>
          <p className="text-sm text-slate-300 font-normal leading-relaxed">
            The Coca-Cola Company is committed to collecting and recycling a bottle or can for every single one we sell by 2030, replenishing 100% of our water footprint, and lowering carbon emissions.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          
          {/* Card 1: 100% Recyclable Bottles */}
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-3 hover:bg-white/15 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">100% Recyclable Packaging</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Every glass contour bottle, aluminum sleek can, and rPET plastic bottle is designed for complete circularity and reuse.
            </p>
          </div>

          {/* Card 2: 100% Water Replenishment */}
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-3 hover:bg-white/15 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold">
              <Droplet className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Water Stewardship</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              We return 100% of the water used in our global beverage manufacturing back to local watersheds and communities.
            </p>
          </div>

          {/* Card 3: Net Zero Emissions */}
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-3 hover:bg-white/15 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Net-Zero Carbon by 2050</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Transitioning fleet transportation to electric vehicles and powering bottling facilities with 100% renewable solar energy.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};
