'use client';

import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, Eye, Package, Sparkles } from 'lucide-react';
import { Button } from './button';
import { Product, ProductCategory, MaterialType } from '../../types';
import { getReliableImageUrl, handleImageError } from '@/utils/placeholder-images';

interface ProductCardEnhancedProps {
  product: Product;
  viewMode: 'grid' | 'list';
  isInWishlist: boolean;
}

export function ProductCardEnhanced({
  product,
  viewMode,
  isInWishlist
}: ProductCardEnhancedProps) {
  const { id, name, description, price, images, materials, inStock, stockQuantity } = product;
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const primaryImage = images.find((img: any) => img.isPrimary) || images[0];

  const handleAddToCart = () => {
    console.log('Добавить в корзину:', product.name);
    // Здесь будет логика добавления в корзину
  };

  const handleToggleWishlist = () => {
    console.log('Переключить в избранном:', product.name);
    // Здесь будет логика управления избранным
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0
    }).format(price);
  };

  const getCategoryName = (category: string) => {
    const categoryMap: Record<string, string> = {
      RINGS: 'Кольца',
      EARRINGS: 'Серьги',
      NECKLACES: 'Колье',
      BRACELETS: 'Браслеты',
      PENDANTS: 'Подвески',
      CHAINS: 'Цепи',
      SETS: 'Наборы',
      HAIRPINS: 'Заколки'
    };
    return categoryMap[category] || category;
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Изображение */}
          <div className="relative md:w-48 h-48 md:h-auto flex-shrink-0">
            <img
              src={getReliableImageUrl(id, 400, 300)}
              alt={name}
              className="w-full h-full object-cover"
              onLoad={() => setIsImageLoading(false)}
              onError={(e) => handleImageError(e, id, 400, 300)}
            />
            
            {/* Статус наличия */}
            <div className="absolute top-3 left-3">
              {inStock ? (
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                  В наличии
                </span>
              ) : (
                <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                  Нет в наличии
                </span>
              )}
            </div>

            {/* Кнопка избранного */}
            <button
              onClick={handleToggleWishlist}
              className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow-sm hover:bg-white transition-colors"
            >
              <Heart 
                className={`w-4 h-4 ${isInWishlist ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
              />
            </button>
          </div>

          {/* Контент */}
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div>
              {/* Категория */}
              <span className="text-sm text-purple-600 font-medium mb-2 block">
                {getCategoryName(product.category)}
              </span>

              {/* Название */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                {name}
              </h3>

              {/* Описание */}
              <p className="text-gray-600 mb-4 line-clamp-2">
                {description}
              </p>

              {/* Материалы */}
              <div className="flex flex-wrap gap-1 mb-4">
                {product.materials?.slice(0, 2).map((material: any, index: number) => (
                  <span 
                    key={`${material.id}-${index}`}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                  >
                    {material.name}
                  </span>
                ))}
                {(materials?.length || 0) > 2 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    +{(materials?.length || 0) - 2}
                  </span>
                )}
              </div>
            </div>

            {/* Нижняя часть */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-2xl font-bold text-gray-900">
                  {formatPrice(price)}
                </span>
                {stockQuantity && stockQuantity > 0 && (
                  <p className="text-sm text-gray-500 mt-1">
                    Осталось: {stockQuantity} шт.
                  </p>
                )}
              </div>

              <Button
                onClick={handleAddToCart}
                disabled={!inStock}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                В корзину
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid view
  return (
    <div 
      className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Изображение */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={getReliableImageUrl(id, 400, 400)}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onLoad={() => setIsImageLoading(false)}
          onError={(e) => handleImageError(e, id, 400, 400)}
        />
        
        {/* Overlay при наведении */}
        <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 flex items-center justify-center space-x-3">
            <button
              onClick={handleAddToCart}
              disabled={!inStock}
              className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ShoppingCart className="w-5 h-5 text-gray-700" />
            </button>
            <button className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors">
              <Eye className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Статус и избранное */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          {/* Статус наличия */}
          {inStock ? (
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
              В наличии
            </span>
          ) : (
            <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
              Нет в наличии
            </span>
          )}

          {/* Кнопка избранного */}
          <button
            onClick={handleToggleWishlist}
            className="p-2 bg-white/90 rounded-full shadow-sm hover:bg-white transition-colors"
          >
            <Heart 
              className={`w-4 h-4 ${isInWishlist ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
            />
          </button>
        </div>

        {/* Индикатор качества */}
        <div className="absolute bottom-3 left-3">
          <div className="flex items-center space-x-1 px-2 py-1 bg-white/90 rounded-full">
            <Sparkles className="w-3 h-3 text-yellow-500" />
            <span className="text-xs font-medium text-gray-700">Премиум</span>
          </div>
        </div>
      </div>

      {/* Контент */}
      <div className="p-4">
        {/* Категория */}
        <span className="text-sm text-purple-600 font-medium mb-2 block">
          {getCategoryName(product.category)}
        </span>

        {/* Название */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
          {name}
        </h3>

        {/* Описание */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 min-h-[2.5rem]">
          {description}
        </p>

        {/* Материалы */}
        <div className="flex flex-wrap gap-1 mb-4 min-h-[1.5rem]">
          {product.materials?.slice(0, 3).map((material: any, index: number) => (
            <span 
              key={`${material.id}-${index}`}
              className="px-2 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 text-xs rounded-full border border-purple-100"
            >
              {material.name}
            </span>
          ))}
          {(materials?.length || 0) > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
              +{(materials?.length || 0) - 3}
            </span>
          )}
        </div>

        {/* Цена и наличие */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-xl font-bold text-gray-900">
              {formatPrice(price)}
            </span>
            {stockQuantity && stockQuantity > 0 && (
              <p className="text-xs text-gray-500 mt-1">
                Осталось: {stockQuantity} шт.
              </p>
            )}
          </div>
        </div>

        {/* Кнопка добавления в корзину */}
        <Button
          onClick={handleAddToCart}
          disabled={!inStock}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          {inStock ? 'В корзину' : 'Нет в наличии'}
        </Button>
      </div>
    </div>
  );
}
