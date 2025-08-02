import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Получить все материалы
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    const where: any = {};
    if (type) {
      where.type = type;
    }

    const materials = await prisma.material.findMany({
      where,
      orderBy: { name: 'asc' }
    });

    return NextResponse.json({
      success: true,
      data: materials
    });

  } catch (error) {
    console.error('Error fetching materials:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch materials' },
      { status: 500 }
    );
  }
}

// Создать новый материал
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, type, purity } = body;

    // Валидация обязательных полей
    if (!name || !type) {
      return NextResponse.json(
        { success: false, error: 'Name and type are required' },
        { status: 400 }
      );
    }

    // Проверяем уникальность имени
    const existingMaterial = await prisma.material.findUnique({
      where: { name }
    });

    if (existingMaterial) {
      return NextResponse.json(
        { success: false, error: 'Material with this name already exists' },
        { status: 400 }
      );
    }

    const newMaterial = await prisma.material.create({
      data: {
        name,
        type,
        purity: purity || null
      }
    });

    return NextResponse.json({
      success: true,
      data: newMaterial
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating material:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create material' },
      { status: 500 }
    );
  }
}
