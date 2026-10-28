import Button from './Button';

/** Deep navy closing band with a gold button. No logo on it. */
export default function ClosingBand({
  title,
  text,
  button,
  headingId,
  children,
  className = '',
}: {
  title: string;
  text?: string;
  button: { label: string; href: string };
  headingId?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`grid gap-6 rounded-panel bg-navy-deep px-6 py-8 text-white nav:grid-cols-[1fr_auto] nav:items-center nav:p-12 ${className}`}
    >
      <div>
        <h2 id={headingId} className="m-0 font-display text-step-2 font-semibold text-white nav:text-step-4">
          {title}
        </h2>
        {text && <p className="mb-0 mt-2 max-w-measure text-[#D6E2F0]">{text}</p>}
        {children}
      </div>
      <Button href={button.href} variant="gold" icon="arrow" className="justify-self-start">
        {button.label}
      </Button>
    </div>
  );
}
