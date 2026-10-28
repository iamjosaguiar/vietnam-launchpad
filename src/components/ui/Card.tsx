/** White card with a hairline border. `panel` uses the 24px radius for finder and checklist cards. */
export default function Card({
  children,
  className = '',
  as: Tag = 'div',
  radius = 'card',
  shadow = false,
  tone = 'white',
  id,
}: {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'li' | 'aside';
  radius?: 'card' | 'panel';
  shadow?: boolean;
  tone?: 'white' | 'sand' | 'gold';
  id?: string;
}) {
  const tones = { white: 'bg-white border-hairline', sand: 'bg-sand border-hairline', gold: 'bg-gold-soft border-gold-line' };
  return (
    <Tag
      id={id}
      className={`border p-6 ${tones[tone]} ${radius === 'panel' ? 'rounded-panel' : 'rounded-card'} ${
        shadow ? 'shadow-soft' : ''
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
