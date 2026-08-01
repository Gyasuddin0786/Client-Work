import { Navigate, Link, useParams } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Button from "../../components/common/Button";

import Container from "../../components/common/Container";
import Badge from "../../components/common/Badge";
import ProjectCard from "../../components/common/cards/ProjectCard";

import {
  getProjectBySlug,
  getProjectsByService,
} from "../../data/projects";

import {
  getServiceBySlug,
} from "../../data/services";

function PortfolioDetails() {
  const { slug } = useParams();

  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const service = getServiceBySlug(project.serviceSlug);

  const relatedProjects = getProjectsByService(project.serviceSlug)
    .filter((item) => item.id !== project.id)
    .slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        {/* Hero */}

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full rounded-3xl object-cover"
            />
          </div>

          <div>
            <Badge className="border border-orange-300">
              {project.category}
            </Badge>

            <h1 className="mt-5 text-4xl font-bold">
              {project.title}
            </h1>

            <p className="mt-6 leading-8 text-slate-600">
              {project.description}
            </p>

            <Button
              to="/request-quote"
              className="mt-8"
            >
              Request Quote
            </Button>
          </div>
        </div>

        {/* Features */}

        {project.features?.length > 0 && (
          <section className="mt-20">
            <h2 className="text-3xl font-bold">
              Project Features
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-xl border p-5 flex border-orange-300"
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
                   {feature}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Materials */}

        {project.materials?.length > 0 && (
          <section className="mt-20">
            <h2 className="text-3xl font-bold">
              Materials Used
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.materials.map((material) => (
                <Badge className="border border-orange-300"
                  key={material}
                  variant="neutral"
                >
                  {material}
                </Badge>
              ))}
            </div>
          </section>
        )}

        {/* Scope */}

        {project.scope?.length > 0 && (
          <section className="mt-20">
            <h2 className="text-3xl font-bold border-orange-300">
              Project Scope
            </h2>

            <ul className="mt-8 space-y-4">
              {project.scope.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border p-5 border-orange-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Related Service */}

        {service && (
          <section className="mt-20 rounded-2xl border border-orange-300 bg-slate-50 p-8">
            <h2 className="text-2xl font-bold">
              Related Service
            </h2>

            <p className="mt-4 text-slate-600">
              This project was completed under our{" "}
              <strong>{service.name}</strong> service.
            </p>

            <Button
              to={`/services/${service.slug}`}
              variant="outline"
              className="mt-6 hover:border-orange-300
    hover:bg-orange-50
    hover:text-orange-600"
            >
              View Work
               <ArrowRight className="h-5 w-5" />
            </Button>
          </section>
        )}

        {/* Gallery */}

        {project.images?.length > 0 && (
          <section className="mt-20">
            <h2 className="text-3xl font-bold">
              Work Gallery
            </h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {project.images.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="aspect-[4/3] w-full rounded-2xl object-fit"
                />
              ))}
            </div>
          </section>
        )}

        {/* Related Projects */}

        {relatedProjects.length > 0 && (
          <section className="mt-20">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">
                Related Work
              </h2>

              <Link
                to="/portfolio"
                className="text-orange-600 hover:underline"
              >
                View All
              </Link>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {relatedProjects.map((item) => (
                <ProjectCard
                  key={item.id}
                  project={item}
                />
              ))}
            </div>
          </section>
        )}

        {/* Final CTA */}

        <section className="mt-24 rounded-3xl bg-orange-400 p-10 text-center text-white">
          <h2 className="text-3xl font-bold">
            Have a Similar Project?
          </h2>

          <p className="mt-4">
            Share your requirements and we'll prepare a customized quotation.
          </p>

          <Button
            to="/request-quote"
            variant = "primary"
            className="mt-8"
          >
            Request a Quote
            <ArrowRight className="h-5 w-5" />
          </Button>
        </section>
      </Container>
    </section>
  );
}

export default PortfolioDetails;