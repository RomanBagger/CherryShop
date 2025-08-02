// Встроенные SVG компоненты для украшений
import React from 'react';

interface JewelrySVGProps {
  size?: number;
  gradientId: string;
  colors: [string, string];
}

export const JewelrySVG: React.FC<JewelrySVGProps> = ({ size = 112, gradientId, colors }) => (
  <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: colors[0], stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: colors[1], stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill={`url(#${gradientId})`} rx="8"/>
    <circle cx={size * 0.5} cy={size * 0.3} r="4" fill="white" opacity="0.6">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx={size * 0.8} cy={size * 0.8} r="3" fill="white" opacity="0.4">
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>
    </circle>
    <text x={size * 0.5} y={size * 0.6} fontFamily="Arial, sans-serif" fontSize={size * 0.15} 
          textAnchor="middle" fill="white" opacity="0.9">💎</text>
    <text x={size * 0.5} y={size * 0.75} fontFamily="Arial, sans-serif" fontSize={size * 0.1} 
          textAnchor="middle" fill="white" opacity="0.8">JEWELRY</text>
  </svg>
);

export const getJewelryColors = (id: number): [string, string] => {
  const colorSets: Array<[string, string]> = [
    ['#667eea', '#764ba2'], // Синий-фиолетовый
    ['#f093fb', '#f5576c'], // Розовый-красный
    ['#4facfe', '#00f2fe'], // Голубой-циан
    ['#43e97b', '#38f9d7'], // Зеленый-мятный
    ['#fa709a', '#fee140'], // Розовый-желтый
  ];
  
  return colorSets[id % colorSets.length];
};
