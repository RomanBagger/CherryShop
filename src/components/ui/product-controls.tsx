'use client';

import { useState } from 'react';
import { SortState } from '@/hooks/useProductFilters';
import { Grid, List, SortAsc, SortDesc, LayoutGrid } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductControlsProps {
  totalProducts: number;
  sort: SortState;
  viewMode: 'grid' | 'list';
  gridColumns: number;
  onSortChange: (sortBy: SortState['sortBy'], sortOrder: SortState['sortOrder']) => void;
  onViewModeChange: (mode: 'grid' | 'list') => void;
  onGridColumnsChange: (columns: number) => void;
}

export function ProductControls({
  totalProducts,
  sort,
  viewMode,
  gridColumns,
  onSortChange,
  onViewModeChange,
  onGridColumnsChange
}: ProductControlsProps) {
  
  const sortOptions = [
    { value: 'popularity', label: 'По популярности', icon: '🔥' },
    { value: 'price', label: 'По цене', icon: '💰' },
    { value: 'name', label: 'По названию', icon: '🔤' },
    { value: 'createdAt', label: 'По дате добавления', icon: '📅' }
  ];

  const handleSortChange = (sortBy: string) => {
    const newSortOrder = sort.sortBy === sortBy && sort.sortOrder === 'asc' ? 'desc' : 'asc';
    onSortChange(sortBy as SortState['sortBy'], newSortOrder);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg mb-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        
        {/* Результаты и статистика */}
        <div className="flex items-center gap-4">
          <div>
            <span className="text-lg font-bold text-gray-900">
              {totalProducts} {totalProducts === 1 ? 'товар' : totalProducts < 5 ? 'товара' : 'товаров'}
            </span>
            <span className="text-gray-500 ml-2">найдено</span>
          </div>
          
          {totalProducts > 0 && (
            <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full">
              <span className="text-sm text-purple-700 font-medium">
                ✨ Эксклюзивная коллекция
              </span>
            </div>
          )}
        </div>

        {/* Управление видом и сортировкой */}
        <div className="flex items-center gap-4 w-full lg:w-auto">
          
          {/* Переключение вида */}
          <div className="flex items-center border border-gray-200 rounded-xl p-1 bg-gray-50">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onViewModeChange('grid')}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === 'grid' 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onViewModeChange('list')}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === 'list' 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>

          {/* Колонки для grid режима */}
          {viewMode === 'grid' && (
            <div className="flex items-center border border-gray-200 rounded-xl p-1 bg-gray-50">
              {[2, 3, 4].map((cols) => (
                <Button
                  key={cols}
                  variant={gridColumns === cols ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => onGridColumnsChange(cols)}
                  className={`p-2 rounded-lg transition-all duration-200 text-xs ${
                    gridColumns === cols 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <LayoutGrid className="w-3 h-3 mr-1" />
                  {cols}
                </Button>
              ))}
            </div>
          )}

          {/* Сортировка */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 hidden md:block">Сортировать:</span>
            <div className="relative">
              <select
                value={sort.sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-xl px-4 py-2 pr-8 text-sm font-medium text-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 cursor-pointer hover:border-gray-400"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.icon} {option.label}
                  </option>
                ))}
              </select>
              
              {/* Custom arrow */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Порядок сортировки */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => onSortChange(sort.sortBy, sort.sortOrder === 'asc' ? 'desc' : 'asc')}
              className="p-2 border-gray-300 hover:border-gray-400 transition-all duration-200"
              title={`Сортировать по ${sort.sortOrder === 'asc' ? 'убыванию' : 'возрастанию'}`}
            >
              {sort.sortOrder === 'asc' ? (
                <SortAsc className="w-4 h-4" />
              ) : (
                <SortDesc className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Активные фильтры могут быть добавлены здесь */}
    </div>
  );
}
