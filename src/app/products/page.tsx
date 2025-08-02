'use client';

import { useState, useEffect } from 'react';
import { generateJewelrySVG } from '@/utils/jewelry-svg';

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  images: Array<{
    id: string;
    url: string;
    alt: string;
    isPrimary: boolean;
    order: number;
  }>;
  stockQuantity: number;
  inStock: boolean;
  featured: boolean;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/admin/products');
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      }
    } catch (err) {
      console.error('Ошибка загрузки товаров:', err);
    } finally {
      setLoading(false);
    }
  };

  const getImageUrl = (product: Product) => {
    // Если есть загруженное изображение, используем его
    if (product.images && product.images.length > 0) {
      const primaryImage = product.images.find(img => img.isPrimary) || product.images[0];
      if (primaryImage.url.startsWith('data:image')) {
        return primaryImage.url;
      }
    }
    
    // Генерируем красивое SVG изображение на основе категории
    return generateJewelrySVG(product.category, 400, 400);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Загрузка каталога...</h1>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Каталог 
            <span className="text-yellow-300"> украшений</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Откройте для себя уникальную коллекцию ювелирных изделий ручной работы
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Найдено товаров: {products.length}
          </h2>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Товары не найдены</h3>
            <p className="text-gray-600 mb-6">Добавьте товары через админ панель</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                {/* Stock Badge */}
                <div className="absolute top-4 left-4 z-10">
                  {product.stockQuantity > 0 ? (
                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      В наличии: {product.stockQuantity} шт.
                    </span>
                  ) : (
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      Нет в наличии
                    </span>
                  )}
                </div>

                {/* Featured Badge */}
                {product.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                      ⭐ ХИТ
                    </span>
                  </div>
                )}

                {/* Image */}
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={getImageUrl(product)}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-purple-600 font-medium bg-purple-50 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                    <div className="flex items-center">
                      <span className="text-yellow-400 text-sm">⭐</span>
                      <span className="text-sm text-gray-600 ml-1">4.8</span>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-purple-600">
                      {new Intl.NumberFormat('ru-RU', { 
                        style: 'currency', 
                        currency: 'RUB', 
                        maximumFractionDigits: 0 
                      }).format(product.price)}
                    </span>
                  </div>
                  
                  <button 
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg ${
                      product.stockQuantity > 0
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transform hover:scale-105'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={product.stockQuantity === 0}
                  >
                    {product.stockQuantity > 0 ? 'Добавить в корзину' : 'Нет в наличии'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Back to Home */}
        <div className="text-center mt-16">
          <a 
            href="/"
            className="inline-block border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 font-semibold"
          >
            ← Вернуться на главную
          </a>
        </div>
      </div>
    </div>
  );
}
