import { NextResponse } from 'next/server';

// Простая проверка авторизации для админа
export async function GET() {
  // В реальном приложении здесь будет проверка JWT токена или сессии
  return NextResponse.json({ message: 'Admin access granted' });
}

export async function POST(request: Request) {
  const { username, password } = await request.json();
  
  // Простая проверка (в реальности должна быть безопасная аутентификация)
  if (username === 'admin' && password === 'admin123') {
    return NextResponse.json({ 
      success: true, 
      token: 'admin-token-123',
      message: 'Успешный вход в админ-панель' 
    });
  }
  
  return NextResponse.json({ 
    success: false, 
    message: 'Неверный логин или пароль' 
  }, { status: 401 });
}
