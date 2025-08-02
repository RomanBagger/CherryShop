import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Параметры фильтрации
    const category = searchParams.get('category');
    const materials = searchParams.get('materials')?.split(',');
    const priceMin = searchParams.get('priceMin') ? parseFloat(searchParams.get('priceMin')!) : undefined;
    const priceMax = searchParams.get('priceMax') ? parseFloat(searchParams.get('priceMax')!) : undefined;
    const inStock = searchParams.get('inStock') === 'true';
    const featured = searchParams.get('featured') === 'true';
    const search = searchParams.get('search');
    
    // Параметры пагинации
    const page = parseInt(searchParams.get('page') || '1');
    const limit = Math.min(parseInt(searchParams.get('limit') || '12'), 50);
    const skip = (page - 1) * limit;
    
    // Параметры сортировки
    const sortBy = searchParams.get('sortBy') || 'createdAt';
    const sortOrder = searchParams.get('sortOrder') === 'asc' ? 'asc' : 'desc';

    // Построение фильтров
    const where: any = {};
    
    if (category) {
      where.category = category;
    }
    
    if (priceMin !== undefined || priceMax !== undefined) {
      where.price = {};
      if (priceMin !== undefined) where.price.gte = priceMin;
      if (priceMax !== undefined) where.price.lte = priceMax;
    }
    
    if (inStock) {
      where.inStock = true;
      where.stockQuantity = { gt: 0 };
    }
    
    if (featured) {
      where.featured = true;
    }
    
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } }
      ];
    }
    
    if (materials && materials.length > 0) {
      where.materials = {
        some: {
          material: {
            type: { in: materials }
          }
        }
      };
    }

    // Построение сортировки
    const orderBy: any = {};
    if (sortBy === 'price') {
      orderBy.price = sortOrder;
    } else if (sortBy === 'name') {
      orderBy.name = sortOrder;
    } else {
      orderBy.createdAt = sortOrder;
    }

    // Получение товаров
    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        include: {
          images: {
            orderBy: { order: 'asc' }
          },
          materials: {
            include: {
              material: true
            }
          }
        },
        orderBy,
        skip,
        take: limit
      }),
      prisma.product.count({ where })
    ]);

    // Преобразование данных для фронтенда
    const transformedProducts = products.map((product: any) => ({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      inStock: product.inStock,
      stockQuantity: product.stockQuantity,
      weight: product.weight,
      dimensions: {
        length: product.length,
        width: product.width,
        height: product.height,
        diameter: product.diameter
      },
      featured: product.featured,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
      images: product.images.map((img: any) => ({
        id: img.id,
        url: img.url,
        alt: img.alt,
        isPrimary: img.isPrimary,
        order: img.order
      })),
      materials: product.materials.map((pm: any) => ({
        id: pm.material.id,
        name: pm.material.name,
        type: pm.material.type,
        purity: pm.material.purity
      }))
    }));

    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      success: true,
      data: transformedProducts,
      pagination: {
        page,
        limit,
        total,
        totalPages
      }
    });

  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      name,
      description,
      price,
      category,
      inStock = true,
      stockQuantity = 0,
      weight,
      length,
      width,
      height,
      diameter,
      featured = false,
      images = [],
      materialIds = []
    } = body;

    // Валидация обязательных полей
    if (!name || !description || !price || !category) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: name, description, price, category' },
        { status: 400 }
      );
    }

    // Проверяем существование материалов
    if (materialIds.length > 0) {
      const existingMaterials = await prisma.material.findMany({
        where: { id: { in: materialIds } }
      });

      if (existingMaterials.length !== materialIds.length) {
        return NextResponse.json(
          { success: false, error: 'Some materials not found' },
          { status: 400 }
        );
      }
    }

    // Создаем товар
    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        category,
        inStock,
        stockQuantity: parseInt(stockQuantity),
        weight: weight ? parseFloat(weight) : null,
        length: length ? parseFloat(length) : null,
        width: width ? parseFloat(width) : null,
        height: height ? parseFloat(height) : null,
        diameter: diameter ? parseFloat(diameter) : null,
        featured,
        images: {
          create: images.map((img: any, index: number) => ({
            url: img.url,
            alt: img.alt || name,
            isPrimary: index === 0,
            order: index
          }))
        },
        materials: {
          create: materialIds.map((materialId: string) => ({
            materialId
          }))
        }
      },
      include: {
        images: {
          orderBy: { order: 'asc' }
        },
        materials: {
          include: {
            material: true
          }
        }
      }
    });

    // Преобразование данных для фронтенда
    const transformedProduct = {
      id: newProduct.id,
      name: newProduct.name,
      description: newProduct.description,
      price: newProduct.price,
      category: newProduct.category,
      inStock: newProduct.inStock,
      stockQuantity: newProduct.stockQuantity,
      weight: newProduct.weight,
      dimensions: {
        length: newProduct.length,
        width: newProduct.width,
        height: newProduct.height,
        diameter: newProduct.diameter
      },
      featured: newProduct.featured,
      createdAt: newProduct.createdAt,
      updatedAt: newProduct.updatedAt,
      images: newProduct.images.map((img: any) => ({
        id: img.id,
        url: img.url,
        alt: img.alt,
        isPrimary: img.isPrimary,
        order: img.order
      })),
      materials: newProduct.materials.map((pm: any) => ({
        id: pm.material.id,
        name: pm.material.name,
        type: pm.material.type,
        purity: pm.material.purity
      }))
    };

    return NextResponse.json({
      success: true,
      data: transformedProduct
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create product' },
      { status: 500 }
    );
  }
}
