'use client';

import { useEffect, useId, useMemo, useRef, useState } from 'react';

export interface ComboboxOption {
  value: string;
  label: string;
  /** Hidden aliases (e.g. "uk"); matched by exact or starts-with only and never displayed. */
  keywords?: string[];
}

/** Lowercase and strip accents so "Cote" matches "Côte" and "dao" matches "Đảo". */
const normalize = (text: string) =>
  text
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/đ/g, 'd')
    .trim();

/**
 * Type-to-search combobox (ARIA 1.2 list autocomplete). Reports the chosen option value through
 * onChange, or '' while nothing is chosen. The input has no name, so a surrounding form still
 * submits without JavaScript.
 */
export default function Combobox({
  options,
  label,
  placeholder,
  noResultsText = 'No countries found',
  onChange,
  className = '',
}: {
  options: ComboboxOption[];
  label: string;
  placeholder?: string;
  noResultsText?: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  const id = useId();
  const listId = `${id}-list`;
  const optionId = (index: number) => `${id}-option-${index}`;
  const rootRef = useRef<HTMLDivElement>(null);
  const [text, setText] = useState('');
  const [selected, setSelected] = useState('');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const [justChosen, setJustChosen] = useState(false);
  // True once the visitor has moved the highlight with the keyboard or mouse since last typing.
  const [navigated, setNavigated] = useState(false);

  // Right after picking from the list, show the full list rather than only the chosen row.
  const query = justChosen ? '' : normalize(text);

  const results = useMemo(() => {
    if (!query) return options;
    // Query starts at a word boundary (space or hyphen) somewhere after the first word.
    const matchesWordStart = (name: string) => {
      for (let index = 1; index < name.length; index++) {
        if ((name[index - 1] === ' ' || name[index - 1] === '-') && name.startsWith(query, index)) return true;
      }
      return false;
    };
    // 0 exact label or keyword, 1 label starts-with, 2 keyword starts-with, 3 label word-start, -1 no match.
    const rank = (option: ComboboxOption) => {
      const name = normalize(option.label);
      const words = (option.keywords ?? []).map(normalize);
      if (name === query || words.includes(query)) return 0;
      if (name.startsWith(query)) return 1;
      if (words.some((word) => word.startsWith(query))) return 2;
      return matchesWordStart(name) ? 3 : -1;
    };
    return options
      .map((option) => ({ option, rank: rank(option) }))
      .filter((entry) => entry.rank >= 0)
      .sort((a, b) => a.rank - b.rank)
      .map((entry) => entry.option);
  }, [options, query]);

  const count = results.length;
  const selectedIndex = results.findIndex((option) => option.value === selected);

  const choose = (option: ComboboxOption | undefined) => {
    setSelected(option?.value ?? '');
    onChange(option?.value ?? '');
  };

  const select = (option: ComboboxOption) => {
    choose(option);
    setText(option.label);
    setJustChosen(true);
    setNavigated(false);
    setOpen(false);
  };

  const openList = () => {
    if (!open && justChosen && selectedIndex >= 0) setActive(selectedIndex);
    setOpen(true);
  };

  const move = (next: number) => {
    setOpen(true);
    setActive((next + results.length) % results.length);
  };

  useEffect(() => {
    if (open && active >= 0) {
      document.getElementById(`${id}-option-${active}`)?.scrollIntoView({ block: 'nearest' });
    }
  }, [open, active, id]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [open]);

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowUp': {
        event.preventDefault();
        const down = event.key === 'ArrowDown';
        setNavigated(true);
        if (!count) setOpen(true);
        // The first press lands on the highlighted row instead of skipping past it.
        else if (open && !navigated) move(down ? Math.max(active, 0) : count - 1);
        else if (open) move(active + (down ? 1 : -1));
        else if (selectedIndex >= 0) move(selectedIndex);
        else move(down ? 0 : count - 1);
        break;
      }
      case 'Home':
      case 'End':
        if (open && count) {
          event.preventDefault();
          setNavigated(true);
          setActive(event.key === 'Home' ? 0 : count - 1);
        }
        break;
      case 'Enter': {
        const highlighted = open && active >= 0 ? results[active] : undefined;
        if (highlighted && (navigated || highlighted.value === selected)) {
          event.preventDefault();
          select(highlighted);
        } else if (normalize(text) && !selected) {
          // Partial, ambiguous or unmatched text: never guess a country and never submit.
          event.preventDefault();
          setOpen(true);
        }
        break;
      }
      case 'Escape':
        if (open) event.preventDefault();
        setOpen(false);
        break;
      case 'Tab':
        setOpen(false);
        break;
    }
  };

  const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const next = event.target.value;
    setText(next);
    setJustChosen(false);
    setNavigated(false);
    setOpen(true);
    setActive(0);
    // Editing clears the choice, unless the text now exactly names an option or one of its keywords.
    const typed = normalize(next);
    choose(
      options.find(
        (option) =>
          typed !== '' && (normalize(option.label) === typed || option.keywords?.some((word) => normalize(word) === typed)),
      ),
    );
  };

  const announcement = !open ? '' : count === 0 ? noResultsText : count === 1 ? '1 country' : `${count} countries`;

  return (
    <div ref={rootRef} className={className}>
      <label htmlFor={`${id}-input`} className="mb-1 block text-[0.9rem] font-bold text-ink">
        {label}
      </label>
      <div className="relative">
        <input
          id={`${id}-input`}
          type="text"
          role="combobox"
          aria-expanded={open}
          aria-controls={open ? listId : undefined}
          aria-activedescendant={open && results[active] ? optionId(active) : undefined}
          aria-autocomplete="list"
          autoComplete="off"
          value={text}
          placeholder={placeholder}
          onChange={onInput}
          onKeyDown={onKeyDown}
          onClick={openList}
          className="block min-h-[48px] w-full rounded-input border border-field bg-white py-2 pl-4 pr-12 font-body text-base text-ink placeholder:text-muted focus-visible:outline-offset-2"
        />
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted transition-transform motion-reduce:transition-none ${open ? 'rotate-180' : ''}`}
        >
          <path d="m5 8 5 5 5-5" />
        </svg>
        {open && (
          <div
            // Keep focus in the input while the pointer is on the popup or its scrollbar.
            onMouseDown={(event) => event.preventDefault()}
            className="absolute left-0 right-0 top-full z-30 mt-1 overflow-hidden rounded-input border border-hairline bg-white shadow-soft"
          >
            <ul id={listId} role="listbox" aria-label={label} className="m-0 max-h-[17rem] list-none overflow-y-auto overscroll-contain p-0">
              {results.map((option, index) => {
                const isSelected = option.value === selected;
                return (
                  <li
                    key={option.value}
                    id={optionId(index)}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => select(option)}
                    onMouseMove={() => {
                      if (active !== index) setActive(index);
                      if (!navigated) setNavigated(true);
                    }}
                    className={`flex min-h-[48px] cursor-pointer items-center justify-between gap-3 px-4 py-2 text-base text-ink ${
                      index === active ? 'bg-sand' : 'bg-white'
                    } ${isSelected ? 'font-bold' : ''}`}
                  >
                    <span>{option.label}</span>
                    {isSelected && (
                      <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 flex-none text-success">
                        <path d="m4 10 4 4 8-8" />
                      </svg>
                    )}
                  </li>
                );
              })}
            </ul>
            {count === 0 && (
              // Announced through the live region below, so hidden from assistive technology here.
              <div aria-hidden="true" className="flex min-h-[48px] items-center px-4 py-2 text-base text-muted">
                {noResultsText}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {announcement}
      </div>
    </div>
  );
}
