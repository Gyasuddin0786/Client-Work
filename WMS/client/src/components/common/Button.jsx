import { Link } from "react-router-dom";

const variantClasses = {
  primary:
    "bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-950",

  secondary:
    "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",

  outline:
    "border border-slate-300 bg-transparent text-slate-900 hover:bg-slate-100 active:bg-slate-200",

  ghost:
    "bg-transparent text-slate-700 hover:bg-slate-100 active:bg-slate-200",
};

const sizeClasses = {
  sm: "min-h-9 px-3 text-sm",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-base",
};

function LoadingSpinner() {
  return (
    <span
      aria-hidden="true"
      className="h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-current border-r-transparent"
    />
  );
}

function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  type = "button",
  disabled = false,
  loading = false,
  className = "",
  onClick,
  target,
  rel,
  ...props
}) {
  const isDisabled = disabled || loading;

  const variantClass =
    variantClasses[variant] ?? variantClasses.primary;

  const sizeClass =
    sizeClasses[size] ?? sizeClasses.md;

  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold",
    "transition-colors duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
    variantClass,
    sizeClass,
    isDisabled
      ? "cursor-not-allowed opacity-50"
      : "cursor-pointer",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
  <>
    {loading && <LoadingSpinner />}
    {children}
  </>
);

  const handleDisabledClick = (event) => {
    if (isDisabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    onClick?.(event);
  };

  // Internal React Router navigation
  if (to) {
    return (
      <Link
        to={isDisabled ? "#" : to}
        className={classes}
        onClick={handleDisabledClick}
        aria-disabled={isDisabled || undefined}
        aria-busy={loading || undefined}
        tabIndex={isDisabled ? -1 : undefined}
        {...props}
      >
        {content}
      </Link>
    );
  }

  // External / normal anchor link
  if (href) {
    const safeRel =
      target === "_blank"
        ? rel || "noopener noreferrer"
        : rel;

    return (
      <a
        href={isDisabled ? undefined : href}
        target={target}
        rel={safeRel}
        className={classes}
        onClick={handleDisabledClick}
        aria-disabled={isDisabled || undefined}
        aria-busy={loading || undefined}
        tabIndex={isDisabled ? -1 : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  // Normal HTML button
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={classes}
      onClick={onClick}
      aria-busy={loading || undefined}
      {...props}
    >
      {content}
    </button>
  );
}

export default Button;