import { tickerItems } from "@/lib/site";

export function DishTicker() {
  return (
    <div className="ticker relative z-20 overflow-hidden border-y border-wine/10 bg-marigold text-wine">
      <div className="ticker-track flex w-max">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center py-3">
            {tickerItems.map((item) => (
              <span key={`${copy}-${item}`} className="flex items-center">
                <span className="px-5 text-[0.72rem] font-semibold uppercase tracking-[0.22em]">
                  {item}
                </span>
                <span className="size-1.5 shrink-0 rounded-full bg-rani" aria-hidden="true" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
