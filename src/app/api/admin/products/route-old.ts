import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Получить все товары для админа
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: {
        images: true
      },
      orderBy: { createdAt: 'desc' }
    });
    
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Ошибка при получении товаров' },
      { status: 500 }
    );
  }
}

// Создать новый товар
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      name, 
      description, 
      price, 
      category, 
      stockQuantity, 
      featured = false, 
      inStock = true 
    } = body;

    const product = await prisma.product.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        category,
        stockQuantity: parseInt(stockQuantity),
        featured: Boolean(featured),
        inStock: Boolean(inStock),
        weight: null,
        length: null,
        width: null,
        height: null,
        diameter: null
      },
      include: {
        images: true
      }
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { error: 'Ошибка при создании товара' },
      { status: 500 }
    );
  }
}
    
    // Валидация данных
    if (!name || !price || !category || stock === undefined) {
      return NextResponse.json(
        { error: 'Обязательные поля: название, цена, категория, количество' },
        { status: 400 }
      );
    }

    // Маппинг категорий с русского на английский для enum
    const categoryMap: { [key: string]: string } = {
      'Серьги': 'EARRINGS',
      'Браслеты': 'BRACELETS',
      'Ожерелья': 'NECKLACES',
      'Кольца': 'RINGS',
      'Наборы': 'SETS',
      'Кулоны': 'PENDANTS'
    };
    
    const product = await prisma.product.create({
      data: {
        name,
        description: description || '',
        price: parseFloat(price),
        category: categoryMap[category] || 'PENDANTS', // Fallback
        stockQuantity: parseInt(stock),
        inStock: parseInt(stock) > 0
      }
    });

    // Если есть изображение, создаем запись в ProductImage
    if (image) {
      await prisma.productImage.create({
        data: {
          productId: product.id,
          url: image,
          alt: name,
          isPrimary: true
        }
      });
    }
    
    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { error: 'Ошибка при создании товара' },
      { status: 500 }
    );
  }
}

// Обновить товар
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, name, description, price, category, stock, image } = body;
    
    if (!id) {
      return NextResponse.json(
        { error: 'ID товара обязателен' },
        { status: 400 }
      );
    }

    // Маппинг категорий с русского на английский для enum
    const categoryMap: { [key: string]: string } = {
      'Серьги': 'EARRINGS',
      'Браслеты': 'BRACELETS',
      'Ожерелья': 'NECKLACES',
      'Кольца': 'RINGS',
      'Наборы': 'SETS',
      'Кулоны': 'PENDANTS'
    };
    
    const product = await prisma.product.update({
      where: { id },
      data: {
        name,
        description,
        price: parseFloat(price),
        category: categoryMap[category] || 'PENDANTS',
        stockQuantity: parseInt(stock),
        inStock: parseInt(stock) > 0
      }
    });

    // Обновляем изображение если оно изменилось
    if (image) {
      // Сначала удаляем старые изображения
      await prisma.productImage.deleteMany({
        where: { productId: id }
      });
      
      // Добавляем новое изображение
      await prisma.productImage.create({
        data: {
          productId: id,
          url: image,
          alt: name,
          isPrimary: true
        }
      });
    }
    
    return NextResponse.json(product);
  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.json(
      { error: 'Ошибка при обновлении товара' },
      { status: 500 }
    );
  }
}

// Удалить товар
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { error: 'ID товара обязателен' },
        { status: 400 }
      );
    }
    
    await prisma.product.delete({
      where: { id }
    });
    
    return NextResponse.json({ message: 'Товар удален успешно' });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json(
      { error: 'Ошибка при удалении товара' },
      { status: 500 }
    );
  }
}
