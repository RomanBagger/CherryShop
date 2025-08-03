'use client';

import { useState, useEffect } from 'react';
import { 
  Package, ShoppingCart, Users, Settings, BarChart3, Plus, Edit, Trash2, 
  Upload, Save, X, Search, Filter, Eye, EyeOff, Star, TrendingUp,
  AlertCircle, CheckCircle, Clock, DollarSign, FileImage, Grid3x3, AlertTriangle
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  inStock: boolean;
  stockQuantity: number;
  featured: boolean;
  images?: Array<{
    id: string;
    url: string;
    alt: string;
    isPrimary: boolean;
    order: number;
  }>;
}

interface DashboardStats {
  totalProducts: number;
  totalOrders: number;
  totalCustomers: number;
  totalRevenue: number;
  lowStockProducts: number;
}

interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  totalAmount: number;
  status: string;
  paymentStatus: string;
  trackingNumber?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
  itemsCount: number;
  totalItems: number;
  items: Array<{
    id: string;
    quantity: number;
    priceAtTime: number;
    product: {
      id: string;
      name: string;
      price: number;
    };
  }>;
}

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [stats, setStats] = useState<DashboardStats>({
    totalProducts: 0,
    totalOrders: 0,
    totalCustomers: 0,
    totalRevenue: 0,
    lowStockProducts: 0
  });
  const [loading, setLoading] = useState(true);

  const menuItems = [
    { id: 'dashboard', label: 'Панель управления', icon: BarChart3, color: 'text-blue-600' },
    { id: 'products', label: 'Товары', icon: Package, color: 'text-green-600' },
    { id: 'orders', label: 'Заказы', icon: ShoppingCart, color: 'text-orange-600' },
    { id: 'customers', label: 'Клиенты', icon: Users, color: 'text-purple-600' },
    { id: 'settings', label: 'Настройки', icon: Settings, color: 'text-gray-600' },
  ];

  useEffect(() => {
    fetchProducts();
    fetchOrders();
    fetchStats();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/admin/products');
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      }
    } catch (error) {
      console.error('Ошибка загрузки товаров:', error);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await fetch('/api/admin/orders');
      if (response.ok) {
        const data = await response.json();
        setOrders(data.orders || []);
      }
    } catch (error) {
      console.error('Ошибка загрузки заказов:', error);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/stats');
      if (response.ok) {
        const data = await response.json();
        setStats({
          totalProducts: data.totalProducts,
          totalOrders: data.totalOrders,
          totalCustomers: data.totalCustomers,
          totalRevenue: data.totalRevenue,
          lowStockProducts: data.lowStockProducts
        });
      }
    } catch (error) {
      console.error('Ошибка загрузки статистики:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Статистические карточки */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
              <Package className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-blue-100">Товары</p>
              <p className="text-2xl font-bold text-white">{stats.totalProducts}</p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
            <span className="text-sm font-medium text-red-200 flex items-center">
              <AlertTriangle className="h-4 w-4 mr-2" />
              {stats.lowStockProducts} товаров заканчивается
            </span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
              <ShoppingCart className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-green-100">Заказы</p>
              <p className="text-2xl font-bold text-white">{stats.totalOrders}</p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
            <span className="text-sm font-medium text-green-100 flex items-center">
              <TrendingUp className="h-4 w-4 mr-2" />
              +12% за месяц
            </span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-purple-100">Клиенты</p>
              <p className="text-2xl font-bold text-white">{stats.totalCustomers}</p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
            <span className="text-sm font-medium text-purple-100 flex items-center">
              <TrendingUp className="h-4 w-4 mr-2" />
              +8% за месяц
            </span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-yellow-100">Выручка</p>
              <p className="text-2xl font-bold text-white">{stats.totalRevenue.toLocaleString('ru-RU')} ₽</p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
            <span className="text-sm font-medium text-yellow-100 flex items-center">
              <TrendingUp className="h-4 w-4 mr-2" />
              +15% за месяц
            </span>
          </div>
        </div>
      </div>

      {/* Быстрые действия */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg p-6 text-white">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center">
          <Grid3x3 className="h-6 w-6 mr-3 text-blue-400" />
          Быстрые действия
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button 
            onClick={() => setActiveTab('products')}
            className="group flex items-center p-4 bg-gradient-to-r from-green-600 to-green-700 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Plus className="h-6 w-6 text-white mr-3 group-hover:rotate-90 transition-transform duration-300" />
            <div className="text-left">
              <p className="font-semibold text-white">Добавить товар</p>
              <p className="text-xs text-green-100">Создать новый продукт</p>
            </div>
          </button>
          <button className="group flex items-center p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
            <Upload className="h-6 w-6 text-white mr-3 group-hover:-translate-y-1 transition-transform duration-300" />
            <div className="text-left">
              <p className="font-semibold text-white">Загрузить фото</p>
              <p className="text-xs text-blue-100">Добавить изображения</p>
            </div>
          </button>
          <button className="group flex items-center p-4 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
            <BarChart3 className="h-6 w-6 text-white mr-3 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-left">
              <p className="font-semibold text-white">Отчёты</p>
              <p className="text-xs text-purple-100">Аналитика продаж</p>
            </div>
          </button>
        </div>
      </div>

      {/* Товары с низким остатком */}
      {stats.lowStockProducts > 0 && (
        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
              <AlertTriangle className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-white">Внимание! Товары заканчиваются</h3>
              <p className="text-red-100">Необходимо пополнить запасы</p>
            </div>
          </div>
          <div className="space-y-3">
            {products.filter(p => p.stockQuantity < 5).map(product => (
              <div key={product.id} className="flex items-center justify-between p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-white/20 mr-3">
                    <Package className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{product.name}</p>
                    <p className="text-xs text-red-100">Критически мало на складе</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    Осталось: {product.stockQuantity} шт
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
            <p className="text-sm text-red-100 flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Рекомендуем пополнить запасы в ближайшее время
            </p>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20 sticky top-0 z-50">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">💎</span>
                <h1 className="text-2xl font-bold text-gray-900">MumiShop</h1>
                <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Админ</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">
                Последний вход: Сегодня, 14:30
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                А
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white/80 backdrop-blur-md shadow-xl h-screen sticky top-0 border-r border-white/20">
          <nav className="mt-6">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center px-6 py-3 text-left transition-all duration-300 group ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 hover:text-gray-900 hover:shadow-md'
                  }`}
                >
                  <Icon className={`h-5 w-5 mr-3 transition-transform duration-300 ${
                    activeTab === item.id 
                      ? 'text-white scale-110' 
                      : `${item.color} group-hover:scale-110`
                  }`} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gradient-to-br from-transparent to-white/30">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            </div>
          ) : (
            <>
              {activeTab === 'dashboard' && renderDashboard()}
              {activeTab === 'products' && (
                <ProductsTab 
                  products={products} 
                  setProducts={setProducts} 
                  onProductChange={() => {
                    fetchProducts();
                    fetchStats();
                  }}
                />
              )}
              {activeTab === 'orders' && (
                <OrdersTab 
                  orders={orders} 
                  onOrderChange={() => {
                    fetchOrders();
                    fetchStats();
                  }}
                />
              )}
              {activeTab === 'customers' && <div>Клиенты (в разработке)</div>}
              {activeTab === 'settings' && <div>Настройки (в разработке)</div>}
            </>
          )}
        </main>
      </div>
    </div>
  );
}

// Компонент для управления товарами
function ProductsTab({ products, setProducts, onProductChange }: { products: Product[], setProducts: (products: Product[]) => void, onProductChange: () => void }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const categories = [
    { value: 'all', label: 'Все категории' },
    { value: 'EARRINGS', label: 'Серьги' },
    { value: 'RINGS', label: 'Кольца' },
    { value: 'NECKLACES', label: 'Колье' },
    { value: 'BRACELETS', label: 'Браслеты' },
    { value: 'SETS', label: 'Комплекты' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const deleteProduct = async (id: string) => {
    if (confirm('Вы уверены, что хотите удалить этот товар?')) {
      try {
        const response = await fetch(`/api/admin/products/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          setProducts(products.filter(p => p.id !== id));
        }
      } catch (error) {
        console.error('Ошибка удаления товара:', error);
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Header секции товаров */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Управление товарами</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 flex items-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          Добавить товар
        </button>
      </div>

      {/* Фильтры и поиск */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Поиск товаров..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="md:w-48">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Список товаров */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">
            Найдено товаров: {filteredProducts.length}
          </h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
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
                  Остаток
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Статус
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Действия
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-12 w-12 flex-shrink-0">
                        <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                          <FileImage className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                        <div className="text-sm text-gray-500 truncate max-w-xs">{product.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                      {categories.find(c => c.value === product.category)?.label || product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {product.price.toLocaleString('ru-RU')} ₽
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      product.stockQuantity < 5 
                        ? 'bg-red-100 text-red-800' 
                        : product.stockQuantity < 10 
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {product.stockQuantity} шт.
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {product.inStock ? (
                        <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                      ) : (
                        <AlertCircle className="h-4 w-4 text-red-500 mr-1" />
                      )}
                      <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                        {product.inStock ? 'В наличии' : 'Нет в наличии'}
                      </span>
                      {product.featured && (
                        <Star className="h-4 w-4 text-yellow-500 ml-2" />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setEditingProduct(product)}
                        className="text-purple-600 hover:text-purple-900"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Модальное окно добавления/редактирования товара */}
      {(showAddForm || editingProduct) && (
        <ProductModal
          product={editingProduct}
          onClose={() => {
            setShowAddForm(false);
            setEditingProduct(null);
          }}
          onSave={() => {
            setShowAddForm(false);
            setEditingProduct(null);
            onProductChange(); // Обновляем список товаров и статистику
          }}
        />
      )}
    </div>
  );
}

// Компонент для управления заказами
function OrdersTab({ orders, onOrderChange }: { orders: Order[], onOrderChange: () => void }) {
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showOrderModal, setShowOrderModal] = useState(false);

  const statusOptions = [
    { value: 'all', label: 'Все заказы' },
    { value: 'PENDING', label: 'Новые' },
    { value: 'CONFIRMED', label: 'Подтверждены' },
    { value: 'PROCESSING', label: 'В обработке' },
    { value: 'SHIPPED', label: 'Отправлены' },
    { value: 'DELIVERED', label: 'Доставлены' },
    { value: 'CANCELLED', label: 'Отменены' }
  ];

  const statusColors = {
    PENDING: 'bg-yellow-100 text-yellow-800',
    CONFIRMED: 'bg-blue-100 text-blue-800',
    PROCESSING: 'bg-purple-100 text-purple-800',
    SHIPPED: 'bg-indigo-100 text-indigo-800',
    DELIVERED: 'bg-green-100 text-green-800',
    CANCELLED: 'bg-red-100 text-red-800',
    REFUNDED: 'bg-gray-100 text-gray-800'
  };

  const statusLabels = {
    PENDING: 'Новый',
    CONFIRMED: 'Подтвержден',
    PROCESSING: 'В обработке',
    SHIPPED: 'Отправлен',
    DELIVERED: 'Доставлен',
    CANCELLED: 'Отменен',
    REFUNDED: 'Возврат'
  };

  const filteredOrders = orders.filter(order => {
    return selectedStatus === 'all' || order.status === selectedStatus;
  });

  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/admin/orders/${orderId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });

      if (response.ok) {
        onOrderChange();
      }
    } catch (error) {
      console.error('Ошибка обновления статуса:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Управление заказами</h2>
        <div className="flex space-x-4">
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            {statusOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Заказ
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Клиент
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Товары
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Сумма
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Статус
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Дата
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Действия
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{order.orderNumber}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{order.customerName}</div>
                    <div className="text-sm text-gray-500">{order.customerEmail}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{order.totalItems} шт.</div>
                    <div className="text-sm text-gray-500">{order.itemsCount} товаров</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {order.totalAmount.toLocaleString('ru-RU')} ₽
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      statusColors[order.status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800'
                    }`}>
                      {statusLabels[order.status as keyof typeof statusLabels] || order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(order.createdAt).toLocaleDateString('ru-RU')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button
                      onClick={() => {
                        setSelectedOrder(order);
                        setShowOrderModal(true);
                      }}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <select
                      value={order.status}
                      onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                      className="text-xs border border-gray-300 rounded px-2 py-1"
                    >
                      <option value="PENDING">Новый</option>
                      <option value="CONFIRMED">Подтвержден</option>
                      <option value="PROCESSING">В обработке</option>
                      <option value="SHIPPED">Отправлен</option>
                      <option value="DELIVERED">Доставлен</option>
                      <option value="CANCELLED">Отменен</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Модальное окно деталей заказа */}
      {showOrderModal && selectedOrder && (
        <OrderModal
          order={selectedOrder}
          onClose={() => {
            setShowOrderModal(false);
            setSelectedOrder(null);
          }}
          onUpdate={onOrderChange}
        />
      )}
    </div>
  );
}

// Компонент модального окна для добавления/редактирования товара
function ProductModal({ 
  product, 
  onClose, 
  onSave 
}: { 
  product: Product | null; 
  onClose: () => void; 
  onSave: () => void; 
}) {
  const [formData, setFormData] = useState({
    name: product?.name || '',
    price: product?.price?.toString() || '',
    category: product?.category || 'EARRINGS',
    description: product?.description || '',
    stockQuantity: product?.stockQuantity?.toString() || '',
    featured: product?.featured || false,
    inStock: product?.inStock ?? true
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const data = {
      ...formData,
      price: parseFloat(formData.price),
      stockQuantity: parseInt(formData.stockQuantity)
    };

    try {
      const url = product ? `/api/admin/products/${product.id}` : '/api/admin/products';
      const method = product ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        onSave();
      }
    } catch (error) {
      console.error('Ошибка сохранения товара:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-screen overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium text-gray-900">
            {product ? 'Редактировать товар' : 'Добавить товар'}
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Название товара
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Например: Серьги 'Королевский блеск'"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Цена (₽)
              </label>
              <input
                type="number"
                required
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Количество
              </label>
              <input
                type="number"
                required
                value={formData.stockQuantity}
                onChange={(e) => setFormData({ ...formData, stockQuantity: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="0"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Категория
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="EARRINGS">Серьги</option>
              <option value="RINGS">Кольца</option>
              <option value="NECKLACES">Колье</option>
              <option value="BRACELETS">Браслеты</option>
              <option value="SETS">Комплекты</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Описание
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Подробное описание товара..."
            />
          </div>

          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.featured}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <span className="ml-2 text-sm text-gray-700">Рекомендуемый товар</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.inStock}
                onChange={(e) => setFormData({ ...formData, inStock: e.target.checked })}
                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <span className="ml-2 text-sm text-gray-700">В наличии</span>
            </label>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Отмена
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              {product ? 'Сохранить' : 'Добавить'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Компонент модального окна для просмотра деталей заказа
function OrderModal({ 
  order, 
  onClose, 
  onUpdate 
}: { 
  order: Order; 
  onClose: () => void; 
  onUpdate: () => void; 
}) {
  const [status, setStatus] = useState(order.status);
  const [trackingNumber, setTrackingNumber] = useState(order.trackingNumber || '');
  const [notes, setNotes] = useState(order.notes || '');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`/api/admin/orders/${order.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status,
          trackingNumber,
          notes
        })
      });

      if (response.ok) {
        onUpdate();
        onClose();
      }
    } catch (error) {
      console.error('Ошибка обновления заказа:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-11/12 max-w-4xl shadow-lg rounded-md bg-white">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-gray-900">
            Заказ {order.orderNumber}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Информация о клиенте */}
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Информация о клиенте</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p><strong>Имя:</strong> {order.customerName}</p>
              <p><strong>Email:</strong> {order.customerEmail}</p>
              {order.customerPhone && (
                <p><strong>Телефон:</strong> {order.customerPhone}</p>
              )}
            </div>

            <h4 className="font-medium text-gray-900">Товары в заказе</h4>
            <div className="space-y-2">
              {order.items.map((item) => (
                <div key={item.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">{item.product.name}</p>
                    <p className="text-sm text-gray-600">
                      {item.quantity} × {item.priceAtTime.toLocaleString('ru-RU')} ₽
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">
                      {(item.quantity * item.priceAtTime).toLocaleString('ru-RU')} ₽
                    </p>
                  </div>
                </div>
              ))}
              <div className="border-t pt-2">
                <div className="flex justify-between items-center font-bold">
                  <span>Итого:</span>
                  <span>{order.totalAmount.toLocaleString('ru-RU')} ₽</span>
                </div>
              </div>
            </div>
          </div>

          {/* Управление заказом */}
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Управление заказом</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Статус заказа
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="PENDING">Новый</option>
                  <option value="CONFIRMED">Подтвержден</option>
                  <option value="PROCESSING">В обработке</option>
                  <option value="SHIPPED">Отправлен</option>
                  <option value="DELIVERED">Доставлен</option>
                  <option value="CANCELLED">Отменен</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Трек-номер
                </label>
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Введите трек-номер доставки"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Комментарии
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Дополнительные комментарии к заказу"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50"
                >
                  {loading ? 'Сохранение...' : 'Сохранить изменения'}
                </button>
              </div>
            </form>

            <div className="border-t pt-4">
              <h5 className="font-medium text-gray-900 mb-2">Информация о заказе</h5>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Создан:</strong> {new Date(order.createdAt).toLocaleString('ru-RU')}</p>
                <p><strong>Обновлен:</strong> {new Date(order.updatedAt).toLocaleString('ru-RU')}</p>
                <p><strong>ID заказа:</strong> {order.id}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
