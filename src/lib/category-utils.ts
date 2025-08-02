import { ProductCategory } from '@/types';
import { PRODUCT_CATEGORIES } from '@/lib/constants';

// Функция для получения переведенного названия категории
export function getCategoryName(category: ProductCategory, t: (key: string) => string): string {
  const translationKey = `categories.${category.toLowerCase()}`;
  return t(translationKey);
}

// Функция для получения всех категорий с переводами
export function getCategoriesWithTranslations(t: (key: string) => string) {
  return Object.entries(PRODUCT_CATEGORIES).map(([key, category]) => ({
    key: key as ProductCategory,
    slug: category.slug,
    name: getCategoryName(key as ProductCategory, t),
    description: t(`categories.${key.toLowerCase()}Description`)
  }));
}

// Мапинг английских названий категорий из базы к enum
export const CATEGORY_MAPPING: Record<string, ProductCategory> = {
  'earrings': ProductCategory.EARRINGS,
  'bracelets': ProductCategory.BRACELETS,
  'necklaces': ProductCategory.NECKLACES,
  'rings': ProductCategory.RINGS,
  'sets': ProductCategory.SETS,
  'pendants': ProductCategory.PENDANTS,
  'hairpins': ProductCategory.HAIRPINS,
};

// Получить русское название по английскому из базы
export function mapCategoryToRussian(englishCategory: string, t: (key: string) => string): string {
  const category = CATEGORY_MAPPING[englishCategory.toLowerCase()];
  if (category) {
    return getCategoryName(category, t);
  }
  return englishCategory; // fallback
}
