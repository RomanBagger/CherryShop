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
    
    // Категории товаров
    categories: {
      rings: 'Кольца',
      earrings: 'Серьги', 
      necklaces: 'Колье и ожерелья',
      bracelets: 'Браслеты',
      pendants: 'Подвески',
      hairpins: 'Заколки',
      sets: 'Комплекты'
    },
    
    // Переводы товаров
    productNames: {
      'Сапфировые серьги "Королевский блеск"': 'Сапфировые серьги "Королевский блеск"',
      'Рубиновый браслет "Алая страсть"': 'Рубиновый браслет "Алая страсть"',
      'Изумрудное колье "Лесная магия"': 'Изумрудное колье "Лесная магия"',
      'Бриллиантовое кольцо "Вечная любовь"': 'Бриллиантовое кольцо "Вечная любовь"',
      'Золотые серьги с топазом': 'Золотые серьги с топазом',
      'Серебряный браслет с аметистом': 'Серебряный браслет с аметистом'
    },
    
    productDescriptions: {
      'Элегантные серьги с натуральными сапфирами в золотой оправе': 'Элегантные серьги с натуральными сапфирами в золотой оправе',
      'Роскошный браслет с рубинами, символ страсти и силы': 'Роскошный браслет с рубинами, символ страсти и силы',
      'Изысканное колье с изумрудами, воплощение природной красоты': 'Изысканное колье с изумрудами, воплощение природной красоты',
      'Классическое кольцо с бриллиантом, символ вечной любви': 'Классическое кольцо с бриллиантом, символ вечной любви',
      'Утонченные серьги с голубым топазом': 'Утонченные серьги с голубым топазом',
      'Стильный браслет с фиолетовым аметистом': 'Стильный браслет с фиолетовым аметистом',
      'Воздушные серьги с перьевидным дизайном': 'Воздушные серьги с перьевидным дизайном',
      'Элегантное кольцо с бриллиантами': 'Элегантное кольцо с бриллиантами',
      'Роскошное колье из золота с сапфирами': 'Роскошное колье из золота с сапфирами',
      'Изящный браслет с фианитами, имитирующими весенние цветы': 'Изящный браслет с фианитами, имитирующими весенние цветы',
      'Элегантные серьги из серебра 925 пробы с натуральным жемчугом': 'Элегантные серьги из серебра 925 пробы с натуральным жемчугом'
    },
    
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
      },
      featuredCollection: {
        sapphireCollection: 'Сапфировая коллекция',
        rubyElegance: 'Рубиновая элегантность',
        aquamarineDreams: 'Аквамариновые мечты',
        emeraldGarden: 'Изумрудный сад',
        citrineSunset: 'Цитриновый закат',
        mysticAmethyst: 'Мистический аметист'
      },
      stats: {
        title: 'Нам доверяют',
        subtitle: 'тысячи',
        subtitle2: 'клиентов',
        description: 'Присоединяйтесь к нашему сообществу ценителей эксклюзивной красоты',
        happyClients: 'Довольных клиентов',
        soldItems: 'Проданных изделий',
        averageRating: 'Средняя оценка',
        repeatPurchases: 'Повторных покупок'
      },
      testimonials: {
        title: 'Что говорят наши',
        subtitle: 'клиенты',
        description: 'Каждое украшение рассказывает историю, а каждый отзыв вдохновляет нас на новые шедевры',
        reviewsBasedOn: 'На основе {count} отзывов'
      },
      benefits: {
        title: 'Почему выбирают',
        subtitle: 'нас',
        description: 'Мы создаем не просто украшения, а произведения искусства, которые подчеркивают вашу индивидуальность',
        handmadeTitle: 'Ручная работа',
        handmadeDescription: 'Каждое изделие создается мастером вручную с особой тщательностью и вниманием к деталям',
        premiumMaterialsTitle: 'Премиум материалы',
        premiumMaterialsDescription: 'Используем только высококачественные металлы, натуральные камни и проверенные материалы',
        fastDeliveryTitle: 'Быстрая доставка',
        fastDeliveryDescription: 'Доставляем по всей России в течение 1-3 дней с возможностью отслеживания',
        qualityGuaranteeTitle: 'Гарантия качества',
        qualityGuaranteeDescription: 'Предоставляем гарантию на все изделия и бесплатное обслуживание в течение года'
      },
      cta: {
        viewAllProducts: 'Смотреть все изделия',
        addToCart: 'Добавить в корзину',
        madeWithLove: 'Made with Love',
        hitBadge: 'ХИТ'
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
      },
      productsFound: 'Найдено товаров'
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
    },
    
    // Переводы товаров
    productNames: {
      'Сапфировые серьги "Королевский блеск"': 'Сапфировые серьги "Королевский блеск"',
      'Рубиновый браслет "Алая страсть"': 'Рубиновый браслет "Алая страсть"',
      'Изумрудное колье "Лесная магия"': 'Изумрудное колье "Лесная магия"',
      'Бриллиантовое кольцо "Вечная любовь"': 'Бриллиантовое кольцо "Вечная любовь"',
      'Золотые серьги с топазом': 'Золотые серьги с топазом',
      'Серебряный браслет с аметистом': 'Серебряный браслет с аметистом'
    },
    
    productDescriptions: {
      'Элегантные серьги с натуральными сапфирами в золотой оправе': 'Элегантные серьги с натуральными сапфирами в золотой оправе',
      'Роскошный браслет с рубинами, символ страсти и силы': 'Роскошный браслет с рубинами, символ страсти и силы',
      'Изысканное колье с изумрудами, воплощение природной красоты': 'Изысканное колье с изумрудами, воплощение природной красоты',
      'Классическое кольцо с бриллиантом, символ вечной любви': 'Классическое кольцо с бриллиантом, символ вечной любви',
      'Утонченные серьги с голубым топазом': 'Утонченные серьги с голубым топазом',
      'Стильный браслет с фиолетовым аметистом': 'Стильный браслет с фиолетовым аметистом'
    },
    
    // Футер
    footer: {
      about: {
        title: '💎 MumiShop',
        description: 'Эксклюзивные ювелирные изделия ручной работы. Каждое украшение создается с любовью и вниманием к деталям.'
      },
      catalog: {
        title: 'Каталог',
        earrings: 'Серьги',
        bracelets: 'Браслеты',
        necklaces: 'Колье и ожерелья',
        rings: 'Кольца',
        sets: 'Комплекты'
      },
      information: {
        title: 'Информация',
        about: 'О нас',
        delivery: 'Доставка и оплата',
        returns: 'Возврат и обмен',
        care: 'Уход за украшениями',
        sizeGuide: 'Определение размера'
      },
      contacts: {
        title: 'Контакты',
        phone: '+7 (900) 123-45-67',
        email: 'info@mumishop.com',
        address: 'Москва, Арбат, 25',
        schedule: 'Ежедневно 10:00-21:00'
      },
      bottom: {
        copyright: '© 2025 MumiShop. Все права защищены.',
        privacy: 'Политика конфиденциальности',
        terms: 'Условия использования'
      }
    },
    
    // Отзывы клиентов
    testimonials: {
      customers: [
        {
          name: 'Анна Смирнова',
          role: 'Счастливая невеста',
          text: 'Невероятно красивые украшения! Серьги для свадьбы получились просто волшебными. Качество превзошло все ожидания, а дизайн уникальный.',
          location: 'Москва'
        },
        {
          name: 'Мария Петрова',
          role: 'Коллекционер украшений',
          text: 'У меня большая коллекция украшений, но эти изделия особенные. Каждое украшение как произведение искусства. Обязательно закажу еще!',
          location: 'Санкт-Петербург'
        },
        {
          name: 'Елена Волкова',
          role: 'Подарок маме',
          text: 'Покупала браслет маме на юбилей. Она была в восторге! Упаковка роскошная, а само украшение просто великолепное. Спасибо за эмоции!',
          location: 'Екатеринбург'
        },
        {
          name: 'Дарья Козлова',
          role: 'Молодая мама',
          text: 'Заказала кулон с камнем для защиты. Получила не только красивое украшение, но и невероятную энергетику. Ношу не снимая!',
          location: 'Новосибирск'
        },
        {
          name: 'Ольга Михайлова',
          role: 'Учительница',
          text: 'Долго искала стильные серьги для работы. Эти идеально подходят - элегантные, но не вызывающие. Коллеги постоянно спрашивают, где купила!',
          location: 'Казань'
        },
        {
          name: 'Виктория Лебедева',
          role: 'Дизайнер',
          text: 'Как дизайнер, ценю оригинальность и качество исполнения. Эти украшения - настоящее искусство! Буду рекомендовать всем подругам.',
          location: 'Нижний Новгород'
        }
      ]
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
        title: 'Exclusive',
        subtitle: 'Jewelry',
        description1: 'Discover the magic of handcrafted jewelry,',
        description2: 'created with love',
        description3: ' and attention to the finest details.',
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
      },
      featuredCollection: {
        sapphireCollection: 'Sapphire Collection',
        rubyElegance: 'Ruby Elegance',
        aquamarineDreams: 'Aquamarine Dreams',
        emeraldGarden: 'Emerald Garden',
        citrineSunset: 'Citrine Sunset',
        mysticAmethyst: 'Mystic Amethyst'
      },
      stats: {
        title: 'Thousands of customers',
        subtitle: 'trust',
        subtitle2: 'us',
        description: 'Join our community of exclusive beauty connoisseurs',
        happyClients: 'Happy Clients',
        soldItems: 'Items Sold',
        averageRating: 'Average Rating',
        repeatPurchases: 'Repeat Purchases'
      },
      testimonials: {
        title: 'What our',
        subtitle: 'customers say',
        description: 'Every piece tells a story, and every review inspires us to create new masterpieces',
        reviewsBasedOn: 'Based on {count} reviews'
      },
      benefits: {
        title: 'Why choose',
        subtitle: 'us',
        description: 'We create not just jewelry, but works of art that highlight your individuality',
        handmadeTitle: 'Handcrafted',
        handmadeDescription: 'Each piece is handcrafted by artisans with special care and attention to detail',
        premiumMaterialsTitle: 'Premium Materials',
        premiumMaterialsDescription: 'We use only high-quality metals, natural stones and proven materials',
        fastDeliveryTitle: 'Fast Delivery',
        fastDeliveryDescription: 'We deliver worldwide within 3-7 days with tracking available',
        qualityGuaranteeTitle: 'Quality Guarantee',
        qualityGuaranteeDescription: 'We provide warranty on all products and free service for one year'
      },
      cta: {
        viewAllProducts: 'View All Products',
        addToCart: 'Add to Cart',
        madeWithLove: 'Made with Love',
        hitBadge: 'HIT'
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
      },
      productsFound: 'Products found'
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
    },
    
    // Footer
    footer: {
      about: {
        title: '💎 MumiShop',
        description: 'Exclusive handcrafted jewelry. Each piece is created with love and attention to detail.'
      },
      catalog: {
        title: 'Catalog',
        earrings: 'Earrings',
        bracelets: 'Bracelets',
        necklaces: 'Necklaces',
        rings: 'Rings',
        sets: 'Sets'
      },
      information: {
        title: 'Information',
        about: 'About Us',
        delivery: 'Delivery & Payment',
        returns: 'Returns & Exchange',
        care: 'Jewelry Care',
        sizeGuide: 'Size Guide'
      },
      contacts: {
        title: 'Contacts',
        phone: '+1 (555) 123-45-67',
        email: 'info@mumishop.com',
        address: 'New York, Broadway, 25',
        schedule: 'Daily 10:00-21:00'
      },
      bottom: {
        copyright: '© 2025 MumiShop. All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Use'
      }
    },
    
    // Customer testimonials
    testimonials: {
      customers: [
        {
          name: 'Anna Smith',
          role: 'Happy Bride',
          text: 'Incredibly beautiful jewelry! The wedding earrings turned out simply magical. Quality exceeded all expectations, and the design is unique.',
          location: 'New York'
        },
        {
          name: 'Maria Johnson',
          role: 'Jewelry Collector',
          text: 'I have a large jewelry collection, but these pieces are special. Each piece is like a work of art. Will definitely order more!',
          location: 'Los Angeles'
        },
        {
          name: 'Elena Williams',
          role: 'Gift for Mom',
          text: 'Bought a bracelet for mom\'s anniversary. She was delighted! Luxurious packaging, and the jewelry itself is simply magnificent. Thank you for the emotions!',
          location: 'Chicago'
        },
        {
          name: 'Daria Brown',
          role: 'Young Mother',
          text: 'Ordered a pendant with a protective stone. Received not only beautiful jewelry, but also incredible energy. I wear it without taking it off!',
          location: 'Houston'
        },
        {
          name: 'Olga Davis',
          role: 'Teacher',
          text: 'I was looking for stylish earrings for work for a long time. These are perfect - elegant but not flashy. Colleagues constantly ask where I bought them!',
          location: 'Phoenix'
        },
        {
          name: 'Victoria Miller',
          role: 'Designer',
          text: 'As a designer, I appreciate originality and quality of execution. These pieces are real art! I will recommend to all my friends.',
          location: 'Philadelphia'
        }
      ]
    },
    
    // Product categories
    categories: {
      rings: 'Rings',
      earrings: 'Earrings',
      necklaces: 'Necklaces',
      bracelets: 'Bracelets', 
      pendants: 'Pendants',
      hairpins: 'Hairpins',
      sets: 'Sets'
    },
    
    // Product name translations
    productNames: {
      'Сапфировые серьги "Королевский блеск"': 'Sapphire Earrings "Royal Shine"',
      'Рубиновый браслет "Алая страсть"': 'Ruby Bracelet "Scarlet Passion"',
      'Изумрудное колье "Лесная магия"': 'Emerald Necklace "Forest Magic"',
      'Бриллиантовое кольцо "Вечная любовь"': 'Diamond Ring "Eternal Love"',
      'Золотые серьги с топазом': 'Gold Earrings with Topaz',
      'Серебряный браслет с аметистом': 'Silver Bracelet with Amethyst',
      'Серьги "Ангельские крылья"': 'Earrings "Angel Wings"',
      'Кольцо "Вечность"': 'Ring "Eternity"',
      'Колье "Звездная ночь"': 'Necklace "Starry Night"',
      'Браслет "Весенний сад"': 'Bracelet "Spring Garden"',
      'Серьги "Лунные капли"': 'Earrings "Moon Drops"'
    },
    
    productDescriptions: {
      'Элегантные серьги с натуральными сапфирами в золотой оправе': 'Elegant earrings with natural sapphires in gold setting',
      'Роскошный браслет с рубинами, символ страсти и силы': 'Luxurious ruby bracelet, symbol of passion and strength',
      'Изысканное колье с изумрудами, воплощение природной красоты': 'Exquisite emerald necklace, embodiment of natural beauty',
      'Классическое кольцо с бриллиантом, символ вечной любви': 'Classic diamond ring, symbol of eternal love',
      'Утонченные серьги с голубым топазом': 'Refined earrings with blue topaz',
      'Стильный браслет с фиолетовым аметистом': 'Stylish bracelet with purple amethyst',
      'Воздушные серьги с перьевидным дизайном': 'Airy earrings with feather design',
      'Элегантное кольцо с бриллиантами': 'Elegant ring with diamonds',
      'Изысканное колье с звездными мотивами': 'Exquisite necklace with star motifs',
      'Нежный браслет с цветочными элементами': 'Delicate bracelet with floral elements',
      'Романтичные серьги в форме капель': 'Romantic drop-shaped earrings',
      'Роскошное колье из золота с сапфирами': 'Luxurious gold necklace with sapphires',
      'Изящный браслет с фианитами, имитирующими весенние цветы': 'Delicate bracelet with cubic zirconia imitating spring flowers',
      'Элегантные серьги из серебра 925 пробы с натуральным жемчугом': 'Elegant sterling silver earrings with natural pearls'
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
        title: 'Ekskluzywna',
        subtitle: 'Biżuteria',
        description1: 'Odkryj magię ręcznie wykonanej biżuterii,',
        description2: 'stworzonej z miłością',
        description3: ' i uwagą do najdrobniejszych detali.',
        viewCollection: 'Zobacz kolekcję',
        aboutUs: 'O nas'
      },
      trustIndicators: {
        qualityGuarantee: 'Gwarancja jakości',
        delivery: 'Dostawa w Polsce',
        handmade: 'Ręczna praca'
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
      },
      featuredCollection: {
        sapphireCollection: 'Kolekcja Szafirowa',
        rubyElegance: 'Rubinowa Elegancja',
        aquamarineDreams: 'Akwamarynowe Marzenia',
        emeraldGarden: 'Szmaragdowy Ogród',
        citrineSunset: 'Cytrynowy Zachód',
        mysticAmethyst: 'Mistyczny Ametyst'
      },
      stats: {
        title: 'Ufa nam',
        subtitle: 'tysiące',
        subtitle2: 'klientów',
        description: 'Dołącz do naszej społeczności koneserów ekskluzywnego piękna',
        happyClients: 'Zadowolonych klientów',
        soldItems: 'Sprzedanych przedmiotów',
        averageRating: 'Średnia ocena',
        repeatPurchases: 'Ponowne zakupy'
      },
      testimonials: {
        title: 'Co mówią nasi',
        subtitle: 'klienci',
        description: 'Każdy przedmiot opowiada historię, a każda opinia inspiruje nas do tworzenia nowych arcydzieł',
        reviewsBasedOn: 'Na podstawie {count} opinii'
      },
      benefits: {
        title: 'Dlaczego nas',
        subtitle: 'wybierają',
        description: 'Tworzymy nie tylko biżuterię, ale dzieła sztuki, które podkreślają Twoją indywidualność',
        handmadeTitle: 'Ręczna robota',
        handmadeDescription: 'Każdy przedmiot jest ręcznie wykonywany przez rzemieślników ze szczególną starannością i dbałością o detale',
        premiumMaterialsTitle: 'Materiały premium',
        premiumMaterialsDescription: 'Używamy tylko wysokiej jakości metali, naturalnych kamieni i sprawdzonych materiałów',
        fastDeliveryTitle: 'Szybka dostawa',
        fastDeliveryDescription: 'Dostarczamy w Polsce w ciągu 1-3 dni z możliwością śledzenia',
        qualityGuaranteeTitle: 'Gwarancja jakości',
        qualityGuaranteeDescription: 'Zapewniamy gwarancję na wszystkie produkty i bezpłatny serwis przez jeden rok'
      },
      cta: {
        viewAllProducts: 'Zobacz wszystkie produkty',
        addToCart: 'Dodaj do koszyka',
        madeWithLove: 'Stworzone z miłością',
        hitBadge: 'HIT'
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
      },
      productsFound: 'Znaleziono produktów'
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
      rings: 'Pierścienie',
      earrings: 'Kolczyki',
      necklaces: 'Naszyjniki',
      bracelets: 'Bransoletki',
      pendants: 'Wisiorki',
      hairpins: 'Akcesoria do włosów',
      sets: 'Zestawy'
    },
    
    // Stopka
    footer: {
      about: {
        title: '💎 MumiShop',
        description: 'Ekskluzywna biżuteria ręcznej roboty. Każdy element jest tworzony z miłością i dbałością o detale.'
      },
      catalog: {
        title: 'Katalog',
        earrings: 'Kolczyki',
        bracelets: 'Bransoletki',
        necklaces: 'Naszyjniki',
        rings: 'Pierścienie',
        sets: 'Zestawy'
      },
      information: {
        title: 'Informacje',
        about: 'O nas',
        delivery: 'Dostawa i płatność',
        returns: 'Zwroty i wymiany',
        care: 'Pielęgnacja biżuterii',
        sizeGuide: 'Przewodnik rozmiarów'
      },
      contacts: {
        title: 'Kontakt',
        phone: '+48 123 456 789',
        email: 'info@mumishop.com',
        address: 'Warszawa, Nowy Świat 25',
        schedule: 'Codziennie 10:00-21:00'
      },
      bottom: {
        copyright: '© 2025 MumiShop. Wszelkie prawa zastrzeżone.',
        privacy: 'Polityka prywatności',
        terms: 'Warunki użytkowania'
      }
    },
    
    // Opinie klientów
    testimonials: {
      customers: [
        {
          name: 'Anna Kowalska',
          role: 'Szczęśliwa panna młoda',
          text: 'Niesamowicie piękna biżuteria! Kolczyki na ślub okazały się po prostu magiczne. Jakość przewyższyła wszystkie oczekiwania, a projekt jest wyjątkowy.',
          location: 'Warszawa'
        },
        {
          name: 'Maria Nowak',
          role: 'Kolekcjonerka biżuterii',
          text: 'Mam dużą kolekcję biżuterii, ale te elementy są wyjątkowe. Każdy element to jak dzieło sztuki. Na pewno zamówię więcej!',
          location: 'Kraków'
        },
        {
          name: 'Elena Wiśniewska',
          role: 'Prezent dla mamy',
          text: 'Kupiłam bransoletkę na jubileusz mamy. Była zachwycona! Luksusowe opakowanie, a sama biżuteria po prostu wspaniała. Dziękuję za emocje!',
          location: 'Gdańsk'
        },
        {
          name: 'Daria Kamińska',
          role: 'Młoda mama',
          text: 'Zamówiłam wisiorek z kamieniem ochronnym. Otrzymałam nie tylko piękną biżuterię, ale także niesamowitą energię. Noszę bez zdejmowania!',
          location: 'Wrocław'
        },
        {
          name: 'Olga Lewandowska',
          role: 'Nauczycielka',
          text: 'Długo szukałam stylowych kolczyków do pracy. Te są idealne - eleganckie, ale nie krzykliwe. Koleżanki ciągle pytają, gdzie je kupiłam!',
          location: 'Poznań'
        },
        {
          name: 'Wiktoria Zielińska',
          role: 'Projektantka',
          text: 'Jako projektantka cenię oryginalność i jakość wykonania. Te elementy to prawdziwa sztuka! Będę polecać wszystkim przyjaciółkom.',
          location: 'Łódź'
        }
      ]
    },
    
    // Kategorie produktów
    categories: {
      rings: 'Pierścionki',
      earrings: 'Kolczyki',
      necklaces: 'Naszyjniki',
      bracelets: 'Bransoletki', 
      pendants: 'Wisiorki',
      hairpins: 'Spinki do włosów',
      sets: 'Komplety'
    },
    
    // Tłumaczenia nazw produktów
    productNames: {
      'Сапфировые серьги "Королевский блеск"': 'Kolczyki szafirowe "Królewski blask"',
      'Рубиновый браслет "Алая страсть"': 'Bransoletka rubinowa "Szkarłatna pasja"',
      'Изумрудное колье "Лесная магия"': 'Naszyjnik szmaragdowy "Leśna magia"',
      'Бриллиантовое кольцо "Вечная любовь"': 'Pierścionek diamentowy "Wieczna miłość"',
      'Золотые серьги с топазом': 'Złote kolczyki z topazem',
      'Серебряный браслет с аметистом': 'Srebrna bransoletka z ametystem',
      'Серьги "Ангельские крылья"': 'Kolczyki "Anielskie skrzydła"',
      'Кольцо "Вечность"': 'Pierścionek "Wieczność"',
      'Колье "Звездная ночь"': 'Naszyjnik "Gwiezdna noc"',
      'Браслет "Весенний сад"': 'Bransoletka "Wiosenny ogród"',
      'Серьги "Лунные капли"': 'Kolczyki "Księżycowe krople"'
    },
    
    productDescriptions: {
      'Элегантные серьги с натуральными сапфирами в золотой оправе': 'Eleganckie kolczyki z naturalnymi szafirami w złotej oprawie',
      'Роскошный браслет с рубинами, символ страсти и силы': 'Luksusowa bransoletka z rubinami, symbol pasji i siły',
      'Изысканное колье с изумрудами, воплощение природной красоты': 'Wykwintny naszyjnik ze szmaragdami, ucieleśnienie naturalnego piękna',
      'Классическое кольцо с бриллиантом, символ вечной любви': 'Klasyczny pierścionek z brylantem, symbol wiecznej miłości',
      'Утонченные серьги с голубым топазом': 'Wyrafinowane kolczyki z błękitnym topazem',
      'Стильный браслет с фиолетовым аметистом': 'Stylowa bransoletka z fioletowym ametystem',
      'Воздушные серьги с перьевидным дизайном': 'Zwiewne kolczyki z motywem piór',
      'Элегантное кольцо с бриллиантами': 'Elegancki pierścionek z brylantami',
      'Изысканное колье с звездными мотивами': 'Wykwintny naszyjnik z motywami gwiazd',
      'Нежный браслет с цветочными элементами': 'Delikatna bransoletka z kwiatowymi elementami',
      'Романтичные серьги в форме капель': 'Romantyczne kolczyki w kształcie kropli',
      'Роскошное колье из золота с сапфирами': 'Luksusowy złoty naszyjnik z szafirami',
      'Изящный браслет с фианитами, имитирующими весенние цветы': 'Delikatna bransoletka z cyrkoniami imitującymi wiosenne kwiaty',
      'Элегантные серьги из серебра 925 пробы с натуральным жемчугом': 'Eleganckie kolczyki ze srebra 925 z naturalnymi perłami'
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

// Функция для перевода названий товаров
export const translateProductName = (name: string, language: Language): string => {
  const productNames = translations[language]?.productNames as Record<string, string>;
  return productNames?.[name] || name;
};

// Функция для перевода описаний товаров
export const translateProductDescription = (description: string, language: Language): string => {
  const productDescriptions = translations[language]?.productDescriptions as Record<string, string>;
  return productDescriptions?.[description] || description;
};

// Функция для форматирования валют в зависимости от языка
export const formatCurrency = (amount: number, language: Language): string => {
  const currencyConfig = {
    ru: { locale: 'ru-RU', currency: 'RUB' },
    en: { locale: 'en-US', currency: 'USD' },
    pl: { locale: 'pl-PL', currency: 'PLN' }
  };

  const { locale, currency } = currencyConfig[language] || currencyConfig.ru;
  
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0
  }).format(amount);
};
