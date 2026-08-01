function LoadingSpinner({
  size = "md",
  label = "Loading...",
  showLabel = false,
  className = "",
}) {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-2",
    lg: "h-10 w-10 border-[3px]",
    xl: "h-14 w-14 border-4",
  };

  const spinnerSize =
    sizeClasses[size] ?? sizeClasses.md;

  return (
    <div
      role="status"
      aria-live="polite"
      className={[
        "inline-flex items-center justify-center gap-3",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span
        aria-hidden="true"
        className={[
          "shrink-0 animate-spin rounded-full",
          "border-current border-r-transparent",
          spinnerSize,
        ].join(" ")}
      />

      {showLabel ? (
        <span className="text-sm font-medium">
          {label}
        </span>
      ) : (
        <span className="sr-only">{label}</span>
      )}
    </div>
  );
}

export default LoadingSpinner;