// Функции для генерации SVG изображений ювелирных изделий

export const generateJewelrySVG = (
  type: string, 
  width: number = 400, 
  height: number = 400,
  bgColor: string = '#F3F4F6',
  textColor: string = '#6B7280'
): string => {
  const emojis: { [key: string]: string } = {
    'серьги': '💎',
    'серьги 2': '✨',
    'браслет': '💫',
    'браслет 2': '🌟',
    'колье': '💍',
    'кольцо': '💍',
    'заколка': '🌸',
    'подвеска': '🌙',
    'ожерелье': '💎',
    'кулон': '⭐',
    'набор': '💝'
  };

  const emoji = emojis[type.toLowerCase()] || '💎';
  
  const svgContent = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${bgColor};stop-opacity:1" />
          <stop offset="100%" style="stop-color:#E5E7EB;stop-opacity:1" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="2" stdDeviation="3" flood-color="rgba(0,0,0,0.1)"/>
        </filter>
      </defs>
      <rect width="100%" height="100%" fill="url(#bgGradient)" rx="12"/>
      <circle cx="${width/2}" cy="${height/2 - 20}" r="60" fill="rgba(255,255,255,0.8)" filter="url(#shadow)"/>
      <text x="${width/2}" y="${height/2 - 10}" 
            font-family="Apple Color Emoji, Segoe UI Emoji, sans-serif" 
            font-size="48" 
            text-anchor="middle" 
            dominant-baseline="middle">
        ${emoji}
      </text>
      <text x="${width/2}" y="${height/2 + 50}" 
            font-family="Inter, -apple-system, sans-serif" 
            font-size="16" 
            font-weight="600"
            text-anchor="middle" 
            fill="${textColor}">
        ${type.charAt(0).toUpperCase() + type.slice(1)}
      </text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svgContent)}`;
};

// Предустановленные изображения для разных типов украшений
export const jewelryImages = {
  earrings: generateJewelrySVG('Серьги', 400, 400, '#FEF3C7', '#92400E'),
  earrings2: generateJewelrySVG('Серьги 2', 400, 400, '#DBEAFE', '#1E40AF'),
  bracelet: generateJewelrySVG('Браслет', 400, 400, '#F3E8FF', '#7C3AED'),
  bracelet2: generateJewelrySVG('Браслет 2', 400, 400, '#ECFDF5', '#059669'),
  necklace: generateJewelrySVG('Колье', 400, 400, '#FEE2E2', '#DC2626'),
  ring: generateJewelrySVG('Кольцо', 400, 400, '#FDF2F8', '#BE185D'),
  hairpin: generateJewelrySVG('Заколка', 400, 400, '#FCE7F3', '#C2185B'),
  pendant: generateJewelrySVG('Подвеска', 400, 400, '#EBF8FF', '#0369A1'),
  set: generateJewelrySVG('Набор', 400, 400, '#F0FDF4', '#16A34A')
};

// Функция для получения изображения по типу украшения
export const getJewelryImage = (type: string): string => {
  const normalizedType = type.toLowerCase();
  
  if (normalizedType.includes('серьги')) {
    return normalizedType.includes('2') ? jewelryImages.earrings2 : jewelryImages.earrings;
  }
  if (normalizedType.includes('браслет')) {
    return normalizedType.includes('2') ? jewelryImages.bracelet2 : jewelryImages.bracelet;
  }
  if (normalizedType.includes('колье') || normalizedType.includes('ожерелье')) {
    return jewelryImages.necklace;
  }
  if (normalizedType.includes('кольцо')) {
    return jewelryImages.ring;
  }
  if (normalizedType.includes('заколка')) {
    return jewelryImages.hairpin;
  }
  if (normalizedType.includes('подвеска') || normalizedType.includes('кулон')) {
    return jewelryImages.pendant;
  }
  if (normalizedType.includes('набор')) {
    return jewelryImages.set;
  }
  
  // По умолчанию
  return jewelryImages.earrings;
};
