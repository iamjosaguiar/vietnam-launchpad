import { Link } from '@/i18n/config';

import Icon, { type IconName } from './Icon';

export type ButtonVariant = 'primary' | 'gold' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full border font-body font-bold text-center no-underline transition-colors duration-150 motion-reduce:transition-none';

const variants: Record<ButtonVariant, string> = {
  primary: 'border-navy bg-navy text-white hover:border-navy-deep hover:bg-navy-deep',
  gold: 'border-gold bg-gold text-ink hover:border-gold-hover hover:bg-gold-hover',
  secondary: 'border-navy bg-white text-navy hover:bg-sand',
  ghost: 'border-transparent bg-transparent text-navy underline-offset-4 hover:underline',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'min-h-[44px] px-5 text-[0.95rem]',
  md: 'min-h-[48px] px-6 text-base',
};

export function buttonClasses({
  variant = 'primary',
  size = 'md',
  block = false,
  className = '',
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  className?: string;
} = {}) {
  return [base, variants[variant], sizes[size], block ? 'w-full' : '', className].filter(Boolean).join(' ');
}

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  icon?: IconName;
  /** Icon before the label instead of after it. */
  iconFirst?: boolean;
  className?: string;
  /** Marks the button as a call to action for analytics: fixed label and where it sits. */
  track?: { label: string; location: string };
  children: React.ReactNode;
};

type LinkButtonProps = CommonProps & {
  href: string;
  external?: boolean;
  onClick?: () => void;
};

type NativeButtonProps = CommonProps & {
  href?: undefined;
  type?: 'button' | 'submit';
  onClick?: () => void;
};

export default function Button(props: LinkButtonProps | NativeButtonProps) {
  const { variant, size, block, icon, iconFirst, className, children } = props;
  const classes = buttonClasses({ variant, size, block, className });
  const trackAttributes = props.track
    ? { 'data-track': 'cta_click', 'data-track-label': props.track.label, 'data-track-location': props.track.location }
    : {};
  const iconEl = icon ? <Icon name={icon} className="h-4 w-4 flex-none" /> : null;
  const content = (
    <>
      {iconFirst && iconEl}
      <span>{children}</span>
      {!iconFirst && iconEl}
    </>
  );

  if (props.href !== undefined) {
    const isExternal = props.external || /^(https?:|tel:|mailto:)/.test(props.href);
    if (isExternal) {
      const newTab = /^https?:/.test(props.href);
      return (
        <a
          href={props.href}
          className={classes}
          onClick={props.onClick}
          {...trackAttributes}
          {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes} onClick={props.onClick} {...trackAttributes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={props.type ?? 'button'} className={classes} onClick={props.onClick} {...trackAttributes}>
      {content}
    </button>
  );
}
