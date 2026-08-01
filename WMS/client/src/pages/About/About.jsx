import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import Button from "../../components/common/Button";
import { Helmet } from "react-helmet-async";
import WhyChooseUsSection from "../../components/sections/WhyChooseUs";
import ProcessSection from "../../components/sections/ProcessSection";
import CTASection from "../../components/sections/CTASection";
import SEO from "../../components/common/SEO";
function About() {
  return (
    <>
      <SEO
        title="About SK 1 Welding Workshop"
        description="Learn about SK 1 Welding Workshop, our experience, quality workmanship and steel & metal fabrication services."
        keywords="about welding workshop, fabrication company, steel fabrication, metal fabrication, welding services, SK 1 Welding Workshop"
      />
      <section className="py-14 bg-gray-50">
        <Container>
          <SectionHeading
            eyebrow="About Us"
            title="Welding & Fabrication Solutions"
            description="We help residential and commercial clients with reliable welding and custom fabrication services focused on quality, durability, and practical solutions."
            align="center"
          />

          <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <img
                src="/images/about/about-company.png"
                alt="Welding workshop"
                className="w-full rounded-3xl object-fit"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                SK 1 Workshop Building Strong Fabrication Solutions
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                We provide custom steel & welding and fabrication services based
                on each client's requirements. Whether it's gates, railings,
                grills, staircases, sheds, or structural fabrication, every
                project is planned carefully to achieve a durable and practical
                result.
              </p>

              <p className="mt-6 leading-8 text-slate-600">
                Our focus is on clear communication, quality workmanship, and
                delivering solutions that fit both residential and commercial
                needs.
              </p>

              <Button to="/request-quote" className="mt-8">
                Request a Quote
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}

      <section className="py-14 bg-slate-50">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <article
              className="
    group
    rounded-2xl
    border
    border-transparent
    bg-white
    p-8
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-orange-500
    hover:shadow-xl
  "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-xl
        bg-orange-100
        text-orange-500
        transition-all
        duration-300
        group-hover:bg-orange-500
        group-hover:text-white
      "
                >
                  <Target className="h-7 w-7" />
                </div>

                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                To provide dependable welding and fabrication services with
                quality workmanship, transparent communication, and solutions
                tailored to every project.
              </p>
            </article>
            <article
              className="
    group
    rounded-2xl
    border
    border-transparent
    bg-white
    p-8
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-orange-500
    hover:shadow-xl
  "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-xl
        bg-orange-100
        text-orange-500
        transition-all
        duration-300
        group-hover:bg-orange-500
        group-hover:text-white
      "
                >
                  <Eye className="h-7 w-7" />
                </div>

                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                To become a trusted fabrication partner by consistently
                delivering reliable work and building long-term customer
                relationships.
              </p>
            </article>
          </div>
        </Container>
      </section>

      {/* Reusable Sections */}

      <WhyChooseUsSection />

      <ProcessSection />
      <CTASection />
    </>
  );
}

export default About;
