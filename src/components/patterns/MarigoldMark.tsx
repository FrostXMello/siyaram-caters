export function MarigoldMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      {Array.from({ length: 16 }, (_, index) => (
        <ellipse
          key={index}
          cx="40"
          cy="15"
          rx="5.5"
          ry="15"
          fill={index % 2 === 0 ? "#f0b400" : "#ef5b1a"}
          transform={`rotate(${index * 22.5} 40 40)`}
        />
      ))}
      <circle cx="40" cy="40" r="7.5" fill="#e2186a" />
      <circle cx="40" cy="40" r="3" fill="#f3e6d4" />
    </svg>
  );
}
