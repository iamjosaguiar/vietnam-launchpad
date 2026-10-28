import { homeCopy } from '@/data/homeCopy';

import Container from './ui/Container';
import Chip from './ui/Chip';
import Icon, { type IconName } from './ui/Icon';
import PassportPicker, { type PassportOption } from './ui/PassportPicker';

/** One icon per trust line, in the order of homeCopy.trust. */
const trustIcons: IconName[] = ['shield', 'pin', 'chat', 'calendar'];

/** Functional picker labels. The "all visa pages" link reuses the copy from the visas section. */
const pickerLabel = 'Choose your nationality';
const pickerEmptyOption = 'Select a nationality';
const allVisaPages = homeCopy.s2.links[0];

/** Home hero: warm wash, eyebrow, H1, subheading, passport picker and the trust strip. */
export default function HeroSection({ passportOptions }: { passportOptions: PassportOption[] }) {
  return (
    <>
      <section
        aria-labelledby="home-hero-title"
        className="bg-hero-wash pb-12 pt-[calc(var(--header-h)+32px)] nav:pb-16 nav:pt-[calc(var(--header-h)+64px)]"
      >
        <Container className="grid gap-8 nav:grid-cols-[1.1fr_0.9fr] nav:items-center nav:gap-16">
          <div>
            <Chip as="p" className="mb-4">
              {homeCopy.eyebrow}
            </Chip>
            <h1 id="home-hero-title" className="mb-4 font-display text-step-3 font-semibold text-ink nav:text-step-5">
              {homeCopy.h1}
            </h1>
            <p className="m-0 max-w-[52ch] text-lead text-muted">{homeCopy.sub}</p>
          </div>
          <PassportPicker
            options={passportOptions}
            label={pickerLabel}
            emptyOption={pickerEmptyOption}
            submitLabel={homeCopy.primary.text}
            secondary={{ label: homeCopy.secondary.text, href: homeCopy.secondary.href, track: { label: 'book_consultation', location: 'hero' } }}
            allLink={{ label: allVisaPages.name, href: allVisaPages.href }}
          />
        </Container>
      </section>

      <div className="border-y border-hairline bg-white">
        <Container>
          <ul className="m-0 grid list-none gap-3 py-6 text-[0.95rem] font-medium text-ink nav:grid-cols-4 nav:gap-6">
            {homeCopy.trust.map((item, index) => (
              <li key={item} className="flex items-center gap-3">
                <span className="grid h-10 w-10 flex-none place-items-center rounded-input bg-gold-soft text-navy">
                  <Icon name={trustIcons[index % trustIcons.length]} className="h-[22px] w-[22px]" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </>
  );
}
