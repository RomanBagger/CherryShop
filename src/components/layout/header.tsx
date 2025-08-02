'use client';

import React from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, User, Heart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PRODUCT_CATEGORIES } from '@/lib/constants';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useLanguage } from '@/lib/i18n/context';
import { getCategoriesWithTranslations } from '@/lib/category-utils';

interface HeaderProps {
  cartItemsCount?: number;
}

export function Header({ cartItemsCount = 0 }: HeaderProps) {
  const { t } = useLanguage();
  const categories = getCategoriesWithTranslations(t);
  
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Основная часть хедера */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group transition-all duration-300 transform hover:scale-105">
              <span className="text-2xl">🍒</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 transition-all duration-300">
                MumiShop
              </span>
            </Link>
          </div>

          {/* Поиск */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder={t('search.placeholder')}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:border-purple-300 transition-all duration-300"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-purple-400" />
            </div>
          </div>

          {/* Действия пользователя */}
          <div className="flex items-center space-x-4">
            {/* Переключатель языков */}
            <LanguageSwitcher />
            
            {/* Поиск на мобильных */}
            <button className="md:hidden p-2 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 rounded-lg transition-all duration-300">
              <Search className="h-5 w-5 text-gray-600 hover:text-purple-600" />
            </button>

            {/* Избранное */}
            <Link href="/wishlist" className="p-2 hover:bg-gradient-to-r hover:from-pink-50 hover:to-red-50 rounded-lg relative group transition-all duration-300">
              <Heart className="h-5 w-5 text-pink-500 group-hover:text-pink-600 group-hover:scale-110 transition-all duration-300" />
            </Link>

            {/* Корзина */}
            <Link href="/cart" className="p-2 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 rounded-lg relative group transition-all duration-300">
              <ShoppingCart className="h-5 w-5 text-purple-500 group-hover:text-purple-600 group-hover:scale-110 transition-all duration-300" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-lg animate-pulse">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* Профиль */}
            <Link href="/profile" className="p-2 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 rounded-lg group transition-all duration-300">
              <User className="h-5 w-5 text-orange-500 group-hover:text-orange-600 group-hover:scale-110 transition-all duration-300" />
            </Link>

            {/* Меню на мобильных */}
            <button className="md:hidden p-2 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 rounded-lg transition-all duration-300">
              <Menu className="h-5 w-5 text-gray-600 hover:text-gray-800" />
            </button>
          </div>
        </div>
      </div>

      {/* Навигация по категориям */}
      <nav className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto space-x-8 py-3">
            <Link 
              href="/products" 
              className="whitespace-nowrap text-sm font-medium text-gray-700 hover:text-gray-900 pb-2 border-b-2 border-transparent hover:border-gray-900 transition-colors"
            >
              {t('navigation.allProducts')}
            </Link>
            {categories.map((category) => (
              <Link
                key={category.key}
                href={`/products?category=${category.slug}`}
                className="whitespace-nowrap text-sm font-medium text-gray-700 hover:text-gray-900 pb-2 border-b-2 border-transparent hover:border-gray-900 transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
