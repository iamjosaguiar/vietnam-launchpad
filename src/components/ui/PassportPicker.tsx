'use client';

import { useMemo, useState } from 'react';

import { Link, useRouter } from '@/i18n/config';

import Button from './Button';
import Combobox from './Combobox';

export interface PassportOption {
  slug: string;
  name: string;
}

/** Hidden search aliases per visa slug; never displayed. */
const KEYWORDS: Record<string, string[]> = {
  'united-states': ['usa', 'us', 'u.s.', 'u.s.a.', 'america', 'united states of america'],
  'united-kingdom': ['uk', 'u.k.', 'britain', 'great britain', 'gb', 'england', 'scotland', 'wales'],
  uae: ['uae', 'emirates', 'dubai', 'abu dhabi', 'united arab emirates'],
  'south-korea': ['korea', 'rok'],
  'czech-republic': ['czechia'],
  myanmar: ['burma'],
  netherlands: ['holland', 'the netherlands'],
  philippines: ['filipino', 'the philippines'],
  russia: ['russian federation'],
  laos: ['lao'],
  china: ['prc', 'peoples republic of china'],
  'new-zealand': ['nz', 'aotearoa'],
  'south-africa': ['rsa'],
  'saudi-arabia': ['ksa'],
};

/**
 * Nationality combobox that sends the visitor to /visa/<slug>, or to /visa when nothing is chosen.
 * Takes a slim option list so the full visa data stays on the server.
 */
export default function PassportPicker({
  options,
  label,
  emptyOption,
  submitLabel,
  secondary,
  allLink,
  className = '',
}: {
  options: PassportOption[];
  label: string;
  emptyOption: string;
  submitLabel: string;
  secondary?: { label: string; href: string };
  allLink?: { label: string; href: string };
  className?: string;
}) {
  const router = useRouter();
  const [slug, setSlug] = useState('');
  const comboOptions = useMemo(
    () => options.map((option) => ({ value: option.slug, label: option.name, keywords: KEYWORDS[option.slug] })),
    [options],
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(slug ? `/visa/${slug}` : '/visa');
  };

  return (
    <form
      onSubmit={onSubmit}
      action="/visa"
      className={`rounded-panel border border-hairline bg-white p-6 shadow-soft ${className}`}
    >
      <Combobox
        options={comboOptions}
        label={label}
        placeholder={emptyOption}
        onChange={setSlug}
        className="mb-4"
      />
      <noscript>
        <details>
          <summary className="flex min-h-[44px] cursor-pointer items-center font-bold text-navy">{label}</summary>
          <ul className="m-0 grid list-none gap-0 p-0 sm:grid-cols-2">
            {options.map((option) => (
              <li key={option.slug}>
                <Link href={`/visa/${option.slug}`} className="inline-flex min-h-[44px] items-center text-navy underline underline-offset-[3px]">
                  {option.name}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </noscript>
      <div className="grid gap-3">
        <Button type="submit" block icon="arrow">
          {submitLabel}
        </Button>
        {secondary && (
          <Button href={secondary.href} variant="secondary" block>
            {secondary.label}
          </Button>
        )}
      </div>
      {allLink && (
        <p className="mb-0 mt-3 text-[0.9rem] text-muted">
          <Link href={allLink.href} className="inline-flex min-h-[44px] items-center font-bold text-navy underline underline-offset-[3px]">
            {allLink.label}
          </Link>
        </p>
      )}
    </form>
  );
}
