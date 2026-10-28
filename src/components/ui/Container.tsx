/** Centred page width (1160px) with 16px side padding, 24px from 768px. */
export default function Container({
  children,
  className = '',
  as: Tag = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'nav' | 'header' | 'footer';
}) {
  return <Tag className={`mx-auto w-full max-w-site px-4 md:px-6 ${className}`}>{children}</Tag>;
}
