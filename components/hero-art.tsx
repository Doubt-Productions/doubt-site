/**
 * The brand emblem staged like the banner: a soft halo, segmented rings and circuit traces around
 * the logo. Purely decorative.
 */
export function HeroArt() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[26rem]" aria-hidden="true">
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 size-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="hero-halo" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#e5088f" stopOpacity="0.38" />
            <stop offset="0.6" stopColor="#8f16ab" stopOpacity="0.12" />
            <stop offset="1" stopColor="#8f16ab" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hero-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#b44fd0" />
            <stop offset="0.55" stopColor="#8f16ab" />
            <stop offset="1" stopColor="#e5088f" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="200" fill="url(#hero-halo)" />
        <g className="spin-slow">
          <circle
            cx="200"
            cy="200"
            r="168"
            fill="none"
            stroke="url(#hero-ring)"
            strokeOpacity="0.55"
            strokeWidth="2"
            strokeDasharray="120 12 30 12 220 16"
            strokeLinecap="round"
          />
        </g>
        <g className="spin-slower">
          <circle
            cx="200"
            cy="200"
            r="190"
            fill="none"
            stroke="var(--tint-1)"
            strokeOpacity="0.25"
            strokeWidth="1.5"
            strokeDasharray="16 9 5 9"
          />
        </g>
        {/* circuit traces */}
        <g
          fill="none"
          stroke="var(--line)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M-10 300H40L64 276H96" />
          <path d="M330 72L352 50H410" />
          <path d="M300 368L322 346H372V320" />
        </g>
        <circle
          cx="-16"
          cy="300"
          r="6"
          fill="var(--bg)"
          stroke="#d27cf0"
          strokeOpacity="0.7"
          strokeWidth="2"
        />
        <circle cx="416" cy="50" r="5" fill="var(--bg)" stroke="var(--muted)" strokeWidth="2" />
        <circle
          cx="372"
          cy="314"
          r="4.5"
          fill="var(--bg)"
          stroke="#ff5ec4"
          strokeOpacity="0.8"
          strokeWidth="2"
        />
        <circle cx="70" cy="80" r="2.5" fill="#d27cf0" fillOpacity="0.7" />
        <circle cx="356" cy="210" r="2" fill="#ff5ec4" fillOpacity="0.8" />
      </svg>
      {/* biome-ignore lint/performance/noImgElement: static export */}
      <img
        src="/brand/doubt-logo.svg"
        alt=""
        width={300}
        height={300}
        className="absolute top-1/2 left-1/2 w-[70%] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_18px_40px_rgba(143,22,171,0.45)]"
      />
    </div>
  );
}
