import { ArrowRight } from "lucide-react";

import { services } from "../../data/services";

import Button from "../../components/common/Button";
import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import Testimonials from "../../components/sections/Testimonials";
import CTASection from "../../components/sections/CTASection";

function Services() {
  return (
    <>
    <section className="py-14 bg-gray-50">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Welding & Fabrication Services"
          description="Explore our complete range of welding and fabrication services for residential and commercial projects."
          align="center"
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className="
group
relative
flex
flex-col
rounded-3xl
border
border-slate-200
bg-white
p-8
shadow-sm
transition-all
duration-300
hover:-translate-y-2
hover:border-orange-400
hover:shadow-[0_20px_45px_rgba(249,115,22,0.18)]
"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                <h2 className="mt-6 text-2xl font-semibold">
                  {service.name}
                </h2>

                <p className="mt-4 flex-grow leading-7 text-slate-600">
                  {service.shortDescription}
                </p>

                <div className="mt-8">
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
      </Container>
      <Testimonials/>
    </section>
    <CTASection/>
    </>
  );
}

export default Services;