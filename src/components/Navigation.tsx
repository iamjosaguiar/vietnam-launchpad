'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useId, useRef, useState } from 'react';

import { Link, usePathname } from '@/i18n/config';
import {
  navButton,
  navLivingGroups,
  navLivingLast,
  navServiceGroups,
  navServicesLast,
  navTopOrder,
  navVisas,
  type NavItem as NavLinkItem,
} from '@/data/siteNav';

import Button from './ui/Button';
import Icon from './ui/Icon';

type MenuGroup = { title?: string; items: NavLinkItem[] };

type TopItem =
  | { kind: 'link'; id: string; label: string; href: string }
  | { kind: 'menu'; id: string; label: string; href: string; groups: MenuGroup[]; footerLink?: NavLinkItem };

/** Logo: the unchanged file, framed to its artwork with CSS. 48px high, 60px from 900px. */
export function SiteLogo({ priority = false }: { priority?: boolean }) {
  return (
    <span className="logo-frame">
      <Image src="/vietnam-launchpad-logo.png" alt="Vietnam Launchpad" width={1024} height={1024} sizes="140px" priority={priority} />
    </span>
  );
}

function isActive(pathname: string, href: string) {
  return pathname === href || (href !== '/' && pathname.startsWith(`${href}/`));
}

function MenuGroups({ item, onNavigate }: { item: Extract<TopItem, { kind: 'menu' }>; onNavigate: () => void }) {
  return (
    <div className={`grid gap-x-6 gap-y-4 ${item.groups.length > 1 ? 'nav:grid-cols-4' : 'nav:grid-cols-1'}`}>
      {item.groups.map((group, index) => (
        <div key={group.title ?? index} className="min-w-0">
          {group.title && <p className="mb-1 px-2 text-sm font-bold text-ink">{group.title}</p>}
          <ul className="m-0 list-none p-0">
            {group.items.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onNavigate}
                  className="flex min-h-[44px] items-center rounded-input px-2 py-1 text-[0.95rem] leading-snug text-muted no-underline hover:bg-sand hover:text-navy"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function Navigation() {
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const menuId = useId();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const mobileButtonRef = useRef<HTMLButtonElement>(null);

  // Order comes from navTopOrder in src/data/siteNav.ts. Enterprise stays inside the Services menu.
  const itemsById: TopItem[] = [
    {
      kind: 'menu',
      id: 'services',
      label: t('services'),
      href: '/services',
      groups: navServiceGroups,
      footerLink: navServicesLast,
    },
    { kind: 'menu', id: 'visas', label: 'Visas', href: '/visa', groups: [{ items: navVisas }] },
    {
      kind: 'menu',
      id: 'living',
      label: 'Living in Vietnam',
      href: '/guides',
      groups: navLivingGroups,
      footerLink: navLivingLast,
    },
    { kind: 'link', id: 'blog', label: t('blog'), href: '/blog' },
    { kind: 'link', id: 'contact', label: t('contact'), href: '/contact' },
  ];
  const items: TopItem[] = navTopOrder.map((id) => itemsById.find((item) => item.id === id)!);

  const closeAll = useCallback(() => {
    setOpenMenu(null);
    setIsMobileOpen(false);
  }, []);

  // Escape closes any open menu and returns focus to its trigger. Clicks outside the header close too.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (openMenu) {
        triggerRefs.current[openMenu]?.focus();
        setOpenMenu(null);
      }
      if (isMobileOpen) {
        mobileButtonRef.current?.focus();
        setIsMobileOpen(false);
      }
    };
    const onPointer = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) setOpenMenu(null);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [openMenu, isMobileOpen]);

  const hoverOpen = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(id);
  };
  const hoverClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };

  const topLinkClass = (active: boolean) =>
    `inline-flex min-h-[44px] items-center gap-1 rounded-input px-3 text-[0.975rem] font-medium no-underline hover:underline underline-offset-4 ${
      active ? 'text-navy' : 'text-ink'
    }`;

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-paper/95 backdrop-blur-[6px]"
    >
      <div className="mx-auto flex h-header w-full max-w-site items-center justify-between gap-4 px-4 md:px-6">
        <Link href="/" aria-label="Vietnam Launchpad home" className="inline-flex min-h-[44px] shrink-0 items-center" onClick={closeAll}>
          <SiteLogo priority />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-1 nav:flex">
          <ul className="m-0 flex list-none items-center gap-1 p-0">
            {items.map((item) => {
              const active = isActive(pathname, item.href);
              if (item.kind === 'link') {
                return (
                  <li key={item.id}>
                    <Link href={item.href} className={topLinkClass(active)} aria-current={pathname === item.href ? 'page' : undefined}>
                      {item.label}
                    </Link>
                  </li>
                );
              }
              const open = openMenu === item.id;
              const panelId = `${menuId}-${item.id}`;
              const wide = item.groups.length > 1;
              return (
                <li
                  key={item.id}
                  className={wide ? '' : 'relative'}
                  onMouseEnter={() => hoverOpen(item.id)}
                  onMouseLeave={hoverClose}
                >
                  <button
                    type="button"
                    ref={(el) => {
                      triggerRefs.current[item.id] = el;
                    }}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenMenu(open ? null : item.id)}
                    className={topLinkClass(active)}
                  >
                    {item.label}
                    <Icon
                      name="chevron"
                      className={`h-4 w-4 transition-transform duration-150 motion-reduce:transition-none ${open ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    id={panelId}
                    hidden={!open}
                    className={wide ? 'absolute inset-x-0 top-full pt-2' : 'absolute left-0 top-full w-[320px] pt-2'}
                  >
                    <div className={wide ? 'mx-auto w-full max-w-site px-4 md:px-6' : ''}>
                      <div className="rounded-card border border-hairline bg-white p-5 shadow-soft">
                        <MenuGroups item={item} onNavigate={closeAll} />
                        {item.footerLink && (
                          <div className="mt-4 border-t border-hairline pt-3">
                            <Link
                              href={item.footerLink.href}
                              onClick={closeAll}
                              className="inline-flex min-h-[44px] items-center gap-2 px-2 font-bold text-navy no-underline hover:underline"
                            >
                              {item.footerLink.name}
                              <Icon name="arrow" className="h-4 w-4" />
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <Button href={navButton.href} size="sm" className="ml-3 whitespace-nowrap" onClick={closeAll}>
            {navButton.text}
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          ref={mobileButtonRef}
          type="button"
          aria-expanded={isMobileOpen}
          aria-controls={`${menuId}-mobile`}
          onClick={() => setIsMobileOpen((open) => !open)}
          className="inline-flex min-h-[44px] min-w-[44px] items-center gap-2 rounded-full border border-hairline bg-white px-4 font-bold text-ink nav:hidden"
        >
          <Icon name={isMobileOpen ? 'close' : 'menu'} className="h-5 w-5" />
          <span>Menu</span>
        </button>
      </div>

      {/* Mobile navigation */}
      <nav
        id={`${menuId}-mobile`}
        aria-label="Main"
        hidden={!isMobileOpen}
        className="max-h-[calc(100dvh-var(--header-h))] overflow-y-auto border-t border-hairline bg-paper nav:hidden"
      >
        <ul className="m-0 list-none px-4 pb-6 pt-2">
          {items.map((item) => {
            if (item.kind === 'link') {
              return (
                <li key={item.id} className="border-b border-hairline">
                  <Link
                    href={item.href}
                    onClick={closeAll}
                    className="flex min-h-[48px] items-center font-bold text-ink no-underline"
                    aria-current={pathname === item.href ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }
            const expanded = mobileExpanded === item.id;
            const panelId = `${menuId}-mobile-${item.id}`;
            return (
              <li key={item.id} className="border-b border-hairline">
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={() => setMobileExpanded(expanded ? null : item.id)}
                  className="flex min-h-[48px] w-full items-center justify-between text-left font-bold text-ink"
                >
                  {item.label}
                  <Icon
                    name="chevron"
                    className={`h-5 w-5 text-navy transition-transform duration-150 motion-reduce:transition-none ${expanded ? 'rotate-180' : ''}`}
                  />
                </button>
                <div id={panelId} hidden={!expanded} className="pb-3">
                  {item.groups.map((group, index) => (
                    <div key={group.title ?? index} className="mb-2">
                      {group.title && <p className="mb-0 mt-2 text-sm font-bold text-ink">{group.title}</p>}
                      <ul className="m-0 list-none p-0">
                        {group.items.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              onClick={closeAll}
                              className="flex min-h-[44px] items-center pl-3 text-muted no-underline hover:text-navy"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {item.footerLink && (
                    <Link
                      href={item.footerLink.href}
                      onClick={closeAll}
                      className="flex min-h-[44px] items-center gap-2 pl-3 font-bold text-navy no-underline"
                    >
                      {item.footerLink.name}
                      <Icon name="arrow" className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
        <div className="px-4 pb-6">
          <Button href={navButton.href} block onClick={closeAll}>
            {navButton.text}
          </Button>
        </div>
      </nav>
    </header>
  );
}
