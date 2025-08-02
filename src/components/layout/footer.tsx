'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook, Send } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/context';

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О компании */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.about.title')}</h3>
            <p className="text-gray-300 text-sm mb-4">
              {t('footer.about.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Каталог */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.catalog.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=earrings" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t('footer.catalog.earrings')}
                </Link>
              </li>
              <li>
                <Link href="/products?category=bracelets" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t('footer.catalog.bracelets')}
                </Link>
              </li>
              <li>
                <Link href="/products?category=necklaces" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t('footer.catalog.necklaces')}
                </Link>
              </li>
              <li>
                <Link href="/products?category=rings" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t('footer.catalog.rings')}
                </Link>
              </li>
              <li>
                <Link href="/products?category=sets" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t('footer.catalog.sets')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.information.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t('footer.information.about')}
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t('footer.information.delivery')}
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t('footer.information.returns')}
                </Link>
              </li>
              <li>
                <Link href="/care" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t('footer.information.care')}
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t('footer.information.sizeGuide')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contacts.title')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <a href={`tel:${t('footer.contacts.phone').replace(/\s/g, '')}`} className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t('footer.contacts.phone')}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <a href={`mailto:${t('footer.contacts.email')}`} className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t('footer.contacts.email')}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  {t('footer.contacts.address')}<br />
                  {t('footer.contacts.schedule')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя часть футера */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            {t('footer.bottom.copyright')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
              {t('footer.bottom.privacy')}
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
              {t('footer.bottom.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
