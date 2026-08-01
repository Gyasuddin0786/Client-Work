import { Navigate, useParams } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import {
  getServiceBySlug,
} from "../../data/services";

import {
  getProjectsByService,
} from "../../data/projects";

import {
  getFaqsByService,
} from "../../data/faqs";

import Button from "../../components/common/Button";
import Container from "../../components/common/Container";
import Testimonials from "../../components/sections/Testimonials";
import RequestQuoteCompo from "../../components/common/RequestQuoteCompo";
function ServiceDetails() {
  const { slug } = useParams();

  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const relatedProjects =
    getProjectsByService(service.slug);
  getFaqsByService(service.slug);

  const Icon = service.icon;

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <img
              src={service.image}
              alt={service.name}
              className="rounded-3xl"
            />
          </div>

          <div>
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
              <Icon className="h-8 w-8" />
            </div>

            <h1 className="mt-6 text-4xl font-bold">
              {service.name}
            </h1>

            <p className="mt-6 leading-8 text-slate-600">
              {service.description}
            </p>

            <Button
              to="/request-quote"
              className="mt-8"
            >
              Request a Quote
            </Button>
          </div>
        </div>

        <section className="mt-20">
          <h2 className="text-3xl font-bold">
            Benefits
          </h2>

          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {service.benefits.map((benefit) => (
              <li
                key={benefit}
                className="rounded-xl border border-orange-300 p-4 flex"
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
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold">
            Applications
          </h2>

          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {service.applications.map((application) => (
              <li
                key={application}
                className="rounded-xl border border-orange-300 p-4"
              >
                {application}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold">
            Our Process
          </h2>

          <div className="mt-8 space-y-6">
            {service.process.map((step, index) => (
              <article
                key={step.title}
                className="rounded-2xl border border-orange-300 p-6"
              >
                <p className="text-sm font-semibold text-orange-600">
                  Step {index + 1}
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {relatedProjects.length > 0 && (
          <section className="mt-20">
            <h2 className="text-3xl font-bold">
              Related Projects
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {relatedProjects.map((project) => (
                <article
                  key={project.id}
                  className="overflow-hidden rounded-2xl border"
                >
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="aspect-[4/3] w-full object-fit"
                  />

                  <div className="p-5">
                    <h3 className="font-semibold">
                      {project.title}
                    </h3>

                    <Button
                      to={`/portfolio/${project.slug}`}
                      variant="ghost"
                      className="mt-4 border hover:border-orange-300
    hover:bg-orange-50
    hover:text-orange-600"
                    >
                      View Work <ArrowRight className="h-5 w-5" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
        <Testimonials />
      <RequestQuoteCompo/>
      </Container>
    </section>
  );
}

export default ServiceDetails;