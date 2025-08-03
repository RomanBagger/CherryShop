'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, Eye } from 'lucide-react';
import { Product, ProductImage, Material } from '../../lib/api';
import { getJewelryImage } from '@/utils/jewelry-svg';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className = '' }: ProductCardProps) {
  const primaryImage = product.images?.find((img: ProductImage) => img.isPrimary) || product.images?.[0];
  const priceInRubles = product.price / 100;

  // Функция для получения изображения с fallback
  const getProductImage = () => {
    if (primaryImage?.url) {
      return primaryImage.url;
    }
    return getJewelryImage(product.category || 'earrings');
  };

  return (
    <div className={`group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-md rounded-3xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 ${
      !product.inStock ? 'opacity-75 saturate-50' : ''
    } ${className}`}>
      {/* Градиентный overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Out of Stock Overlay */}
      {!product.inStock && (
        <div className="absolute inset-0 bg-black/30 z-10 flex items-center justify-center">
          <div className="transform -rotate-12">
            <span className="text-4xl font-bold text-red-400 bg-black/50 px-6 py-3 rounded-lg border-2 border-red-400">
              РАСПРОДАНО
            </span>
          </div>
        </div>
      )}
      
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
        <img
          src={getProductImage()}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            // Fallback к локальному SVG если изображение не загружается
            const target = e.target as HTMLImageElement;
            target.src = getJewelryImage(product.category || 'earrings');
          }}
        />
        
        {/* Hover Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200 shadow-lg">
            <Heart className="w-5 h-5 text-slate-700 hover:text-red-500 transition-colors" />
          </button>
          <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200 shadow-lg">
            <Eye className="w-5 h-5 text-slate-700 hover:text-purple-600 transition-colors" />
          </button>
        </div>

        {/* Featured Badge */}
        {product.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-full shadow-lg">
              ✨ Хит
            </span>
          </div>
        )}

        {/* Stock Status Badge */}
        {!product.inStock && (
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full shadow-lg">
              Нет в наличии
            </span>
          </div>
        )}

        {/* Low Stock Warning */}
        {product.inStock && product.stockQuantity <= 5 && (
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 bg-orange-600 text-white text-sm font-medium rounded-full shadow-lg">
              Осталось мало: {product.stockQuantity}
            </span>
          </div>
        )}

        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
          {product.name}
        </h3>
        
        <p className="text-slate-400 text-sm mb-4 line-clamp-2 group-hover:text-slate-300 transition-colors duration-300">
          {product.description}
        </p>

        {/* Materials */}
        {product.materials && product.materials.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {product.materials.slice(0, 2).map((material: Material) => (
              <span
                key={material.id}
                className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600/50"
              >
                {material.name}
              </span>
            ))}
            {product.materials.length > 2 && (
              <span className="px-2 py-1 bg-slate-700/50 text-slate-400 text-xs rounded-full border border-slate-600/50">
                +{product.materials.length - 2}
              </span>
            )}
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
              {priceInRubles.toLocaleString('ru-RU')} ₽
            </span>
            <div className="flex items-center gap-2 mt-1">
              {!product.inStock ? (
                <span className="text-red-400 text-sm font-medium bg-red-400/10 px-2 py-1 rounded-full border border-red-400/20">
                  ❌ Нет в наличии
                </span>
              ) : product.stockQuantity <= 5 ? (
                <span className="text-orange-400 text-sm font-medium bg-orange-400/10 px-2 py-1 rounded-full border border-orange-400/20">
                  ⚠️ Осталось: {product.stockQuantity}
                </span>
              ) : (
                <span className="text-green-400 text-sm font-medium bg-green-400/10 px-2 py-1 rounded-full border border-green-400/20">
                  ✅ В наличии: {product.stockQuantity}
                </span>
              )}
            </div>
          </div>
          
          <Link
            href={`/products/${product.id}`}
            className={`px-6 py-3 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 ${
              !product.inStock 
                ? 'bg-gray-600 hover:bg-gray-700 text-gray-300 cursor-not-allowed' 
                : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:shadow-lg hover:shadow-purple-500/30'
            }`}
          >
            {!product.inStock ? 'Закончился' : 'Подробнее'}
          </Link>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}