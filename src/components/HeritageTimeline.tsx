import React from 'react';
import { motion } from 'framer-motion';
import { History, Clock, Award } from 'lucide-react';
import { HERITAGE_TIMELINE } from '../data/products';

export const HeritageTimeline: React.FC = () => {
  return (
    <section id="heritage" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E41E3F]/10 text-[#E41E3F] text-xs font-extrabold uppercase tracking-widest">
          <History className="w-3.5 h-3.5" />
          The Legacy
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Over 138 Years of Real Magic
        </h2>
        <p className="text-base text-slate-600 font-normal">
          From a small pharmacy soda fountain in Atlanta to the world's most beloved refreshment symbol. Explore key moments in Coca-Cola history.
        </p>
      </div>

      {/* Timeline Grid */}
      <div className="relative">
        
        {/* Center Vertical Connecting Line */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#E41E3F] via-rose-300 to-amber-400 -translate-x-1/2 rounded-full opacity-30" />

        <div className="space-y-12 relative">
          {HERITAGE_TIMELINE.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Box */}
                <div className="w-full lg:w-1/2 p-4">
                  <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:border-[#E41E3F]/30 transition-all duration-300 space-y-3 relative group">
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-[#E41E3F] tracking-tight">
                        {item.year}
                      </span>
                      <span className="p-2 rounded-xl bg-red-50 text-[#E41E3F] group-hover:scale-110 transition-transform">
                        <Award className="w-4 h-4" />
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center Node Indicator */}
                <div className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-[#E41E3F] text-white font-bold text-xs ring-8 ring-[#FAF7F5] shadow-md z-10 my-4 lg:my-0">
                  <Clock className="w-4 h-4" />
                </div>

                {/* Empty Spacer Column for layout symmetry */}
                <div className="hidden lg:block w-1/2" />
              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
