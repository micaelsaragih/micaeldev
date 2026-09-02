interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  size?: "sm" | "md";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-[var(--radius-sm)] transition-colors duration-[var(--transition-fast)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-hover active:bg-primary-hover",
    outline:
      "border border-border text-text hover:border-border-hover hover:bg-surface active:bg-surface",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-sm",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
