/**
 * Live ready count and progress bar for ChecklistCard (src/components/ui/ChecklistCard.tsx).
 * The card is static HTML; ticking a box updates "{done} of {total} ready" and the bar.
 */
function update(card: HTMLElement) {
  const boxes = card.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
  const total = boxes.length;
  const done = Array.from(boxes).filter((box) => box.checked).length;
  const label = card.dataset.checklist ?? '';
  const count = card.querySelector('[data-checklist-count]');
  if (count) count.textContent = label.replace('{done}', String(done)).replace('{total}', String(total));
  const bar = card.querySelector<HTMLElement>('[data-checklist-bar]');
  if (bar) bar.style.width = `${total ? Math.round((done / total) * 100) : 0}%`;
}

document.addEventListener('change', (event) => {
  const card = event.target instanceof HTMLInputElement ? event.target.closest<HTMLElement>('[data-checklist]') : null;
  if (card) update(card);
});

// A browser restoring the page from history can bring back ticks, so sync on load too.
document.querySelectorAll<HTMLElement>('[data-checklist]').forEach(update);
