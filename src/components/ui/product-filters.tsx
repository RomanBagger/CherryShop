'use client';

import { ProductCategory, MaterialType } from '@/types';
import { PRODUCT_CATEGORIES, MATERIAL_TYPES } from '@/lib/constants';
import { FilterState } from '@/hooks/useProductFilters';
import { Filter, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductFiltersProps {
  filters: FilterState;
  categoryStats: Record<string, number>;
  materialStats: Record<string, number>;
  priceRange: { min: number; max: number };
  hasActiveFilters: boolean;
  onToggleCategory: (category: ProductCategory) => void;
  onToggleMaterial: (material: MaterialType) => void;
  onUpdateFilter: (key: keyof FilterState, value: any) => void;
  onClearFilters: () => void;
}

export function ProductFilters({
  filters,
  categoryStats,
  materialStats,
  priceRange,
  hasActiveFilters,
  onToggleCategory,
  onToggleMaterial,
  onUpdateFilter,
  onClearFilters
}: ProductFiltersProps) {
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg sticky top-4">
      {/* Заголовок фильтров */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Filter className="h-5 w-5 mr-2 text-purple-600" />
          <h2 className="text-lg font-bold text-gray-900">Фильтры</h2>
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-gray-500 hover:text-red-500 p-2"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Поиск */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Поиск украшений..."
            value={filters.searchQuery}
            onChange={(e) => onUpdateFilter('searchQuery', e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
          />
        </div>
      </div>

      {/* Категории */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
          Категории
          {filters.categories.length > 0 && (
            <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full">
              {filters.categories.length}
            </span>
          )}
        </h3>
        <div className="space-y-3">
          {Object.entries(PRODUCT_CATEGORIES).map(([key, category]) => {
            const count = categoryStats[key] || 0;
            const isSelected = filters.categories.includes(key as ProductCategory);
            
            return (
              <label 
                key={key} 
                className={`flex items-center justify-between p-3 rounded-xl transition-all duration-200 cursor-pointer hover:bg-gray-50 ${
                  isSelected ? 'bg-purple-50 border-2 border-purple-200' : 'border-2 border-transparent'
                }`}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => onToggleCategory(key as ProductCategory)}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 rounded border-2 mr-3 flex items-center justify-center transition-all duration-200 ${
                    isSelected 
                      ? 'bg-purple-600 border-purple-600' 
                      : 'border-gray-300 hover:border-purple-400'
                  }`}>
                    {isSelected && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span className={`text-sm font-medium ${isSelected ? 'text-purple-700' : 'text-gray-700'}`}>
                    {category.name}
                  </span>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  isSelected 
                    ? 'bg-purple-200 text-purple-800' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {count}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Материалы */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
          Материалы
          {filters.materials.length > 0 && (
            <span className="ml-2 px-2 py-1 bg-pink-100 text-pink-700 text-xs font-bold rounded-full">
              {filters.materials.length}
            </span>
          )}
        </h3>
        <div className="space-y-3">
          {Object.entries(MATERIAL_TYPES).map(([key, material]) => {
            const count = materialStats[key] || 0;
            const isSelected = filters.materials.includes(key as MaterialType);
            
            if (count === 0) return null;
            
            return (
              <label 
                key={key} 
                className={`flex items-center justify-between p-3 rounded-xl transition-all duration-200 cursor-pointer hover:bg-gray-50 ${
                  isSelected ? 'bg-pink-50 border-2 border-pink-200' : 'border-2 border-transparent'
                }`}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => onToggleMaterial(key as MaterialType)}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 rounded border-2 mr-3 flex items-center justify-center transition-all duration-200 ${
                    isSelected 
                      ? 'bg-pink-600 border-pink-600' 
                      : 'border-gray-300 hover:border-pink-400'
                  }`}>
                    {isSelected && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span className={`text-sm font-medium ${isSelected ? 'text-pink-700' : 'text-gray-700'}`}>
                    {material.name}
                  </span>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  isSelected 
                    ? 'bg-pink-200 text-pink-800' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {count}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Диапазон цен */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-4">Цена</h3>
        <div className="space-y-4">
          {/* Range slider */}
          <div className="px-2">
            <input
              type="range"
              min={priceRange.min}
              max={priceRange.max}
              value={filters.priceRange.max}
              onChange={(e) => onUpdateFilter('priceRange', {
                ...filters.priceRange,
                max: parseInt(e.target.value)
              })}
              className="w-full h-2 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
          
          {/* Price inputs */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-500 mb-1">От</label>
              <input
                type="number"
                placeholder="0"
                value={filters.priceRange.min || ''}
                onChange={(e) => onUpdateFilter('priceRange', {
                  ...filters.priceRange,
                  min: parseInt(e.target.value) || 0
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">До</label>
              <input
                type="number"
                placeholder={priceRange.max.toString()}
                value={filters.priceRange.max || ''}
                onChange={(e) => onUpdateFilter('priceRange', {
                  ...filters.priceRange,
                  max: parseInt(e.target.value) || priceRange.max
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="text-center text-sm text-gray-600">
            {formatPrice(filters.priceRange.min)} - {formatPrice(filters.priceRange.max)}
          </div>
        </div>
      </div>

      {/* В наличии */}
      <div>
        <label className={`flex items-center p-3 rounded-xl transition-all duration-200 cursor-pointer hover:bg-gray-50 ${
          filters.inStockOnly ? 'bg-green-50 border-2 border-green-200' : 'border-2 border-transparent'
        }`}>
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) => onUpdateFilter('inStockOnly', e.target.checked)}
            className="sr-only"
          />
          <div className={`w-4 h-4 rounded border-2 mr-3 flex items-center justify-center transition-all duration-200 ${
            filters.inStockOnly 
              ? 'bg-green-600 border-green-600' 
              : 'border-gray-300 hover:border-green-400'
          }`}>
            {filters.inStockOnly && (
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </div>
          <span className={`text-sm font-medium ${filters.inStockOnly ? 'text-green-700' : 'text-gray-700'}`}>
            Только в наличии
          </span>
        </label>
      </div>

      {/* Кнопка очистки фильтров */}
      {hasActiveFilters && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <Button
            onClick={onClearFilters}
            variant="outline"
            className="w-full border-gray-300 text-gray-700 hover:bg-red-50 hover:border-red-300 hover:text-red-700 transition-all duration-200"
          >
            <X className="w-4 h-4 mr-2" />
            Очистить все фильтры
          </Button>
        </div>
      )}
    </div>
  );
}
