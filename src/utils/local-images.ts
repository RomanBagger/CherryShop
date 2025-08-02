// Статический массив готовых data URL изображений
export const localJewelryImages = [
  "data:image/svg+xml,%3Csvg width='112' height='112' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23667eea;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23764ba2;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad1)' rx='8'/%3E%3Ccircle cx='56' cy='35' r='4' fill='white' opacity='0.8'/%3E%3Ccircle cx='90' cy='90' r='3' fill='white' opacity='0.6'/%3E%3Ctext x='56' y='70' font-family='Arial, sans-serif' font-size='12' text-anchor='middle' fill='white' opacity='0.9'%3EJEWELRY%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg width='112' height='112' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f093fb;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23f5576c;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad2)' rx='8'/%3E%3Ccircle cx='56' cy='35' r='4' fill='white' opacity='0.8'/%3E%3Ccircle cx='90' cy='90' r='3' fill='white' opacity='0.6'/%3E%3Ctext x='56' y='70' font-family='Arial, sans-serif' font-size='12' text-anchor='middle' fill='white' opacity='0.9'%3EJEWELRY%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg width='112' height='112' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%234facfe;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2300f2fe;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad3)' rx='8'/%3E%3Ccircle cx='56' cy='35' r='4' fill='white' opacity='0.8'/%3E%3Ccircle cx='90' cy='90' r='3' fill='white' opacity='0.6'/%3E%3Ctext x='56' y='70' font-family='Arial, sans-serif' font-size='12' text-anchor='middle' fill='white' opacity='0.9'%3EJEWELRY%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg width='112' height='112' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2343e97b;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2338f9d7;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad4)' rx='8'/%3E%3Ccircle cx='56' cy='35' r='4' fill='white' opacity='0.8'/%3E%3Ccircle cx='90' cy='90' r='3' fill='white' opacity='0.6'/%3E%3Ctext x='56' y='70' font-family='Arial, sans-serif' font-size='12' text-anchor='middle' fill='white' opacity='0.9'%3EJEWELRY%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg width='112' height='112' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23fa709a;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23fee140;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad5)' rx='8'/%3E%3Ccircle cx='56' cy='35' r='4' fill='white' opacity='0.8'/%3E%3Ccircle cx='90' cy='90' r='3' fill='white' opacity='0.6'/%3E%3Ctext x='56' y='70' font-family='Arial, sans-serif' font-size='12' text-anchor='middle' fill='white' opacity='0.9'%3EJEWELRY%3C/text%3E%3C/svg%3E"
];

// Функция для получения локального изображения по ID
export const getLocalImage = (id: string | number): string => {
  const numericId = typeof id === 'string' ? parseInt(id) || 0 : Number(id);
  const imageIndex = numericId % localJewelryImages.length;
  const selectedImage = localJewelryImages[imageIndex];
  
  // Добавляем отладочную информацию
  console.log(`getLocalImage called with:`, {
    id,
    numericId,
    imageIndex,
    totalImages: localJewelryImages.length,
    selectedImageLength: selectedImage.length,
    isDataURL: selectedImage.startsWith('data:')
  });
  
  return selectedImage;
};

// Функция для получения изображения с fallback на локальные SVG
export const getReliableLocalImage = (id: string | number, width: number = 400, height: number = 300): string => {
  // Возвращаем локальное изображение
  return getLocalImage(id);
};
