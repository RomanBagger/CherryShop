'use client';

import { useState } from 'react';
import { getReliableImageUrl, handleImageError, getJewelryPlaceholder, generateSVGPlaceholder } from '@/utils/placeholder-images';

export default function ImageTestPage() {
  const [testResults, setTestResults] = useState<{[key: string]: 'loading' | 'success' | 'error'}>({});
  
  const testImages = [
    { id: 'picsum-1', url: 'https://picsum.photos/300/200?random=1', name: 'Picsum Photos 1' },
    { id: 'picsum-2', url: 'https://picsum.photos/300/200?random=2', name: 'Picsum Photos 2' },
    { id: 'placeholder-1', url: 'https://via.placeholder.com/300x200/E5E7EB/6B7280?text=Test', name: 'Via Placeholder' },
    { id: 'svg-1', url: getJewelryPlaceholder('1', 300, 200), name: 'SVG Placeholder 1' },
    { id: 'svg-2', url: generateSVGPlaceholder(300, 200, '💎'), name: 'SVG Placeholder 2' },
  ];

  const handleImageLoad = (id: string) => {
    setTestResults(prev => ({ ...prev, [id]: 'success' }));
  };

  const handleImageErrorTest = (id: string) => {
    setTestResults(prev => ({ ...prev, [id]: 'error' }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Тест загрузки изображений</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Статус загрузки:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testImages.map((image) => (
              <div key={image.id} className="bg-white rounded-lg p-4 shadow-sm border">
                <h3 className="font-medium mb-2">{image.name}</h3>
                <div className="mb-2">
                  <span className={`inline-block px-2 py-1 rounded text-sm ${
                    testResults[image.id] === 'success' ? 'bg-green-100 text-green-800' :
                    testResults[image.id] === 'error' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {testResults[image.id] === 'success' ? '✅ Загружено' :
                     testResults[image.id] === 'error' ? '❌ Ошибка' :
                     '⏳ Загружается'}
                  </span>
                </div>
                <div className="relative w-full h-32 bg-gray-100 rounded overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.name}
                    className="w-full h-full object-cover"
                    onLoad={() => handleImageLoad(image.id)}
                    onError={() => handleImageErrorTest(image.id)}
                  />
                </div>
                <div className="mt-2 text-xs text-gray-500 break-all">
                  {image.url.substring(0, 80)}...
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Проверка системы изображений для магазина</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((id) => (
              <div key={id} className="space-y-3">
                <h3 className="font-medium">Товар #{id}</h3>
                
                {/* Основное изображение */}
                <div className="relative w-full h-32 bg-gray-100 rounded overflow-hidden">
                  <img
                    src={getReliableImageUrl(id.toString(), 400, 320)}
                    alt={`Товар ${id}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    onError={(e) => handleImageError(e, id.toString(), 400, 320)}
                  />
                </div>

                {/* Мини изображение */}
                <div className="relative w-20 h-20 bg-gray-100 rounded overflow-hidden mx-auto">
                  <img
                    src={getReliableImageUrl(id.toString(), 200, 200)}
                    alt={`Товар ${id} мини`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    onError={(e) => handleImageError(e, id.toString(), 200, 200)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            ← Вернуться в магазин
          </a>
        </div>
      </div>
    </div>
  );
}
