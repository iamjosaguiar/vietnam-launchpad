'use client';

import { Link } from '@/i18n/config';
import { PHONE_DISPLAY, PHONE_TEL, PHONE_WHATSAPP } from '@/lib/site';
import { footerTagline, footerColumns, footerCta, footerLegal, type FooterColumn, type NavItem } from '@/data/siteNav';

import { SiteLogo } from './Navigation';
import Button from './ui/Button';
import Icon from './ui/Icon';

const linkClass = 'flex min-h-[44px] items-center text-[0.95rem] text-muted no-underline hover:text-navy hover:underline';

function FooterLink({ item }: { item: NavItem }) {
  return (
    <li>
      {item.href === '/sitemap' ? (
        <a href={item.href} className={linkClass}>
          {item.name}
        </a>
      ) : (
        <Link href={item.href} className={linkClass}>
          {item.name}
        </Link>
      )}
    </li>
  );
}

function ColumnLinks({ column }: { column: FooterColumn }) {
  return (
    <>
      {column.groups.map((group, index) => (
        <div key={group.title} className={index > 0 ? 'mt-3' : ''}>
          <p className="mb-0 text-sm font-bold text-ink">{group.title}</p>
          <ul className="m-0 list-none p-0">
            {group.items.map((item) => (
              <FooterLink key={item.href} item={item} />
            ))}
          </ul>
        </div>
      ))}
      {column.items.length > 0 && (
        <ul className={`m-0 list-none p-0 ${column.groups.length > 0 ? 'mt-3' : ''}`}>
          {column.items.map((item) => (
            <FooterLink key={item.href} item={item} />
          ))}
        </ul>
      )}
    </>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-hairline bg-sand pb-24 text-[0.95rem] text-muted nav:pb-0">
      <div className="mx-auto w-full max-w-site px-4 md:px-6">
        {/* Brand, contact and CTA */}
        <div className="grid gap-8 border-b border-hairline py-10 nav:grid-cols-[1.2fr_1fr] nav:items-start nav:gap-12">
          <div>
            <Link href="/" aria-label="Vietnam Launchpad home" className="inline-flex min-h-[44px] items-center">
              <SiteLogo />
            </Link>
            <p className="mb-4 mt-3 max-w-measure">{footerTagline}</p>
            <ul className="m-0 flex list-none flex-wrap items-center gap-x-6 gap-y-1 p-0 text-ink">
              <li className="flex min-h-[44px] items-center gap-2">
                <Icon name="pin" className="h-4 w-4 text-navy" />
                <span>Hanoi & Da Nang</span>
              </li>
              <li>
                <a href={PHONE_TEL} className="flex min-h-[44px] items-center gap-2 font-medium text-ink hover:text-navy">
                  <Icon name="phone" className="h-4 w-4 text-navy" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={PHONE_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[44px] items-center gap-2 font-medium text-ink hover:text-navy"
                >
                  <Icon name="whatsapp" className="h-4 w-4 text-navy" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
          <div className="rounded-card border border-hairline bg-white p-6">
            <h3 className="mb-2 font-display text-step-1 font-semibold text-ink">{footerCta.heading}</h3>
            <p className="mb-4">{footerCta.text}</p>
            <Button href={footerCta.href} icon="arrow">
              {footerCta.button}
            </Button>
          </div>
        </div>

        {/* Link columns: accordions on mobile, five columns from 900px */}
        <div className="py-6 nav:grid nav:grid-cols-5 nav:gap-8 nav:py-10">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <details className="accordion group border-b border-hairline nav:hidden">
                <summary className="flex min-h-[48px] cursor-pointer items-center justify-between font-bold text-ink">
                  {column.title}
                  <Icon
                    name="chevron"
                    className="h-5 w-5 text-navy transition-transform duration-150 group-open:rotate-180 motion-reduce:transition-none"
                  />
                </summary>
                <div className="pb-3">
                  <ColumnLinks column={column} />
                </div>
              </details>
              <div className="hidden nav:block">
                <h3 className="mb-2 font-body text-sm font-bold uppercase tracking-[0.08em] text-ink">{column.title}</h3>
                <ColumnLinks column={column} />
              </div>
            </div>
          ))}
        </div>

        {/* Legal */}
        <div className="border-t border-hairline py-6 text-sm">
          <div className="flex flex-col gap-3 nav:flex-row nav:items-start nav:justify-between">
            <div className="max-w-[72ch] space-y-2">
              {footerLegal.map((line) => (
                <p key={line} className="m-0">
                  {line}
                </p>
              ))}
              <p className="m-0 text-ink">
                &copy; {new Date().getFullYear()} Vietnam Launchpad. All rights reserved. &middot; Company No. 0108305670
              </p>
            </div>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex min-h-[44px] items-center gap-2 self-start font-medium text-ink hover:text-navy"
              aria-label="Back to top"
            >
              Back to top
              <Icon name="up" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
