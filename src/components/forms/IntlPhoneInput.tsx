'use client';

import { useEffect, useState } from 'react';
import PhoneInput, { type Country } from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';
import 'react-phone-number-input/style.css';

// Vietnam first, then the countries most of our expat visitors come from.
const COUNTRY_ORDER: (Country | '|' | '...')[] = ['VN', 'AU', 'US', 'GB', 'CA', 'SG', '|', '...'];

const VN_PLACEHOLDER = '+84 901 234 567';

type IntlPhoneInputProps = {
  id: string;
  name: string;
  /** E.164 string (e.g. +84901234567) or '' when empty. */
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  /** Classes for the whole field: border, radius, padding, background and focus-within styles. */
  className: string;
  /** Classes for the number text input inside the field. */
  inputClassName?: string;
};

/**
 * International phone field with a bundled flag country selector. Defaults to
 * Vietnam, keeps every country available and reports the value as E.164.
 */
export default function IntlPhoneInput({
  id,
  name,
  value,
  onChange,
  required,
  className,
  inputClassName = '',
}: IntlPhoneInputProps) {
  const [country, setCountry] = useState<Country | undefined>('VN');

  // In international mode the input already shows the calling code (e.g. +84),
  // so the native required check would pass with no number typed. Flag the
  // field as missing until there is an actual value.
  useEffect(() => {
    const input = document.getElementById(id);
    if (input instanceof HTMLInputElement) {
      input.setCustomValidity(required && !value ? 'Please enter your phone number.' : '');
    }
  }, [id, required, value]);

  return (
    <PhoneInput
      international
      defaultCountry="VN"
      countryOptionsOrder={COUNTRY_ORDER}
      flags={flags}
      id={id}
      name={name}
      required={required}
      autoComplete="tel"
      value={value || undefined}
      onChange={(next) => onChange(next || '')}
      onCountryChange={setCountry}
      placeholder={country === 'VN' ? VN_PLACEHOLDER : undefined}
      className={`intl-phone ${className}`}
      numberInputProps={{ className: `intl-phone__input ${inputClassName}` }}
    />
  );
}
