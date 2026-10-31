interface LogoProps {
  className?: string;
}

/** NOVA AI mark: a four-point star whose core is a neural node, with the wordmark beside it. */
export function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`} dir="ltr">
      <svg width="34" height="34" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="nova-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2563EB" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <path
          d="M32 4l7 19 19 7-19 7-7 19-7-19-19-7 19-7z"
          fill="url(#nova-g)"
        />
        <g stroke="#071426" strokeWidth="2" strokeLinecap="round">
          <path d="M32 30l-9-9M32 30l9-9M32 30l-9 9M32 30l9 9" />
        </g>
        <circle cx="32" cy="30" r="4" fill="#071426" />
      </svg>
      <span className="text-xl font-extrabold tracking-wide">
        NOVA <span className="bg-gradient-to-r from-nova-blue to-nova-cyan bg-clip-text text-transparent">AI</span>
      </span>
    </span>
  );
}
