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
    createdAt: new Date(),
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
    createdAt: new Date(),
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
    createdAt: new Date(),
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
    createdAt: new Date(),
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
    createdAt: new Date(),
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
    createdAt: new Date(),
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
        url: '/placeholder-necklace.jpg',
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
    createdAt: new Date(),
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
        url: '/placeholder-ring.jpg',
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
    createdAt: new Date(),
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
        url: '/placeholder-earrings-2.jpg',
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
    createdAt: new Date(),
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
        url: '/placeholder-bracelet-2.jpg',
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
    createdAt: new Date(),
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
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Заголовок страницы */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Каталог украшений</h1>
        <p className="text-gray-600">
          Откройте для себя нашу коллекцию эксклюзивных ювелирных изделий ручной работы
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Фильтры */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Filter className="h-5 w-5 mr-2" />
              <h2 className="font-semibold">Фильтры</h2>
            </div>

            {/* Категории */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Категории</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Серьги</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Браслеты</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Колье и ожерелья</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Кольца</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Комплекты</span>
                </label>
              </div>
            </div>

            {/* Материалы */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Материалы</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Серебро</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Золото</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Драгоценные камни</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Жемчуг</span>
                </label>
              </div>
            </div>

            {/* Цена */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Цена</h3>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <input 
                    type="number" 
                    placeholder="От" 
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                  />
                  <input 
                    type="number" 
                    placeholder="До" 
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                  />
                </div>
                <Button size="sm" className="w-full">
                  Применить
                </Button>
              </div>
            </div>

            {/* В наличии */}
            <div>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Только в наличии</span>
              </label>
            </div>
          </div>
        </aside>

        {/* Основной контент */}
        <main className="flex-1">
          {/* Сортировка и результаты */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <p className="text-gray-600">
              Найдено {products.length} товаров
            </p>
            
            <div className="flex items-center gap-2">
              <SortAsc className="h-4 w-4" />
              <select className="border border-gray-300 rounded px-3 py-2 text-sm">
                <option>По популярности</option>
                <option>По цене: по возрастанию</option>
                <option>По цене: по убыванию</option>
                <option>По названию</option>
                <option>По дате добавления</option>
              </select>
            </div>
          </div>

          {/* Сетка товаров */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product}
                onAddToCart={(product) => console.log('Добавить в корзину:', product.name)}
                onToggleWishlist={(product) => console.log('Добавить в избранное:', product.name)}
              />
            ))}
          </div>

          {/* Пагинация */}
          <div className="flex justify-center mt-12">
            <div className="flex gap-2">
              <Button variant="outline" disabled>
                Предыдущая
              </Button>
              <Button variant="default">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">
                Следующая
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
