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

    // Валидация обязательных полей
    if (!name || !price || !category || stockQuantity === undefined) {
      return NextResponse.json(
        { error: 'Заполните все обязательные поля' },
        { status: 400 }
      );
    }

    const parsedStockQuantity = parseInt(stockQuantity);
    const calculatedInStock = parsedStockQuantity > 0;

    const product = await prisma.product.create({
      data: {
        name,
        description: description || '',
        price: parseFloat(price),
        category,
        stockQuantity: parsedStockQuantity,
        featured: Boolean(featured),
        inStock: calculatedInStock, // Автоматически false если stockQuantity = 0
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
