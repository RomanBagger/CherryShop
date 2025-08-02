import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        images: {
          orderBy: { order: 'asc' }
        },
        materials: {
          include: {
            material: true
          }
        }
      }
    });

    if (!product) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      );
    }

    // Преобразование данных для фронтенда
    const transformedProduct = {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      inStock: product.inStock,
      stockQuantity: product.stockQuantity,
      weight: product.weight,
      dimensions: {
        length: product.length,
        width: product.width,
        height: product.height,
        diameter: product.diameter
      },
      featured: product.featured,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
      images: product.images.map((img: any) => ({
        id: img.id,
        url: img.url,
        alt: img.alt,
        isPrimary: img.isPrimary,
        order: img.order
      })),
      materials: product.materials.map((pm: any) => ({
        id: pm.material.id,
        name: pm.material.name,
        type: pm.material.type,
        purity: pm.material.purity
      }))
    };

    return NextResponse.json({
      success: true,
      data: transformedProduct
    });

  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();

    const {
      name,
      description,
      price,
      category,
      inStock,
      stockQuantity,
      weight,
      length,
      width,
      height,
      diameter,
      featured
    } = body;

    // Проверяем существование товара
    const existingProduct = await prisma.product.findUnique({
      where: { id }
    });

    if (!existingProduct) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      );
    }

    // Обновляем товар
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        name,
        description,
        price: parseFloat(price),
        category,
        inStock,
        stockQuantity: parseInt(stockQuantity),
        weight: weight ? parseFloat(weight) : null,
        length: length ? parseFloat(length) : null,
        width: width ? parseFloat(width) : null,
        height: height ? parseFloat(height) : null,
        diameter: diameter ? parseFloat(diameter) : null,
        featured
      },
      include: {
        images: {
          orderBy: { order: 'asc' }
        },
        materials: {
          include: {
            material: true
          }
        }
      }
    });

    // Преобразование данных для фронтенда
    const transformedProduct = {
      id: updatedProduct.id,
      name: updatedProduct.name,
      description: updatedProduct.description,
      price: updatedProduct.price,
      category: updatedProduct.category,
      inStock: updatedProduct.inStock,
      stockQuantity: updatedProduct.stockQuantity,
      weight: updatedProduct.weight,
      dimensions: {
        length: updatedProduct.length,
        width: updatedProduct.width,
        height: updatedProduct.height,
        diameter: updatedProduct.diameter
      },
      featured: updatedProduct.featured,
      createdAt: updatedProduct.createdAt,
      updatedAt: updatedProduct.updatedAt,
      images: updatedProduct.images.map((img: any) => ({
        id: img.id,
        url: img.url,
        alt: img.alt,
        isPrimary: img.isPrimary,
        order: img.order
      })),
      materials: updatedProduct.materials.map((pm: any) => ({
        id: pm.material.id,
        name: pm.material.name,
        type: pm.material.type,
        purity: pm.material.purity
      }))
    };

    return NextResponse.json({
      success: true,
      data: transformedProduct
    });

  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update product' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // Проверяем существование товара
    const existingProduct = await prisma.product.findUnique({
      where: { id }
    });

    if (!existingProduct) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      );
    }

    // Удаляем товар (каскадное удаление настроено в схеме)
    await prisma.product.delete({
      where: { id }
    });

    return NextResponse.json({
      success: true,
      message: 'Product deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete product' },
      { status: 500 }
    );
  }
}
