function Star({ fill }: { fill: number }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4">
      <defs>
        <linearGradient id={`grad-${fill}`}>
          <stop offset={`${fill * 100}%`} stopColor="#f59e0b" />
          <stop offset={`${fill * 100}%`} stopColor="#e5e7eb" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#grad-${fill})`}
        d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"
      />
    </svg>
  );
}

export default function Rating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-px">
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.min(Math.max(rating - i, 0), 1);
        return <Star key={i} fill={fill} />;
      })}
    </div>
  );
}
