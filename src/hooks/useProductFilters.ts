'use client';

import { useState, useMemo, useCallback } from 'react';
import { Product, ProductCategory, MaterialType } from '@/types';

export interface FilterState {
  categories: ProductCategory[];
  materials: MaterialType[];
  priceRange: {
    min: number;
    max: number;
  };
  inStockOnly: boolean;
  searchQuery: string;
}

export interface SortState {
  sortBy: 'name' | 'price' | 'createdAt' | 'popularity';
  sortOrder: 'asc' | 'desc';
}

const initialFilters: FilterState = {
  categories: [],
  materials: [],
  priceRange: { min: 0, max: 100000 },
  inStockOnly: false,
  searchQuery: ''
};

const initialSort: SortState = {
  sortBy: 'popularity',
  sortOrder: 'desc'
};

export function useProductFilters(products: Product[]) {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [sort, setSort] = useState<SortState>(initialSort);

  // Подсчет товаров в каждой категории
  const categoryStats = useMemo(() => {
    const stats: Record<string, number> = {};
    products.forEach(product => {
      stats[product.category] = (stats[product.category] || 0) + 1;
    });
    return stats;
  }, [products]);

  // Подсчет товаров по материалам
  const materialStats = useMemo(() => {
    const stats: Record<string, number> = {};
    products.forEach(product => {
      product.materials?.forEach(material => {
        stats[material.type] = (stats[material.type] || 0) + 1;
      });
    });
    return stats;
  }, [products]);

  // Диапазон цен
  const priceRange = useMemo(() => {
    if (products.length === 0) return { min: 0, max: 100000 };
    const prices = products.map(p => p.price);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices)
    };
  }, [products]);

  // Фильтрация товаров
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Фильтр по категориям
    if (filters.categories.length > 0) {
      filtered = filtered.filter(product => 
        filters.categories.includes(product.category as ProductCategory)
      );
    }

    // Фильтр по материалам
    if (filters.materials.length > 0) {
      filtered = filtered.filter(product =>
        product.materials?.some(material => 
          filters.materials.includes(material.type as MaterialType)
        )
      );
    }

    // Фильтр по цене
    filtered = filtered.filter(product =>
      product.price >= filters.priceRange.min && 
      product.price <= filters.priceRange.max
    );

    // Фильтр по наличию
    if (filters.inStockOnly) {
      filtered = filtered.filter(product => product.inStock);
    }

    // Поиск
    if (filters.searchQuery.trim()) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.materials?.some(material => 
          material.name.toLowerCase().includes(query)
        )
      );
    }

    return filtered;
  }, [products, filters]);

  // Сортировка товаров
  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];

    sorted.sort((a, b) => {
      let comparison = 0;

      switch (sort.sortBy) {
        case 'name':
          comparison = a.name.localeCompare(b.name, 'ru');
          break;
        case 'price':
          comparison = a.price - b.price;
          break;
        case 'createdAt':
          comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
          break;
        case 'popularity':
          // Mock popularity based on stock quantity (higher stock = more popular)
          comparison = (b.stockQuantity || 0) - (a.stockQuantity || 0);
          break;
        default:
          return 0;
      }

      return sort.sortOrder === 'asc' ? comparison : -comparison;
    });

    return sorted;
  }, [filteredProducts, sort]);

  // Функции для обновления фильтров
  const updateFilter = (key: keyof FilterState, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const toggleCategory = useCallback((category: ProductCategory) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category) && prev.categories.length === 1
        ? [] // Если категория уже выбрана и это единственная категория, убираем фильтр
        : [category] // Иначе заменяем все категории на выбранную
    }));
  }, []);

  const toggleMaterial = (material: MaterialType) => {
    setFilters(prev => ({
      ...prev,
      materials: prev.materials.includes(material)
        ? prev.materials.filter(m => m !== material)
        : [...prev.materials, material]
    }));
  };

  const clearFilters = () => {
    setFilters(initialFilters);
  };

  const updateSort = (sortBy: SortState['sortBy'], sortOrder: SortState['sortOrder']) => {
    setSort({ sortBy, sortOrder });
  };

  return {
    filters,
    sort,
    filteredProducts: sortedProducts,
    categoryStats,
    materialStats,
    priceRange,
    updateFilter,
    toggleCategory,
    toggleMaterial,
    clearFilters,
    updateSort,
    hasActiveFilters: filters.categories.length > 0 || 
                    filters.materials.length > 0 || 
                    filters.inStockOnly || 
                    filters.searchQuery.trim() !== '' ||
                    filters.priceRange.min > priceRange.min ||
                    filters.priceRange.max < priceRange.max
  };
}
