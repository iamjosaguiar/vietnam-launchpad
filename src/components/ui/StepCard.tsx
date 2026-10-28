import Icon, { type IconName } from './Icon';

/** Rounded card with a small gold-soft icon square (or step number), serif title and muted text. */
export default function StepCard({
  title,
  text,
  icon,
  step,
  as: Tag = 'li',
  headingAs: Heading = 'h3',
  children,
  className = '',
}: {
  title: string;
  text: string;
  icon?: IconName;
  step?: number;
  as?: 'li' | 'div' | 'article';
  headingAs?: 'h2' | 'h3' | 'h4';
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Tag className={`flex flex-col rounded-card border border-hairline bg-white p-6 ${className}`}>
      {(step !== undefined || icon) && (
        <div className="mb-3 flex items-center gap-3">
          {step !== undefined ? (
            <span
              className="grid h-11 w-11 place-items-center rounded-input bg-gold-soft font-display text-step-1 font-semibold text-navy"
              aria-hidden="true"
            >
              {step}
            </span>
          ) : icon ? (
            <span className="grid h-11 w-11 place-items-center rounded-input bg-gold-soft text-navy">
              <Icon name={icon} className="h-6 w-6" />
            </span>
          ) : null}
        </div>
      )}
      <Heading className="mb-2 font-display text-step-1 font-semibold text-ink">{title}</Heading>
      <p className="max-w-measure text-[0.975rem] text-muted">{text}</p>
      {children && <div className="mt-auto pt-4">{children}</div>}
    </Tag>
  );
}
