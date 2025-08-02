export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  category: string;
  inStock: boolean;
  stockQuantity: number | null;
  weight: number | null;
  length: number | null;
  width: number | null;
  height: number | null;
  diameter: number | null;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
  images?: ProductImage[];
  materials?: Material[];
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string | null;
  isPrimary: boolean;
  order: number;
  productId: string;
}

export interface Material {
  id: string;
  name: string;
  type: string;
  purity: number | null;
}

export interface Cart {
  id: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  items?: CartItem[];
}

export interface CartItem {
  id: string;
  cartId: string;
  productId: string;
  quantity: number;
  selectedOptions: any;
  product?: Product;
}

export interface User {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  address: string | null;
  city: string | null;
  postalCode: string | null;
  country: string | null;
  isEmailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  id: string;
  userId: string;
  status: string;
  totalAmount: number;
  currency: string;
  shippingAddress: any;
  billingAddress: any;
  paymentMethod: string | null;
  paymentStatus: string;
  trackingNumber: string | null;
  notes: string | null;
  createdAt: Date;
  updatedAt: Date;
  items?: OrderItem[];
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  selectedOptions: any;
  product?: Product;
}
