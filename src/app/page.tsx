'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heart, Star, Truck, Shield, Award, MapPin } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/context';

export default function HomePage() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-bl from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-fade-in">
            {t('homepage.hero.title')}
            <span className="block text-4xl md:text-6xl lg:text-7xl mt-2">{t('homepage.hero.subtitle')}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            {t('homepage.hero.description1')}
            <span className="text-purple-400"> {t('homepage.hero.description2')}</span>
            {t('homepage.hero.description3')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-300">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300">
              <Link href="/products">
                ✨ {t('homepage.hero.viewCollection')}
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 text-lg rounded-full backdrop-blur-sm bg-white/10 transform hover:scale-105 transition-all duration-300">
              <Link href="/about">
                💎 {t('homepage.hero.aboutUs')}
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex justify-center items-center space-x-8 mt-16 text-slate-400 animate-fade-in-up delay-500">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-green-400" />
              <span className="text-sm">{t('homepage.trustIndicators.qualityGuarantee')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Truck className="w-6 h-6 text-blue-400" />
              <span className="text-sm">{t('homepage.trustIndicators.delivery')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-6 h-6 text-yellow-400" />
              <span className="text-sm">{t('homepage.trustIndicators.handmade')}</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-bl from-blue-100 to-cyan-100 rounded-full opacity-40 blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t('homepage.featured.title')}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> {t('homepage.featured.subtitle')}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('homepage.featured.description')}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Featured Products Mini Gallery */}
          <div className="mb-16">
            <div className="flex justify-center items-center space-x-6 lg:space-x-8 overflow-x-auto pb-6 px-4">
              {/* Красивая мини-галерея с градиентными изображениями */}
              {[
                { 
                  dataUrl: "data:image/svg+xml,%3Csvg width='112' height='112' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23667eea;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23764ba2;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad1)' rx='12'/%3E%3Ccircle cx='28' cy='28' r='3' fill='white' opacity='0.8'%3E%3Canimate attributeName='opacity' values='0.8;1;0.8' dur='2s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='84' cy='84' r='2' fill='white' opacity='0.6'%3E%3Canimate attributeName='opacity' values='0.6;1;0.6' dur='3s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ctext x='56' y='65' font-family='Arial, sans-serif' font-size='20' text-anchor='middle' fill='white' opacity='0.9'%3E💎%3C/text%3E%3Ctext x='56' y='85' font-family='Arial, sans-serif' font-size='10' text-anchor='middle' fill='white' opacity='0.8'%3ESAPPHIRE%3C/text%3E%3C/svg%3E",
                  nameKey: "homepage.featured.products.sapphireEarrings",
                  price: 12500
                },
                { 
                  dataUrl: "data:image/svg+xml,%3Csvg width='112' height='112' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f093fb;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23f5576c;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad2)' rx='12'/%3E%3Ccircle cx='28' cy='84' r='3' fill='white' opacity='0.7'%3E%3Canimate attributeName='opacity' values='0.7;1;0.7' dur='2.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='84' cy='28' r='2' fill='white' opacity='0.5'%3E%3Canimate attributeName='opacity' values='0.5;0.9;0.5' dur='3.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ctext x='56' y='65' font-family='Arial, sans-serif' font-size='20' text-anchor='middle' fill='white' opacity='0.9'%3E🌹%3C/text%3E%3Ctext x='56' y='85' font-family='Arial, sans-serif' font-size='10' text-anchor='middle' fill='white' opacity='0.8'%3ERUBY%3C/text%3E%3C/svg%3E",
                  nameKey: "homepage.featured.products.rubyBracelet",
                  price: 8900
                },
                { 
                  dataUrl: "data:image/svg+xml,%3Csvg width='112' height='112' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%234facfe;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2300f2fe;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad3)' rx='12'/%3E%3Ccircle cx='56' cy='28' r='4' fill='white' opacity='0.8'%3E%3Canimate attributeName='opacity' values='0.8;1;0.8' dur='2.2s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='28' cy='56' r='2' fill='white' opacity='0.6'%3E%3Canimate attributeName='opacity' values='0.6;0.9;0.6' dur='3.8s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ctext x='56' y='70' font-family='Arial, sans-serif' font-size='20' text-anchor='middle' fill='white' opacity='0.9'%3E🔷%3C/text%3E%3Ctext x='56' y='90' font-family='Arial, sans-serif' font-size='10' text-anchor='middle' fill='white' opacity='0.8'%3ETOPAZ%3C/text%3E%3C/svg%3E",
                  nameKey: "homepage.featured.products.topazRing",
                  price: 15200
                },
                { 
                  dataUrl: "data:image/svg+xml,%3Csvg width='112' height='112' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2343e97b;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2338f9d7;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad4)' rx='12'/%3E%3Ccircle cx='84' cy='28' r='3' fill='white' opacity='0.8'%3E%3Canimate attributeName='opacity' values='0.8;1;0.8' dur='2.4s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='28' cy='84' r='2' fill='white' opacity='0.6'%3E%3Canimate attributeName='opacity' values='0.6;0.9;0.6' dur='3.2s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ctext x='56' y='65' font-family='Arial, sans-serif' font-size='20' text-anchor='middle' fill='white' opacity='0.9'%3E💚%3C/text%3E%3Ctext x='56' y='85' font-family='Arial, sans-serif' font-size='10' text-anchor='middle' fill='white' opacity='0.8'%3EEMERALD%3C/text%3E%3C/svg%3E",
                  nameKey: "homepage.featured.products.emeraldEarrings",
                  price: 18900
                },
                { 
                  dataUrl: "data:image/svg+xml,%3Csvg width='112' height='112' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23fa709a;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23fee140;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad5)' rx='12'/%3E%3Ccircle cx='28' cy='28' r='3' fill='white' opacity='0.8'%3E%3Canimate attributeName='opacity' values='0.8;1;0.8' dur='2.6s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='84' cy='84' r='2' fill='white' opacity='0.6'%3E%3Canimate attributeName='opacity' values='0.6;0.9;0.6' dur='3.4s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ctext x='56' y='65' font-family='Arial, sans-serif' font-size='20' text-anchor='middle' fill='white' opacity='0.9'%3E✨%3C/text%3E%3Ctext x='56' y='85' font-family='Arial, sans-serif' font-size='10' text-anchor='middle' fill='white' opacity='0.8'%3ECITRINE%3C/text%3E%3C/svg%3E",
                  nameKey: "homepage.featured.products.citrineNecklace",
                  price: 22800
                }
              ].map((item, index) => (
                <Link
                  key={index}
                  href="/products"
                  className="flex-shrink-0 group"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl mb-2 relative overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-xl">
                    <img
                      src={item.dataUrl}
                      alt={t(item.nameKey)}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-purple-600 font-medium truncate max-w-[80px] sm:max-w-[90px] lg:max-w-[100px]">
                      {t(item.nameKey)}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {new Intl.NumberFormat('ru-RU', { 
                        style: 'currency', 
                        currency: 'RUB', 
                        maximumFractionDigits: 0 
                      }).format(item.price)}
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Красивые карточки рекомендуемых товаров */}
            {[
              { 
                dataUrl: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='featured1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23667eea;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%239f7aea;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23764ba2;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23featured1)' rx='20'/%3E%3Ccircle cx='100' cy='100' r='12' fill='white' opacity='0.8'%3E%3Canimate attributeName='opacity' values='0.8;1;0.8' dur='2s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='300' cy='300' r='8' fill='white' opacity='0.6'%3E%3Canimate attributeName='opacity' values='0.6;1;0.6' dur='3s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='200' cy='120' r='6' fill='white' opacity='0.7'%3E%3Canimate attributeName='opacity' values='0.7;0.9;0.7' dur='2.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ctext x='200' y='220' font-family='Arial, sans-serif' font-size='48' text-anchor='middle' fill='white' opacity='0.9'%3E💎%3C/text%3E%3Ctext x='200' y='280' font-family='Arial, sans-serif' font-size='20' text-anchor='middle' fill='white' opacity='0.8'%3ESAPPHIRE COLLECTION%3C/text%3E%3C/svg%3E",
                name: "Сапфировая коллекция",
                price: 25900,
                originalPrice: 32000,
                rating: 4.9,
                reviews: 28
              },
              { 
                dataUrl: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='featured2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f093fb;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%23f5576c;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23e84393;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23featured2)' rx='20'/%3E%3Ccircle cx='280' cy='120' r='10' fill='white' opacity='0.8'%3E%3Canimate attributeName='opacity' values='0.8;1;0.8' dur='2.3s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='120' cy='280' r='7' fill='white' opacity='0.6'%3E%3Canimate attributeName='opacity' values='0.6;0.9;0.6' dur='3.1s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='200' cy='80' r='5' fill='white' opacity='0.7'%3E%3Canimate attributeName='opacity' values='0.7;1;0.7' dur='2.8s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ctext x='200' y='220' font-family='Arial, sans-serif' font-size='48' text-anchor='middle' fill='white' opacity='0.9'%3E🌹%3C/text%3E%3Ctext x='200' y='280' font-family='Arial, sans-serif' font-size='20' text-anchor='middle' fill='white' opacity='0.8'%3ERUBY ELEGANCE%3C/text%3E%3C/svg%3E",
                name: "Рубиновая элегантность",
                price: 18700,
                originalPrice: 24500,
                rating: 4.8,
                reviews: 35
              },
              { 
                dataUrl: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='featured3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%234facfe;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%2300d4ff;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2300f2fe;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23featured3)' rx='20'/%3E%3Ccircle cx='200' cy='100' r='14' fill='white' opacity='0.8'%3E%3Canimate attributeName='opacity' values='0.8;1;0.8' dur='2.1s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='100' cy='200' r='8' fill='white' opacity='0.6'%3E%3Canimate attributeName='opacity' values='0.6;0.9;0.6' dur='3.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='300' cy='200' r='9' fill='white' opacity='0.7'%3E%3Canimate attributeName='opacity' values='0.7;1;0.7' dur='2.7s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ctext x='200' y='220' font-family='Arial, sans-serif' font-size='48' text-anchor='middle' fill='white' opacity='0.9'%3E🔷%3C/text%3E%3Ctext x='200' y='280' font-family='Arial, sans-serif' font-size='20' text-anchor='middle' fill='white' opacity='0.8'%3EAQUAMARINE DREAMS%3C/text%3E%3C/svg%3E",
                name: "Аквамариновые мечты",
                price: 16200,
                originalPrice: 21000,
                rating: 4.7,
                reviews: 42
              },
              { 
                dataUrl: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='featured4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2343e97b;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%2338f9d7;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2300b894;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23featured4)' rx='20'/%3E%3Ccircle cx='260' cy='140' r='11' fill='white' opacity='0.8'%3E%3Canimate attributeName='opacity' values='0.8;1;0.8' dur='2.4s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='140' cy='260' r='7' fill='white' opacity='0.6'%3E%3Canimate attributeName='opacity' values='0.6;0.9;0.6' dur='3.2s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='100' cy='100' r='6' fill='white' opacity='0.7'%3E%3Canimate attributeName='opacity' values='0.7;1;0.7' dur='2.9s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ctext x='200' y='220' font-family='Arial, sans-serif' font-size='48' text-anchor='middle' fill='white' opacity='0.9'%3E💚%3C/text%3E%3Ctext x='200' y='280' font-family='Arial, sans-serif' font-size='20' text-anchor='middle' fill='white' opacity='0.8'%3EEMERALD GARDEN%3C/text%3E%3C/svg%3E",
                name: "Изумрудный сад",
                price: 29500,
                originalPrice: 38000,
                rating: 4.9,
                reviews: 18
              },
              { 
                dataUrl: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='featured5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23fa709a;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%23fee140;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23f39c12;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23featured5)' rx='20'/%3E%3Ccircle cx='240' cy='280' r='12' fill='white' opacity='0.8'%3E%3Canimate attributeName='opacity' values='0.8;1;0.8' dur='2.2s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='160' cy='120' r='9' fill='white' opacity='0.6'%3E%3Canimate attributeName='opacity' values='0.6;0.9;0.6' dur='3.3s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='300' cy='200' r='6' fill='white' opacity='0.7'%3E%3Canimate attributeName='opacity' values='0.7;1;0.7' dur='2.6s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ctext x='200' y='220' font-family='Arial, sans-serif' font-size='48' text-anchor='middle' fill='white' opacity='0.9'%3E✨%3C/text%3E%3Ctext x='200' y='280' font-family='Arial, sans-serif' font-size='20' text-anchor='middle' fill='white' opacity='0.8'%3ECITRINE SUNSET%3C/text%3E%3C/svg%3E",
                name: "Цитриновый закат",
                price: 12300,
                originalPrice: 16800,
                rating: 4.6,
                reviews: 24
              },
              { 
                dataUrl: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='featured6' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%236c5ce7;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%23a29bfe;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23fd79a8;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23featured6)' rx='20'/%3E%3Ccircle cx='120' cy='120' r='10' fill='white' opacity='0.8'%3E%3Canimate attributeName='opacity' values='0.8;1;0.8' dur='2.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='280' cy='280' r='8' fill='white' opacity='0.6'%3E%3Canimate attributeName='opacity' values='0.6;0.9;0.6' dur='3.4s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='200' cy='320' r='6' fill='white' opacity='0.7'%3E%3Canimate attributeName='opacity' values='0.7;1;0.7' dur='2.8s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ctext x='200' y='220' font-family='Arial, sans-serif' font-size='48' text-anchor='middle' fill='white' opacity='0.9'%3E🔮%3C/text%3E%3Ctext x='200' y='280' font-family='Arial, sans-serif' font-size='20' text-anchor='middle' fill='white' opacity='0.8'%3EMYSTIC AMETHYST%3C/text%3E%3C/svg%3E",
                name: "Мистический аметист",
                price: 33600,
                originalPrice: 42000,
                rating: 5.0,
                reviews: 15
              }
            ].slice(0, 6).map((item, index) => (
              <div 
                key={index} 
                className="animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform group-hover:scale-105 transition-all duration-300">
                    {/* Image */}
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.dataUrl}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                        {item.name}
                      </h3>
                      
                      {/* Rating */}
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">({item.reviews})</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="text-2xl font-bold text-purple-600">
                          {new Intl.NumberFormat('ru-RU', { 
                            style: 'currency', 
                            currency: 'RUB', 
                            maximumFractionDigits: 0 
                          }).format(item.price)}
                        </span>
                        <span className="text-lg text-gray-400 line-through">
                          {new Intl.NumberFormat('ru-RU', { 
                            style: 'currency', 
                            currency: 'RUB', 
                            maximumFractionDigits: 0 
                          }).format(item.originalPrice)}
                        </span>
                      </div>
                      
                      {/* Discount Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                          -{Math.round((1 - item.price / item.originalPrice) * 100)}%
                        </span>
                      </div>
                      
                      {/* Featured Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                          ⭐ ХИТ
                        </span>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
                          Добавить в корзину
                        </button>
                        <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button asChild variant="outline" size="lg" className="border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Link href="/products">
                🔍 Смотреть все изделия
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 relative overflow-hidden">
        {/* Background animation */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full opacity-10 animate-float"></div>
          <div className="absolute top-1/2 right-0 w-32 h-32 bg-white rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 left-1/3 w-24 h-24 bg-white rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Нам доверяют 
              <span className="text-yellow-300">тысячи</span> клиентов
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Присоединяйтесь к нашему сообществу ценителей эксклюзивной красоты
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "5,847", label: "Довольных клиентов", icon: "😊" },
              { number: "12,390", label: "Проданных изделий", icon: "💎" },
              { number: "4.9", label: "Средняя оценка", icon: "⭐" },
              { number: "98%", label: "Повторных покупок", icon: "💕" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-5xl font-bold text-white mb-2 counter">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-bl from-blue-100 to-cyan-100 rounded-full opacity-40 blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Что говорят наши 
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">клиенты</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Каждое украшение рассказывает историю, а каждый отзыв вдохновляет нас на новые шедевры
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Смирнова",
                role: "Счастливая невеста",
                avatar: "data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='avatarGrad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23667eea;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23764ba2;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='40' cy='40' r='40' fill='url(%23avatarGrad1)'/%3E%3Ctext x='40' y='50' font-family='Arial, sans-serif' font-size='28' text-anchor='middle' fill='white'%3E👰%3C/text%3E%3C/svg%3E",
                text: "Невероятно красивые украшения! Серьги для свадьбы получились просто волшебными. Качество превзошло все ожидания, а дизайн уникальный.",
                rating: 5,
                location: "Москва"
              },
              {
                name: "Мария Петрова",
                role: "Коллекционер украшений",
                avatar: "data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='avatarGrad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f093fb;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23f5576c;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='40' cy='40' r='40' fill='url(%23avatarGrad2)'/%3E%3Ctext x='40' y='50' font-family='Arial, sans-serif' font-size='28' text-anchor='middle' fill='white'%3E💃%3C/text%3E%3C/svg%3E",
                text: "У меня большая коллекция украшений, но эти изделия особенные. Каждое украшение как произведение искусства. Обязательно закажу еще!",
                rating: 5,
                location: "Санкт-Петербург"
              },
              {
                name: "Елена Волкова",
                role: "Подарок маме",
                avatar: "data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='avatarGrad3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%234facfe;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2300f2fe;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='40' cy='40' r='40' fill='url(%23avatarGrad3)'/%3E%3Ctext x='40' y='50' font-family='Arial, sans-serif' font-size='28' text-anchor='middle' fill='white'%3E👩‍💼%3C/text%3E%3C/svg%3E",
                text: "Покупала браслет маме на юбилей. Она была в восторге! Упаковка роскошная, а само украшение просто великолепное. Спасибо за эмоции!",
                rating: 5,
                location: "Екатеринбург"
              },
              {
                name: "Дарья Козлова",
                role: "Молодая мама",
                avatar: "data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='avatarGrad4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2343e97b;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2338f9d7;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='40' cy='40' r='40' fill='url(%23avatarGrad4)'/%3E%3Ctext x='40' y='50' font-family='Arial, sans-serif' font-size='28' text-anchor='middle' fill='white'%3E🤱%3C/text%3E%3C/svg%3E",
                text: "Заказала кулон с камнем для защиты. Получила не только красивое украшение, но и невероятную энергетику. Ношу не снимая!",
                rating: 5,
                location: "Новосибирск"
              },
              {
                name: "Ольга Михайлова",
                role: "Учительница",
                avatar: "data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='avatarGrad5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23fa709a;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23fee140;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='40' cy='40' r='40' fill='url(%23avatarGrad5)'/%3E%3Ctext x='40' y='50' font-family='Arial, sans-serif' font-size='28' text-anchor='middle' fill='white'%3E👩‍🏫%3C/text%3E%3C/svg%3E",
                text: "Долго искала стильные серьги для работы. Эти идеально подходят - элегантные, но не вызывающие. Коллеги постоянно спрашивают, где купила!",
                rating: 5,
                location: "Казань"
              },
              {
                name: "Виктория Лебедева",
                role: "Дизайнер",
                avatar: "data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='avatarGrad6' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%236c5ce7;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23fd79a8;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='40' cy='40' r='40' fill='url(%23avatarGrad6)'/%3E%3Ctext x='40' y='50' font-family='Arial, sans-serif' font-size='28' text-anchor='middle' fill='white'%3E🎨%3C/text%3E%3C/svg%3E",
                text: "Как дизайнер, ценю оригинальность и качество исполнения. Эти украшения - настоящее искусство! Буду рекомендовать всем подругам.",
                rating: 5,
                location: "Нижний Новгород"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative group">
                  {/* Quote decoration */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    "
                  </div>
                  
                  {/* Stars */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                    ))}
                  </div>
                  
                  {/* Text */}
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg italic">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full border-2 border-purple-200 group-hover:border-purple-400 transition-colors"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                      <div className="text-xs text-purple-600 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full px-8 py-4 border border-purple-200">
              <Star className="w-8 h-8 text-yellow-400 fill-current animate-spin" style={{ animationDuration: '3s' }} />
              <div>
                <div className="font-bold text-2xl text-gray-900">4.9 из 5</div>
                <div className="text-sm text-gray-600">На основе 2,847 отзывов</div>
              </div>
              <Star className="w-8 h-8 text-yellow-400 fill-current animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Почему выбирают 
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">нас</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Мы создаем не просто украшения, а произведения искусства, которые подчеркивают вашу индивидуальность
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎨",
                title: "Ручная работа",
                description: "Каждое изделие создается мастером вручную с особой тщательностью и вниманием к деталям"
              },
              {
                icon: "💎",
                title: "Премиум материалы",
                description: "Используем только высококачественные металлы, натуральные камни и проверенные материалы"
              },
              {
                icon: "🚀",
                title: "Быстрая доставка",
                description: "Доставляем по всей России в течение 1-3 дней с возможностью отслеживания"
              },
              {
                icon: "🛡️",
                title: "Гарантия качества",
                description: "Предоставляем гарантию на все изделия и бесплатное обслуживание в течение года"
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center text-4xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
