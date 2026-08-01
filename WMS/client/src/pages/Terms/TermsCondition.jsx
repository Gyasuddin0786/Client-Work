import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import { siteConfig } from "../../config/siteConfig";
import {
  ShieldCheck,
  FileText,
  CreditCard,
  Clock3,
  Award,
  Users,
  Scale,
  RefreshCw,
  Mail,
} from "lucide-react";
import SEO from "../../components/common/SEO";
function TermsConditions() {
  return (
    <>
      <SEO
        title="Terms & Conditions | SK 1 Welding Workshop"
        description="Read the Terms & Conditions of SK 1 Welding Workshop regarding quotations, fabrication services, project execution, and customer responsibilities."
        keywords="terms and conditions, fabrication terms, welding workshop terms, service agreement, SK 1 Welding Workshop"
      />
      <section className="bg-gray-50 py-20">
        <Container>
          <SectionHeading
            eyebrow="Legal Information"
            title="Terms & Conditions"
            description="Please read these terms carefully before using our welding and fabrication services."
            centered
          />

          {/* Cards Grid */}

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {/* Card 1 */}

            <div
              className="
          group
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-8
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-orange-500
          hover:shadow-xl
          hover:shadow-orange-200
        "
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                <ShieldCheck size={32} />
              </div>

              <h2 className="text-2xl font-bold text-slate-900">Services</h2>

              <p className="mt-5 leading-8 text-slate-600">
                {siteConfig.companyName} provides professional steel & welding,
                fabrication, repair, installation and custom metal work for
                residential, commercial and industrial projects with quality
                workmanship and timely delivery.
              </p>
            </div>

            {/* Card 2 */}

            <div
              className="
          group
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-8
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-orange-500
          hover:shadow-xl
          hover:shadow-orange-200
        "
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                <FileText size={32} />
              </div>

              <h2 className="text-2xl font-bold text-slate-900">Quotations</h2>

              <p className="mt-5 leading-8 text-slate-600">
                Every quotation is prepared based on the information provided by
                the customer. Any changes in design, dimensions, materials or
                project scope may result in an updated estimate.
              </p>
            </div>
            {/* Card 3 */}

            <div
              className="
          group
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-8
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-orange-500
          hover:shadow-xl
          hover:shadow-orange-200
        "
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                <CreditCard size={32} />
              </div>

              <h2 className="text-2xl font-bold text-slate-900">Payments</h2>

              <ul className="mt-5 space-y-3 text-slate-600">
                <li>• Advance payment may be required before work begins.</li>

                <li>
                  • Remaining balance is payable after project completion.
                </li>

                <li>• Delayed payments may affect delivery schedules.</li>

                <li>• Payment methods will be shared during quotation.</li>
              </ul>
            </div>

            {/* Card 4 */}

            <div
              className="
          group
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-8
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-orange-500
          hover:shadow-xl
          hover:shadow-orange-200
        "
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                <Clock3 size={32} />
              </div>

              <h2 className="text-2xl font-bold text-slate-900">
                Project Timeline
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Project completion depends on the project size, material
                availability, weather conditions and site readiness. We are
                committed to completing every project within the agreed timeline
                while maintaining high-quality workmanship.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {/* Card 5 */}

            <div
              className="
          group
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-8
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-orange-500
          hover:shadow-xl
          hover:shadow-orange-200
        "
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                <Award size={32} />
              </div>

              <h2 className="text-2xl font-bold text-slate-900">Warranty</h2>

              <p className="mt-5 leading-8 text-slate-600">
                We stand behind the quality of our workmanship. Warranty covers
                manufacturing and workmanship defects only. Damage caused by
                accidents, misuse, poor maintenance, corrosion, unauthorized
                modifications or natural disasters is not covered.
              </p>
            </div>

            {/* Card 6 */}

            <div
              className="
          group
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-8
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-orange-500
          hover:shadow-xl
          hover:shadow-orange-200
        "
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                <Users size={32} />
              </div>

              <h2 className="text-2xl font-bold text-slate-900">
                Customer Responsibility
              </h2>

              <ul className="mt-5 space-y-3 text-slate-600">
                <li>• Provide accurate measurements and project details.</li>

                <li>• Ensure safe and clear access to the work area.</li>

                <li>• Obtain required permissions before installation.</li>

                <li>• Inspect completed work before final approval.</li>
              </ul>
            </div>

            {/* Card 7 */}

            <div
              className="
          group
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-8
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-orange-500
          hover:shadow-xl
          hover:shadow-orange-200
        "
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                <Scale size={32} />
              </div>

              <h2 className="text-2xl font-bold text-slate-900">
                Limitation of Liability
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Our liability is limited to the value of the services provided.
                We are not responsible for indirect, consequential or incidental
                losses resulting from delays, misuse or circumstances beyond our
                control.
              </p>
            </div>

            {/* Card 8 */}

            <div
              className="
          group
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-8
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-orange-500
          hover:shadow-xl
          hover:shadow-orange-200
        "
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                <RefreshCw size={32} />
              </div>

              <h2 className="text-2xl font-bold text-slate-900">
                Changes to These Terms
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                We may update these Terms & Conditions from time to time. Any
                revisions will be published on this website and become effective
                immediately after publication.
              </p>
            </div>
          </div>
          {/* Contact Information */}

          <div className="mt-12 overflow-hidden rounded-[32px] border border-orange-200 bg-white shadow-xl">
            {/* Header */}

            <div className="bg-gradient-to-r from-orange-500 to-orange-400 px-8 py-8">
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                  <Mail className="h-8 w-8 text-white" />
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white">
                    Need More Information?
                  </h2>

                  <p className="mt-2 text-orange-100">
                    Have questions about our terms, quotations or fabrication
                    services? Our team is always happy to help.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Details */}

            <div className="grid gap-6 p-8 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-gray-50 p-6 transition-all duration-300 hover:border-orange-400 hover:shadow-lg">
                <p className="text-sm font-medium uppercase tracking-wider text-orange-500">
                  Company
                </p>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {siteConfig.companyName}
                </h3>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-gray-50 p-6 transition-all duration-300 hover:border-orange-400 hover:shadow-lg">
                <p className="text-sm font-medium uppercase tracking-wider text-orange-500">
                  Email
                </p>

                <p className="mt-2 text-lg text-slate-700">
                  {siteConfig.contact.email}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-gray-50 p-6 transition-all duration-300 hover:border-orange-400 hover:shadow-lg">
                <p className="text-sm font-medium uppercase tracking-wider text-orange-500">
                  Phone
                </p>

                <p className="mt-2 text-lg text-slate-700">
                  {siteConfig.contact.phone}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-gray-50 p-6 transition-all duration-300 hover:border-orange-400 hover:shadow-lg">
                <p className="text-sm font-medium uppercase tracking-wider text-orange-500">
                  Address
                </p>

                <p className="mt-2 text-lg leading-7 text-slate-700">
                  {siteConfig.contact.address.line1},
                  <br />
                  {siteConfig.contact.address.city},
                  <br />
                  {siteConfig.contact.address.state} -{" "}
                  {siteConfig.contact.address.postalCode}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default TermsConditions;
