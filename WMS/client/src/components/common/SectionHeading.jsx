function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: HeadingTag = "h2",
  className = "",
}) {
  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  const alignment =
    alignmentClasses[align] ?? alignmentClasses.center;

  return (
    <div
      className={[
        "flex flex-col",
        alignment,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Small section label */}
      {eyebrow && (
        <span className="mb-3 inline-flex items-center text-sm font-semibold uppercase tracking-wider text-orange-600">
          {eyebrow}
        </span>
      )}

      {/* Main section heading */}
      <HeadingTag className="max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        {title}
      </HeadingTag>

      {/* Optional description */}
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;