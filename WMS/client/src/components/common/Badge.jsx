function Badge({
  children,
  variant = "neutral",
  size = "md",
  dot = false,
  className = "",
  ...props
}) {
  const variantClasses = {
    neutral:
      "bg-slate-100 text-slate-700 ring-slate-200 border-orange-300",

    primary:
      "bg-blue-50 text-blue-700 ring-blue-200 border-orange-300",

    success:
      "bg-emerald-50 text-emerald-700 ring-emerald-200 border-orange-300",

    warning:
      "bg-amber-50 text-amber-700 ring-amber-200 border-orange-300",

    danger:
      "bg-red-50 text-red-700 ring-red-200 border-orange-300",

    info:
      "bg-sky-50 text-sky-700 ring-sky-200 border-orange-300",
  };

  const dotClasses = {
    neutral: "bg-slate-500 border-orange-300",
    primary: "bg-blue-600 border-orange-300",
    success: "bg-emerald-600 border-orange-300",
    warning: "bg-amber-500 border-orange-300",
    danger: "bg-red-600 border-orange-300",
    info: "bg-sky-600 border-orange-300",
  };

  const sizeClasses = {
    sm: "gap-1.5 px-2 py-0.5 text-xs",
    md: "gap-1.5 px-2.5 py-1 text-xs",
    lg: "gap-2 px-3 py-1.5 text-sm",
  };

  const variantClass =
    variantClasses[variant] ?? variantClasses.neutral;

  const dotClass =
    dotClasses[variant] ?? dotClasses.neutral;

  const sizeClass =
    sizeClasses[size] ?? sizeClasses.md;

  const classes = [
    "inline-flex w-fit items-center rounded-full",
    "font-semibold leading-none",
    "ring-1 ring-inset",
    variantClass,
    sizeClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} {...props}>
      {dot && (
        <span
          aria-hidden="true"
          className={[
            "h-1.5 w-1.5 shrink-0 rounded-full",
            dotClass,
          ].join(" ")}
        />
      )}

      {children}
    </span>
  );
}

export default Badge;