interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "main";
}

export function Container({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component className={`mx-auto w-full max-w-5xl px-4 sm:px-6 ${className}`}>
      {children}
    </Component>
  );
}
