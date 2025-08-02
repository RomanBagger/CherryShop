import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook, Send } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О компании */}
          <div>
            <h3 className="text-lg font-semibold mb-4">💎 MumiShop</h3>
            <p className="text-gray-300 text-sm mb-4">
              Эксклюзивные ювелирные изделия ручной работы. Каждое украшение создается с любовью и вниманием к деталям.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Каталог */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Каталог</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=earrings" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Серьги
                </Link>
              </li>
              <li>
                <Link href="/products?category=bracelets" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Браслеты
                </Link>
              </li>
              <li>
                <Link href="/products?category=necklaces" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Колье и ожерелья
                </Link>
              </li>
              <li>
                <Link href="/products?category=rings" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Кольца
                </Link>
              </li>
              <li>
                <Link href="/products?category=sets" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Комплекты
                </Link>
              </li>
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Возврат и обмен
                </Link>
              </li>
              <li>
                <Link href="/care" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Уход за украшениями
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Определение размера
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <a href="tel:+79001234567" className="text-gray-300 hover:text-white transition-colors text-sm">
                  +7 (900) 123-45-67
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <a href="mailto:info@mumishop.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                  info@mumishop.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Москва, Арбат, 25<br />
                  Ежедневно 10:00-21:00
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя часть футера */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 MumiShop. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Политика конфиденциальности
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
