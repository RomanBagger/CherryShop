import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Получить конкретный товар
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const product = await prisma.product.findUnique({
      where: { id: params.id },
      include: {
        images: true
      }
    });

    if (!product) {
      return NextResponse.json(
        { error: 'Товар не найден' },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { error: 'Ошибка при получении товара' },
      { status: 500 }
    );
  }
}

// Обновить товар
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { 
      name, 
      description, 
      price, 
      category, 
      stockQuantity, 
      featured, 
      inStock 
    } = body;

    const parsedStockQuantity = parseInt(stockQuantity);
    const calculatedInStock = parsedStockQuantity > 0;

    const updatedProduct = await prisma.product.update({
      where: { id: params.id },
      data: {
        name,
        description,
        price: parseFloat(price),
        category,
        stockQuantity: parsedStockQuantity,
        featured: Boolean(featured),
        inStock: calculatedInStock, // Автоматически false если stockQuantity = 0
        updatedAt: new Date()
      },
      include: {
        images: true
      }
    });

    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.json(
      { error: 'Ошибка при обновлении товара' },
      { status: 500 }
    );
  }
}

// Удалить товар
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Сначала удаляем все связанные изображения
    await prisma.productImage.deleteMany({
      where: { productId: params.id }
    });

    // Затем удаляем сам товар
    await prisma.product.delete({
      where: { id: params.id }
    });

    return NextResponse.json({ message: 'Товар успешно удален' });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json(
      { error: 'Ошибка при удалении товара' },
      { status: 500 }
    );
  }
}
