// Основные типы для ювелирного магазина

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  images: ProductImage[];
  materials: Material[];
  inStock: boolean;
  stockQuantity: number;
  weight?: number; // в граммах
  dimensions?: ProductDimensions;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  isPrimary: boolean;
  order: number;
}

export interface ProductDimensions {
  length?: number; // в мм
  width?: number;  // в мм
  height?: number; // в мм
  diameter?: number; // для кольец, в мм
}

export enum ProductCategory {
  EARRINGS = 'earrings',
  BRACELETS = 'bracelets',
  NECKLACES = 'necklaces',
  RINGS = 'rings',
  SETS = 'sets',
  PENDANTS = 'pendants',
  HAIRPINS = 'hairpins'
}

export interface Material {
  id: string;
  name: string;
  type: MaterialType;
  purity?: string; // например "925" для серебра
}

export enum MaterialType {
  SILVER = 'silver',
  GOLD = 'gold',
  PLATINUM = 'platinum',
  GEMSTONE = 'gemstone',
  PEARL = 'pearl',
  OTHER = 'other'
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedOptions?: Record<string, string>; // для кастомизации
}

export interface Cart {
  id: string;
  items: CartItem[];
  totalAmount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: UserRole;
  addresses: Address[];
  createdAt: Date;
  updatedAt: Date;
}

export enum UserRole {
  CUSTOMER = 'customer',
  ADMIN = 'admin'
}

export interface Address {
  id: string;
  type: AddressType;
  firstName: string;
  lastName: string;
  company?: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone?: string;
  isDefault: boolean;
}

export enum AddressType {
  BILLING = 'billing',
  SHIPPING = 'shipping'
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  shippingAddress: Address;
  billingAddress: Address;
  paymentId?: string;
  trackingNumber?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  priceAtTime: number; // цена на момент заказа
  selectedOptions?: Record<string, string>;
}

export enum OrderStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  PROCESSING = 'processing',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled',
  REFUNDED = 'refunded'
}

export enum PaymentStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  FAILED = 'failed',
  REFUNDED = 'refunded'
}

// Типы для API ответов
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Типы для фильтров и поиска
export interface ProductFilter {
  category?: ProductCategory;
  materials?: MaterialType[];
  priceMin?: number;
  priceMax?: number;
  inStock?: boolean;
  sortBy?: ProductSortBy;
  sortOrder?: SortOrder;
}

export enum ProductSortBy {
  NAME = 'name',
  PRICE = 'price',
  CREATED_AT = 'createdAt',
  POPULARITY = 'popularity'
}

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc'
}
