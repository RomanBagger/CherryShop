'use client';

import { useState, useEffect } from 'react';
import { 
  Package, ShoppingCart, Users, Settings, BarChart3, Plus, Edit, Trash2, 
  Upload, Save, X, Search, Filter, Eye, EyeOff, Star, TrendingUp,
  AlertCircle, CheckCircle, Clock, DollarSign
} from 'lucide-react';
import { getJewelryImage } from '@/utils/jewelry-svg';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  stock: number;
  image?: string;
  description: string;
  inStock?: boolean;
  stockQuantity?: number;
  featured?: boolean;
  isActive?: boolean;
  images?: Array<{
    id: string;
    url: string;
    alt: string;
    isPrimary: boolean;
    order: number;
  }>;
}

interface ProductFormData {
  name: string;
  price: string;
  originalPrice: string;
  category: string;
  stock: string;
  description: string;
  image: string;
  featured: boolean;
}

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Панель управления', icon: BarChart3 },
    { id: 'products', label: 'Товары', icon: Package },
    { id: 'orders', label: 'Заказы', icon: ShoppingCart },
    { id: 'customers', label: 'Клиенты', icon: Users },
    { id: 'settings', label: 'Настройки', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">💎</span>
                <h1 className="text-2xl font-bold text-gray-900">MumiShop</h1>
                <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Админ</span>
              </div>
            </div>
              <p className="text-gray-600">Управление ювелирным магазином</p>
            </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">
                Последний вход: Сегодня, 14:30
              </div>
              <img 
                src="data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23667eea'/%3E%3Ctext x='20' y='26' font-family='Arial' font-size='16' text-anchor='middle' fill='white'%3EА%3C/text%3E%3C/svg%3E"
                alt="Admin"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm h-screen">
          <nav className="mt-6">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-50 transition-colors ${
                    activeTab === item.id 
                      ? 'border-r-4 border-purple-500 bg-purple-50 text-purple-700' 
                      : 'text-gray-700'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'products' && <ProductsTab />}
          {activeTab === 'orders' && <OrdersTab />}
          {activeTab === 'customers' && <CustomersTab />}
          {activeTab === 'analytics' && <AnalyticsTab />}
          {activeTab === 'settings' && <SettingsTab />}
        </main>
      </div>
    </div>
  );
}

