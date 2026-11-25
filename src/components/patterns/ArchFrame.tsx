import { ARCH_CLIP_TRANSFORM, ARCH_D, ARCH_VIEWBOX } from "@/components/patterns/arch";

type ArchFrameProps = {
  className?: string;
  children: React.ReactNode;
};

export function ArchFrame({ className, children }: ArchFrameProps) {
  return (
    <div className={className}>
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <defs>
          <clipPath id="siyaram-arch" clipPathUnits="objectBoundingBox">
            <path d={ARCH_D} transform={ARCH_CLIP_TRANSFORM} />
          </clipPath>
        </defs>
      </svg>
      <div className="absolute inset-0" style={{ clipPath: "url(#siyaram-arch)" }}>
        {children}
      </div>
      <svg
        viewBox={ARCH_VIEWBOX}
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <path
          d={ARCH_D}
          fill="none"
          stroke="#e2186a"
          strokeWidth="8"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={ARCH_D}
          fill="none"
          stroke="#f0b400"
          strokeWidth="2.4"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
