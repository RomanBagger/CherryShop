'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, Eye, ShoppingCart, Star, Sparkles } from 'lucide-react';
import { Product, ProductImage } from '../../lib/api';
import { getJewelryImage } from '@/utils/jewelry-svg';

interface ProductCardPremiumProps {
  product: Product;
  className?: string;
}

export function ProductCardPremium({ product, className = '' }: ProductCardPremiumProps) {
  const primaryImage = product.images?.find((img: ProductImage) => img.isPrimary) || product.images?.[0];
  const priceInRubles = product.price / 100;
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount ? Math.round((1 - product.price / product.originalPrice!) * 100) : 0;

  // Функция для получения изображения с fallback
  const getProductImage = () => {
    if (primaryImage?.url) {
      return primaryImage.url;
    }
    return getJewelryImage(product.category || 'earrings');
  };

  return (
    <div className={`group relative bg-white rounded-2xl overflow-hidden border border-amber-200/50 hover:border-amber-300 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-1 ${className}`}>
      {/* Premium glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-rose-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {product.featured && (
          <div className="flex items-center bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            <Star className="w-3 h-3 mr-1" />
            HIT
          </div>
        )}
        {hasDiscount && (
          <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            -{discountPercent}%
          </div>
        )}
        {!product.inStock && (
          <div className="bg-gray-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
            Wyprzedane
          </div>
        )}
      </div>

      {/* Image Container */}
      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-amber-25 to-rose-25">
        <img
          src={getProductImage()}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = getJewelryImage(product.category || 'earrings');
          }}
        />
        
        {/* Sparkle effects */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-sparkle"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-amber-400 rounded-full animate-sparkle delay-300"></div>
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-rose-400 rounded-full animate-sparkle delay-700"></div>
        </div>
        
        {/* Hover Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <button className="p-2.5 bg-white/95 backdrop-blur-sm rounded-full hover:bg-amber-50 transition-all duration-200 shadow-lg hover:shadow-amber-300/30 group/btn">
            <Heart className="w-4 h-4 text-gray-600 group-hover/btn:text-rose-500 transition-colors" />
          </button>
          <button className="p-2.5 bg-white/95 backdrop-blur-sm rounded-full hover:bg-amber-50 transition-all duration-200 shadow-lg hover:shadow-amber-300/30 group/btn">
            <Eye className="w-4 h-4 text-gray-600 group-hover/btn:text-amber-600 transition-colors" />
          </button>
        </div>

        {/* Quick add to cart on image hover */}
        {product.inStock && (
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-amber-500/30 flex items-center justify-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              Dodaj do koszyka
            </button>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-5 relative z-10">
        {/* Category */}
        <div className="text-xs text-amber-600 font-medium uppercase tracking-wider mb-2">
          {product.category}
        </div>
        
        {/* Product Name */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-amber-700 transition-colors duration-200">
          {product.name}
        </h3>
        
        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-bold text-gray-900">
            {priceInRubles.toFixed(2)} zł
          </span>
          {hasDiscount && (
            <span className="text-sm text-gray-500 line-through">
              {(product.originalPrice! / 100).toFixed(2)} zł
            </span>
          )}
        </div>
        
        {/* Stock Status */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {product.inStock ? (
              <>
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-emerald-600 font-medium">
                  W magazynie: {product.stockQuantity} szt.
                </span>
              </>
            ) : (
              <>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="text-sm text-gray-500 font-medium">
                  Brak w magazynie
                </span>
              </>
            )}
          </div>
          
          {/* Quality indicator */}
          <div className="flex items-center gap-1">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-xs text-amber-600 font-medium">Premium</span>
          </div>
        </div>
        
        {/* Hover effect border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-amber-300 group-hover:to-rose-300 transition-all duration-500 pointer-events-none"></div>
      </div>
    </div>
  );
}
