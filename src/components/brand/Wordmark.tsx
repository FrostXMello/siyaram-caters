export function Wordmark() {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 32 36" className="h-9 w-7 text-marigold" aria-hidden="true">
        <path
          fill="currentColor"
          d="M5.5 34V17.5C5.5 9.2 10.2 4.2 16 4.2S26.5 9.2 26.5 17.5V34h-4.2V18.2c0-4.6-2.6-7.4-6.3-7.4s-6.3 2.8-6.3 7.4V34H5.5Z"
        />
        <circle cx="16" cy="20" r="2.1" fill="#e2186a" />
      </svg>
      <span className="leading-none">
        <span className="block font-serif text-[1.65rem] italic tracking-tight text-ivory">
          Siyaram
        </span>
        <span className="mt-0.5 block text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-marigold">
          Caters
        </span>
      </span>
    </span>
  );
}
