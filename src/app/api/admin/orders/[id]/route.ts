import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Получить конкретный заказ
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const order = await prisma.order.findUnique({
      where: { id: params.id },
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
              include: {
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
      }
    });

    if (!order) {
      return NextResponse.json(
        { error: 'Заказ не найден' },
        { status: 404 }
      );
    }

    return NextResponse.json(order);
  } catch (error) {
    console.error('Error fetching order:', error);
    return NextResponse.json(
      { error: 'Ошибка при получении заказа' },
      { status: 500 }
    );
  }
}

// Обновить статус заказа
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { status, paymentStatus, trackingNumber, notes } = body;

    const updatedOrder = await prisma.order.update({
      where: { id: params.id },
      data: {
        ...(status && { status: status.toUpperCase() }),
        ...(paymentStatus && { paymentStatus: paymentStatus.toUpperCase() }),
        ...(trackingNumber !== undefined && { trackingNumber }),
        ...(notes !== undefined && { notes }),
        updatedAt: new Date()
      },
      include: {
        user: true,
        items: {
          include: {
            product: true
          }
        },
        shippingAddress: true,
        billingAddress: true
      }
    });

    return NextResponse.json(updatedOrder);
  } catch (error) {
    console.error('Error updating order:', error);
    return NextResponse.json(
      { error: 'Ошибка при обновлении заказа' },
      { status: 500 }
    );
  }
}

// Удалить заказ
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const order = await prisma.order.findUnique({
      where: { id: params.id },
      include: {
        items: true
      }
    });

    if (!order) {
      return NextResponse.json(
        { error: 'Заказ не найден' },
        { status: 404 }
      );
    }

    // Если заказ не отменен и не доставлен, возвращаем товары на склад
    if (!['CANCELLED', 'DELIVERED'].includes(order.status)) {
      for (const item of order.items) {
        await prisma.product.update({
          where: { id: item.productId },
          data: {
            stockQuantity: {
              increment: item.quantity
            }
          }
        });
      }
    }

    await prisma.order.delete({
      where: { id: params.id }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting order:', error);
    return NextResponse.json(
      { error: 'Ошибка при удалении заказа' },
      { status: 500 }
    );
  }
}