// Компонент управления товарами
function ProductsTab() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Загружаем товары при монтировании компонента
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/products');
      if (response.ok) {
        const data = await response.json();
        console.log('Raw API data:', data); // Отладка
        
        // Маппинг данных из БД на интерфейс
        const mappedProducts = data.map((product: any) => ({
          ...product,
          stock: product.stockQuantity || 0,
          category: mapCategoryToRussian(product.category),
          image: product.images?.[0]?.url || getJewelryImage(product.category)
        }));
        
        console.log('Mapped products:', mappedProducts); // Отладка
        setProducts(mappedProducts);
      } else {
        console.error('Ошибка загрузки товаров:', response.statusText);
      }
    } catch (error) {
      console.error('Ошибка загрузки товаров:', error);
    } finally {
      setLoading(false);
    }
  };

  // Маппинг категорий с английского на русский
  const mapCategoryToRussian = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      'EARRINGS': 'Серьги',
      'BRACELETS': 'Браслеты',
      'NECKLACES': 'Ожерелья',
      'RINGS': 'Кольца',
      'SETS': 'Наборы',
      'PENDANTS': 'Кулоны'
    };
    return categoryMap[category] || category;
  };

  // Загружаем товары при монтировании
  useEffect(() => {
    fetchProducts();
  }, []);

  // Сохранение товара (создание или обновление)
  const handleSaveProduct = async (productData: Product) => {
    try {
      const isEditing = editingProduct !== null;
      const url = '/api/admin/products';
      const method = isEditing ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        const savedProduct = await response.json();
        
        if (isEditing) {
          setProducts(products.map(p => 
            p.id === editingProduct.id ? savedProduct : p
          ));
        } else {
          setProducts([savedProduct, ...products]);
        }
        
        setShowAddModal(false);
        setEditingProduct(null);
        
        // Показываем уведомление об успехе
        alert(isEditing ? 'Товар успешно обновлен!' : 'Товар успешно добавлен!');
      } else {
        const error = await response.json();
        alert(`Ошибка: ${error.error || 'Не удалось сохранить товар'}`);
      }
    } catch (error) {
      console.error('Ошибка при сохранении товара:', error);
      alert('Ошибка при сохранении товара');
    }
  };

  // Удаление товара
  const handleDeleteProduct = async (productId: string) => {
    if (!confirm('Вы уверены, что хотите удалить этот товар?')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/products?id=${productId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setProducts(products.filter(p => p.id !== productId));
        alert('Товар успешно удален!');
      } else {
        const error = await response.json();
        alert(`Ошибка: ${error.error || 'Не удалось удалить товар'}`);
      }
    } catch (error) {
      console.error('Ошибка при удалении товара:', error);
      alert('Ошибка при удалении товара');
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Управление товарами</h2>
          <p className="text-gray-600">Добавляйте, редактируйте и управляйте товарами</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center space-x-2 shadow-lg"
        >
          <Plus className="w-5 h-5" />
          <span>Добавить товар</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Package className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Всего товаров</p>
              <p className="text-2xl font-bold text-gray-900">{loading ? '...' : products.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <BarChart3 className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">В наличии</p>
              <p className="text-2xl font-bold text-gray-900">
                {loading ? '...' : products.reduce((sum, p) => sum + p.stock, 0)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Package className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Средняя цена</p>
              <p className="text-2xl font-bold text-gray-900">
                {loading || products.length === 0 ? '...' : new Intl.NumberFormat('ru-RU', { 
                  style: 'currency', 
                  currency: 'RUB', 
                  maximumFractionDigits: 0 
                }).format(products.reduce((sum, p) => sum + p.price, 0) / products.length)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg">
              <ShoppingCart className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Общая стоимость</p>
              <p className="text-2xl font-bold text-gray-900">
                {loading ? '...' : new Intl.NumberFormat('ru-RU', { 
                  style: 'currency', 
                  currency: 'RUB', 
                  maximumFractionDigits: 0 
                }).format(products.reduce((sum, p) => sum + (p.price * p.stock), 0))}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-900">Список товаров</h3>
        </div>
        
        {loading ? (
          <div className="p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">Загрузка товаров...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-2xl shadow-lg">
              💎
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Товаров пока нет</h3>
            <p className="text-gray-600 mb-4">Добавьте первый товар в ваш магазин</p>
            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
            >
              <Plus className="w-4 h-4 mr-2" />
              Добавить товар
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Товар
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Категория
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Цена
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Количество
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Статус
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Действия
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          {product.image ? (
                            <img
                              className="h-10 w-10 rounded-full object-cover"
                              src={product.image}
                              alt={product.name}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = getJewelryImage(product.category);
                              }}
                            />
                          ) : (
                            <img
                              className="h-10 w-10 rounded-full object-cover"
                              src={getJewelryImage(product.category)}
                              alt={product.name}
                            />
                          )}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{product.name}</div>
                          <div className="text-sm text-gray-500">{product.description.substring(0, 50)}...</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(product.price)}
                      </div>
                      {product.originalPrice && product.originalPrice > product.price && (
                        <div className="text-sm text-gray-500 line-through">
                          {new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(product.originalPrice)}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {product.stock} шт.
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        product.stock > 0 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {product.stock > 0 ? 'В наличии' : 'Нет в наличии'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => {
                          setEditingProduct(product);
                          setShowAddModal(true);
                        }}
                        className="text-indigo-600 hover:text-indigo-900 mr-3"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add/Edit Product Modal */}
      {(showAddModal || editingProduct) && (
        <ProductModal 
          product={editingProduct}
          onClose={() => {
            setShowAddModal(false);
            setEditingProduct(null);
          }}
          onSave={async (productData: Product) => {
            try {
              if (editingProduct) {
                // Обновление существующего товара
                await handleSaveProduct(productData);
              } else {
                // Создание нового товара
                await handleSaveProduct(productData);
              }
              setShowAddModal(false);
              setEditingProduct(null);
              // Перезагружаем список товаров
              fetchProducts();
            } catch (error) {
              console.error('Ошибка сохранения товара:', error);
              alert('Ошибка при сохранении товара. Попробуйте еще раз.');
            }
          }}
        />
      )}
    </div>
  );
}

// Остальные компоненты табов (заглушки)
function OrdersTab() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Заказы</h2>
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <p className="text-gray-600">Здесь будет список заказов и их статусы</p>
      </div>
    </div>
  );
}

function CustomersTab() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Клиенты</h2>
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <p className="text-gray-600">Здесь будет база клиентов</p>
      </div>
    </div>
  );
}

function AnalyticsTab() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Аналитика</h2>
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <p className="text-gray-600">Здесь будут графики продаж и аналитика</p>
      </div>
    </div>
  );
}

