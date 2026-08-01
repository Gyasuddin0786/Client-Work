import { ArrowRight } from "lucide-react";
import {
  CheckCircle2,
} from "lucide-react";
import { featuredServices } from "../../data/services";
import Button from "../common/Button";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

function ServicesSection() {
  return (
    <section className="bg-gray-50 py-14">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Professional Welding & Fabrication Services"
          description="From custom gates and railings to structural welding and repair work, we provide practical fabrication solutions for residential and commercial projects."
          align="center"
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {featuredServices.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {service.name}
                </h3>

                <p className="mt-4 flex-grow leading-7 text-slate-600">
                  {service.shortDescription}
                </p>

                <ul className="mt-6 space-y-2">
                  {service.benefits.slice(0, 3).map((benefit) => (
                    <li
                      key={benefit}
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
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex items-center justify-between">
                  <Button className="hover:border-orange-300
    hover:bg-orange-50
    hover:text-orange-600"
                    to={`/services/${service.slug}`}
                    variant="ghost"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <Button to="/services" size="lg">
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default ServicesSection;