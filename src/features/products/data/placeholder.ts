/**
 * Generates a self-contained SVG data URI standing in for product
 * photography, so the catalog renders without external image assets.
 */
export function bottlePlaceholder(seed: string, from: string, to: string): string {
  const initials = seed
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 600">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${from}" />
          <stop offset="1" stop-color="${to}" />
        </linearGradient>
      </defs>
      <rect width="480" height="600" fill="${from}" />
      <rect width="480" height="600" fill="url(#g)" opacity="0.9" />
      <g opacity="0.9">
        <rect x="195" y="140" width="90" height="34" rx="6" fill="#2a2420" />
        <rect x="170" y="174" width="140" height="270" rx="10" fill="#f6f1e7" fill-opacity="0.94" />
        <rect x="170" y="174" width="140" height="270" rx="10" fill="none" stroke="#2a2420" stroke-opacity="0.15" />
      </g>
      <text x="240" y="320" font-family="Georgia, 'Times New Roman', serif" font-size="34" fill="#2a2420" text-anchor="middle" opacity="0.75">${initials}</text>
    </svg>
  `.trim();

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
