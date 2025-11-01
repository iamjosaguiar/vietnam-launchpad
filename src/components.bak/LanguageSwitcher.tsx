'use client';

import { useParams } from 'next/navigation';
import { usePathname, useRouter } from '@/i18n/config';
import { routing } from '@/i18n/config';
import { useState } from 'react';

const languages = {
  en: { name: 'English', flag: '🇺🇸' },
  vi: { name: 'Tiếng Việt', flag: '🇻🇳' },
  zh: { name: '中文', flag: '🇨🇳' },
  ko: { name: '한국어', flag: '🇰🇷' },
};

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);
  
  const currentLocale = params.locale as string;

  const handleLanguageChange = (locale: string) => {
    router.push(pathname, { locale });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-vietnam-red hover:bg-red-50 transition-colors"
      >
        <span>{languages[currentLocale as keyof typeof languages].flag}</span>
        <span className="hidden sm:inline">
          {languages[currentLocale as keyof typeof languages].name}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            {routing.locales.map((locale) => (
              <button
                key={locale}
                onClick={() => handleLanguageChange(locale)}
                className={`flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 ${
                  locale === currentLocale ? 'bg-red-50 text-vietnam-red' : 'text-gray-700'
                }`}
              >
                <span className="mr-3">{languages[locale as keyof typeof languages].flag}</span>
                <span>{languages[locale as keyof typeof languages].name}</span>
                {locale === currentLocale && (
                  <span className="ml-auto">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}