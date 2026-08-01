import { ArrowRight, CheckCircle2, } from "lucide-react";
import Button from "../common/Button";

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-xl">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-orange-600 transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white">
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="mt-6 text-2xl font-semibold text-slate-900">
        {service.name}
      </h3>

      <p className="mt-4 flex-grow leading-7 text-slate-600">
        {service.shortDescription}
      </p>

      {service.benefits?.length > 0 && (
        <ul className="mt-6 space-y-2">
          {service.benefits.slice(0, 3).map((benefit) => (
            <li
              key={benefit}
              className="flex items-start gap-2 text-sm text-slate-700"
            >
              <span className="flex me-1
          h-6
          w-6
          items-center
          justify-center
          rounded-xl
          bg-orange-100
          text-orange-600
          transition-colors
          duration-300
          group-hover:bg-orange-500
          group-hover:text-white">
                <CheckCircle2 className="h-5 w-5" />

              </span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-8">
        <Button
          to={`/services/${service.slug}`}
          variant="ghost"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </article>
  );
}

export default ServiceCard;