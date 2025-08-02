'use client';

import React, { useState } from 'react';
import { ProductCardEnhanced } from '@/components/ui/product-card-enhanced';
import { ProductFilters } from '@/components/ui/product-filters';
import { ProductControls } from '@/components/ui/product-controls';
import { useProductFilters } from '@/hooks/useProductFilters';
import { Product, ProductCategory, MaterialType } from '@/types';
import { ShoppingCart, Heart } from 'lucide-react';

// Моковые данные для каталога
const products: Product[] = [
  {
    id: '1',
    name: 'Серьги "Лунные капли"',
    description: 'Элегантные серьги из серебра 925 пробы с натуральным жемчугом',
    price: 4500,
    category: ProductCategory.EARRINGS,
    images: [
      {
        id: '1',
        url: 'https://via.placeholder.com/400x400/F3F4F6/6B7280?text=Серьги',
        alt: 'Серьги Лунные капли',
        isPrimary: true,
        order: 1
      }
    ],
    materials: [
      { id: '1', name: 'Серебро 925', type: MaterialType.SILVER, purity: '925' },
      { id: '2', name: 'Жемчуг', type: MaterialType.PEARL }
    ],
    inStock: true,
    stockQuantity: 5,
    createdAt: new Date('2024-12-01'),
    updatedAt: new Date()
  },
  {
    id: '2',
    name: 'Браслет "Весенний сад"',
    description: 'Изящный браслет с фианитами, имитирующими весенние цветы',
    price: 6800,
    category: ProductCategory.BRACELETS,
    images: [
      {
        id: '2',
        url: 'https://via.placeholder.com/400x400/F3F4F6/6B7280?text=Браслет',
        alt: 'Браслет Весенний сад',
        isPrimary: true,
        order: 1
      }
    ],
    materials: [
      { id: '1', name: 'Серебро 925', type: MaterialType.SILVER, purity: '925' },
      { id: '3', name: 'Фианиты', type: MaterialType.GEMSTONE }
    ],
    inStock: true,
    stockQuantity: 3,
    createdAt: new Date('2024-12-15'),
    updatedAt: new Date()
  },
  {
    id: '3',
    name: 'Колье "Звездная ночь"',
    description: 'Роскошное колье из золота с сапфирами',
    price: 25000,
    category: ProductCategory.NECKLACES,
    images: [
      {
        id: '3',
        url: 'https://via.placeholder.com/400x400/F3F4F6/6B7280?text=Колье',
        alt: 'Колье Звездная ночь',
        isPrimary: true,
        order: 1
      }
    ],
    materials: [
      { id: '4', name: 'Золото 585', type: MaterialType.GOLD, purity: '585' },
      { id: '5', name: 'Сапфиры', type: MaterialType.GEMSTONE }
    ],
    inStock: true,
    stockQuantity: 1,
    createdAt: new Date('2024-11-20'),
    updatedAt: new Date()
  },
  {
    id: '4',
    name: 'Кольцо "Вечность"',
    description: 'Элегантное кольцо с бриллиантами',
    price: 45000,
    category: ProductCategory.RINGS,
    images: [
      {
        id: '4',
        url: 'https://via.placeholder.com/400x400/F3F4F6/6B7280?text=Кольцо',
        alt: 'Кольцо Вечность',
        isPrimary: true,
        order: 1
      }
    ],
    materials: [
      { id: '4', name: 'Золото 585', type: MaterialType.GOLD, purity: '585' },
      { id: '6', name: 'Бриллианты', type: MaterialType.GEMSTONE }
    ],
    inStock: false,
    stockQuantity: 0,
    createdAt: new Date('2024-10-10'),
    updatedAt: new Date()
  },
  {
    id: '5',
    name: 'Серьги "Ангельские крылья"',
    description: 'Воздушные серьги с перьевидным дизайном',
    price: 3200,
    category: ProductCategory.EARRINGS,
    images: [
      {
        id: '5',
        url: 'https://via.placeholder.com/400x400/F3F4F6/6B7280?text=Серьги+2',
        alt: 'Серьги Ангельские крылья',
        isPrimary: true,
        order: 1
      }
    ],
    materials: [
      { id: '1', name: 'Серебро 925', type: MaterialType.SILVER, purity: '925' }
    ],
    inStock: true,
    stockQuantity: 8,
    createdAt: new Date('2025-01-10'),
    updatedAt: new Date()
  },
  {
    id: '6',
    name: 'Браслет "Золотая осень"',
    description: 'Роскошный браслет с янтарными вставками',
    price: 12000,
    category: ProductCategory.BRACELETS,
    images: [
      {
        id: '6',
        url: 'https://via.placeholder.com/400x400/F3F4F6/6B7280?text=Браслет+2',
        alt: 'Браслет Золотая осень',
        isPrimary: true,
        order: 1
      }
    ],
    materials: [
      { id: '4', name: 'Золото 585', type: MaterialType.GOLD, purity: '585' },
      { id: '7', name: 'Янтарь', type: MaterialType.GEMSTONE }
    ],
    inStock: true,
    stockQuantity: 2,
    createdAt: new Date('2024-09-05'),
    updatedAt: new Date()
  },
  {
    id: '7',
    name: 'Заколка "Цветочная фантазия"',
    description: 'Изящная заколка с кристаллами в виде цветов',
    price: 2800,
    category: ProductCategory.HAIRPINS,
    images: [
      {
        id: '7',
        url: 'https://via.placeholder.com/400x400/F3F4F6/6B7280?text=Заколка',
        alt: 'Заколка Цветочная фантазия',
        isPrimary: true,
        order: 1
      }
    ],
    materials: [
      { id: '1', name: 'Серебро 925', type: MaterialType.SILVER, purity: '925' },
      { id: '8', name: 'Кристаллы', type: MaterialType.GEMSTONE }
    ],
    inStock: true,
    stockQuantity: 6,
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date()
  },
  {
    id: '8',
    name: 'Подвеска "Ловец снов"',
    description: 'Мистическая подвеска с натуральными камнями',
    price: 5500,
    category: ProductCategory.PENDANTS,
    images: [
      {
        id: '8',
        url: 'https://via.placeholder.com/400x400/F3F4F6/6B7280?text=Подвеска',
        alt: 'Подвеска Ловец снов',
        isPrimary: true,
        order: 1
      }
    ],
    materials: [
      { id: '1', name: 'Серебро 925', type: MaterialType.SILVER, purity: '925' },
      { id: '9', name: 'Аметист', type: MaterialType.GEMSTONE },
      { id: '10', name: 'Лунный камень', type: MaterialType.GEMSTONE }
    ],
    inStock: true,
    stockQuantity: 4,
    createdAt: new Date('2024-11-30'),
    updatedAt: new Date()
  }
];

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [gridColumns, setGridColumns] = useState(3);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const {
    filters,
    sort,
    filteredProducts,
    categoryStats,
    materialStats,
    priceRange,
    updateFilter,
    toggleCategory,
    toggleMaterial,
    clearFilters,
    updateSort,
    hasActiveFilters
  } = useProductFilters(products);

  const handleAddToCart = (product: Product) => {
    console.log('Добавить в корзину:', product.name);
    // Здесь будет логика добавления в корзину
  };

  const handleToggleWishlist = (product: Product) => {
    setWishlist(prev => 
      prev.includes(product.id) 
        ? prev.filter(id => id !== product.id)
        : [...prev, product.id]
    );
  };

  const getGridClasses = () => {
    switch (gridColumns) {
      case 2: return 'grid-cols-1 md:grid-cols-2';
      case 3: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
      default: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Хлебные крошки */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-purple-600 transition-colors">Главная</a>
            <span>/</span>
            <span className="text-gray-900 font-medium">Каталог украшений</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Заголовок страницы */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Каталог 
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> украшений</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Откройте для себя нашу коллекцию эксклюзивных ювелирных изделий ручной работы
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Фильтры */}
          <aside className="lg:w-80 flex-shrink-0">
            <ProductFilters
              filters={filters}
              categoryStats={categoryStats}
              materialStats={materialStats}
              priceRange={priceRange}
              hasActiveFilters={hasActiveFilters}
              onToggleCategory={toggleCategory}
              onToggleMaterial={toggleMaterial}
              onUpdateFilter={updateFilter}
              onClearFilters={clearFilters}
            />
          </aside>

          {/* Основной контент */}
          <main className="flex-1">
            {/* Управление видом и сортировкой */}
            <ProductControls
              totalProducts={filteredProducts.length}
              sort={sort}
              viewMode={viewMode}
              gridColumns={gridColumns}
              onSortChange={updateSort}
              onViewModeChange={setViewMode}
              onGridColumnsChange={setGridColumns}
            />

            {/* Товары */}
            {filteredProducts.length > 0 ? (
              <div className={`${
                viewMode === 'grid' 
                  ? `grid ${getGridClasses()} gap-6` 
                  : 'flex flex-col gap-4'
              } transition-all duration-300`}>
                {filteredProducts.map((product) => (
                  <ProductCardEnhanced
                    key={product.id}
                    product={product}
                    viewMode={viewMode}
                    onAddToCart={handleAddToCart}
                    onToggleWishlist={handleToggleWishlist}
                    isInWishlist={wishlist.includes(product.id)}
                  />
                ))}
              </div>
            ) : (
              /* Пустое состояние */
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                    <ShoppingCart className="w-12 h-12 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Товары не найдены
                  </h3>
                  <p className="text-gray-600 mb-6">
                    По вашему запросу ничего не найдено. Попробуйте изменить фильтры или очистить поиск.
                  </p>
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
                    >
                      Очистить фильтры
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Загрузить еще (для будущей пагинации) */}
            {filteredProducts.length > 0 && filteredProducts.length >= 12 && (
              <div className="text-center mt-12">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                  Загрузить еще товары
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
