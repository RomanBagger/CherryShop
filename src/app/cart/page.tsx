import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CartItem } from '@/types';
import { formatPrice } from '@/lib/constants';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { getJewelryImage } from '@/utils/jewelry-svg';

// Моковые данные для корзины
const cartItems: CartItem[] = [
  {
    id: '1',
    quantity: 1,
    product: {
      id: '1',
      name: 'Серьги "Лунные капли"',
      description: 'Элегантные серьги из серебра 925 пробы с натуральным жемчугом',
      price: 4500,
      category: 'earrings' as any,
      images: [
        {
          id: '1',
          url: getJewelryImage('серьги'),
          alt: 'Серьги Лунные капли',
          isPrimary: true,
          order: 1
        }
      ],
      materials: [],
      inStock: true,
      stockQuantity: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  },
  {
    id: '2',
    quantity: 2,
    product: {
      id: '2',
      name: 'Браслет "Весенний сад"',
      description: 'Изящный браслет с фианитами, имитирующими весенние цветы',
      price: 6800,
      category: 'bracelets' as any,
      images: [
        {
          id: '2',
          url: getJewelryImage('браслет'),
          alt: 'Браслет Весенний сад',
          isPrimary: true,
          order: 1
        }
      ],
      materials: [],
      inStock: true,
      stockQuantity: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  }
];

export default function CartPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const deliveryFee = subtotal >= 5000 ? 0 : 500;
  const total = subtotal + deliveryFee;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Корзина покупок</h1>

      {cartItems.length === 0 ? (
        // Пустая корзина
        <div className="text-center py-16">
          <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Ваша корзина пуста</h2>
          <p className="text-gray-600 mb-6">Добавьте товары из нашего каталога</p>
          <Button size="lg" asChild>
            <Link href="/products">
              Перейти к покупкам
            </Link>
          </Button>
        </div>
      ) : (
        // Корзина с товарами
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Товары в корзине */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              {cartItems.map((item, index) => (
                <div key={item.id} className={`p-6 ${index !== cartItems.length - 1 ? 'border-b border-gray-200' : ''}`}>
                  <div className="flex items-start gap-4">
                    {/* Изображение товара */}
                    <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      {item.product.images[0] ? (
                        <Image
                          src={item.product.images[0].url}
                          alt={item.product.images[0].alt}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-xs text-gray-400">Нет фото</span>
                        </div>
                      )}
                    </div>

                    {/* Информация о товаре */}
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-1">
                        <Link href={`/products/${item.product.id}`} className="hover:text-gray-700">
                          {item.product.name}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">{item.product.description}</p>
                      <p className="font-semibold text-gray-900">{formatPrice(item.product.price)}</p>
                    </div>

                    {/* Количество и управление */}
                    <div className="flex flex-col items-end gap-2">
                      <button 
                        className="text-gray-400 hover:text-red-600 transition-colors"
                        aria-label="Удалить товар"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>

                      <div className="flex items-center border border-gray-300 rounded">
                        <button 
                          className="p-2 hover:bg-gray-100 transition-colors"
                          aria-label="Уменьшить количество"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-3 py-2 min-w-[3rem] text-center">{item.quantity}</span>
                        <button 
                          className="p-2 hover:bg-gray-100 transition-colors"
                          aria-label="Увеличить количество"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Продолжить покупки */}
            <div className="mt-6">
              <Button variant="outline" asChild>
                <Link href="/products">
                  ← Продолжить покупки
                </Link>
              </Button>
            </div>
          </div>

          {/* Итого и оформление заказа */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-6">
              <h2 className="text-lg font-semibold mb-4">Итого</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Товары ({cartItems.length})</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Доставка</span>
                  <span className={deliveryFee === 0 ? 'text-green-600' : ''}>
                    {deliveryFee === 0 ? 'Бесплатно' : formatPrice(deliveryFee)}
                  </span>
                </div>
                
                {deliveryFee > 0 && (
                  <p className="text-sm text-gray-600">
                    Бесплатная доставка от {formatPrice(5000)}
                  </p>
                )}
                
                <hr className="border-gray-200" />
                
                <div className="flex justify-between font-semibold text-lg">
                  <span>К оплате</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              <Button className="w-full mt-6" size="lg">
                Оформить заказ
              </Button>

              {/* Способы оплаты */}
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-600 mb-2">Принимаем к оплате:</p>
                <div className="flex justify-center gap-2">
                  <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center">
                    VISA
                  </div>
                  <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center">
                    MC
                  </div>
                  <div className="w-8 h-5 bg-yellow-500 rounded text-white text-xs flex items-center justify-center">
                    МИР
                  </div>
                </div>
              </div>

              {/* Гарантии */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="text-xs text-gray-600 space-y-1">
                  <p>✓ Безопасная оплата</p>
                  <p>✓ Возврат в течение 30 дней</p>
                  <p>✓ Гарантия качества</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
