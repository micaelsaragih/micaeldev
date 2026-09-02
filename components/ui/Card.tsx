interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  const base =
    "rounded-[var(--radius-md)] border border-border bg-surface shadow-sm";

  const hoverStyles = hover
    ? "transition-[border-color,box-shadow] duration-[var(--transition-fast)] hover:border-border-hover hover:shadow-md"
    : "";

  return (
    <div className={`${base} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
