import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Получить корзину пользователя
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'User ID is required' },
        { status: 400 }
      );
    }

    // Находим или создаем корзину для пользователя
    let cart = await prisma.cart.findUnique({
      where: { userId },
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

    if (!cart) {
      cart = await prisma.cart.create({
        data: { userId },
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
    }

    // Преобразование данных для фронтенда
    const transformedCart = {
      id: cart.id,
      userId: cart.userId,
      items: cart.items.map((item: any) => ({
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
      total: cart.items.reduce((sum: number, item: any) => 
        sum + (item.quantity * item.product.price), 0
      ),
      itemCount: cart.items.reduce((sum: number, item: any) => sum + item.quantity, 0),
      createdAt: cart.createdAt,
      updatedAt: cart.updatedAt
    };

    return NextResponse.json({
      success: true,
      data: transformedCart
    });

  } catch (error) {
    console.error('Error fetching cart:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch cart' },
      { status: 500 }
    );
  }
}

// Добавить товар в корзину
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, productId, quantity = 1 } = body;

    if (!userId || !productId) {
      return NextResponse.json(
        { success: false, error: 'User ID and Product ID are required' },
        { status: 400 }
      );
    }

    // Проверяем существование товара
    const product = await prisma.product.findUnique({
      where: { id: productId }
    });

    if (!product) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      );
    }

    // Проверяем наличие товара
    if (!product.inStock || product.stockQuantity < quantity) {
      return NextResponse.json(
        { success: false, error: 'Insufficient stock' },
        { status: 400 }
      );
    }

    // Находим или создаем корзину
    let cart = await prisma.cart.findUnique({
      where: { userId }
    });

    if (!cart) {
      cart = await prisma.cart.create({
        data: { userId }
      });
    }

    // Проверяем, есть ли уже этот товар в корзине
    const existingItem = await prisma.cartItem.findUnique({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId
        }
      }
    });

    let cartItem;
    if (existingItem) {
      // Обновляем количество
      const newQuantity = existingItem.quantity + quantity;
      
      // Проверяем доступность для нового количества
      if (newQuantity > product.stockQuantity) {
        return NextResponse.json(
          { success: false, error: 'Insufficient stock for requested quantity' },
          { status: 400 }
        );
      }

      cartItem = await prisma.cartItem.update({
        where: { id: existingItem.id },
        data: { quantity: newQuantity },
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
    } else {
      // Создаем новый элемент корзины
      cartItem = await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productId,
          quantity
        },
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
    }

    // Получаем обновленную корзину
    const updatedCart = await prisma.cart.findUnique({
      where: { id: cart.id },
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
      id: updatedCart!.id,
      userId: updatedCart!.userId,
      items: updatedCart!.items.map((item: any) => ({
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
      total: updatedCart!.items.reduce((sum: number, item: any) => 
        sum + (item.quantity * item.product.price), 0
      ),
      itemCount: updatedCart!.items.reduce((sum: number, item: any) => sum + item.quantity, 0),
      createdAt: updatedCart!.createdAt,
      updatedAt: updatedCart!.updatedAt
    };

    return NextResponse.json({
      success: true,
      data: transformedCart,
      message: 'Product added to cart successfully'
    });

  } catch (error) {
    console.error('Error adding to cart:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to add product to cart' },
      { status: 500 }
    );
  }
}
