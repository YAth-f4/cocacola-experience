import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowUpDown, Sparkles, RefreshCw, Filter } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products';
import type { Product } from '../data/products';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSelectProduct: (product: Product) => void;
  onMixProduct: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  searchQuery,
  setSearchQuery,
  onSelectProduct,
  onMixProduct,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [onlyZeroSugar, setOnlyZeroSugar] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'popularity' | 'calories-asc' | 'caffeine-desc' | 'price-asc'>('popularity');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'classic', name: 'Classic Original' },
    { id: 'zero', name: 'Zero Sugar & Diet' },
    { id: 'flavored', name: 'Flavored Craft' },
    { id: 'creations', name: 'Limited Edition' },
  ];

  // Filtered and Sorted products computation
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      // Zero sugar filter
      if (onlyZeroSugar && product.nutritionalFacts.calories !== 0) {
        return false;
      }

      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesSubtitle = product.subtitle.toLowerCase().includes(query);
        const matchesCategory = product.categoryLabel.toLowerCase().includes(query);
        const matchesIngredient = product.ingredients.some((i) => i.toLowerCase().includes(query));
        const matchesTasting = product.tastingNotes.some((t) => t.toLowerCase().includes(query));
        return matchesName || matchesSubtitle || matchesCategory || matchesIngredient || matchesTasting;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'popularity') return b.popularity - a.popularity;
      if (sortBy === 'calories-asc') return a.caloriesCount - b.caloriesCount;
      if (sortBy === 'caffeine-desc') return b.caffeineMg - a.caffeineMg;
      if (sortBy === 'price-asc') {
        const pA = parseFloat(a.price.replace('$', ''));
        const pB = parseFloat(b.price.replace('$', ''));
        return pA - pB;
      }
      return 0;
    });
  }, [selectedCategory, onlyZeroSugar, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setOnlyZeroSugar(false);
    setSearchQuery('');
    setSortBy('popularity');
  };

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E41E3F]/10 text-[#E41E3F] text-xs font-extrabold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          The Portfolio
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Explore The Legendary Taste Range
        </h2>
        <p className="text-base text-slate-600 font-normal">
          From classic original formulas to zero-sugar innovations and craft flavor combinations. Filter and search exact specs, ingredients, and nutritional facts.
        </p>
      </div>

      {/* Filter & Search Bar Container */}
      <div className="mb-10 p-6 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-900/5 space-y-6">
        
        {/* Top Controls Row: Search Input & Category Pills */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-[#E41E3F] text-white shadow-md shadow-red-600/20 scale-105'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search products or ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#E41E3F] focus:ring-2 focus:ring-[#E41E3F]/20 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Sub-Controls Row: Toggle Zero Sugar, Sort Selector, Results Count */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-semibold text-slate-600">
          
          <div className="flex items-center gap-6 flex-wrap">
            {/* Zero Sugar Switch */}
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={onlyZeroSugar}
                onChange={(e) => setOnlyZeroSugar(e.target.checked)}
                className="w-4 h-4 accent-[#E41E3F] rounded cursor-pointer"
              />
              <span className="text-slate-800 font-bold">Only Zero Sugar / Calories</span>
            </label>

            {/* Active Filters count badge */}
            {(selectedCategory !== 'all' || onlyZeroSugar || searchQuery) && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 text-[#E41E3F] border border-red-200 text-[11px] font-bold">
                <Filter className="w-3 h-3" />
                Filters Active
              </span>
            )}
          </div>

          {/* Right Sort & Reset Controls */}
          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-500 font-medium">Sort:</span>
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#E41E3F]"
              >
                <option value="popularity">Most Popular</option>
                <option value="calories-asc">Lowest Calories</option>
                <option value="caffeine-desc">Highest Caffeine</option>
                <option value="price-asc">Price: Low to High</option>
              </select>
            </div>

            <button
              onClick={handleResetFilters}
              className="text-slate-400 hover:text-[#E41E3F] font-semibold flex items-center gap-1 transition-colors cursor-pointer"
              title="Reset all filters"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Reset
            </button>
          </div>

        </div>

      </div>

      {/* Product Cards Grid */}
      {filteredProducts.length > 0 ? (
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
                onMixProduct={onMixProduct}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 bg-white rounded-3xl border border-slate-100 shadow-sm max-w-md mx-auto space-y-4">
          <div className="w-16 h-16 rounded-full bg-red-50 text-[#E41E3F] flex items-center justify-center mx-auto text-2xl font-bold">
            🔍
          </div>
          <h3 className="text-xl font-bold text-slate-900">No Products Matched</h3>
          <p className="text-xs text-slate-500">
            We couldn't find any beverage matching "{searchQuery || 'your filter combination'}". Try clearing filters or searching another keyword.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-6 py-2.5 rounded-full bg-[#E41E3F] text-white font-bold text-xs shadow-md hover:bg-[#C8102E] transition-colors cursor-pointer"
          >
            Reset Search & Filters
          </button>
        </div>
      )}

    </section>
  );
};
