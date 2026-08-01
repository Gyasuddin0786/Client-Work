function ProcessCard({
  step,
  index,
}) {
  const Icon = step.icon;

  return (
    <article className="relative rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg">
      <div className="absolute right-4 top-4 text-sm font-bold text-slate-300">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-600">
        <Icon className="h-8 w-8" />
      </div>

      <h3 className="mt-6 text-xl font-semibold">
        {step.title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-slate-600">
        {step.description}
      </p>
    </article>
  );
}

export default ProcessCard;