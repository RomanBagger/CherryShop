import { useState, useEffect } from 'react';

// Типы данных
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  inStock: boolean;
  stockQuantity: number;
  weight?: number;
  dimensions: {
    length?: number;
    width?: number;
    height?: number;
    diameter?: number;
  };
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  images: ProductImage[];
  materials: Material[];
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  isPrimary: boolean;
  order: number;
}

export interface Material {
  id: string;
  name: string;
  type: string;
  purity?: string;
}

export interface CartItem {
  id: string;
  quantity: number;
  product: {
    id: string;
    name: string;
    price: number;
    category: string;
    inStock: boolean;
    stockQuantity: number;
    image: string | null;
  };
}

export interface Cart {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  itemCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ProductsResponse {
  data: Product[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// API функции
export const api = {
  // Продукты
  async getProducts(params?: {
    category?: string;
    materials?: string[];
    priceMin?: number;
    priceMax?: number;
    inStock?: boolean;
    featured?: boolean;
    search?: string;
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }): Promise<ApiResponse<ProductsResponse>> {
    const searchParams = new URLSearchParams();
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          if (Array.isArray(value)) {
            searchParams.set(key, value.join(','));
          } else {
            searchParams.set(key, value.toString());
          }
        }
      });
    }

    const response = await fetch(`/api/products?${searchParams}`);
    return response.json();
  },

  async getProduct(id: string): Promise<ApiResponse<Product>> {
    const response = await fetch(`/api/products/${id}`);
    return response.json();
  },

  async createProduct(product: Partial<Product>): Promise<ApiResponse<Product>> {
    const response = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    });
    return response.json();
  },

  async updateProduct(id: string, product: Partial<Product>): Promise<ApiResponse<Product>> {
    const response = await fetch(`/api/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    });
    return response.json();
  },

  async deleteProduct(id: string): Promise<ApiResponse<void>> {
    const response = await fetch(`/api/products/${id}`, {
      method: 'DELETE'
    });
    return response.json();
  },

  // Корзина
  async getCart(userId: string): Promise<ApiResponse<Cart>> {
    const response = await fetch(`/api/cart?userId=${userId}`);
    return response.json();
  },

  async addToCart(userId: string, productId: string, quantity: number = 1): Promise<ApiResponse<Cart>> {
    const response = await fetch('/api/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, productId, quantity })
    });
    return response.json();
  },

  async updateCartItem(itemId: string, quantity: number): Promise<ApiResponse<Cart>> {
    const response = await fetch(`/api/cart/${itemId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity })
    });
    return response.json();
  },

  async removeFromCart(itemId: string): Promise<ApiResponse<Cart>> {
    const response = await fetch(`/api/cart/${itemId}`, {
      method: 'DELETE'
    });
    return response.json();
  },

  // Материалы
  async getMaterials(type?: string): Promise<ApiResponse<Material[]>> {
    const url = type ? `/api/materials?type=${type}` : '/api/materials';
    const response = await fetch(url);
    return response.json();
  },

  async createMaterial(material: Omit<Material, 'id'>): Promise<ApiResponse<Material>> {
    const response = await fetch('/api/materials', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(material)
    });
    return response.json();
  }
};

// Хуки
export function useProducts(params?: Parameters<typeof api.getProducts>[0]) {
  const [products, setProducts] = useState<Product[]>([]);
  const [pagination, setPagination] = useState<ProductsResponse['pagination'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.getProducts(params);
      
      if (response.success && response.data) {
        setProducts(response.data.data || []);
        setPagination(response.data.pagination);
      } else {
        setError(response.error || 'Failed to fetch products');
        setProducts([]);
      }
    } catch (err) {
      setError('Network error');
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [JSON.stringify(params)]);

  return { products, pagination, loading, error, refetch: fetchProducts };
}

export function useProduct(id: string) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await api.getProduct(id);
        
        if (response.success && response.data) {
          setProduct(response.data);
        } else {
          setError(response.error || 'Failed to fetch product');
        }
      } catch (err) {
        setError('Network error');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  return { product, loading, error };
}

export function useCart(userId: string) {
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCart = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.getCart(userId);
      
      if (response.success && response.data) {
        setCart(response.data);
      } else {
        setError(response.error || 'Failed to fetch cart');
      }
    } catch (err) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId: string, quantity: number = 1) => {
    try {
      const response = await api.addToCart(userId, productId, quantity);
      if (response.success && response.data) {
        setCart(response.data);
        return { success: true };
      } else {
        return { success: false, error: response.error };
      }
    } catch (err) {
      return { success: false, error: 'Network error' };
    }
  };

  const updateCartItem = async (itemId: string, quantity: number) => {
    try {
      const response = await api.updateCartItem(itemId, quantity);
      if (response.success && response.data) {
        setCart(response.data);
        return { success: true };
      } else {
        return { success: false, error: response.error };
      }
    } catch (err) {
      return { success: false, error: 'Network error' };
    }
  };

  const removeFromCart = async (itemId: string) => {
    try {
      const response = await api.removeFromCart(itemId);
      if (response.success && response.data) {
        setCart(response.data);
        return { success: true };
      } else {
        return { success: false, error: response.error };
      }
    } catch (err) {
      return { success: false, error: 'Network error' };
    }
  };

  useEffect(() => {
    if (userId) {
      fetchCart();
    }
  }, [userId]);

  return { 
    cart, 
    loading, 
    error, 
    addToCart, 
    updateCartItem, 
    removeFromCart, 
    refetch: fetchCart 
  };
}

export function useMaterials(type?: string) {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await api.getMaterials(type);
        
        if (response.success && response.data) {
          setMaterials(response.data);
        } else {
          setError(response.error || 'Failed to fetch materials');
        }
      } catch (err) {
        setError('Network error');
      } finally {
        setLoading(false);
      }
    };

    fetchMaterials();
  }, [type]);

  return { materials, loading, error };
}
