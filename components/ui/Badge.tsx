interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-[var(--radius-full)] bg-primary-light text-primary px-2.5 py-0.5 text-xs font-medium ${className}`}
    >
      {children}
    </span>
  );
}
