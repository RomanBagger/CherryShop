'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { generateJewelrySVG } from '@/utils/jewelry-svg';
import { useLanguage } from '@/lib/i18n/context';
import { formatCurrency, translateProductName, translateProductDescription, getTranslation } from '@/lib/i18n/translations';

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
  const { t, language } = useLanguage();
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    // Фильтруем товары по категории
    if (category) {
      const filtered = products.filter(product => 
        product.category.toUpperCase() === category.toUpperCase()
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [products, category, language]); // Добавляем language как зависимость

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      if (response.ok) {
        const result = await response.json();
        setProducts(result.data || result.products || result); // Учитываем разные структуры ответа
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('products.loading')}</h1>
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
            {t('products.catalog.title')}
            <span className="text-yellow-300"> {t('products.catalog.subtitle')}</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {t('products.catalog.description')}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Хлебные крошки */}
        {category && (
          <nav className="mb-6">
            <div className="flex items-center space-x-2 text-sm">
              <a href="/" className="text-purple-600 hover:text-purple-800">
                {getTranslation('navigation.home', language)}
              </a>
              <span className="text-gray-400">/</span>
              <a href="/products" className="text-purple-600 hover:text-purple-800">
                {getTranslation('navigation.catalog', language)}
              </a>
              <span className="text-gray-400">/</span>
              <span className="text-gray-800 font-medium">
                {getTranslation(`categories.${category}`, language)}
              </span>
            </div>
          </nav>
        )}
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {category 
              ? `${getTranslation(`categories.${category}`, language)} - ${filteredProducts.length} ${getTranslation('products.productsFound', language).toLowerCase()}`
              : `${getTranslation('products.productsFound', language)}: ${filteredProducts.length}`
            }
          </h2>
          {category && (
            <p className="text-gray-600">
              {t('navigation.allProducts')} → {t(`categories.${category}`)}
            </p>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('products.noProducts.title')}</h3>
            <p className="text-gray-600 mb-6">{t('products.noProducts.description')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                {/* Stock Badge */}
                <div className="absolute top-4 left-4 z-10">
                  {product.stockQuantity > 0 ? (
                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {t('products.card.inStock')}: {product.stockQuantity} {t('products.card.pieces')}
                    </span>
                  ) : (
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {t('products.card.outOfStock')}
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
                    alt={translateProductName(product.name, language)}
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
                    {translateProductName(product.name, language)}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {translateProductDescription(product.description, language)}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-purple-600">
                      {formatCurrency(product.price, language)}
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
                    {product.stockQuantity > 0 ? t('products.card.addToCart') : t('products.card.outOfStock')}
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
