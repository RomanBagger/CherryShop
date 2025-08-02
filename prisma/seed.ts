import { PrismaClient, ProductCategory, MaterialType, UserRole } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Создаем материалы
  const materials = await Promise.all([
    prisma.material.upsert({
      where: { name: 'Серебро 925' },
      update: {},
      create: {
        name: 'Серебро 925',
        type: MaterialType.SILVER,
        purity: '925'
      }
    }),
    prisma.material.upsert({
      where: { name: 'Золото 585' },
      update: {},
      create: {
        name: 'Золото 585',
        type: MaterialType.GOLD,
        purity: '585'
      }
    }),
    prisma.material.upsert({
      where: { name: 'Жемчуг' },
      update: {},
      create: {
        name: 'Жемчуг',
        type: MaterialType.PEARL
      }
    }),
    prisma.material.upsert({
      where: { name: 'Фианиты' },
      update: {},
      create: {
        name: 'Фианиты',
        type: MaterialType.GEMSTONE
      }
    }),
    prisma.material.upsert({
      where: { name: 'Сапфиры' },
      update: {},
      create: {
        name: 'Сапфиры',
        type: MaterialType.GEMSTONE
      }
    }),
    prisma.material.upsert({
      where: { name: 'Бриллианты' },
      update: {},
      create: {
        name: 'Бриллианты',
        type: MaterialType.GEMSTONE
      }
    })
  ])

  console.log('✅ Materials created')

  // Создаем товары
  const products = [
    {
      name: 'Серьги "Лунные капли"',
      description: 'Элегантные серьги из серебра 925 пробы с натуральным жемчугом',
      price: 4500,
      category: ProductCategory.EARRINGS,
      inStock: true,
      stockQuantity: 5,
      featured: true,
      materials: ['Серебро 925', 'Жемчуг'],
      images: [{
        url: 'https://via.placeholder.com/400x400/F3F4F6/6B7280?text=Серьги',
        alt: 'Серьги Лунные капли',
        isPrimary: true,
        order: 1
      }]
    },
    {
      name: 'Браслет "Весенний сад"',
      description: 'Изящный браслет с фианитами, имитирующими весенние цветы',
      price: 6800,
      category: ProductCategory.BRACELETS,
      inStock: true,
      stockQuantity: 3,
      featured: true,
      materials: ['Серебро 925', 'Фианиты'],
      images: [{
        url: 'https://via.placeholder.com/400x400/F3F4F6/6B7280?text=Браслет',
        alt: 'Браслет Весенний сад',
        isPrimary: true,
        order: 1
      }]
    },
    {
      name: 'Колье "Звездная ночь"',
      description: 'Роскошное колье из золота с сапфирами',
      price: 25000,
      category: ProductCategory.NECKLACES,
      inStock: true,
      stockQuantity: 1,
      featured: true,
      materials: ['Золото 585', 'Сапфиры'],
      images: [{
        url: 'https://via.placeholder.com/400x400/F3F4F6/6B7280?text=Колье',
        alt: 'Колье Звездная ночь',
        isPrimary: true,
        order: 1
      }]
    },
    {
      name: 'Кольцо "Вечность"',
      description: 'Элегантное кольцо с бриллиантами',
      price: 45000,
      category: ProductCategory.RINGS,
      inStock: false,
      stockQuantity: 0,
      featured: false,
      materials: ['Золото 585', 'Бриллианты'],
      images: [{
        url: 'https://via.placeholder.com/400x400/F3F4F6/6B7280?text=Кольцо',
        alt: 'Кольцо Вечность',
        isPrimary: true,
        order: 1
      }]
    },
    {
      name: 'Серьги "Ангельские крылья"',
      description: 'Воздушные серьги с перьевидным дизайном',
      price: 3200,
      category: ProductCategory.EARRINGS,
      inStock: true,
      stockQuantity: 8,
      featured: false,
      materials: ['Серебро 925'],
      images: [{
        url: 'https://via.placeholder.com/400x400/F3F4F6/6B7280?text=Серьги+2',
        alt: 'Серьги Ангельские крылья',
        isPrimary: true,
        order: 1
      }]
    }
  ]

  for (const productData of products) {
    const { materials: materialNames, images, ...productInfo } = productData
    
    const product = await prisma.product.create({
      data: {
        ...productInfo,
        images: {
          create: images
        }
      }
    })

    // Связываем с материалами
    for (const materialName of materialNames) {
      const material = materials.find(m => m.name === materialName)
      if (material) {
        await prisma.productMaterial.create({
          data: {
            productId: product.id,
            materialId: material.id
          }
        })
      }
    }
  }

  console.log('✅ Products created')

  // Создаем админ пользователя
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@mumishop.com' },
    update: {},
    create: {
      email: 'admin@mumishop.com',
      firstName: 'Администратор',
      lastName: 'MumiShop',
      role: UserRole.ADMIN
    }
  })

  console.log('✅ Admin user created')

  // Создаем тестового пользователя
  const testUser = await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      firstName: 'Тест',
      lastName: 'Пользователь',
      phone: '+7 (900) 123-45-67',
      role: UserRole.CUSTOMER
    }
  })

  // Создаем адрес для тестового пользователя
  await prisma.address.create({
    data: {
      userId: testUser.id,
      type: 'SHIPPING',
      firstName: 'Тест',
      lastName: 'Пользователь',
      street: 'ул. Тестовая, 123',
      city: 'Москва',
      state: 'Московская область',
      zipCode: '123456',
      country: 'Россия',
      phone: '+7 (900) 123-45-67',
      isDefault: true
    }
  })

  console.log('✅ Test user and address created')

  console.log('🎉 Seeding completed!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
