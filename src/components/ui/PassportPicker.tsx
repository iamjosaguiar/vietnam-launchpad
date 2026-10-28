'use client';

import { useMemo, useState } from 'react';

import { Link, useRouter } from '@/i18n/config';

import Button from './Button';
import Combobox from './Combobox';

export interface PassportOption {
  slug: string;
  name: string;
}

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
    () => options.map((option) => ({ value: option.slug, label: option.name })),
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
