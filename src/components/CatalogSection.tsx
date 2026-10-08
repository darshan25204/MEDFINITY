import React, { useState, useMemo } from 'react';
import { Product, ProductCategory } from '../types';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { BusinessConfig } from '../config/business';
import { Search, Filter, SlidersHorizontal, RotateCcw, Bed, ChevronDown } from 'lucide-react';

interface CatalogSectionProps {
  products: Product[];
  businessConfig: BusinessConfig;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
  cartProductIds: Set<string>;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  products,
  businessConfig,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onAddToCart,
  onViewDetails,
  cartProductIds
}) => {
  const [availabilityFilter, setAvailabilityFilter] = useState<'all' | 'sale' | 'rental' | 'both'>('all');
  const [mechanismFilter, setMechanismFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'popular' | 'code' | 'name'>('popular');

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }

      // Availability filter
      if (availabilityFilter === 'rental' && p.availability !== 'rental' && p.availability !== 'both') {
        return false;
      }
      if (availabilityFilter === 'sale' && p.availability !== 'sale' && p.availability !== 'both') {
        return false;
      }

      // Mechanism filter
      if (mechanismFilter !== 'all' && p.mechanism !== mechanismFilter) {
        return false;
      }

      // Search query filter (matches code, name, category, or specs)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const codeMatch = p.code.toLowerCase().includes(q);
        const nameMatch = p.name.toLowerCase().includes(q);
        const catMatch = p.categoryLabel.toLowerCase().includes(q);
        const specMatch = p.keySpecs.some((s) => s.toLowerCase().includes(q));
        if (!codeMatch && !nameMatch && !catMatch && !specMatch) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'popular') {
        if (a.popular && !b.popular) return -1;
        if (!a.popular && b.popular) return 1;
        return a.code.localeCompare(b.code);
      }
      if (sortBy === 'code') {
        return a.code.localeCompare(b.code);
      }
      return a.name.localeCompare(b.name);
    });
  }, [products, selectedCategory, availabilityFilter, mechanismFilter, searchQuery, sortBy]);

  const handleResetFilters = () => {
    onSelectCategory('all');
    setAvailabilityFilter('all');
    setMechanismFilter('all');
    onSearchChange('');
    setSortBy('popular');
  };

  return (
    <section id="catalog" className="py-12 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-800">
              <span>Catalog & Inventory</span>
              <span aria-hidden="true">·</span>
              <span>80+ Brochure Models</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
              Searchable Medical Equipment Catalog
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Filter by hospital department, motorized vs manual mechanism, or availability for purchase & monthly rental.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs text-slate-500 font-medium">
              Showing <strong className="text-slate-900 font-bold tabular-nums">{filteredProducts.length}</strong> of {products.length} Products
            </span>
          </div>
        </div>

        {/* Category Navigation Pills / Horizontal Scroll Bar */}
        <div className="border-b border-slate-200 pb-3 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 min-w-max">
            {CATEGORIES.map((cat) => {
              const count = cat.id === 'all' 
                ? products.length 
                : products.filter(p => p.category === cat.id).length;
              const isActive = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-sky-900 text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                    isActive ? 'bg-sky-800 text-sky-200' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Secondary Filter & Search Control Bar */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          {/* Search Field */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Filter by code (e.g. '001') or keyword..."
              className="w-full pl-9 pr-8 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filter Dropdowns & Segmented Toggles */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs">
            {/* Availability */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
              <button
                onClick={() => setAvailabilityFilter('all')}
                className={`px-2.5 py-1 rounded font-medium transition-colors ${
                  availabilityFilter === 'all' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Modes
              </button>
              <button
                onClick={() => setAvailabilityFilter('rental')}
                className={`px-2.5 py-1 rounded font-medium transition-colors ${
                  availabilityFilter === 'rental' ? 'bg-white text-emerald-800 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Rental Available
              </button>
              <button
                onClick={() => setAvailabilityFilter('sale')}
                className={`px-2.5 py-1 rounded font-medium transition-colors ${
                  availabilityFilter === 'sale' ? 'bg-white text-sky-800 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Direct Sale
              </button>
            </div>

            {/* Mechanism */}
            <select
              value={mechanismFilter}
              onChange={(e) => setMechanismFilter(e.target.value)}
              className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-sky-500"
            >
              <option value="all">Mechanism: All</option>
              <option value="Motorized">Motorized / Electric</option>
              <option value="Manual">Manual / Crank</option>
              <option value="Hydraulic">Hydraulic / Gas Spring</option>
              <option value="Digital">Digital / Electronics</option>
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-sky-500"
            >
              <option value="popular">Sort: Featured</option>
              <option value="code">Sort: Model Code</option>
              <option value="name">Sort: Name (A-Z)</option>
            </select>

            {/* Reset */}
            {(selectedCategory !== 'all' || availabilityFilter !== 'all' || mechanismFilter !== 'all' || searchQuery) && (
              <button
                onClick={handleResetFilters}
                className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
                title="Reset all filters"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                businessConfig={businessConfig}
                onAddToCart={onAddToCart}
                onViewDetails={onViewDetails}
                isInCart={cartProductIds.has(product.id)}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center space-y-4 bg-white rounded-2xl border border-dashed border-slate-300 p-8">
            <div className="w-16 h-16 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center mx-auto">
              <Search className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">No Matching Equipment Found</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                No products match "{searchQuery}" with the selected filters. Try clearing your search or switching categories.
              </p>
            </div>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-sky-900 text-white hover:bg-sky-800 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
