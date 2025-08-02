'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heart, Star, Truck, Shield, Award, MapPin, Sparkles, Crown, Gem } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/context';
import { formatCurrency, interpolate } from '@/lib/i18n/translations';

export default function HomePage() {
  const { t, language, getArray } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Elegant Background Pattern */}
        <div className="absolute inset-0">
          {/* Gradient Overlays for Jewelry Theme */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-300/20 to-rose-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-bl from-yellow-300/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-rose-300/20 to-amber-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          
          {/* Sparkle Effects */}
          <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-amber-400 rounded-full animate-ping delay-500"></div>
          <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-rose-400 rounded-full animate-ping delay-1500"></div>
          <div className="absolute top-1/2 right-1/5 w-3 h-3 bg-yellow-400 rounded-full animate-ping delay-700"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Premium Crown Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Crown className="w-16 h-16 text-amber-500 animate-pulse" />
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-bounce" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-amber-600 via-rose-500 to-yellow-500 bg-clip-text text-transparent animate-fade-in">
            {t('homepage.hero.title')}
            <span className="block text-4xl md:text-6xl lg:text-7xl mt-2 bg-gradient-to-r from-rose-600 via-pink-500 to-amber-500 bg-clip-text text-transparent">{t('homepage.hero.subtitle')}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            {t('homepage.hero.description1')}
            <span className="text-amber-600 font-semibold"> {t('homepage.hero.description2')}</span>
            {t('homepage.hero.description3')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-300">
            <Button asChild size="lg" className="bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300 text-white">
              <Link href="/products">
                <Gem className="w-5 h-5 mr-2" />
                {t('homepage.hero.viewCollection')}
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-2 border-amber-500 text-amber-700 hover:bg-amber-500 hover:text-white px-8 py-4 text-lg rounded-full backdrop-blur-sm bg-white/80 transform hover:scale-105 transition-all duration-300">
              <Link href="/about">
                <Crown className="w-5 h-5 mr-2" />
                {t('homepage.hero.aboutUs')}
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center space-x-4 space-y-2 mt-16 animate-fade-in-up delay-500">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <Shield className="w-5 h-5 text-emerald-500" />
              <span className="text-sm font-medium text-gray-700">{t('homepage.trustIndicators.qualityGuarantee')}</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <Truck className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-700">{t('homepage.trustIndicators.delivery')}</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <Award className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-medium text-gray-700">{t('homepage.trustIndicators.handmade')}</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <Heart className="w-5 h-5 text-rose-500" />
              <span className="text-sm font-medium text-gray-700">{t('homepage.cta.madeWithLove')}</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-b from-white via-rose-25 to-amber-25 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-amber-200/30 to-rose-200/30 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-bl from-yellow-200/30 to-pink-200/30 rounded-full opacity-40 blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="flex items-center space-x-2">
                <Gem className="w-8 h-8 text-amber-500" />
                <Crown className="w-6 h-6 text-rose-500" />
                <Sparkles className="w-8 h-8 text-yellow-500" />
              </div>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t('homepage.featured.title')}
              <span className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent"> {t('homepage.featured.subtitle')}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('homepage.featured.description')}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-rose-400 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Featured Products Mini Gallery */}
          <div className="mb-16">
            <div className="flex justify-center items-center space-x-6 lg:space-x-8 overflow-x-auto pb-6 px-4">
              {/* Elegant jewelry cards with premium design */}
              {[
                { 
                  image: "/images/test-jewelry/sapphire-earrings.svg",
                  nameKey: "homepage.featured.products.sapphireEarrings",
                  price: 12500
                },
                { 
                  image: "/images/test-jewelry/ruby-bracelet.svg",
                  nameKey: "homepage.featured.products.rubyBracelet",
                  price: 8900
                },
                { 
                  image: "/images/test-jewelry/diamond-ring.svg",
                  nameKey: "homepage.featured.products.topazRing",
                  price: 15200
                },
                { 
                  image: "/images/test-jewelry/emerald-necklace.svg",
                  nameKey: "homepage.featured.products.emeraldEarrings",
                  price: 18900
                },
                { 
                  image: "/images/test-jewelry/sapphire-earrings.svg",
                  nameKey: "homepage.featured.products.citrineNecklace",
                  price: 22800
                }
              ].map((item, index) => (
                <Link
                  key={index}
                  href="/products"
                  className="flex-shrink-0 group"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl mb-2 relative overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-xl border-2 border-transparent hover:border-gold-300">
                    <img
                      src={item.image}
                      alt={t(item.nameKey)}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    <div className="absolute inset-0 border-2 border-yellow-400/0 group-hover:border-yellow-400/50 rounded-lg transition-all duration-300"></div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-purple-600 font-medium truncate max-w-[80px] sm:max-w-[90px] lg:max-w-[100px]">
                      {t(item.nameKey)}
                    </div>
                    <div className="text-xs text-gray-500 mt-1 font-semibold">
                      {formatCurrency(item.price, language)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Красивые карточки рекомендуемых товаров */}
            {[
              { 
                image: "/images/test-jewelry/sapphire-earrings.svg",
                nameKey: "homepage.featuredCollection.sapphireCollection",
                price: 25900,
                originalPrice: 32000,
                rating: 4.9,
                reviews: 28
              },
              { 
                image: "/images/test-jewelry/ruby-bracelet.svg",
                nameKey: "homepage.featuredCollection.rubyElegance",
                price: 18700,
                originalPrice: 24500,
                rating: 4.8,
                reviews: 35
              },
              { 
                image: "/images/test-jewelry/emerald-necklace.svg",
                nameKey: "homepage.featuredCollection.aquamarineDreams",
                price: 16200,
                originalPrice: 21000,
                rating: 4.7,
                reviews: 42
              },
              { 
                image: "/images/test-jewelry/diamond-ring.svg",
                nameKey: "homepage.featuredCollection.emeraldGarden",
                price: 29500,
                originalPrice: 38000,
                rating: 4.9,
                reviews: 18
              },
              { 
                dataUrl: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='featured5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23fa709a;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%23fee140;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23f39c12;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23featured5)' rx='20'/%3E%3Ccircle cx='240' cy='280' r='12' fill='white' opacity='0.8'%3E%3Canimate attributeName='opacity' values='0.8;1;0.8' dur='2.2s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='160' cy='120' r='9' fill='white' opacity='0.6'%3E%3Canimate attributeName='opacity' values='0.6;0.9;0.6' dur='3.3s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='300' cy='200' r='6' fill='white' opacity='0.7'%3E%3Canimate attributeName='opacity' values='0.7;1;0.7' dur='2.6s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ctext x='200' y='220' font-family='Arial, sans-serif' font-size='48' text-anchor='middle' fill='white' opacity='0.9'%3E✨%3C/text%3E%3Ctext x='200' y='280' font-family='Arial, sans-serif' font-size='20' text-anchor='middle' fill='white' opacity='0.8'%3ECITRINE SUNSET%3C/text%3E%3C/svg%3E",
                nameKey: "homepage.featuredCollection.citrineSunset",
                price: 12300,
                originalPrice: 16800,
                rating: 4.6,
                reviews: 24
              },
              { 
                dataUrl: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='featured6' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%236c5ce7;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%23a29bfe;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23fd79a8;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23featured6)' rx='20'/%3E%3Ccircle cx='120' cy='120' r='10' fill='white' opacity='0.8'%3E%3Canimate attributeName='opacity' values='0.8;1;0.8' dur='2.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='280' cy='280' r='8' fill='white' opacity='0.6'%3E%3Canimate attributeName='opacity' values='0.6;0.9;0.6' dur='3.4s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='200' cy='320' r='6' fill='white' opacity='0.7'%3E%3Canimate attributeName='opacity' values='0.7;1;0.7' dur='2.8s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ctext x='200' y='220' font-family='Arial, sans-serif' font-size='48' text-anchor='middle' fill='white' opacity='0.9'%3E🔮%3C/text%3E%3Ctext x='200' y='280' font-family='Arial, sans-serif' font-size='20' text-anchor='middle' fill='white' opacity='0.8'%3EMYSTIC AMETHYST%3C/text%3E%3C/svg%3E",
                nameKey: "homepage.featuredCollection.mysticAmethyst",
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
                        src={item.image}
                        alt={t(item.nameKey)}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                        {t(item.nameKey)}
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
                          {formatCurrency(item.price, language)}
                        </span>
                        <span className="text-lg text-gray-400 line-through">
                          {formatCurrency(item.originalPrice, language)}
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
                          ⭐ {t('homepage.cta.hitBadge')}
                        </span>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
                          {t('homepage.cta.addToCart')}
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
                🔍 {t('homepage.cta.viewAllProducts')}
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
              {t('homepage.stats.title')} 
              <span className="text-yellow-300"> {t('homepage.stats.subtitle')}</span> {t('homepage.stats.subtitle2')}
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t('homepage.stats.description')}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "5,847", labelKey: "homepage.stats.happyClients", icon: "😊" },
              { number: "12,390", labelKey: "homepage.stats.soldItems", icon: "💎" },
              { number: "4.9", labelKey: "homepage.stats.averageRating", icon: "⭐" },
              { number: "98%", labelKey: "homepage.stats.repeatPurchases", icon: "💕" }
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
                  {t(stat.labelKey)}
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
              {t('homepage.testimonials.title')} 
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> {t('homepage.testimonials.subtitle')}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('homepage.testimonials.description')}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getArray('testimonials.customers').map((testimonial: any, index: number) => (
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
                    {[...Array(5)].map((_, i) => (
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
                      src={`data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='avatarGrad${index + 1}' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23${['667eea', 'f093fb', '4facfe', '43e97b', 'fa709a', '6c5ce7'][index % 6]};stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23${['764ba2', 'f5576c', '00f2fe', '38f9d7', 'fee140', 'fd79a8'][index % 6]};stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='40' cy='40' r='40' fill='url(%23avatarGrad${index + 1})'/%3E%3Ctext x='40' y='50' font-family='Arial, sans-serif' font-size='28' text-anchor='middle' fill='white'%3E${['👰', '💃', '👩‍💼', '🤱', '👩‍🏫', '🎨'][index % 6]}%3C/text%3E%3C/svg%3E`}
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
                <div className="text-sm text-gray-600">{interpolate(t('homepage.testimonials.reviewsBasedOn'), { count: '2,847' })}</div>
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
              {t('homepage.benefits.title')} 
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> {t('homepage.benefits.subtitle')}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('homepage.benefits.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎨",
                titleKey: "homepage.benefits.handmadeTitle",
                descriptionKey: "homepage.benefits.handmadeDescription"
              },
              {
                icon: "💎",
                titleKey: "homepage.benefits.premiumMaterialsTitle",
                descriptionKey: "homepage.benefits.premiumMaterialsDescription"
              },
              {
                icon: "🚀",
                titleKey: "homepage.benefits.fastDeliveryTitle",
                descriptionKey: "homepage.benefits.fastDeliveryDescription"
              },
              {
                icon: "🛡️",
                titleKey: "homepage.benefits.qualityGuaranteeTitle",
                descriptionKey: "homepage.benefits.qualityGuaranteeDescription"
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
                  {t(benefit.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(benefit.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
