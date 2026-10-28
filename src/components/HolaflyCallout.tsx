import { Link } from '@/i18n/config';
import { HOLAFLY_DISCOUNT_CODE, HOLAFLY_GUIDE_PATH, HOLAFLY_PLANS_URL } from '@/lib/site';

export const HOLAFLY_VARIANTS = [
  'visa',
  'airport',
  'nomad',
  'cost',
  'banking',
  'family',
  'city',
  'relocation',
] as const;

export type HolaflyVariant = (typeof HOLAFLY_VARIANTS)[number];

const copy: Record<HolaflyVariant, { title: string; body: string; compact?: boolean }> = {
  visa: {
    title: 'Visa sorted? Get connected before you land',
    body: 'Install Holafly Plans before the flight and you land with unlimited data across 160 destinations, plus a US, UK, or Canadian number for receiving messages and 2FA from home. It is the bridge until you register a local Viettel, Vinaphone, or Mobifone SIM. The link applies code VNLAUNCHPAD: 10% off Holafly Plans for the first 12 months. Always On keeps 1GB of backup data free every month after a plan ends, as long as the eSIM stays installed.',
  },
  airport: {
    title: 'Data before the airport SIM queue',
    body: 'Register a Vietnamese SIM at the airport counter. That is still the way to get a +84 number. If you want maps and Grab working before you reach that queue, install Holafly Plans before you fly: one eSIM, unlimited data across 160 destinations, and a US, UK, or Canadian number for receiving messages and 2FA. Code VNLAUNCHPAD, applied by the link, is 10% off Holafly Plans for the first 12 months. Always On includes 1GB of free backup data each month.',
  },
  nomad: {
    title: 'Online on landing, local SIM once you settle',
    body: 'Cafe wifi and a local 4G plan cover most days after you arrive. For the flight and the first days, Holafly Plans is the simpler setup: unlimited data in 160 destinations, installed before you leave, with a US, UK, or Canadian number that can receive messages and 2FA. A Vietnamese SIM still matters for banking and local apps. Code VNLAUNCHPAD takes 10% off Holafly Plans for the first 12 months, and Always On leaves 1GB of free backup data every month.',
  },
  cost: {
    title: 'A note on that mobile-data row',
    body: 'The $5–15 figure is a local prepaid plan after a Vietnamese SIM is registered to your passport. Before that, Holafly Plans is the usual bridge: unlimited data across 160 destinations, with code VNLAUNCHPAD for 10% off the first 12 months. We do not republish Holafly Plans prices here because they change. Always On adds 1GB of free backup data each month once a paid plan ends.',
    compact: true,
  },
  banking: {
    title: 'A bridge until the bank will take your number',
    body: 'Vietnamese banks send OTP to a local SIM. The US, UK, or Canadian number included with Holafly Plans receives messages and 2FA from accounts back home. It does not replace the +84 number the branch will ask for. Use Holafly Plans for unlimited data across 160 destinations until that local SIM is registered. Code VNLAUNCHPAD is 10% off Holafly Plans for the first 12 months. Always On keeps 1GB of backup data free each month.',
  },
  family: {
    title: 'One eSIM before a household of local SIMs',
    body: 'Anyone who needs a Vietnamese bank, a school-portal code, or a local wallet will want their own passport-registered SIM after arrival. Before that, Holafly Plans gets the family online on landing: unlimited data across 160 destinations, and a US, UK, or Canadian number for receiving messages and 2FA. Install it before the flight. Code VNLAUNCHPAD is 10% off Holafly Plans for the first 12 months. Always On includes 1GB of free backup data every month.',
  },
  city: {
    title: 'Getting connected',
    body: 'Fiber is straightforward once you have a lease. For the first days, install Holafly Plans before you fly: unlimited data across 160 destinations, and a US, UK, or Canadian number for messages and 2FA. Then register a local SIM for banking and local apps. Code VNLAUNCHPAD is 10% off Holafly Plans for the first 12 months. Always On includes 1GB of free backup data each month.',
  },
  relocation: {
    title: 'Day-one tip: land already online',
    body: 'A local SIM can be sorted after pickup. Install Holafly Plans before the flight so maps and home-bank codes work when you switch off airplane mode. Unlimited data across 160 destinations, a US, UK, or Canadian number for receiving messages and 2FA, and Always On with 1GB of free backup data each month. Code VNLAUNCHPAD is 10% off Holafly Plans for the first 12 months.',
  },
};

function isVariant(value: string): value is HolaflyVariant {
  return (HOLAFLY_VARIANTS as readonly string[]).includes(value);
}

export default function HolaflyCallout({ variant }: { variant: HolaflyVariant | string }) {
  if (!isVariant(variant)) return null;
  const item = copy[variant];

  return (
    <aside
      aria-label={item.title}
      className={`not-prose my-8 rounded-2xl border border-primary-100 bg-primary-50/70 ${
        item.compact ? 'px-5 py-4' : 'px-6 py-6'
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-primary-700 mb-2">
        Before you fly
      </p>
      <h3 className={`font-display font-bold text-stone-900 mb-2 ${item.compact ? 'text-lg' : 'text-xl'}`}>
        {item.title}
      </h3>
      <p className="text-sm text-stone-600 leading-relaxed mb-4">{item.body}</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={HOLAFLY_PLANS_URL}
          data-track-label="holafly_esim"
          data-track-location="visa_page"
          target="_blank"
          rel="sponsored noopener"
          className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white text-sm font-semibold px-5 py-2.5 min-h-[44px] rounded-full transition-colors"
        >
          Get Holafly Plans
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <Link
          href={HOLAFLY_GUIDE_PATH}
          className="inline-flex items-center justify-center gap-2 border border-primary-200 bg-white text-primary-800 hover:bg-primary-100 text-sm font-semibold px-5 py-2.5 min-h-[44px] rounded-full transition-colors"
        >
          Best eSIM for Vietnam
        </Link>
      </div>
      <p className="mt-3 text-xs text-stone-500 leading-relaxed">
        Code <span className="font-semibold text-stone-700">{HOLAFLY_DISCOUNT_CODE}</span> is applied
        by the button. Affiliate link: Vietnam Launchpad may earn a commission if you buy Holafly Plans,
        at no extra cost to you.
      </p>
    </aside>
  );
}
