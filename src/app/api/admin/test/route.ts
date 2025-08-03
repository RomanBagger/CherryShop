import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Тестовые операции для демонстрации функциональности
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, productId } = body;

    switch (action) {
      case 'markOutOfStock':
        // Отмечаем товар как закончившийся
        const outOfStockProduct = await prisma.product.update({
          where: { id: productId },
          data: {
            stockQuantity: 0,
            inStock: false,
            updatedAt: new Date()
          }
        });
        return NextResponse.json({ 
          message: 'Товар отмечен как закончившийся', 
          product: outOfStockProduct 
        });

      case 'makeLowStock':
        // Делаем товар с малым остатком
        const lowStockProduct = await prisma.product.update({
          where: { id: productId },
          data: {
            stockQuantity: 3,
            inStock: true,
            updatedAt: new Date()
          }
        });
        return NextResponse.json({ 
          message: 'Товар отмечен как заканчивающийся', 
          product: lowStockProduct 
        });

      case 'restoreStock':
        // Восстанавливаем нормальный остаток
        const restoredProduct = await prisma.product.update({
          where: { id: productId },
          data: {
            stockQuantity: 50,
            inStock: true,
            updatedAt: new Date()
          }
        });
        return NextResponse.json({ 
          message: 'Товар восстановлен в наличии', 
          product: restoredProduct 
        });

      case 'createTestProduct':
        // Создаем тестовый товар
        const testProduct = await prisma.product.create({
          data: {
            name: 'Тестовые серьги (для демо)',
            description: 'Тестовый товар для демонстрации функциональности админ панели',
            price: 299900, // 2999 рублей в копейках
            category: 'EARRINGS',
            stockQuantity: 1, // Создаем с малым остатком
            featured: false,
            inStock: true,
            weight: null,
            length: null,
            width: null,
            height: null,
            diameter: null
          }
        });
        return NextResponse.json({ 
          message: 'Тестовый товар создан', 
          product: testProduct 
        });

      default:
        return NextResponse.json(
          { error: 'Неизвестное действие' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('Test API Error:', error);
    return NextResponse.json(
      { error: 'Ошибка при выполнении тестового действия' },
      { status: 500 }
    );
  }
}

// Получить список товаров для тестирования
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      select: {
        id: true,
        name: true,
        stockQuantity: true,
        inStock: true,
        price: true
      },
      orderBy: { name: 'asc' }
    });

    return NextResponse.json({
      products,
      message: 'Используйте POST запросы с действиями: markOutOfStock, makeLowStock, restoreStock, createTestProduct'
    });
  } catch (error) {
    console.error('Test API GET Error:', error);
    return NextResponse.json(
      { error: 'Ошибка при получении товаров' },
      { status: 500 }
    );
  }
}
