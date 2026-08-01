import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import QuoteForm from "../../components/forms/QuoteForm";
import { CheckCircle2 } from "lucide-react";
import CTASection from "../../components/sections/CTASection";
import SEO from "../../components/common/SEO";
function RequestQuote() {
  return (
    <>
      <SEO
        title="Request a Free Quote | SK 1 Welding Workshop"
        description="Request a free quotation for steel and metal fabrication, welding, gates, railings, sheds, staircases, grills, canopies, and custom metal fabrication. Get a quick response from SK 1 Welding Workshop."
        keywords="request fabrication quote, free welding quotation, steel and metal fabrication estimate, gate quotation, railing quotation, welding contractor, SK 1 Welding Workshop"
      />
      <section className="py-14 bg-gray-50">
        <Container>
          <SectionHeading
            eyebrow="Request Quote"
            title="Tell Us About Your Project"
            description="Fill out the form below and our team will review your requirements before preparing a customized quotation."
            align="center"
          />

          <div className="mt-16 grid gap-12 lg:grid-cols-[2fr_1fr]">
            {/* Quote Form */}

            <QuoteForm />

            {/* Information Card */}

            <aside
              className="rounded-2xl border bg-gray-50 p-8
          text-orange-600
          transition-colors
          duration-300
          group-hover:text-white
          border-orange-300"
            >
              <h2 className="text-2xl font-semibold">Before You Submit</h2>

              <p className="mt-4 leading-7 text-slate-600">
                The more information you provide, the more accurate your
                quotation will be.
              </p>

              <ul className="mt-8 space-y-4 text-slate-700">
                <li className="flex items-center">
                  {" "}
                  <CheckCircle2
                    className="h-5 w-5 me-1 rounded-xl
          bg-orange-100
          text-orange-600
          transition-colors
          duration-300
          group-hover:bg-orange-500
          group-hover:text-white"
                  />{" "}
                  Project location
                </li>
                <li className="flex items-center">
                  {" "}
                  <CheckCircle2
                    className="h-5 w-5 me-1 rounded-xl
          bg-orange-100
          text-orange-600
          transition-colors
          duration-300
          group-hover:bg-orange-500
          group-hover:text-white"
                  />
                  Approximate dimensions
                </li>
                <li className="flex items-center">
                  {" "}
                  <CheckCircle2
                    className="h-5 w-5 me-1 rounded-xl
          bg-orange-100
          text-orange-600
          transition-colors
          duration-300
          group-hover:bg-orange-500
          group-hover:text-white"
                  />{" "}
                  Material preference
                </li>
                <li className="flex items-center">
                  {" "}
                  <CheckCircle2
                    className="h-5 w-5 me-1 rounded-xl
          bg-orange-100
          text-orange-600
          transition-colors
          duration-300
          group-hover:bg-orange-500
          group-hover:text-white"
                  />{" "}
                  Reference images (if available)
                </li>
                <li className="flex items-center">
                  {" "}
                  <CheckCircle2
                    className="h-5 w-5 me-1 rounded-xl
          bg-orange-100
          text-orange-600
          transition-colors
          duration-300
          group-hover:bg-orange-500
          group-hover:text-white"
                  />{" "}
                  Expected completion timeline
                </li>
              </ul>
              <div className="mt-10 rounded-xl bg-white border border-orange-300 p-5">
                <h3 className="font-semibold">Response Time</h3>

                <p className="mt-2 text-sm text-slate-600">
                  We usually respond within one business day after reviewing
                  your request.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}

export default RequestQuote;
