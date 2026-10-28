// Generated from the approved copy files (27 October 2026). Do not edit wording here without updating the copy.
export type CuratedBlock =
  | { t: 'h2'; text: string }
  | { t: 'md'; text: string }
  | { t: 'buttons'; primary: { text: string; href: string }; secondary: { text: string; href: string } }
  | { t: 'feeTable'; heading: string; intro: string; headings: string[]; rows: string[][]; caption: string }
  | { t: 'affiliate' };

export interface CuratedVisaPage {
  slug: string;
  flag: string;
  badgeTone: 'blue' | 'emerald';
  metaTitle: string;
  metaDescription: string;
  badge: string;
  h1: string;
  heroText: string;
  lastVerified: string;
  privateLine: string;
  factsHeading: string;
  facts: [string, string][];
  blocks: CuratedBlock[];
  faqHeading: string;
  faqs: { q: string; a: string }[];
}

export const curatedVisaPages: Record<string, CuratedVisaPage> = {
  "australia": {
    "slug": "australia",
    "flag": "🇦🇺",
    "badgeTone": "blue",
    "metaTitle": "Vietnam Visa for Australians: eVisa Guide 2026",
    "metaDescription": "Australians need a visa for Vietnam. US$25 single entry and US$50 multiple entry eVisa, valid up to 90 days. Official sources, checked 29 October 2026.",
    "badge": "eVisa needed",
    "h1": "Vietnam Visa for Australians",
    "heroText": "Yes, Australian passport holders need a visa to enter Vietnam. Australia is not on Vietnam's visa exemption list. The eVisa is the online option, and you apply for it before you fly.",
    "lastVerified": "Last verified: 29 October 2026. Checked against Vietnam's Ministry of Foreign Affairs, the Vietnam Immigration Department, the Embassy of Vietnam in Australia, Vietnam's Law on Entry, Exit, Transit and Residence of Foreigners and Smartraveller. Rules and fees can change, so confirm on the official sources below before you book.",
    "privateLine": "Vietnam Launchpad is a private company, not the Vietnamese government. The official eVisa portal is evisa.gov.vn.",
    "factsHeading": "Quick facts for Australian passport holders",
    "facts": [
      [
        "Visa needed",
        "Yes"
      ],
      [
        "Visa free entry",
        "No, apart from the Phu Quoc and airport transit cases below"
      ],
      [
        "Government eVisa fee",
        "US$25 for a single entry, US$50 for multiple entry. See the fee table below."
      ],
      [
        "eVisa processing",
        "The Immigration Department says 3 working days after you pay"
      ],
      [
        "eVisa validity",
        "Up to 90 days, single or multiple entry"
      ],
      [
        "Where to apply",
        "evisa.gov.vn"
      ],
      [
        "Passport",
        "You need a valid passport. Vietnam's law says a visa's term must end at least 30 days before your passport expires."
      ]
    ],
    "faqHeading": "Vietnam visa questions from Australians",
    "blocks": [
      {
        "t": "h2",
        "text": "Do Australians need a visa for Vietnam?"
      },
      {
        "t": "md",
        "text": "Yes. The Embassy of Vietnam in Australia answers this on its FAQ page: Australian citizens need a visa to enter Vietnam. Smartraveller, the Australian Government's travel advice service, says the same: you must have an appropriate visa before you travel.\n\nVietnam's Ministry of Foreign Affairs publishes the list of countries whose citizens can enter without a visa. Australia is not on it. You may still see older articles saying Australians get 45 days without a visa. Vietnam's 45 day exemption applies only to citizens of the countries named on that list, and Australia is not one of them."
      },
      {
        "t": "h2",
        "text": "Is there any visa free option?"
      },
      {
        "t": "md",
        "text": "There are two narrow cases.\n\nPhu Quoc. The Embassy of Vietnam in Australia says travellers are exempt from a visa for 30 days only when they enter Phu Quoc directly through an international airport outside Vietnam, or through a Vietnamese international airport where they stay in the transit area and wait for the connecting flight to Phu Quoc. If you leave Phu Quoc for other parts of Vietnam, you need a visa. Check the Embassy page before you rely on this.\n\nAirport transit. The Embassy says foreigners changing planes by air do not need a visa if they stay in the transit area of the international airport. If you need to go through immigration, for example to collect and recheck bags or to take a domestic flight, you need a visa before you leave."
      },
      {
        "t": "h2",
        "text": "eVisa fees and processing time"
      },
      {
        "t": "feeTable",
        "heading": "What an eVisa costs and who you pay",
        "intro": "The government fee is set by Vietnam and paid to the Vietnam Immigration Department on the official portal. Any other cost, if you choose to pay for help, is separate from it.",
        "headings": [
          "What you pay for",
          "Who you pay",
          "Amount",
          "Notes"
        ],
        "rows": [
          [
            "Government fee, single entry eVisa",
            "Vietnam Immigration Department, on the official portal",
            "US$25",
            "Valid for up to 90 days. Not refunded if your application is refused."
          ],
          [
            "Government fee, multiple entry eVisa",
            "Vietnam Immigration Department, on the official portal",
            "US$50",
            "Valid for up to 90 days. Not refunded if your application is refused."
          ]
        ],
        "caption": "Last checked: 29 October 2026. Source: Vietnam Immigration Department, evisa.gov.vn. The fee schedule is set by Ministry of Finance Circular 28 of 2026, in force from 1 April 2026. Fees are set by the Vietnamese authorities and can change, so check the portal before you pay."
      },
      {
        "t": "md",
        "text": "The eVisa is issued by the Vietnam Immigration Department. This is what the Immigration Department publishes, checked on 29 October 2026:\n\n- An eVisa is valid for up to 90 days, for single or multiple entry.\n- The Immigration Department says applications are processed in 3 working days after you pay the fee.\n- The fee is paid by electronic payment on the portal and is not refunded if your application is refused.\n\nFees and times are set by the Vietnamese authorities and can change. Check the portal before you pay."
      },
      {
        "t": "md",
        "text": "### How the official process works\n\nStep 1: Go to evisa.gov.vn. The Immigration Department also lists thithucdientu.gov.vn. Check the address before you enter any details.\n\nStep 2: Fill in the form and upload a photo of your passport details page and a portrait photo. The portal gives you a registration code. Missing or incorrect information means the application will not be accepted.\n\nStep 3: Pay the government fee shown in the fee table. The Immigration Department says processing takes 3 working days after you pay.\n\nStep 4: Use your registration code, email and date of birth in the eVisa search on the portal to see the result. If approved, print your eVisa to enter and exit Vietnam."
      },
      {
        "t": "md",
        "text": "Your eVisa works at the border points the Immigration Department lists for eVisa holders. Check that the airport or crossing you plan to use is on its list before you book."
      },
      {
        "t": "h2",
        "text": "Check your details before you fly"
      },
      {
        "t": "md",
        "text": "Smartraveller warns that your visa details must match your passport exactly, including your full name, middle names, date of birth and passport number. It says errors can mean a significant fee at check in or on arrival, being unable to board, or being refused entry. It suggests checking the details when you apply and again when the visa arrives, and carrying a printed copy of your eVisa approval.\n\nAlso check the exit date stamped in your passport when you arrive, before you leave the immigration counter. Smartraveller says a wrong date could see you fined for overstaying."
      },
      {
        "t": "affiliate"
      },
      {
        "t": "h2",
        "text": "What to carry"
      },
      {
        "t": "md",
        "text": "- A valid passport. Vietnam's law says your visa's term must end at least 30 days before your passport expires, so check the expiry date against your travel dates.\n- A printed copy of your approved eVisa.\n- The details on your eVisa checked against your passport.\n\nAsk your airline if it needs anything else before you fly."
      },
      {
        "t": "h2",
        "text": "Apply yourself or get help"
      },
      {
        "t": "md",
        "text": "You can apply yourself on the official portal at any time. Smartraveller warns that some travellers have been scammed by private online visa services and travel agents, and tells Australians to apply through the Government of Vietnam's official website or offices. Make sure the web address is evisa.gov.vn or thithucdientu.gov.vn.\n\nIf you would rather hand over the application, our team can prepare and submit your eVisa for you. We are a private service, and the government fee is paid to the Immigration Department."
      },
      {
        "t": "buttons",
        "primary": {
          "text": "See our eVisa service",
          "href": "/services/evisa"
        },
        "secondary": {
          "text": "Book a free consultation",
          "href": "/contact"
        }
      },
      {
        "t": "h2",
        "text": "Staying longer than 90 days"
      },
      {
        "t": "md",
        "text": "An eVisa is valid for up to 90 days, so it suits a holiday, a long trip or a first visit to see how Vietnam feels. You apply for it from outside Vietnam, and the official portal has no self service extension.\n\nIf you want more time, the routes are a new visa applied for by a Vietnamese sponsor, usually through a licensed agency, or leaving Vietnam and applying for a new eVisa. What Immigration decides depends on your situation, so ask before your eVisa runs out. For stays longer than 90 days, Smartraveller tells Australians to contact the nearest embassy or consulate of Vietnam.\n\nIf you are thinking about living in Vietnam, start with our guide to how long you can stay, and check the Vietnam Immigration Department for the current position."
      },
      {
        "t": "md",
        "text": "- [How long can you stay in Vietnam](/guides/how-long-can-you-stay-in-vietnam)\n- [Read the TRC guide](/guides/trc-vietnam)\n- [TRC application service](/services/trc-application)"
      },
      {
        "t": "h2",
        "text": "Official sources"
      },
      {
        "t": "md",
        "text": "Check these before you book. We last read them on 29 October 2026.\n\n- Vietnam Immigration Department eVisa portal: https://evisa.gov.vn\n- Vietnam Immigration Department eVisa information: https://immigration.gov.vn/trang-chu-ttdt\n- Ministry of Finance Circular 28 of 2026, visa fee schedule, in force from 1 April 2026: https://congbao.chinhphu.vn/van-ban/thong-tu-so-28-2026-tt-btc-469231.htm\n- Law on Entry, Exit, Transit and Residence of Foreigners in Vietnam, consolidated text of 23 March 2026: https://congbao.chinhphu.vn/van-ban/van-ban-hop-nhat-so-62-vbhn-vpqh-469192.htm\n- Ministry of Foreign Affairs, Vietnam visa exemption list: https://mofa.gov.vn/vi/tin-chi-tiet/chi-tiet/viet-nam-39-s-visa-exemption-list-57163-172.html\n- Embassy of Vietnam in Australia, FAQ: https://www.vietnamembassy.org.au/en/faq\n- Smartraveller, Vietnam travel advice: https://www.smartraveller.gov.au/destinations/asia/vietnam"
      }
    ],
    "faqs": [
      {
        "q": "Do Australians need a visa for Vietnam?",
        "a": "Yes. The Embassy of Vietnam in Australia says Australian citizens need a visa to enter Vietnam, and Australia is not on Vietnam's visa exemption list. Most travellers apply for an eVisa online at evisa.gov.vn before they fly."
      },
      {
        "q": "How much is a Vietnam eVisa for Australians?",
        "a": "The Vietnam Immigration Department charges US$25 for a single entry eVisa and US$50 for a multiple entry eVisa. That is the government fee. The fee is not refunded if your application is refused. Check the portal for the current fee before you pay."
      },
      {
        "q": "How long does a Vietnam eVisa take?",
        "a": "The Immigration Department says applications are processed in 3 working days after you pay. Apply well before you fly, in case the portal asks you to fix a detail."
      },
      {
        "q": "How long can Australians stay in Vietnam?",
        "a": "An eVisa is valid for up to 90 days. The dates on your visa and the exit date stamped in your passport on arrival decide how long you can stay, so check both. There is no self service extension for an eVisa. For a longer stay, read our guide to how long you can stay in Vietnam and ask Immigration or a licensed agency about your options."
      },
      {
        "q": "Is the Vietnam eVisa single or multiple entry?",
        "a": "It can be either. The Immigration Department says an eVisa is valid for up to 90 days, for single or multiple entry. A single entry eVisa is listed at US$25 and a multiple entry eVisa at US$50."
      },
      {
        "q": "Can Australians visit Phu Quoc without a visa?",
        "a": "Only in a narrow case. The Embassy of Vietnam in Australia says travellers can stay 30 days without a visa if they enter Phu Quoc directly through an international airport outside Vietnam, or connect to Phu Quoc through a Vietnamese international airport and stay in the transit area. Leaving Phu Quoc for the rest of Vietnam needs a visa. Check the Embassy page before you travel."
      }
    ]
  },
  "united-states": {
    "slug": "united-states",
    "flag": "🇺🇸",
    "badgeTone": "blue",
    "metaTitle": "Vietnam Visa for US Citizens: eVisa Guide 2026",
    "metaDescription": "US citizens need a visa for Vietnam. US$25 single entry and US$50 multiple entry eVisa, valid up to 90 days. Official sources, checked 29 October 2026.",
    "badge": "eVisa needed",
    "h1": "Vietnam Visa for US Citizens",
    "heroText": "Yes, US passport holders need a visa to enter Vietnam. The United States is not on Vietnam's visa exemption list. The eVisa is the online option, and you apply for it before you fly.",
    "lastVerified": "Last verified: 29 October 2026. Checked against Vietnam's Ministry of Foreign Affairs, the Vietnam Immigration Department, the Embassy of Vietnam in the United States and Vietnam's Law on Entry, Exit, Transit and Residence of Foreigners. Rules and fees can change, so confirm on the official sources below before you book.",
    "privateLine": "Vietnam Launchpad is a private company, not the Vietnamese government. The official eVisa portal is evisa.gov.vn.",
    "factsHeading": "Quick facts for US passport holders",
    "facts": [
      [
        "Visa needed",
        "Yes"
      ],
      [
        "Visa free entry",
        "No, apart from the Phu Quoc and airport transit cases below"
      ],
      [
        "Government eVisa fee",
        "US$25 for a single entry, US$50 for multiple entry. See the fee table below."
      ],
      [
        "eVisa processing",
        "The Immigration Department says 3 working days after you pay"
      ],
      [
        "eVisa validity",
        "Up to 90 days, single or multiple entry"
      ],
      [
        "Where to apply",
        "evisa.gov.vn"
      ],
      [
        "Passport",
        "You need a valid passport. Vietnam's law says a visa's term must end at least 30 days before your passport expires."
      ]
    ],
    "faqHeading": "Vietnam visa questions from US citizens",
    "blocks": [
      {
        "t": "h2",
        "text": "Do US citizens need a visa for Vietnam?"
      },
      {
        "t": "md",
        "text": "Yes. Vietnam's Ministry of Foreign Affairs publishes the list of countries whose citizens can enter without a visa, and the United States is not on it. You may still see older articles saying Americans get 45 days without a visa. Vietnam's 45 day exemption applies only to citizens of the countries named on that list, and the United States is not one of them.\n\nThe Embassy of Vietnam in the United States describes two ways to get a visa. A regular visa, issued as a sticker or loose leaf visa, comes from the Embassy. An eVisa comes from the Vietnam Immigration Department. For most visitors the eVisa is the simpler route."
      },
      {
        "t": "h2",
        "text": "Is there any visa free option?"
      },
      {
        "t": "md",
        "text": "There are two narrow cases.\n\nPhu Quoc. The Ministry of Foreign Affairs list notes that holders of foreign passports are exempt from a visa to enter and leave Phu Quoc island, for a stay of no longer than 30 days. The Embassy of Vietnam in Australia spells out how you must arrive: directly by international flight, or through a Vietnamese airport transit area. We could not find the same detail on the US Embassy page, so check with the Embassy of Vietnam in Washington DC before you rely on this. If you leave Phu Quoc for other parts of Vietnam, you need a visa.\n\nAirport transit. Vietnam's Law on Entry, Exit, Transit and Residence of Foreigners says foreigners changing planes by air do not need a visa, as long as they stay in the transit area of the international airport while they wait for their flight. If you need to go through immigration, you need a visa."
      },
      {
        "t": "h2",
        "text": "Vietnamese origin or Vietnamese family"
      },
      {
        "t": "md",
        "text": "If you are of Vietnamese origin, or the spouse or child of a Vietnamese citizen or of a Vietnamese person living overseas, a visa exemption certificate may be open to you. The Embassy of Vietnam in the United States lists who is eligible and what to submit. It says your passport needs at least one year of validity. Read the Embassy page and confirm with the Embassy before you plan around it."
      },
      {
        "t": "h2",
        "text": "eVisa fees and processing time"
      },
      {
        "t": "feeTable",
        "heading": "What an eVisa costs and who you pay",
        "intro": "The government fee is set by Vietnam and paid to the Vietnam Immigration Department on the official portal. Any other cost, if you choose to pay for help, is separate from it.",
        "headings": [
          "What you pay for",
          "Who you pay",
          "Amount",
          "Notes"
        ],
        "rows": [
          [
            "Government fee, single entry eVisa",
            "Vietnam Immigration Department, on the official portal",
            "US$25",
            "Valid for up to 90 days. Not refunded if your application is refused."
          ],
          [
            "Government fee, multiple entry eVisa",
            "Vietnam Immigration Department, on the official portal",
            "US$50",
            "Valid for up to 90 days. Not refunded if your application is refused."
          ]
        ],
        "caption": "Last checked: 29 October 2026. Source: Vietnam Immigration Department, evisa.gov.vn. The fee schedule is set by Ministry of Finance Circular 28 of 2026, in force from 1 April 2026. Fees are set by the Vietnamese authorities and can change, so check the portal before you pay."
      },
      {
        "t": "md",
        "text": "The eVisa is issued by the Vietnam Immigration Department, not by the Embassy. This is what the Immigration Department publishes, checked on 29 October 2026:\n\n- An eVisa is valid for up to 90 days, for single or multiple entry.\n- The Immigration Department says applications are processed in 3 working days after you pay the fee.\n- The fee is paid by electronic payment on the portal and is not refunded if your application is refused.\n\nVietnam opened the eVisa to citizens of all countries and territories from 15 August 2023. Fees and times are set by the Vietnamese authorities and can change. Check the portal before you pay."
      },
      {
        "t": "md",
        "text": "### How the official process works\n\nStep 1: Go to evisa.gov.vn. The Immigration Department also lists thithucdientu.gov.vn. Check the address before you enter any details.\n\nStep 2: Fill in the form and upload a photo of your passport details page and a portrait photo. The portal gives you a registration code. Missing or incorrect information means the application will not be accepted.\n\nStep 3: Pay the government fee shown in the fee table. The Immigration Department says processing takes 3 working days after you pay.\n\nStep 4: Use your registration code, email and date of birth in the eVisa search on the portal to see the result. If approved, print your eVisa to enter and exit Vietnam.\n\nThe Embassy of Vietnam in the United States says eVisas are processed directly by the Immigration Department in Hanoi, not by the Embassy. It gives foreigners@immigration.gov.vn for eVisa questions."
      },
      {
        "t": "md",
        "text": "Your eVisa works at the border points the Immigration Department lists for eVisa holders. Check that the airport or crossing you plan to use is on its list before you book."
      },
      {
        "t": "h2",
        "text": "Check your details before you fly"
      },
      {
        "t": "md",
        "text": "Check every detail on your eVisa against your passport, including your full name, date of birth and passport number, and carry a printed copy of your approval. Smartraveller, the Australian Government's travel advice service, warns that errors can mean a fee at check in, being unable to board, or being refused entry. The same logic applies to any passport.\n\nAlso check the exit date stamped in your passport when you arrive, before you leave the immigration counter."
      },
      {
        "t": "affiliate"
      },
      {
        "t": "h2",
        "text": "What to carry"
      },
      {
        "t": "md",
        "text": "- A valid passport. Vietnam's law says your visa's term must end at least 30 days before your passport expires, so check the expiry date against your travel dates.\n- A printed copy of your approved eVisa.\n- The details on your eVisa checked against your passport.\n\nAsk your airline if it needs anything else before you fly."
      },
      {
        "t": "h2",
        "text": "Apply yourself or get help"
      },
      {
        "t": "md",
        "text": "You can apply yourself on the official portal at any time. Smartraveller warns that some travellers have been scammed by private online visa services and travel agents, and recommends the Government of Vietnam's official website. Make sure the web address is evisa.gov.vn or thithucdientu.gov.vn.\n\nIf you would rather hand over the application, our team can prepare and submit your eVisa for you. We are a private service, and the government fee is paid to the Immigration Department."
      },
      {
        "t": "buttons",
        "primary": {
          "text": "See our eVisa service",
          "href": "/services/evisa"
        },
        "secondary": {
          "text": "Book a free consultation",
          "href": "/contact"
        }
      },
      {
        "t": "h2",
        "text": "Staying longer than 90 days"
      },
      {
        "t": "md",
        "text": "An eVisa is valid for up to 90 days, so it suits a holiday, a long trip or a first visit to see how Vietnam feels. You apply for it from outside Vietnam, and the official portal has no self service extension.\n\nIf you want more time, the routes are a new visa applied for by a Vietnamese sponsor, usually through a licensed agency, or leaving Vietnam and applying for a new eVisa. What Immigration decides depends on your situation, so ask before your eVisa runs out.\n\nIf you are thinking about living in Vietnam, start with our guide to how long you can stay, and check the Vietnam Immigration Department for the current position."
      },
      {
        "t": "md",
        "text": "- [How long can you stay in Vietnam](/guides/how-long-can-you-stay-in-vietnam)\n- [Read the TRC guide](/guides/trc-vietnam)\n- [TRC application service](/services/trc-application)"
      },
      {
        "t": "h2",
        "text": "Official sources"
      },
      {
        "t": "md",
        "text": "Check these before you book. We last read them on 29 October 2026.\n\n- Vietnam Immigration Department eVisa portal: https://evisa.gov.vn\n- Vietnam Immigration Department eVisa information: https://immigration.gov.vn/trang-chu-ttdt\n- Ministry of Finance Circular 28 of 2026, visa fee schedule, in force from 1 April 2026: https://congbao.chinhphu.vn/van-ban/thong-tu-so-28-2026-tt-btc-469231.htm\n- Law on Entry, Exit, Transit and Residence of Foreigners in Vietnam, consolidated text of 23 March 2026: https://congbao.chinhphu.vn/van-ban/van-ban-hop-nhat-so-62-vbhn-vpqh-469192.htm\n- Ministry of Foreign Affairs, Vietnam visa exemption list: https://mofa.gov.vn/vi/tin-chi-tiet/chi-tiet/viet-nam-39-s-visa-exemption-list-57163-172.html\n- Embassy of Vietnam in the United States, visa procedures: https://vietnamembassy-usa.org/content/visa-application-process\n- Embassy of Vietnam in the United States, visa exemption certificate: https://vietnamembassy-usa.org/consular/visa-exemption\n- Smartraveller, Vietnam travel advice: https://www.smartraveller.gov.au/destinations/asia/vietnam"
      }
    ],
    "faqs": [
      {
        "q": "Do US citizens need a visa for Vietnam?",
        "a": "Yes. The United States is not on Vietnam's visa exemption list. Most travellers apply for an eVisa online at evisa.gov.vn before they fly. You can also ask the Embassy of Vietnam in the United States for a regular visa."
      },
      {
        "q": "How much is a Vietnam eVisa for US citizens?",
        "a": "The Vietnam Immigration Department charges US$25 for a single entry eVisa and US$50 for a multiple entry eVisa. That is the government fee. The fee is not refunded if your application is refused. Check the portal for the current fee before you pay."
      },
      {
        "q": "How long does a Vietnam eVisa take?",
        "a": "The Immigration Department says applications are processed in 3 working days after you pay. Apply well before you fly, in case the portal asks you to fix a detail."
      },
      {
        "q": "How long can US citizens stay in Vietnam?",
        "a": "An eVisa is valid for up to 90 days. The dates on your visa and the exit date stamped in your passport on arrival decide how long you can stay, so check both. There is no self service extension for an eVisa. For a longer stay, read our guide to how long you can stay in Vietnam and ask Immigration or a licensed agency about your options."
      },
      {
        "q": "Should I get an eVisa or a visa from the Embassy?",
        "a": "The Embassy of Vietnam in the United States describes both. The Embassy issues regular sticker or loose leaf visas and accepts applications on its online consular portal or in person. The eVisa is applied for on the Immigration Department portal and is processed by the Immigration Department in Hanoi, not by the Embassy. Most visitors use the eVisa."
      },
      {
        "q": "Can US citizens visit Phu Quoc without a visa?",
        "a": "Possibly, in a narrow case. The Ministry of Foreign Affairs list notes a visa exemption for foreign passport holders entering and leaving Phu Quoc island for up to 30 days. The Embassy of Vietnam in Australia says you must enter Phu Quoc directly from abroad or through a Vietnamese airport transit area, and that leaving Phu Quoc for the rest of Vietnam needs a visa. Check with the Embassy of Vietnam in Washington DC before you travel."
      },
      {
        "q": "Do I need a visa if I am of Vietnamese origin?",
        "a": "You may be able to get a visa exemption certificate instead. The Embassy of Vietnam in the United States lists Vietnamese people living overseas, and spouses and children of Vietnamese citizens or of Vietnamese people living overseas, as eligible, with a passport of at least one year of validity. Read the Embassy page and confirm with the Embassy before you rely on it."
      }
    ]
  },
  "united-kingdom": {
    "slug": "united-kingdom",
    "flag": "🇬🇧",
    "badgeTone": "emerald",
    "metaTitle": "Vietnam Visa for UK Citizens: Entry Rules 2026",
    "metaDescription": "UK citizens can visit Vietnam without a visa for up to 45 days. See entry rules, eVisa options for longer stays and sources, checked 27 October 2026.",
    "badge": "45 days without a visa",
    "h1": "Vietnam Visa for UK Citizens",
    "heroText": "UK passport holders can visit Vietnam without a visa for up to 45 days. If you plan to stay longer, you need a visa, and the eVisa is the online option. This page sets out what the rule covers and what to check before you fly.",
    "lastVerified": "Last verified: 27 October 2026. Checked against Vietnam's Ministry of Foreign Affairs, the Vietnam Immigration Department, Vietnam's Law on Entry, Exit, Transit and Residence of Foreigners and GOV.UK foreign travel advice. Rules can change, so confirm on the official sources below before you book.",
    "privateLine": "Vietnam Launchpad is a private company, not the Vietnamese government. The official eVisa portal is evisa.gov.vn.",
    "factsHeading": "Quick facts for UK passport holders",
    "facts": [
      [
        "Visa needed for a stay of up to 45 days",
        "No"
      ],
      [
        "Length of stay without a visa",
        "Up to 45 days from the date you enter"
      ],
      [
        "Who it covers",
        "Full British citizen passports. British National Overseas passports are not exempt"
      ],
      [
        "Policy",
        "Resolution 44 of the Government, 7 March 2025, in force 15 March 2025 to 14 March 2028"
      ],
      [
        "Passport",
        "expiry date at least 6 months after the day you arrive, at least 2 blank pages, and no damage"
      ],
      [
        "For longer stays",
        "A visa is needed. The eVisa is valid for up to 90 days, single or multiple entry"
      ],
      [
        "eVisa fee",
        "US$25 for a single entry, US$50 for multiple entry"
      ],
      [
        "eVisa processing",
        "3 working days after you pay"
      ]
    ],
    "faqHeading": "Vietnam visa questions from UK citizens",
    "blocks": [
      {
        "t": "h2",
        "text": "Do UK citizens need a visa for Vietnam?"
      },
      {
        "t": "md",
        "text": "Not for a stay of up to 45 days. Vietnam's Ministry of Foreign Affairs lists the United Kingdom among the countries whose citizens can enter for 45 days from the date of entry, whatever the passport type or the purpose of the visit. GOV.UK says the same for tourism or business.\n\nThis is a decision by the Vietnamese Government, Resolution 44 of 7 March 2025, not a treaty. The Ministry says it applies from 15 March 2025 until 14 March 2028. Vietnam's Law says a decision like this runs for no more than five years and can be considered for extension or cancelled, so check the Ministry list before you book far ahead.\n\nBritish National Overseas passport holders are not exempt. The Ministry says they need the right visa to enter."
      },
      {
        "t": "h2",
        "text": "What you need to enter"
      },
      {
        "t": "md",
        "text": "GOV.UK says your passport must have an expiry date at least 6 months after the day you arrive, at least 2 blank pages, and no damage. It says British nationals have been denied entry and exit because of passport damage. Vietnam's Law also says a traveller who enters under the unilateral exemption needs a passport with at least 6 months of validity.\n\nUse the same passport to enter and to leave. GOV.UK says Vietnamese authorities require this.\n\nAsk your airline if it needs anything else before you fly."
      },
      {
        "t": "h2",
        "text": "Check your entry stamp"
      },
      {
        "t": "md",
        "text": "On arrival your passport is stamped with the date you must leave by. GOV.UK tells travellers to check the date before they leave border control, and to make sure it is 45 days from the day they arrived. It says Immigration will not change the date once you have left the airport or land border, and that a wrong date could see you accused of overstaying."
      },
      {
        "t": "h2",
        "text": "Staying longer than 45 days"
      },
      {
        "t": "md",
        "text": "If you want more than 45 days, you need a visa. GOV.UK lists three routes: a visa pre approval letter through a travel agent in Vietnam, another type of visa from the Embassy of Vietnam in the UK, or an eVisa.\n\nThe eVisa is issued by the Vietnam Immigration Department. These are the figures shown by the Immigration Department on 27 October 2026:\n\n- An eVisa for a single entry costs US$25.\n- An eVisa for multiple entry costs US$50.\n- Applications are processed in 3 working days after you pay the fee.\n- An eVisa is valid for up to 90 days, for single or multiple entry.\n- The fee is not refunded if your application is refused.\n\nYou apply for an eVisa from outside Vietnam. GOV.UK warns that if you get an eVisa while you are in Vietnam, you must leave the country and come back in to start it. It also says an eVisa limits you to the entry and exit points you choose when you apply.\n\nFees and times are set by the Vietnamese authorities and can change. Check the portal before you pay."
      },
      {
        "t": "md",
        "text": "### How the official eVisa process works\n\nStep 1: Go to evisa.gov.vn. The Immigration Department also lists thithucdientu.gov.vn. Check the address before you enter any details.\n\nStep 2: Fill in the form and upload a photo of your passport details page and a portrait photo. The portal gives you a registration code.\n\nStep 3: Pay the fee. Processing takes 3 working days.\n\nStep 4: Use your registration code, email and date of birth in the eVisa search on the portal to see the result. If approved, print your eVisa."
      },
      {
        "t": "h2",
        "text": "What if you want to stay beyond 90 days"
      },
      {
        "t": "md",
        "text": "An eVisa is a short stay document. There is no self service extension on the official portal. If you want more time, the routes are a new visa applied for by a Vietnamese sponsor, usually through a licensed agency, or leaving Vietnam and applying again. What Immigration decides depends on your situation, so ask before your time runs out. GOV.UK says the British Embassy will not help with visa extensions, and points travellers to the Vietnam Immigration Department.\n\nIf you are thinking about living in Vietnam, start with our guide to how long you can stay."
      },
      {
        "t": "md",
        "text": "- [How long can you stay in Vietnam](/guides/how-long-can-you-stay-in-vietnam)\n- [Read the TRC guide](/guides/trc-vietnam)\n- [TRC application service](/services/trc-application)"
      },
      {
        "t": "h2",
        "text": "Working or studying in Vietnam"
      },
      {
        "t": "md",
        "text": "The 45 day exemption is for visiting. If you want to work or study, GOV.UK says to check which type of visa or work permit you need with the Vietnam Immigration Department. It also says that if you overstay or work illegally, the authorities can stop you leaving until you pay a fine, and you could be deported and stopped from visiting Vietnam in future."
      },
      {
        "t": "md",
        "text": "- [Working in Vietnam](/guides/working-in-vietnam)\n- [Work permit service](/services/work-permit)"
      },
      {
        "t": "h2",
        "text": "Changing planes in Vietnam"
      },
      {
        "t": "md",
        "text": "GOV.UK says that if you move from an international flight to a domestic flight in Hanoi or Ho Chi Minh City, you must go through immigration and enter Vietnam, even if your final destination is outside Vietnam. Check with your airline before you fly."
      },
      {
        "t": "h2",
        "text": "Apply yourself or get help"
      },
      {
        "t": "md",
        "text": "You can apply for an eVisa yourself on the official portal at any time. If you would rather hand over the application, our team can prepare and submit it for you. We are a private service, and the government fee is paid to the Immigration Department."
      },
      {
        "t": "buttons",
        "primary": {
          "text": "See our eVisa service",
          "href": "/services/evisa"
        },
        "secondary": {
          "text": "Book a free consultation",
          "href": "/contact"
        }
      },
      {
        "t": "affiliate"
      },
      {
        "t": "h2",
        "text": "Official sources"
      },
      {
        "t": "md",
        "text": "Check these before you book. We last read them on 27 October 2026.\n\n- Ministry of Foreign Affairs, Vietnam visa exemption list: https://mofa.gov.vn/vi/tin-chi-tiet/chi-tiet/viet-nam-39-s-visa-exemption-list-57163-172.html\n- Vietnam Immigration Department eVisa portal: https://evisa.gov.vn\n- Vietnam Immigration Department eVisa information: https://immigration.gov.vn/trang-chu-ttdt\n- GOV.UK, Vietnam entry requirements: https://www.gov.uk/foreign-travel-advice/vietnam/entry-requirements\n- Law on Entry, Exit, Transit and Residence of Foreigners, consolidated text 62 VBHN VPQH: https://thuvienphapluat.vn/van-ban/EN/Quyen-dan-su/Integrated-document-62-VBHN-VPQH-2026-Law-Entry-Exit-Transit-and-Residence-of-Foreigners-in-Vietnam/712848/tieng-anh.aspx"
      }
    ],
    "faqs": [
      {
        "q": "Do UK citizens need a visa for Vietnam?",
        "a": "Not for a stay of up to 45 days. Vietnam's Ministry of Foreign Affairs lists the United Kingdom among the countries whose citizens can enter for 45 days from the date of entry without a visa. For a longer stay you need a visa, such as an eVisa."
      },
      {
        "q": "How long can UK citizens stay in Vietnam without a visa?",
        "a": "Up to 45 days from the date you enter. Your passport is stamped on arrival with the date you must leave by. Check that date before you leave border control, because Immigration will not change it once you have left the airport or land border."
      },
      {
        "q": "Is the 45 day visa exemption permanent?",
        "a": "No. The Ministry of Foreign Affairs says the current exemption applies from 15 March 2025 until 14 March 2028. Vietnam's Law says a decision like this runs for no more than five years and can be considered for extension or cancelled, so check the official list before you book far ahead."
      },
      {
        "q": "Do British National Overseas passport holders get the 45 day exemption?",
        "a": "No. The Ministry of Foreign Affairs says holders of British National Overseas passports are not exempt and must have the right visa to enter Vietnam."
      },
      {
        "q": "What do I need to enter Vietnam on a UK passport?",
        "a": "GOV.UK says your passport needs an expiry date at least 6 months after you arrive, at least 2 blank pages and no damage. You must enter and leave on the same passport. Ask your airline if it needs anything else."
      },
      {
        "q": "How do I stay longer than 45 days?",
        "a": "You need a visa. The eVisa is valid for up to 90 days, single or multiple entry, and costs US$25 for single entry or US$50 for multiple entry. Apply from outside Vietnam on the official portal. GOV.UK warns that if you get an eVisa while you are in Vietnam, you must leave and enter again to start it."
      },
      {
        "q": "What happens if I overstay in Vietnam?",
        "a": "GOV.UK says that if you overstay your visa, the authorities can stop you leaving until you pay a fine, and you could be deported and stopped from visiting Vietnam in future. Check your exit date on arrival, and ask Immigration or a licensed agency before your time runs out."
      }
    ]
  },
};
