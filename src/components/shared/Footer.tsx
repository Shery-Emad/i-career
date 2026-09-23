const FOOTER_COLUMNS = [
  {
    title: "Collections",
    links: ["La Maison", "Private Reserve", "Scented Candles", "Discovery Sets"],
  },
  {
    title: "Customer Care",
    links: ["Olfactory Consultation", "Shipping & Returns", "Atelier Appointments", "Care Guide"],
  },
  {
    title: "About Us",
    links: ["Our Philosophy", "Sourcing Standards", "Sustainability Commitments", "Journal"],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-parchment">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="font-display text-lg tracking-[0.3em]">ODORATUS</p>
            <p className="mt-4 max-w-xs text-sm text-parchment/70">
              An independent olfactory house cultivating slow-luxury liquid
              narratives. Every bottle is hand-poured in small batches using
              sustainably sourced botanicals.
            </p>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-medium text-parchment/90">
                {column.title}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-parchment/60">
                {column.links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-parchment/10 pt-6 text-xs text-parchment/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Odoratus. All rights reserved.</p>
          <p>Privacy Policy · Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
