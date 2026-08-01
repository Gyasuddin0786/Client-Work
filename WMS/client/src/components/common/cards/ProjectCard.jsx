import { ArrowRight } from "lucide-react";
import {
  CheckCircle2,
} from "lucide-react";
import Button from "../Button";

function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={project.coverImage}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-fit transition-transform duration-500 group-hover:scale-100"
        />
      </div>

      <div className="p-6">
        <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-700">
          {project.category}
        </span>

        <h3 className="mt-4 text-2xl font-semibold text-slate-900">
          {project.title}
        </h3>

        <p className="mt-3 line-clamp-3 leading-7 text-slate-600">
          {project.shortDescription}
        </p>

        {project.features?.length > 0 && (
          <ul className="mt-6 space-y-2">
            {project.features.slice(0, 3).map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-slate-700"
              >
                <span className="flex
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
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-8">
          <Button className="hover:border-orange-300
    hover:bg-orange-50
    hover:text-orange-600"
            to={`/portfolio/${project.slug}`}
            variant="ghost"
          >
            View Work
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;