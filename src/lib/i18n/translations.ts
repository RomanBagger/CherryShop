// Переводы для многоязычной поддержки магазина

export type Language = 'ru' | 'en' | 'pl';

export const translations = {
  ru: {
    // Общие
    loading: 'Загрузка...',
    error: 'Ошибка',
    save: 'Сохранить',
    cancel: 'Отмена',
    delete: 'Удалить',
    edit: 'Редактировать',
    add: 'Добавить',
    back: 'Назад',
    next: 'Далее',
    
    // Поиск
    search: {
      placeholder: 'Поиск украшений...'
    },
    
    filter: 'Фильтр',
    sort: 'Сортировка',
    
    // Навигация
    navigation: {
      home: 'Главная',
      catalog: 'Каталог', 
      about: 'О нас',
      contact: 'Контакты',
      admin: 'Админ панель',
      allProducts: 'Все товары'
    },
    
    // Главная страница
    homepage: {
      hero: {
        title: 'МуМи',
        subtitle: 'Шедевры',
        description1: 'Уникальные ювелирные изделия ручной работы.',
        description2: 'Каждое украшение — это произведение искусства,',
        description3: ' созданное с любовью и вниманием к деталям.',
        viewCollection: 'Смотреть коллекцию',
        aboutUs: 'О нас'
      },
      trustIndicators: {
        qualityGuarantee: 'Гарантия качества',
        delivery: 'Доставка по РФ',
        handmade: 'Ручная работа'
      },
      featured: {
        title: 'Рекомендуемые',
        subtitle: 'шедевры',
        description: 'Наши самые популярные и любимые покупателями изделия, созданные с особой тщательностью и вниманием к каждой детали',
        products: {
          sapphireEarrings: 'Сапфировые серьги',
          rubyBracelet: 'Рубиновый браслет',
          topazRing: 'Топазовое кольцо',
          emeraldEarrings: 'Изумрудные серьги',
          citrineNecklace: 'Цитриновое колье'
        }
      }
    },
    
    // Каталог товаров
    products: {
      title: 'Наш каталог',
      loading: 'Загружаем товары...',
      errors: {
        title: 'Упс! Что-то пошло не так',
        loadingError: 'Ошибка загрузки товаров',
        generalError: 'Произошла ошибка',
        retry: 'Попробовать снова'
      },
      catalog: {
        title: 'Каталог',
        subtitle: 'украшений',
        description: 'Откройте для себя уникальную коллекцию ювелирных изделий ручной работы'
      },
      filters: {
        all: 'Все',
        inStock: 'В наличии',
        featured: 'Рекомендуемые'
      },
      noProducts: {
        title: 'Товары не найдены',
        description: 'Попробуйте изменить фильтры или добавить товары через админ панель',
        adminLink: 'Перейти в админ панель'
      },
      card: {
        inStock: 'В наличии',
        pieces: 'шт.',
        outOfStock: 'Нет в наличии',
        featured: 'ХИТ',
        addToCart: 'Добавить в корзину'
      }
    },
    
    // Статистика
    statsTitle: 'Нам доверяют тысячи клиентов',
    statsDescription: 'Присоединяйтесь к нашему сообществу ценителей эксклюзивной красоты',
    statsHappyClients: 'Довольных клиентов',
    statsSoldItems: 'Проданных изделий', 
    statsAverageRating: 'Средняя оценка',
    statsRepeatPurchases: 'Повторных покупок',
    
    // Отзывы
    testimonialsTitle: 'Что говорят наши клиенты',
    testimonialsDescription: 'Каждое украшение рассказывает историю, а каждый отзыв вдохновляет нас на новые шедевры',
    reviewsCount: 'На основе отзывов',
    
    // Преимущества
    benefitsTitle: 'Почему выбирают нас',
    benefitsDescription: 'Мы создаем не просто украшения, а произведения искусства, которые подчеркивают вашу индивидуальность',
    handmadeTitle: 'Ручная работа',
    handmadeDescription: 'Каждое изделие создается мастером вручную с особой тщательностью и вниманием к деталям',
    premiumMaterialsTitle: 'Премиум материалы',
    premiumMaterialsDescription: 'Используем только высококачественные металлы, натуральные камни и проверенные материалы',
    fastDeliveryTitle: 'Быстрая доставка',
    fastDeliveryDescription: 'Доставляем по всей России в течение 1-3 дней с возможностью отслеживания',
    qualityGuaranteeTitle: 'Гарантия качества',
    qualityGuaranteeDescription: 'Предоставляем гарантию на все изделия и бесплатное обслуживание в течение года',
    
    // Каталог
    catalogTitle: 'Каталог украшений',
    catalogDescription: 'Откройте для себя уникальную коллекцию ювелирных изделий ручной работы',
    productsFound: 'Найдено товаров',
    noProductsFound: 'Товары не найдены',
    noProductsDescription: 'Попробуйте изменить фильтры или добавить товары через админ панель',
    
    // Фильтры
    all: 'Все',
    inStock: 'В наличии',
    featured: 'Рекомендуемые',
    rings: 'Кольца',
    earrings: 'Серьги',
    necklaces: 'Колье',
    bracelets: 'Браслеты',
    
    // Товары
    inStockCount: 'В наличии: {count} шт.',
    outOfStock: 'Нет в наличии',
    addToCart: 'Добавить в корзину',
    hitBadge: 'ХИТ',
    backToHome: 'Вернуться на главную',
    
    // Категории товаров
    categories: {
      rings: 'Кольца',
      earrings: 'Серьги', 
      necklaces: 'Колье и ожерелья',
      bracelets: 'Браслеты',
      pendants: 'Подвески',
      hairpins: 'Заколки',
      sets: 'Комплекты'
    }
  },
  
  en: {
    // General
    loading: 'Loading...',
    error: 'Error',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    add: 'Add',
    back: 'Back',
    next: 'Next',
    
    // Search
    search: {
      placeholder: 'Search jewelry...'
    },
    
    filter: 'Filter',
    sort: 'Sort',
    
    // Navigation
    navigation: {
      home: 'Home',
      catalog: 'Catalog',
      about: 'About',
      contact: 'Contact',
      admin: 'Admin Panel',
      allProducts: 'All Products'
    },
    
    // Homepage
    homepage: {
      hero: {
        title: 'MuMi',
        subtitle: 'Masterpieces',
        description1: 'Unique handcrafted jewelry pieces.',
        description2: 'Each piece is a work of art,',
        description3: ' created with love and attention to detail.',
        viewCollection: 'View Collection',
        aboutUs: 'About Us'
      },
      trustIndicators: {
        qualityGuarantee: 'Quality Guarantee',
        delivery: 'Worldwide Delivery', 
        handmade: 'Handmade'
      },
      featured: {
        title: 'Featured',
        subtitle: 'masterpieces',
        description: 'Our most popular and beloved pieces, crafted with special care and attention to every detail',
        products: {
          sapphireEarrings: 'Sapphire Earrings',
          rubyBracelet: 'Ruby Bracelet',
          topazRing: 'Topaz Ring',
          emeraldEarrings: 'Emerald Earrings',
          citrineNecklace: 'Citrine Necklace'
        }
      }
    },
    
    // Products catalog
    products: {
      title: 'Our Catalog',
      loading: 'Loading products...',
      errors: {
        title: 'Oops! Something went wrong',
        loadingError: 'Error loading products',
        generalError: 'An error occurred',
        retry: 'Try again'
      },
      catalog: {
        title: 'Catalog',
        subtitle: 'of jewelry',
        description: 'Discover a unique collection of handcrafted jewelry pieces'
      },
      filters: {
        all: 'All',
        inStock: 'In Stock',
        featured: 'Featured'
      },
      noProducts: {
        title: 'No products found',
        description: 'Try changing filters or add products through admin panel',
        adminLink: 'Go to admin panel'
      },
      card: {
        inStock: 'In stock',
        pieces: 'pcs.',
        outOfStock: 'Out of stock',
        featured: 'HIT',
        addToCart: 'Add to Cart'
      }
    },
    
    // Home page
    welcomeTitle: 'Welcome to the world of',
    welcomeSubtitle: 'exclusive jewelry',
    welcomeDescription: 'Discover a unique collection of handcrafted jewelry pieces, created with love and attention to every detail',
    shopNow: 'Shop Now',
    featuredProducts: 'Featured Masterpieces',
    featuredDescription: 'Our most popular and beloved pieces, crafted with special care and attention to every detail',
    viewAllProducts: 'View All Products',
    
    // Statistics
    statsTitle: 'Thousands of customers trust us',
    statsDescription: 'Join our community of exclusive beauty connoisseurs',
    statsHappyClients: 'Happy Clients',
    statsSoldItems: 'Items Sold',
    statsAverageRating: 'Average Rating',
    statsRepeatPurchases: 'Repeat Purchases',
    
    // Testimonials
    testimonialsTitle: 'What our customers say',
    testimonialsDescription: 'Every piece tells a story, and every review inspires us to create new masterpieces',
    reviewsCount: 'Based on reviews',
    
    // Benefits
    benefitsTitle: 'Why choose us',
    benefitsDescription: 'We create not just jewelry, but works of art that highlight your individuality',
    handmadeTitle: 'Handcrafted',
    handmadeDescription: 'Each piece is handcrafted by artisans with special care and attention to detail',
    premiumMaterialsTitle: 'Premium Materials',
    premiumMaterialsDescription: 'We use only high-quality metals, natural stones and proven materials',
    fastDeliveryTitle: 'Fast Delivery',
    fastDeliveryDescription: 'We deliver worldwide within 3-7 days with tracking available',
    qualityGuaranteeTitle: 'Quality Guarantee',
    qualityGuaranteeDescription: 'We provide warranty on all products and free service for one year',
    
    // Catalog
    catalogTitle: 'Jewelry Catalog',
    catalogDescription: 'Discover our unique collection of handcrafted jewelry pieces',
    productsFound: 'Products found',
    noProductsFound: 'No products found',
    noProductsDescription: 'Try changing filters or add products through admin panel',
    
    // Filters
    all: 'All',
    inStock: 'In Stock',
    featured: 'Featured',
    rings: 'Rings',
    earrings: 'Earrings',
    necklaces: 'Necklaces',
    bracelets: 'Bracelets',
    
    // Products
    inStockCount: 'In stock: {count} pcs.',
    outOfStock: 'Out of stock',
    addToCart: 'Add to Cart',
    hitBadge: 'HIT',
    backToHome: 'Back to Home',
    
    // Product categories
    categories: {
      rings: 'Rings',
      earrings: 'Earrings',
      necklaces: 'Necklaces', 
      bracelets: 'Bracelets',
      pendants: 'Pendants',
      hairpins: 'Hair Accessories',
      sets: 'Sets'
    }
  },
  
  pl: {
    // Ogólne
    loading: 'Ładowanie...',
    error: 'Błąd',
    save: 'Zapisz',
    cancel: 'Anuluj',
    delete: 'Usuń',
    edit: 'Edytuj',
    add: 'Dodaj',
    back: 'Wstecz',
    next: 'Dalej',
    
    // Wyszukiwanie
    search: {
      placeholder: 'Szukaj biżuterii...'
    },
    
    filter: 'Filtr',
    sort: 'Sortuj',
    
    // Nawigacja
    navigation: {
      home: 'Strona główna',
      catalog: 'Katalog',
      about: 'O nas',
      contact: 'Kontakt', 
      admin: 'Panel administratora',
      allProducts: 'Wszystkie produkty'
    },
    
    // Strona główna  
    homepage: {
      hero: {
        title: 'MuMi',
        subtitle: 'Arcydzieła',
        description1: 'Wyjątkowa biżuteria ręcznie wykonana.',
        description2: 'Każdy element to dzieło sztuki,',
        description3: ' stworzone z miłością i dbałością o szczegóły.',
        viewCollection: 'Zobacz kolekcję',
        aboutUs: 'O nas'
      },
      trustIndicators: {
        qualityGuarantee: 'Gwarancja jakości',
        delivery: 'Dostawa światowa',
        handmade: 'Ręcznie robione'
      },
      featured: {
        title: 'Polecane',
        subtitle: 'arcydzieła',
        description: 'Nasze najpopularniejsze i ukochane przez klientów wyroby, stworzone ze szczególną starannością i dbałością o każdy detal',
        products: {
          sapphireEarrings: 'Kolczyki z szafirem',
          rubyBracelet: 'Bransoletka z rubinem',
          topazRing: 'Pierścionek z topazem',
          emeraldEarrings: 'Kolczyki ze szmaragdem', 
          citrineNecklace: 'Naszyjnik z cytrynem'
        }
      }
    },
    
    // Katalog produktów
    products: {
      title: 'Nasz katalog',
      loading: 'Ładowanie produktów...',
      errors: {
        title: 'Ups! Coś poszło nie tak',
        loadingError: 'Błąd ładowania produktów',
        generalError: 'Wystąpił błąd',
        retry: 'Spróbuj ponownie'
      },
      catalog: {
        title: 'Katalog',
        subtitle: 'biżuterii',
        description: 'Odkryj wyjątkową kolekcję ręcznie wykonanej biżuterii'
      },
      filters: {
        all: 'Wszystkie',
        inStock: 'W magazynie',
        featured: 'Polecane'
      },
      noProducts: {
        title: 'Nie znaleziono produktów',
        description: 'Spróbuj zmienić filtry lub dodaj produkty przez panel administratora',
        adminLink: 'Przejdź do panelu administratora'
      },
      card: {
        inStock: 'W magazynie',
        pieces: 'szt.',
        outOfStock: 'Brak w magazynie',
        featured: 'HIT',
        addToCart: 'Dodaj do koszyka'
      }
    },
    
    // Strona główna
    welcomeTitle: 'Witamy w świecie',
    welcomeSubtitle: 'ekskluzywnej biżuterii',
    welcomeDescription: 'Odkryj wyjątkową kolekcję ręcznie wykonanej biżuterii, stworzonej z miłością i dbałością o każdy detal',
    shopNow: 'Kup teraz',
    featuredProducts: 'Polecane arcydzieła',
    featuredDescription: 'Nasze najpopularniejsze i ukochane przez klientów wyroby, stworzone ze szczególną starannością i dbałością o każdy detal',
    viewAllProducts: 'Zobacz wszystkie produkty',
    
    // Statystyki
    statsTitle: 'Ufa nam tysiące klientów',
    statsDescription: 'Dołącz do naszej społeczności koneserów ekskluzywnego piękna',
    statsHappyClients: 'Zadowolonych klientów',
    statsSoldItems: 'Sprzedanych przedmiotów',
    statsAverageRating: 'Średnia ocena',
    statsRepeatPurchases: 'Ponowne zakupy',
    
    // Opinie
    testimonialsTitle: 'Co mówią nasi klienci',
    testimonialsDescription: 'Każdy przedmiot opowiada historię, a każda opinia inspiruje nas do tworzenia nowych arcydzieł',
    reviewsCount: 'Na podstawie opinii',
    
    // Korzyści
    benefitsTitle: 'Dlaczego nas wybierają',
    benefitsDescription: 'Tworzymy nie tylko biżuterię, ale dzieła sztuki, które podkreślają Twoją indywidualność',
    handmadeTitle: 'Ręczna robota',
    handmadeDescription: 'Każdy przedmiot jest ręcznie wykonywany przez rzemieślników ze szczególną starannością i dbałością o detale',
    premiumMaterialsTitle: 'Materiały premium',
    premiumMaterialsDescription: 'Używamy tylko wysokiej jakości metali, naturalnych kamieni i sprawdzonych materiałów',
    fastDeliveryTitle: 'Szybka dostawa',
    fastDeliveryDescription: 'Dostarczamy na cały świat w ciągu 3-7 dni z możliwością śledzenia',
    qualityGuaranteeTitle: 'Gwarancja jakości',
    qualityGuaranteeDescription: 'Zapewniamy gwarancję na wszystkie produkty i bezpłatny serwis przez jeden rok',
    
    // Katalog
    catalogTitle: 'Katalog biżuterii',
    catalogDescription: 'Odkryj naszą wyjątkową kolekcję ręcznie wykonanej biżuterii',
    productsFound: 'Znaleziono produktów',
    noProductsFound: 'Nie znaleziono produktów',
    noProductsDescription: 'Spróbuj zmienić filtry lub dodaj produkty przez panel administratora',
    
    // Filtry
    all: 'Wszystkie',
    inStock: 'W magazynie',
    featured: 'Polecane',
    rings: 'Pierścienie',
    earrings: 'Kolczyki',
    necklaces: 'Naszyjniki',
    bracelets: 'Bransoletki',
    
    // Produkty
    inStockCount: 'W magazynie: {count} szt.',
    outOfStock: 'Wyprzedane',
    addToCart: 'Dodaj do koszyka',
    hitBadge: 'HIT',
    backToHome: 'Powrót do strony głównej',
    
    // Kategorie produktów
    categories: {
      RINGS: 'Pierścienie',
      EARRINGS: 'Kolczyki',
      NECKLACES: 'Naszyjniki',
      BRACELETS: 'Bransoletki'
    }
  }
};

export const getTranslation = (key: string, lang: Language = 'ru'): string => {
  const keys = key.split('.');
  let translation: any = translations[lang];
  
  for (const k of keys) {
    if (translation && typeof translation === 'object' && k in translation) {
      translation = translation[k];
    } else {
      // Fallback to Russian if translation not found
      translation = translations['ru'];
      for (const fallbackKey of keys) {
        if (translation && typeof translation === 'object' && fallbackKey in translation) {
          translation = translation[fallbackKey];
        } else {
          return key; // Return key if no translation found
        }
      }
      break;
    }
  }
  
  return typeof translation === 'string' ? translation : key;
};

// Функция для интерполяции переменных в переводах
export const interpolate = (template: string, variables: Record<string, string | number>): string => {
  return template.replace(/{(\w+)}/g, (match, key) => {
    return variables[key]?.toString() || match;
  });
};