function SettingsTab() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Настройки</h2>
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <p className="text-gray-600">Здесь будут настройки магазина</p>
      </div>
    </div>
  );
}

// Модальное окно для добавления/редактирования товара
function ProductModal({ 
  product, 
  onClose, 
  onSave 
}: {
  product: Product | null;
  onClose: () => void;
  onSave: (product: Product) => void;
}) {
  const [formData, setFormData] = useState({
    name: product?.name || '',
    price: product?.price || '',
    originalPrice: product?.originalPrice || '',
    category: product?.category || 'Серьги',
    stock: product?.stock || '',
    description: product?.description || '',
    image: product?.image || ''
  });

  const [isDragOver, setIsDragOver] = useState(false);

  const categories = ['Серьги', 'Браслеты', 'Кольца', 'Ожерелья', 'Заколки', 'Кулоны', 'Наборы'];

  // Обработка загрузки файла
  const handleFileUpload = (file: File) => {
    // Проверяем размер файла (максимум 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Файл слишком большой. Максимальный размер: 5MB');
      return;
    }
    
    // Проверяем тип файла
    if (!file.type.startsWith('image/')) {
      alert('Пожалуйста, выберите изображение');
      return;
    }
    
    // Создаем превью изображения
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setFormData({ ...formData, image: result });
    };
    reader.readAsDataURL(file);
  };

  // Обработка drag & drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: product?.id || '',
      isActive: product?.isActive || true,
      ...formData,
      price: parseFloat(String(formData.price)),
      originalPrice: parseFloat(String(formData.originalPrice)) || parseFloat(String(formData.price)),
      stock: parseInt(String(formData.stock))
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-gray-900">
              {product ? 'Редактировать товар' : 'Добавить новый товар'}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-all"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Название товара */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Название товара *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-900 bg-white placeholder-gray-400"
              placeholder="Например: Золотые серьги с бриллиантами"
            />
          </div>

          {/* Цены */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Цена продажи (₽) *
              </label>
              <input
                type="number"
                required
                min="0"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-900 bg-white placeholder-gray-400"
                placeholder="12500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Старая цена (₽)
                <span className="text-gray-500 text-xs ml-1">(для отображения скидки)</span>
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={formData.originalPrice}
                onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-900 bg-white placeholder-gray-400"
                placeholder="15000"
              />
            </div>
          </div>

          {/* Категория и количество */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Категория *
              </label>
              <select
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-900 bg-white"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Количество в наличии *
              </label>
              <input
                type="number"
                required
                min="0"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-900 bg-white placeholder-gray-400"
                placeholder="5"
              />
            </div>
          </div>

          {/* Описание */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Описание товара
            </label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none text-gray-900 bg-white placeholder-gray-400"
              placeholder="Описание товара, материалы, особенности..."
            />
          </div>

          {/* Загрузка изображения */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Фотография товара
            </label>
            <div 
              className={`border-2 border-dashed rounded-lg p-6 text-center transition-all ${
                isDragOver 
                  ? 'border-purple-500 bg-purple-50' 
                  : 'border-gray-300 hover:border-purple-400'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <Upload className={`w-12 h-12 mx-auto mb-4 ${isDragOver ? 'text-purple-500' : 'text-gray-400'}`} />
              <p className={`mb-2 ${isDragOver ? 'text-purple-600' : 'text-gray-600'}`}>
                {isDragOver ? 'Отпустите файл здесь' : 'Перетащите изображение сюда или'}
              </p>
              
              {/* Скрытый input для файлов */}
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    handleFileUpload(file);
                  }
                }}
                className="hidden"
              />
              
              <label
                htmlFor="image-upload"
                className="text-purple-600 hover:text-purple-800 font-medium cursor-pointer inline-block px-4 py-2 border border-purple-300 rounded-lg hover:bg-purple-50 transition-all"
              >
                выберите файл
              </label>
              
              <p className="text-xs text-gray-500 mt-2">
                Поддерживаются: JPG, PNG, GIF (макс. 5MB)
              </p>
              
              {/* Превью загруженного изображения */}
              {formData.image && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-2">Превью:</p>
                  <div className="inline-block relative">
                    <img
                      src={formData.image}
                      alt="Превью"
                      className="w-32 h-32 object-cover rounded-lg border border-gray-200"
                    />
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, image: '' })}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                    >
                      ×
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Кнопки */}
          <div className="flex items-center space-x-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Save className="w-5 h-5" />
              <span>{product ? 'Сохранить изменения' : 'Добавить товар'}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200"
            >
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
