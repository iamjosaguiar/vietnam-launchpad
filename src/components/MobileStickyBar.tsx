'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { PHONE_TEL, PHONE_WHATSAPP } from '@/lib/site';

import Icon from './ui/Icon';
import { buttonClasses } from './ui/Button';

const barButton = 'flex-1 !gap-1.5 whitespace-nowrap !px-2';

export default function MobileStickyBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-white px-4 py-3 shadow-[0_-4px_16px_rgba(20,32,43,0.08)] nav:hidden">
      <div className="flex gap-2">
        <a href={PHONE_TEL} className={buttonClasses({ variant: 'secondary', size: 'sm', className: barButton })}>
          <Icon name="phone" className="h-4 w-4" />
          Call
        </a>
        <a
          href={PHONE_WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses({ variant: 'secondary', size: 'sm', className: barButton })}
        >
          <Icon name="whatsapp" className="h-4 w-4" />
          WhatsApp
        </a>
        <Link href="/get-started#quote-form" className={buttonClasses({ variant: 'primary', size: 'sm', className: barButton })}>
          <Icon name="quote" className="h-4 w-4" />
          Quote
        </Link>
      </div>
    </div>
  );
}
