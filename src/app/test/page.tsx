'use client';

import { useState, useEffect } from 'react';

interface Product {
  id: string;
  name: string;
  stockQuantity: number;
  inStock: boolean;
  price: number;
}

export default function TestPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/admin/test');
      const data = await response.json();
      setProducts(data.products || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const performAction = async (action: string, productId?: string) => {
    setLoading(true);
    setMessage('');
    
    try {
      const body: any = { action };
      if (productId) body.productId = productId;
      
      const response = await fetch('/api/admin/test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      
      const data = await response.json();
      setMessage(data.message || 'Действие выполнено');
      
      // Обновляем список товаров
      await fetchProducts();
      
      // Показываем сообщение на 3 секунды
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Ошибка при выполнении действия');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            🧪 Тестирование функциональности админ панели
          </h1>
          
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h2 className="text-lg font-semibold text-blue-900 mb-2">
              Инструкция для тестирования:
            </h2>
            <ol className="list-decimal list-inside text-blue-800 space-y-1">
              <li>Создайте тестовый товар (будет создан с остатком 1 шт)</li>
              <li>Откройте <a href="/products" target="_blank" className="text-blue-600 underline">каталог товаров</a> в новой вкладке</li>
              <li>Сделайте товар "заканчивающимся" (3 шт) и проверьте отображение</li>
              <li>Сделайте товар "закончившимся" (0 шт) и проверьте отображение</li>
              <li>Откройте <a href="/admin" target="_blank" className="text-blue-600 underline">админ панель</a> и проверьте, что можете редактировать товары</li>
              <li>Восстановите товар и проверьте изменения</li>
            </ol>
          </div>

          {message && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800">{message}</p>
            </div>
          )}

          <div className="mb-6">
            <button
              onClick={() => performAction('createTestProduct')}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold disabled:opacity-50"
            >
              {loading ? 'Создание...' : '➕ Создать тестовый товар'}
            </button>
          </div>

          <div className="grid gap-4">
            {products.map((product) => (
              <div key={product.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{product.name}</h3>
                    <p className="text-gray-600">
                      Остаток: <span className={`font-medium ${
                        !product.inStock ? 'text-red-600' : 
                        product.stockQuantity <= 5 ? 'text-orange-600' : 'text-green-600'
                      }`}>
                        {product.stockQuantity} шт
                      </span>
                      {!product.inStock && ' (Нет в наличии)'}
                    </p>
                    <p className="text-gray-600">
                      Цена: {(product.price / 100).toLocaleString('ru-RU')} ₽
                    </p>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => performAction('makeLowStock', product.id)}
                      disabled={loading}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-sm disabled:opacity-50"
                    >
                      ⚠️ Сделать заканчивающимся
                    </button>
                    <button
                      onClick={() => performAction('markOutOfStock', product.id)}
                      disabled={loading}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm disabled:opacity-50"
                    >
                      ❌ Закончился
                    </button>
                    <button
                      onClick={() => performAction('restoreStock', product.id)}
                      disabled={loading}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm disabled:opacity-50"
                    >
                      ✅ Восстановить
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Ссылки для проверки:</h3>
            <div className="space-y-2">
              <a 
                href="/products" 
                target="_blank" 
                className="block text-blue-600 hover:text-blue-800 underline"
              >
                🛍️ Каталог товаров (здесь видно статус товаров)
              </a>
              <a 
                href="/admin" 
                target="_blank" 
                className="block text-blue-600 hover:text-blue-800 underline"
              >
                ⚙️ Админ панель (здесь можно управлять товарами)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
