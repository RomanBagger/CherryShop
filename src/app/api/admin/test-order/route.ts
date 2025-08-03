import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST() {
  try {
    // Получаем данные для создания тестового заказа
    const products = await prisma.product.findMany({ take: 2 });
    const user = await prisma.user.findFirst({ where: { role: 'CUSTOMER' } });
    const address = await prisma.address.findFirst();

    if (!products.length || !user || !address) {
      return NextResponse.json(
        { error: 'Недостаточно данных для создания заказа' },
        { status: 400 }
      );
    }

    // Генерируем номер заказа
    const orderCount = await prisma.order.count();
    const orderNumber = `ORD-${String(orderCount + 1).padStart(4, '0')}`;

    // Создаем заказ
    const order = await prisma.order.create({
      data: {
        orderNumber,
        userId: user.id,
        customerName: `${user.firstName} ${user.lastName}`,
        customerEmail: user.email,
        customerPhone: user.phone,
        totalAmount: products[0].price * 2 + (products[1]?.price || 0),
        status: 'PENDING',
        paymentStatus: 'PENDING',
        shippingAddressId: address.id,
        billingAddressId: address.id,
        notes: 'Тестовый заказ создан через API',
        items: {
          create: [
            {
              productId: products[0].id,
              quantity: 2,
              priceAtTime: products[0].price
            },
            ...(products[1] ? [{
              productId: products[1].id,
              quantity: 1,
              priceAtTime: products[1].price
            }] : [])
          ]
        }
      },
      include: {
        items: {
          include: {
            product: true
          }
        },
        user: true
      }
    });

    return NextResponse.json({ 
      success: true, 
      order,
      message: `Тестовый заказ ${orderNumber} создан` 
    });
  } catch (error) {
    console.error('Error creating test order:', error);
    return NextResponse.json(
      { error: 'Ошибка при создании тестового заказа' },
      { status: 500 }
    );
  }
}
