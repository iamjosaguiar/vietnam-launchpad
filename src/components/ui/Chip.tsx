import Icon, { type IconName } from './Icon';

/** Small pill label. `gold` for the hero eyebrow and notices, `outline` for neutral tags. */
export default function Chip({
  children,
  icon,
  variant = 'gold',
  className = '',
  as: Tag = 'span',
}: {
  children: React.ReactNode;
  icon?: IconName;
  variant?: 'gold' | 'outline';
  className?: string;
  as?: 'span' | 'p';
}) {
  const variants = {
    gold: 'border-gold-line bg-gold-soft text-navy',
    outline: 'border-hairline bg-white text-ink',
  };
  return (
    <Tag
      className={`inline-flex min-h-[32px] items-center gap-2 rounded-full border px-3 py-1 text-sm font-bold ${variants[variant]} ${className}`}
    >
      {icon && <Icon name={icon} className="h-4 w-4 flex-none" />}
      {children}
    </Tag>
  );
}
