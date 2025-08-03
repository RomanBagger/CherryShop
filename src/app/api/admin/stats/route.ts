import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Получаем статистику по товарам
    const totalProducts = await prisma.product.count();
    
    // Товары с низким остатком (менее 5 штук)
    const lowStockProducts = await prisma.product.count({
      where: {
        stockQuantity: {
          lt: 5
        }
      }
    });

    // Общая стоимость товаров в наличии
    const productsValue = await prisma.product.aggregate({
      _sum: {
        price: true
      },
      where: {
        inStock: true
      }
    });

    // Самые популярные категории
    const categoryStats = await prisma.product.groupBy({
      by: ['category'],
      _count: {
        category: true
      },
      orderBy: {
        _count: {
          category: 'desc'
        }
      }
    });

    // Товары с низким остатком для отображения
    const lowStockList = await prisma.product.findMany({
      where: {
        stockQuantity: {
          lt: 5
        }
      },
      select: {
        id: true,
        name: true,
        stockQuantity: true
      },
      orderBy: {
        stockQuantity: 'asc'
      }
    });

    const stats = {
      totalProducts,
      lowStockProducts,
      totalValue: productsValue._sum.price || 0,
      categoryStats,
      lowStockList,
      // Заглушки для других показателей
      totalOrders: 45,
      totalCustomers: 128,
      totalRevenue: 156780
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching admin stats:', error);
    return NextResponse.json(
      { error: 'Ошибка при получении статистики' },
      { status: 500 }
    );
  }
}
