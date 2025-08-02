import { ProductCategory, MaterialType, ProductSortBy } from '@/types';

// Категории товаров с русскими названиями
export const PRODUCT_CATEGORIES = {
  [ProductCategory.EARRINGS]: {
    name: 'Серьги',
    slug: 'earrings',
    description: 'Элегантные серьги ручной работы'
  },
  [ProductCategory.BRACELETS]: {
    name: 'Браслеты',
    slug: 'bracelets',
    description: 'Изысканные браслеты из драгоценных металлов'
  },
  [ProductCategory.NECKLACES]: {
    name: 'Колье и ожерелья',
    slug: 'necklaces',
    description: 'Роскошные колье и ожерелья'
  },
  [ProductCategory.RINGS]: {
    name: 'Кольца',
    slug: 'rings',
    description: 'Уникальные кольца ручной работы'
  },
  [ProductCategory.SETS]: {
    name: 'Комплекты',
    slug: 'sets',
    description: 'Гармоничные ювелирные комплекты'
  },
  [ProductCategory.PENDANTS]: {
    name: 'Подвески',
    slug: 'pendants',
    description: 'Изящные подвески и кулоны'
  },
  [ProductCategory.HAIRPINS]: {
    name: 'Заколки',
    slug: 'hairpins',
    description: 'Стильные заколки и украшения для волос'
  }
} as const;

// Материалы с русскими названиями
export const MATERIAL_TYPES = {
  [MaterialType.SILVER]: {
    name: 'Серебро',
    description: 'Высококачественное серебро 925 пробы'
  },
  [MaterialType.GOLD]: {
    name: 'Золото',
    description: 'Драгоценное золото различных проб'
  },
  [MaterialType.PLATINUM]: {
    name: 'Платина',
    description: 'Редкая и долговечная платина'
  },
  [MaterialType.GEMSTONE]: {
    name: 'Драгоценные камни',
    description: 'Натуральные драгоценные и полудрагоценные камни'
  },
  [MaterialType.PEARL]: {
    name: 'Жемчуг',
    description: 'Натуральный и культивированный жемчуг'
  },
  [MaterialType.OTHER]: {
    name: 'Другие материалы',
    description: 'Специальные и эксклюзивные материалы'
  }
} as const;

// Варианты сортировки
export const SORT_OPTIONS = {
  [ProductSortBy.NAME]: 'По названию',
  [ProductSortBy.PRICE]: 'По цене',
  [ProductSortBy.CREATED_AT]: 'По дате добавления',
  [ProductSortBy.POPULARITY]: 'По популярности'
} as const;

// Настройки пагинации
export const PAGINATION = {
  DEFAULT_LIMIT: 12,
  MAX_LIMIT: 50
} as const;

// Валюта
export const CURRENCY = {
  SYMBOL: '₽',
  CODE: 'RUB',
  NAME: 'Российский рубль'
} as const;

// Форматирование цены
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: CURRENCY.CODE,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

// Размеры изображений
export const IMAGE_SIZES = {
  THUMBNAIL: { width: 150, height: 150 },
  SMALL: { width: 300, height: 300 },
  MEDIUM: { width: 600, height: 600 },
  LARGE: { width: 1200, height: 1200 }
} as const;
