import { Link } from '@/i18n/config';

import Icon, { type IconName } from './Icon';

export interface ServiceGroup {
  readonly title: string;
  readonly line: string;
  readonly services: readonly { readonly name: string; readonly href: string; readonly line: string }[];
}

/** Icons follow the group order in the copy: live legally, business, authentication, roots. */
const groupIcons: IconName[] = ['passport', 'briefcase', 'document', 'home'];

const groupId = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** Pill jump links plus one rounded card per service group, two columns from 900px. */
export default function ServiceGroups({
  groups,
  showTabs = true,
  tabsLabel = 'Service groups',
  headingAs: Heading = 'h3',
}: {
  groups: readonly ServiceGroup[];
  showTabs?: boolean;
  tabsLabel?: string;
  headingAs?: 'h2' | 'h3';
}) {
  return (
    <>
      {showTabs && (
        <nav aria-label={tabsLabel} className="mb-6 flex flex-wrap gap-2">
          {groups.map((group) => (
            <a
              key={group.title}
              href={`#svc-${groupId(group.title)}`}
              className="inline-flex min-h-[44px] items-center rounded-full border border-hairline bg-white px-4 text-[0.95rem] font-bold text-ink no-underline hover:border-navy hover:text-navy"
            >
              {group.title}
            </a>
          ))}
        </nav>
      )}
      <div className="grid gap-4 nav:grid-cols-2 nav:gap-6">
        {groups.map((group, index) => (
          <section
            key={group.title}
            id={`svc-${groupId(group.title)}`}
            aria-labelledby={`svc-${groupId(group.title)}-title`}
            className="rounded-card border border-hairline bg-white p-6 nav:p-8"
          >
            <div className="mb-2 flex items-center gap-3">
              <span className="grid h-10 w-10 flex-none place-items-center rounded-input bg-gold-soft text-navy">
                <Icon name={groupIcons[index % groupIcons.length]} className="h-[22px] w-[22px]" />
              </span>
              <Heading id={`svc-${groupId(group.title)}-title`} className="m-0 font-display text-step-1 font-semibold text-ink">
                {group.title}
              </Heading>
            </div>
            <p className="mb-3 text-[0.95rem] text-muted">{group.line}</p>
            <ul className="m-0 list-none p-0">
              {group.services.map((service) => (
                <li key={service.href} className="border-t border-hairline">
                  <Link
                    href={service.href}
                    className="group flex min-h-[56px] items-center justify-between gap-3 py-3 text-ink no-underline"
                  >
                    <span>
                      <strong className="block font-bold group-hover:underline">{service.name}</strong>
                      <span className="block text-[0.9rem] leading-snug text-muted">{service.line}</span>
                    </span>
                    <Icon name="arrow" className="h-4 w-4 flex-none text-navy" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
