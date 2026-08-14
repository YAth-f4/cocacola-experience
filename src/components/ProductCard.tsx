import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Zap, Flame, CheckCircle2, CupSoda } from 'lucide-react';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  onMixProduct?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectProduct, onMixProduct }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-3xl bg-white border border-slate-100 hover:border-[#E41E3F]/30 p-5 shadow-sm hover:shadow-xl hover:shadow-red-950/5 transition-all duration-300 flex flex-col justify-between"
    >
      {/* Top Card Badges */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className={`px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wide ${product.badgeColor}`}>
          {product.badge}
        </span>
        <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
          {product.price}
        </span>
      </div>

      {/* Image Container with Hover Effects */}
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gradient-to-b from-slate-50 to-slate-100/60 p-2 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
        />

        {/* Floating Spec Tags overlay on image hover */}
        <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center gap-3">
          <button
            onClick={() => onSelectProduct(product)}
            className="px-4 py-2 rounded-full bg-white text-slate-900 font-bold text-xs shadow-lg hover:bg-slate-100 flex items-center gap-1.5 transition-transform hover:scale-105 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-[#E41E3F]" />
            Full Specs
          </button>
          {onMixProduct && (
            <button
              onClick={() => onMixProduct(product)}
              className="px-4 py-2 rounded-full bg-[#E41E3F] text-white font-bold text-xs shadow-lg hover:bg-[#C8102E] flex items-center gap-1.5 transition-transform hover:scale-105 cursor-pointer"
            >
              <CupSoda className="w-3.5 h-3.5" />
              Tasting Lab
            </button>
          )}
        </div>
      </div>

      {/* Product Titles & Info */}
      <div className="space-y-2 mb-4">
        <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#E41E3F] transition-colors leading-snug">
          {product.name}
        </h3>
        <p className="text-xs text-slate-500 font-normal line-clamp-2 leading-relaxed">
          {product.subtitle}
        </p>
      </div>

      {/* Key Quick Facts Pills */}
      <div className="grid grid-cols-2 gap-2 text-[11px] mb-5">
        <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1.5 rounded-xl border border-slate-100 text-slate-700 font-medium">
          <Flame className="w-3.5 h-3.5 text-amber-500" />
          <span>{product.nutritionalFacts.calories} Cal</span>
        </div>
        <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1.5 rounded-xl border border-slate-100 text-slate-700 font-medium">
          <Zap className="w-3.5 h-3.5 text-blue-500" />
          <span>{product.caffeineMg}mg Caffeine</span>
        </div>
      </div>

      {/* Tasting Notes Tags */}
      <div className="flex flex-wrap gap-1 mb-4">
        {product.tastingNotes.slice(0, 2).map((note, idx) => (
          <span key={idx} className="text-[10px] bg-[#E41E3F]/5 text-[#E41E3F] font-semibold px-2 py-0.5 rounded-md">
            • {note}
          </span>
        ))}
      </div>

      {/* Footer Action */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[11px] text-slate-400 font-semibold flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> 100% Recyclable
        </span>

        <button
          onClick={() => onSelectProduct(product)}
          className="text-xs font-bold text-[#E41E3F] hover:text-[#C8102E] underline flex items-center gap-1 cursor-pointer"
        >
          View Details & Specs →
        </button>
      </div>
    </motion.div>
  );
};
