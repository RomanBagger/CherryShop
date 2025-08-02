import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ui/product-card';
import { Product, ProductCategory, MaterialType } from '@/types';
import { ArrowRight, Star, Shield, Truck, RefreshCw } from 'lucide-react';

// Моковые данные для демонстрации
const featuredProducts: Product[] = [
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
  }
];

export default function Home() {
  return (
    <div>
      {/* Hero секция */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Эксклюзивные украшения<br />
              <span className="text-yellow-400">ручной работы</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Каждое изделие создается с любовью и вниманием к деталям
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/products">
                  Смотреть каталог
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-black border-white hover:bg-white" asChild>
                <Link href="/about">О нас</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mb-4">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold mb-2">Ручная работа</h3>
              <p className="text-gray-600 text-sm">Каждое украшение создается вручную мастерами</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Гарантия качества</h3>
              <p className="text-gray-600 text-sm">Используем только проверенные материалы</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                <Truck className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-gray-600 text-sm">Доставка по России от 1 дня</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                <RefreshCw className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Обмен и возврат</h3>
              <p className="text-gray-600 text-sm">30 дней на обмен или возврат</p>
            </div>
          </div>
        </div>
      </section>

      {/* Популярные товары */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Популярные украшения</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Самые любимые покупателями изделия из нашей коллекции
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product}
                onAddToCart={(product) => console.log('Добавить в корзину:', product.name)}
              />
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/products">
                Смотреть все товары
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Создадим украшение специально для вас</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Хотите уникальное украшение? Мы создадим его по вашему эскизу или поможем разработать дизайн
          </p>
          <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
            Заказать индивидуальное изделие
          </Button>
        </div>
      </section>
    </div>
  );
}
