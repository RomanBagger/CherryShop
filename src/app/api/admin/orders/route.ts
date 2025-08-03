import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Получить все заказы для админа
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    // Построение фильтров
    const where: any = {};
    if (status && status !== 'all') {
      where.status = status.toUpperCase();
    }

    // Получение заказов с полной информацией
    const [orders, total] = await Promise.all([
      prisma.order.findMany({
        where,
        include: {
          user: {
            select: {
              id: true,
              email: true,
              firstName: true,
              lastName: true,
              phone: true
            }
          },
          items: {
            include: {
              product: {
                select: {
                  id: true,
                  name: true,
                  price: true,
                  images: {
                    where: { isPrimary: true },
                    take: 1
                  }
                }
              }
            }
          },
          shippingAddress: true,
          billingAddress: true
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit
      }),
      prisma.order.count({ where })
    ]);

    // Преобразование данных
    const transformedOrders = orders.map(order => ({
      id: order.id,
      orderNumber: order.orderNumber,
      customerName: order.customerName,
      customerEmail: order.customerEmail,
      customerPhone: order.customerPhone,
      totalAmount: order.totalAmount,
      status: order.status,
      paymentStatus: order.paymentStatus,
      trackingNumber: order.trackingNumber,
      notes: order.notes,
      createdAt: order.createdAt,
      updatedAt: order.updatedAt,
      user: order.user,
      items: order.items.map(item => ({
        id: item.id,
        quantity: item.quantity,
        priceAtTime: item.priceAtTime,
        product: item.product
      })),
      shippingAddress: order.shippingAddress,
      billingAddress: order.billingAddress,
      itemsCount: order.items.length,
      totalItems: order.items.reduce((sum, item) => sum + item.quantity, 0)
    }));

    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      orders: transformedOrders,
      pagination: {
        page,
        limit,
        total,
        totalPages
      }
    });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { error: 'Ошибка при получении заказов' },
      { status: 500 }
    );
  }
}

// Создать новый заказ (для тестирования)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      userId, 
      items, 
      shippingAddressId, 
      billingAddressId,
      customerName,
      customerEmail,
      customerPhone,
      notes 
    } = body;

    // Генерируем номер заказа
    const orderCount = await prisma.order.count();
    const orderNumber = `ORD-${String(orderCount + 1).padStart(4, '0')}`;

    // Вычисляем общую сумму
    let totalAmount = 0;
    const orderItems = [];

    for (const item of items) {
      const product = await prisma.product.findUnique({
        where: { id: item.productId }
      });

      if (!product) {
        return NextResponse.json(
          { error: `Товар с ID ${item.productId} не найден` },
          { status: 400 }
        );
      }

      const itemTotal = product.price * item.quantity;
      totalAmount += itemTotal;

      orderItems.push({
        productId: item.productId,
        quantity: item.quantity,
        priceAtTime: product.price
      });
    }

    // Создаем заказ
    const order = await prisma.order.create({
      data: {
        orderNumber,
        userId,
        totalAmount,
        customerName,
        customerEmail,
        customerPhone,
        shippingAddressId,
        billingAddressId,
        notes: notes || '',
        items: {
          create: orderItems
        }
      },
      include: {
        items: {
          include: {
            product: true
          }
        },
        user: true,
        shippingAddress: true,
        billingAddress: true
      }
    });

    // Обновляем количество товаров на складе
    for (const item of items) {
      await prisma.product.update({
        where: { id: item.productId },
        data: {
          stockQuantity: {
            decrement: item.quantity
          }
        }
      });
    }

    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { error: 'Ошибка при создании заказа' },
      { status: 500 }
    );
  }
}
