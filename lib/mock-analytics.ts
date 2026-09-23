// Placeholder data so the dashboard UI can be built and reviewed before the
// database and click-tracking API exist. Swap for real queries later.

export type LinkSummary = {
  code: string;
  destination: string;
  createdAt: string;
  clicks: number;
};

export const MOCK_LINKS: LinkSummary[] = [
  {
    code: "a1b2c3",
    destination: "https://github.com/blankkiee/multi-tenant-saas-starter",
    createdAt: "2026-09-18",
    clicks: 142,
  },
  {
    code: "x9y8z7",
    destination: "https://nextjs.org/docs/app/getting-started",
    createdAt: "2026-09-20",
    clicks: 58,
  },
  {
    code: "q4r5s6",
    destination: "https://www.linkedin.com/in/markdavemartin",
    createdAt: "2026-09-21",
    clicks: 21,
  },
];

export const MOCK_CLICKS_BY_DAY = [
  { day: "Mon", clicks: 12 },
  { day: "Tue", clicks: 19 },
  { day: "Wed", clicks: 8 },
  { day: "Thu", clicks: 27 },
  { day: "Fri", clicks: 34 },
  { day: "Sat", clicks: 15 },
  { day: "Sun", clicks: 21 },
];

export const MOCK_TOP_REFERRERS = [
  { source: "Direct / no referrer", clicks: 88 },
  { source: "twitter.com", clicks: 46 },
  { source: "linkedin.com", clicks: 31 },
  { source: "google.com", clicks: 19 },
];
