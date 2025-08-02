import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Обновить количество товара в корзине
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();
    const { quantity } = body;

    if (!quantity || quantity < 1) {
      return NextResponse.json(
        { success: false, error: 'Quantity must be at least 1' },
        { status: 400 }
      );
    }

    // Находим элемент корзины
    const cartItem = await prisma.cartItem.findUnique({
      where: { id },
      include: { product: true }
    });

    if (!cartItem) {
      return NextResponse.json(
        { success: false, error: 'Cart item not found' },
        { status: 404 }
      );
    }

    // Проверяем доступность товара
    if (!cartItem.product.inStock || cartItem.product.stockQuantity < quantity) {
      return NextResponse.json(
        { success: false, error: 'Insufficient stock' },
        { status: 400 }
      );
    }

    // Обновляем количество
    const updatedItem = await prisma.cartItem.update({
      where: { id },
      data: { quantity },
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
    });

    // Получаем обновленную корзину
    const cart = await prisma.cart.findUnique({
      where: { id: cartItem.cartId },
      include: {
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
        }
      }
    });

    // Преобразование данных для фронтенда
    const transformedCart = {
      id: cart!.id,
      userId: cart!.userId,
      items: cart!.items.map((item: any) => ({
        id: item.id,
        quantity: item.quantity,
        product: {
          id: item.product.id,
          name: item.product.name,
          price: item.product.price,
          category: item.product.category,
          inStock: item.product.inStock,
          stockQuantity: item.product.stockQuantity,
          image: item.product.images[0]?.url || null
        }
      })),
      total: cart!.items.reduce((sum: number, item: any) => 
        sum + (item.quantity * item.product.price), 0
      ),
      itemCount: cart!.items.reduce((sum: number, item: any) => sum + item.quantity, 0),
      createdAt: cart!.createdAt,
      updatedAt: cart!.updatedAt
    };

    return NextResponse.json({
      success: true,
      data: transformedCart,
      message: 'Cart item updated successfully'
    });

  } catch (error) {
    console.error('Error updating cart item:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update cart item' },
      { status: 500 }
    );
  }
}

// Удалить товар из корзины
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // Находим элемент корзины
    const cartItem = await prisma.cartItem.findUnique({
      where: { id }
    });

    if (!cartItem) {
      return NextResponse.json(
        { success: false, error: 'Cart item not found' },
        { status: 404 }
      );
    }

    // Удаляем элемент корзины
    await prisma.cartItem.delete({
      where: { id }
    });

    // Получаем обновленную корзину
    const cart = await prisma.cart.findUnique({
      where: { id: cartItem.cartId },
      include: {
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
        }
      }
    });

    // Преобразование данных для фронтенда
    const transformedCart = {
      id: cart!.id,
      userId: cart!.userId,
      items: cart!.items.map((item: any) => ({
        id: item.id,
        quantity: item.quantity,
        product: {
          id: item.product.id,
          name: item.product.name,
          price: item.product.price,
          category: item.product.category,
          inStock: item.product.inStock,
          stockQuantity: item.product.stockQuantity,
          image: item.product.images[0]?.url || null
        }
      })),
      total: cart!.items.reduce((sum: number, item: any) => 
        sum + (item.quantity * item.product.price), 0
      ),
      itemCount: cart!.items.reduce((sum: number, item: any) => sum + item.quantity, 0),
      createdAt: cart!.createdAt,
      updatedAt: cart!.updatedAt
    };

    return NextResponse.json({
      success: true,
      data: transformedCart,
      message: 'Cart item removed successfully'
    });

  } catch (error) {
    console.error('Error deleting cart item:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete cart item' },
      { status: 500 }
    );
  }
}
