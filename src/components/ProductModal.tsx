import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, CupSoda, Utensils, Info } from 'lucide-react';
import type { Product, ProductSize } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenFlavourLab: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onOpenFlavourLab }) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<ProductSize>(product.sizes[0] || { label: "Standard", volume: "330ml", price: product.price });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
        />

        {/* Modal Main Content Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 z-10 my-8 max-h-[90vh] flex flex-col"
        >
          
          {/* Top Bar with Close Button */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-[#FAF7F5]">
            <div className="flex items-center gap-2">
              <span className={`px-3 py-0.5 rounded-full text-xs font-bold uppercase ${product.badgeColor}`}>
                {product.badge}
              </span>
              <span className="text-xs text-slate-500 font-medium">Official Product Specification</span>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-200/80 hover:bg-[#E41E3F] text-slate-700 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            
            {/* Top Grid: High Res AI Image & Key Product Details */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Product Visual Render Stage */}
              <div className="md:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50 p-2 shadow-inner border border-slate-200/60">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-xl shadow-md"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-2.5 rounded-xl border border-white text-center shadow-lg">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Selected Packaging</p>
                  <p className="text-sm font-extrabold text-[#E41E3F]">{selectedSize.label} ({selectedSize.volume})</p>
                </div>
              </div>

              {/* Product Header & Size Selector */}
              <div className="md:col-span-7 space-y-5">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight mb-2">
                    {product.name}
                  </h2>
                  <p className="text-sm text-slate-600 font-normal leading-relaxed">
                    {product.subtitle}
                  </p>
                </div>

                {/* Size & Packaging Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                    Choose Packaging & Volume:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {product.sizes.map((sz, idx) => {
                      const isSelected = selectedSize.label === sz.label;
                      return (
                        <button
                          key={idx}
                          onClick={() => setSelectedSize(sz)}
                          className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                            isSelected
                              ? 'border-[#E41E3F] bg-red-50/50 text-[#E41E3F] ring-2 ring-[#E41E3F]/20'
                              : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold">{sz.label}</span>
                            <span className="text-xs font-black text-slate-900">{sz.price}</span>
                          </div>
                          <p className="text-[11px] text-slate-500 font-medium">{sz.volume}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Action CTA inside modal */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenFlavourLab(product);
                    }}
                    className="flex-1 py-3 px-4 rounded-full bg-[#E41E3F] hover:bg-[#C8102E] text-white font-bold text-xs shadow-lg shadow-red-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <CupSoda className="w-4 h-4" />
                    Customize in Flavour Lab
                  </button>
                </div>

              </div>

            </div>

            {/* Middle Grid: Detailed Nutritional Facts Table & Ingredients */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 border-t border-slate-100">
              
              {/* Nutritional Facts Table */}
              <div className="md:col-span-6 bg-slate-50 p-6 rounded-3xl border border-slate-200/80 space-y-4">
                <div className="flex items-center justify-between border-b-4 border-slate-900 pb-2">
                  <div>
                    <h3 className="text-xl font-black tracking-tight text-slate-900 uppercase">Nutrition Facts</h3>
                    <p className="text-[11px] text-slate-500 font-semibold">Serving Size: 1 Can / Bottle ({selectedSize.volume})</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-[#E41E3F]">{product.nutritionalFacts.calories}</span>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase">Calories</span>
                  </div>
                </div>

                <div className="divide-y divide-slate-200 text-xs font-medium text-slate-800">
                  <div className="py-2 flex justify-between">
                    <span className="font-bold">Total Fat</span>
                    <span>{product.nutritionalFacts.totalFat}</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="font-bold">Sodium</span>
                    <span>{product.nutritionalFacts.sodium}</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="font-bold">Total Carbohydrates</span>
                    <span>{product.nutritionalFacts.totalCarbs}</span>
                  </div>
                  <div className="py-2 flex justify-between pl-4 text-slate-600">
                    <span>Total Sugars</span>
                    <span>{product.nutritionalFacts.sugars}</span>
                  </div>
                  <div className="py-2 flex justify-between pl-4 text-slate-600">
                    <span>Includes Added Sugars</span>
                    <span>{product.nutritionalFacts.addedSugars}</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="font-bold">Protein</span>
                    <span>{product.nutritionalFacts.protein}</span>
                  </div>
                  <div className="py-2 flex justify-between text-[#E41E3F] font-bold">
                    <span>Caffeine Content</span>
                    <span>{product.nutritionalFacts.caffeine}</span>
                  </div>
                </div>

                <p className="text-[10px] text-slate-400 leading-tight">
                  *Percent Daily Values (DV) are based on a 2,000 calorie diet.
                </p>
              </div>

              {/* Ingredients & Pairings */}
              <div className="md:col-span-6 space-y-6">
                
                {/* Ingredients List */}
                <div className="space-y-3">
                  <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <Info className="w-4 h-4 text-[#E41E3F]" />
                    Official Ingredients:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ing, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tasting Profile & Pairings */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-amber-500" />
                    Recommended Food Pairing:
                  </h4>
                  <p className="text-xs text-slate-600 bg-amber-500/10 p-3.5 rounded-2xl border border-amber-500/20 font-medium leading-relaxed">
                    {product.pairing}
                  </p>
                </div>

                {/* Heritage Story Note */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-900">
                    Product Heritage Story:
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {product.story}
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Footer Bar */}
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              100% Recyclable Packaging Commitment
            </span>

            <button
              onClick={onClose}
              className="px-6 py-2 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
