import Icon from './Icon';

export interface AccordionItem {
  question: string;
  answer: React.ReactNode;
}

/**
 * FAQ list on native details/summary: keyboard and screen reader support come built in.
 * `questionAs` wraps each question in a heading so pages keep their heading outline.
 */
export default function Accordion({
  items,
  defaultOpenIndex,
  questionAs: Question = 'span',
  className = '',
}: {
  items: AccordionItem[];
  defaultOpenIndex?: number;
  questionAs?: 'span' | 'h3';
  className?: string;
}) {
  return (
    <div className={`accordion border-t border-ink ${className}`}>
      {items.map((item, index) => (
        <details key={item.question} className="border-b border-hairline" open={index === defaultOpenIndex}>
          <summary className="flex min-h-[56px] cursor-pointer items-center justify-between gap-4 py-3 font-bold text-ink">
            <Question className="m-0 font-body text-base font-bold text-ink">{item.question}</Question>
            <Icon
              name="plus"
              className="accordion-icon mr-1 h-[18px] w-[18px] flex-none text-navy transition-transform duration-150 motion-reduce:transition-none"
            />
          </summary>
          <div className="max-w-measure pb-6 text-muted">{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
