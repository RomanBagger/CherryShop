// Создаем красивые SVG заглушки прямо в коде
export const createLocalPlaceholder = (id: string, width: number = 300, height: number = 300) => {
  const colors = [
    ['#667eea', '#764ba2'], // Синий-фиолетовый
    ['#f093fb', '#f5576c'], // Розовый-красный  
    ['#4facfe', '#00f2fe'], // Голубой-бирюзовый
    ['#43e97b', '#38f9d7'], // Зеленый-мятный
    ['#fa709a', '#fee140'], // Розовый-желтый
    ['#a8edea', '#fed6e3'], // Мятный-розовый
    ['#ff9a9e', '#fecfef'], // Коралловый-розовый
    ['#ffecd2', '#fcb69f']  // Персиковый-оранжевый
  ];
  
  const colorIndex = parseInt(id) % colors.length;
  const [color1, color2] = colors[colorIndex];
  
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad${id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
      </linearGradient>
      <filter id="glow${id}">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge> 
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <rect width="100%" height="100%" fill="url(#grad${id})"/>
    
    <!-- Декоративные элементы -->
    <circle cx="${width * 0.2}" cy="${height * 0.3}" r="${width * 0.02}" fill="white" opacity="0.6">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="${width * 0.8}" cy="${height * 0.2}" r="${width * 0.015}" fill="white" opacity="0.4">
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="${width * 0.7}" cy="${height * 0.8}" r="${width * 0.01}" fill="white" opacity="0.5">
      <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite"/>
    </circle>
    
    <!-- Центральный элемент -->
    <g transform="translate(${width/2}, ${height/2})">
      <circle r="${width * 0.08}" fill="rgba(255,255,255,0.2)" filter="url(#glow${id})"/>
      <text text-anchor="middle" dominant-baseline="middle" 
            font-family="Arial, sans-serif" font-size="${width * 0.12}" 
            fill="white" opacity="0.9" font-weight="bold">💎</text>
    </g>
    
    <!-- Подпись -->
    <text x="50%" y="85%" text-anchor="middle" 
          font-family="Arial, sans-serif" font-size="${width * 0.06}" 
          fill="white" opacity="0.8" font-weight="500">JEWELRY</text>
  </svg>`;
  
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};
