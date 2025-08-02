import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onToggleWishlist?: (product: Product) => void;
  isInWishlist?: boolean;
}

export function ProductCard({ 
  product, 
  onAddToCart, 
  onToggleWishlist, 
  isInWishlist = false 
}: ProductCardProps) {
  // Безопасная проверка изображений
  const images = product?.images || [];
  const primaryImage = images.find(img => img.isPrimary) || images[0];

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

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
      {/* Изображение товара */}
      <div className="aspect-square relative overflow-hidden">
        <Link href={`/products/${product.id}`}>
          {primaryImage ? (
            <div className="relative w-full h-full">
              <Image
                src={primaryImage.url}
                alt={primaryImage.alt}
                fill
                className="object-cover group-hover:scale-110 transition-all duration-700"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <span className="text-gray-400">Нет изображения</span>
            </div>
          )}
        </Link>
        
        {/* Featured badge */}
        {product.featured && (
          <div className="absolute top-3 left-3">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center">
              ⭐ ХИТ
            </span>
          </div>
        )}
        
        {/* Статус наличия */}
        {!product.inStock && (
          <div className="absolute top-3 left-3">
            <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
              Нет в наличии
            </span>
          </div>
        )}
        
        {/* Кнопка избранного */}
        <button
          onClick={() => onToggleWishlist?.(product)}
          className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-110"
        >
          <Heart
            className={`w-5 h-5 transition-colors duration-300 ${
              isInWishlist ? 'fill-red-500 text-red-500' : 'text-gray-600 hover:text-red-500'
            }`}
          />
        </button>

        {/* Quick view button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link 
            href={`/products/${product.id}`}
            className="bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-white"
          >
            Быстрый просмотр
          </Link>
        </div>
      </div>
              isInWishlist ? 'fill-red-500 text-red-500' : 'text-gray-600'
            }`}
          />
        </button>
      </div>

      {/* Информация о товаре */}
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs text-gray-500 uppercase tracking-wide">
            {getCategoryName(product.category)}
          </span>
        </div>
        
        <Link href={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-amber-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Материалы */}
        {product.materials && product.materials.length > 0 && (
          <div className="mb-3">
            <div className="flex flex-wrap gap-1">
              {product.materials.slice(0, 2).map((material) => (
                <span
                  key={material.id}
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                >
                  {material.name}
                </span>
              ))}
              {product.materials.length > 2 && (
                <span className="text-xs text-gray-500">
                  +{product.materials.length - 2}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Цена и кнопки */}
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900">
            {formatPrice(product.price)}
          </div>
          
          <Button
            size="sm"
            onClick={() => onAddToCart?.(product)}
            disabled={!product.inStock}
            className="flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">
              {product.inStock ? 'В корзину' : 'Недоступно'}
            </span>
          </Button>
        </div>

        {/* Дополнительная информация */}
        <div className="mt-3 text-xs text-gray-500">
          {product.inStock && product.stockQuantity > 0 && (
            <span>
              В наличии: {product.stockQuantity} шт.
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
