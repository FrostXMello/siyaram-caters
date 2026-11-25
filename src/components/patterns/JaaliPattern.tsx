export function JaaliPattern() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full text-ivory opacity-[0.07]"
      aria-hidden="true"
    >
      <defs>
        <pattern id="jaali" width="34" height="34" patternUnits="userSpaceOnUse">
          <path
            d="M17 2.5 L20 17 L17 31.5 L14 17 Z M2.5 17 L17 20 L31.5 17 L17 14 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.7"
          />
          <circle cx="17" cy="17" r="1.25" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#jaali)" />
    </svg>
  );
}
