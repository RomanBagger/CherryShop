// Utility functions for generating placeholder images

// Utility functions for generating placeholder images

export const generateSVGPlaceholder = (
  width: number = 400,
  height: number = 300,
  text: string = 'JEWELRY',
  bgColor: string = '#E5E7EB',
  textColor: string = '#6B7280'
): string => {
  // Очищаем текст от эмодзи и специальных символов
  const cleanText = text.replace(/[^\w\s]/gi, '').toUpperCase() || 'JEWELRY';
  
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F3E8FF;stop-opacity:1" />
        <stop offset="50%" style="stop-color:#E879F9;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#A855F7;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#grad)"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="${Math.min(width, height) / 10}" 
          text-anchor="middle" dominant-baseline="middle" fill="${textColor}" opacity="0.8">
      ${cleanText}
    </text>
    <circle cx="${width * 0.8}" cy="${height * 0.2}" r="3" fill="white" opacity="0.6">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="${width * 0.2}" cy="${height * 0.8}" r="2" fill="white" opacity="0.4">
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>
    </circle>
  </svg>`;
  
  // Используем URL-кодирование вместо base64
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

export const getJewelryPlaceholder = (id: string | number, width: number = 400, height: number = 300): string => {
  const jewelryText = ['GEM', 'RING', 'CHAIN', 'STAR', 'LINK', 'SHINE', 'SPARK', 'GLOW'];
  const numericId = typeof id === 'string' ? parseInt(id) || 0 : id;
  const text = jewelryText[numericId % jewelryText.length];
  
  return generateSVGPlaceholder(width, height, text);
};

export const getCategoryPlaceholder = (category: string, width: number = 400, height: number = 300): string => {
  const categoryText: { [key: string]: string } = {
    'EARRINGS': 'EARRING',
    'BRACELETS': 'BRACELET',
    'RINGS': 'RING',
    'NECKLACES': 'NECKLACE',
    'HAIRPINS': 'HAIRPIN',
    'PENDANTS': 'PENDANT',
    'SETS': 'SET'
  };
  
  const text = categoryText[category] || 'JEWELRY';
  return generateSVGPlaceholder(width, height, text);
};

// Fallback image URLs that should always work
export const getFallbackImageUrl = (width: number = 400, height: number = 300, text: string = 'JEWELRY'): string => {
  return `https://via.placeholder.com/${width}x${height}/E5E7EB/6B7280?text=${encodeURIComponent(text)}`;
};

// Combined approach - try multiple sources
export const getReliableImageUrl = (id: string | number, width: number = 400, height: number = 300): string => {
  // First try Picsum with a specific seed for consistency
  const numericId = typeof id === 'string' ? parseInt(id) || 0 : id;
  return `https://picsum.photos/${width}/${height}?random=${numericId}`;
};

export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, id: string | number, width: number = 400, height: number = 300) => {
  const target = e.target as HTMLImageElement;
  
  // First fallback: try via.placeholder.com
  if (target.src.includes('picsum.photos')) {
    target.src = getFallbackImageUrl(width, height, 'JEWELRY');
  }
  // Second fallback: use SVG placeholder without emojis
  else if (target.src.includes('via.placeholder.com')) {
    target.src = getJewelryPlaceholder(id, width, height);
  }
  // Final fallback: simple data URL with text only
  else {
    target.src = generateSVGPlaceholder(width, height, 'GEM');
  }
};
