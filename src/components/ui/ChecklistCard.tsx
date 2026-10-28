'use client';

import { useId, useState } from 'react';

export interface ChecklistItem {
  label: string;
  hint?: string;
}

/**
 * Requirements checklist with a progress bar and ready count. Ticks are local to the
 * visitor's browser. All wording comes from props.
 */
export default function ChecklistCard({
  title,
  items,
  countLabel,
  headingAs: Heading = 'h2',
  initialChecked = [],
  footer,
  className = '',
}: {
  title: string;
  items: ChecklistItem[];
  /**
   * Ready count text using the {done} and {total} tokens, for example "{done} of {total} ready".
   * A string rather than a function so server components can pass it.
   */
  countLabel: string;
  headingAs?: 'h2' | 'h3';
  initialChecked?: number[];
  /** Optional content under the list, inside the card. */
  footer?: React.ReactNode;
  className?: string;
}) {
  const id = useId();
  const [checked, setChecked] = useState<Set<number>>(() => new Set(initialChecked));
  const done = checked.size;
  const total = items.length;
  const percent = total ? Math.round((done / total) * 100) : 0;

  const toggle = (index: number) =>
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });

  return (
    <div className={`rounded-panel border border-hairline bg-white p-6 shadow-soft ${className}`}>
      <div className="mb-3 flex items-center justify-between gap-3">
        <Heading id={`${id}-title`} className="m-0 font-display text-step-1 font-semibold text-ink">
          {title}
        </Heading>
        <span className="whitespace-nowrap rounded-full bg-success-soft px-3 py-0.5 text-sm font-bold text-success" aria-live="polite">
          {countLabel.replace('{done}', String(done)).replace('{total}', String(total))}
        </span>
      </div>
      <div className="mb-3 h-2 overflow-hidden rounded-full bg-[#EAE3D3]" aria-hidden="true">
        <span
          className="block h-full rounded-full bg-success transition-[width] duration-200 motion-reduce:transition-none"
          style={{ width: `${percent}%` }}
        />
      </div>
      <ul className="m-0 list-none p-0" aria-labelledby={`${id}-title`}>
        {items.map((item, index) => (
          <li key={item.label} className="border-t border-hairline">
            <label className="flex min-h-[52px] cursor-pointer items-center gap-1 py-1 font-medium">
              <input
                type="checkbox"
                checked={checked.has(index)}
                onChange={() => toggle(index)}
                className="relative h-11 w-11 flex-none cursor-pointer appearance-none bg-transparent before:absolute before:inset-2.5 before:rounded-[6px] before:border-2 before:border-[#6F7B88] before:bg-white before:content-[''] checked:before:border-success checked:before:bg-success checked:before:bg-[url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20stroke=%22white%22%20stroke-width=%223.5%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22><path%20d=%22M5%2013l4%204L19%207%22/></svg>')] checked:before:bg-center checked:before:bg-no-repeat focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-0 focus-visible:outline-navy"
              />
              <span>
                {item.label}
                {item.hint && <small className="block text-sm font-normal leading-snug text-muted">{item.hint}</small>}
              </span>
            </label>
          </li>
        ))}
      </ul>
      {footer && <div className="border-t border-hairline pt-4">{footer}</div>}
    </div>
  );
}
