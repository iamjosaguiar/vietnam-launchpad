'use client';

import { useId, useState } from 'react';

import { Link, useRouter } from '@/i18n/config';

import Button from './Button';

export interface PassportOption {
  slug: string;
  name: string;
}

/**
 * Nationality select that sends the visitor to /visa/<slug>, or to /visa when nothing is chosen.
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
  const id = useId();
  const router = useRouter();
  const [slug, setSlug] = useState('');

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
      <label htmlFor={`${id}-select`} className="mb-1 block text-[0.9rem] font-bold text-ink">
        {label}
      </label>
      <select
        id={`${id}-select`}
        value={slug}
        onChange={(event) => setSlug(event.target.value)}
        className="mb-4 block min-h-[48px] w-full rounded-input border border-field bg-white px-4 font-body text-base text-ink"
      >
        <option value="">{emptyOption}</option>
        {options.map((option) => (
          <option key={option.slug} value={option.slug}>
            {option.name}
          </option>
        ))}
      </select>
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
