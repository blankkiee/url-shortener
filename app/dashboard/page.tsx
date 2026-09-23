import {
  MOCK_CLICKS_BY_DAY,
  MOCK_LINKS,
  MOCK_TOP_REFERRERS,
} from "@/lib/mock-analytics";

export default function DashboardPage() {
  const maxClicks = Math.max(...MOCK_CLICKS_BY_DAY.map((d) => d.clicks));
  const totalClicks = MOCK_LINKS.reduce((sum, link) => sum + link.clicks, 0);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-5 py-10 sm:px-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight">
          Your links
        </h1>
        <p className="text-sm text-muted">
          {MOCK_LINKS.length} links, {totalClicks} clicks total.
        </p>
      </div>

      <section className="overflow-hidden rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border bg-subtle text-xs uppercase tracking-wider text-muted">
            <tr>
              <th className="px-4 py-3 font-medium">Short link</th>
              <th className="px-4 py-3 font-medium">Destination</th>
              <th className="px-4 py-3 font-medium">Created</th>
              <th className="px-4 py-3 text-right font-medium">Clicks</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_LINKS.map((link) => (
              <tr
                key={link.code}
                className="border-b border-border last:border-0"
              >
                <td className="px-4 py-3 font-mono text-accent">
                  snip.link/{link.code}
                </td>
                <td className="max-w-xs truncate px-4 py-3 text-muted">
                  {link.destination}
                </td>
                <td className="px-4 py-3 text-muted">{link.createdAt}</td>
                <td className="px-4 py-3 text-right font-medium">
                  {link.clicks}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <div className="grid gap-4 sm:grid-cols-2">
        <section className="rounded-lg border border-border p-5">
          <h2 className="text-sm font-medium">Clicks this week</h2>
          <div className="mt-5 flex h-32 items-end gap-2">
            {MOCK_CLICKS_BY_DAY.map((point) => (
              <div
                key={point.day}
                className="flex flex-1 flex-col items-center gap-2"
              >
                <div
                  className="w-full rounded-t bg-accent"
                  style={{
                    height: `${(point.clicks / maxClicks) * 100}%`,
                    minHeight: "4px",
                  }}
                  title={`${point.clicks} clicks`}
                />
                <span className="text-xs text-muted">{point.day}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-border p-5">
          <h2 className="text-sm font-medium">Top referrers</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {MOCK_TOP_REFERRERS.map((referrer) => (
              <li key={referrer.source} className="flex items-center gap-3">
                <span className="flex-1 truncate text-sm">
                  {referrer.source}
                </span>
                <div className="h-1.5 w-24 overflow-hidden rounded-full bg-subtle">
                  <div
                    className="h-full rounded-full bg-accent"
                    style={{
                      width: `${(referrer.clicks / MOCK_TOP_REFERRERS[0].clicks) * 100}%`,
                    }}
                  />
                </div>
                <span className="w-8 text-right text-sm text-muted">
                  {referrer.clicks}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
