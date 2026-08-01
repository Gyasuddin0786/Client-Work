import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";

import ContactForm from "../../components/forms/ContactForm";
import {
  Phone,
  User,
  Mail,
  MapPin,
  Clock3,
  ClipboardList,
  ArrowRight,
} from "lucide-react";
import Button from "../../components/common/Button";
import { siteConfig } from "../../config/siteConfig";
import CTASection from "../../components/sections/CTASection";
import SEO from "../../components/common/SEO";
function Contact() {
  const { contact, businessHours } = siteConfig;

  return (
    <>
      <SEO
        title="Contact SK 1 Welding Workshop"
        description="Contact SK 1 Welding Workshop for gates, railings, sheds, grills, staircases and custom fabrication. Request your free quotation today."
        keywords="contact welding workshop, steel fabrication contact, welding services, free quotation"
      />

      <section className="py-14 bg-gray-50">
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Let's Discuss Your Project"
            description="Have questions or need a quotation? Contact us using the details below or send us a message."
            align="center"
          />

          <div className="mt-16 grid gap-12 lg:grid-cols-[2fr_1fr]">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <aside className="space-y-8">
              <div className="rounded-2xl border border-orange-300 bg-white p-6 shadow-sm">
                <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-900">
                  <User className="h-5 w-5 text-orange-500" />
                  Contact Information
                </h2>

                <div className="mt-6 space-y-5">
                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 h-5 w-5 text-orange-500" />
                    <div className="border-b border-slate-200 pb-2 text-slate-600">
                      <p className="font-medium text-slate-900">Phone</p>
                      <p className="text-slate-600">{contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 h-5 w-5 text-orange-500" />
                    <div className="border-b border-slate-200 pb-2 text-slate-600">
                      <p className="font-medium text-slate-900">Email</p>
                      <p className="text-slate-600">{contact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 text-orange-500" />
                    <div className="border-b border-slate-200 pb-2 text-slate-600">
                      <p className="font-medium text-slate-900">Address</p>

                      <p className="text-slate-600">
                        {contact.address.line1}
                        <br />
                        {contact.address.line2 && (
                          <>
                            {contact.address.line2}
                            <br />
                          </>
                        )}
                        {contact.address.city}, {contact.address.state}
                        <br />
                        {contact.address.country} - {contact.address.postalCode}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-orange-300 bg-white p-6 shadow-sm">
                <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-900">
                  <Clock3 className="h-5 w-5 text-orange-500" />
                  Business Hours
                </h2>

                <ul className="mt-6 space-y-3">
                  {Object.entries(businessHours).map(([day, hours]) => (
                    <li
                      key={day}
                      className="flex justify-between rounded-lg border-b border-slate-200 pb-2 text-slate-600"
                    >
                      <span className="font-medium capitalize">{day}</span>
                      <span>{hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-orange-300 bg-white p-6 shadow-sm">
                <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-900">
                  <ClipboardList className="h-5 w-5 text-orange-500" />
                  Project Consultation
                </h2>

                <p className="mt-5 leading-7 text-slate-600">
                  Share your requirements, drawings, or reference images. We'll
                  review your project and provide a customized quotation
                  tailored to your fabrication needs.
                </p>
              </div>
            </aside>
          </div>

          {/* Final CTA */}

          <section className="mt-24 rounded-3xl bg-orange-400 p-10 text-center text-white">
            <h2 className="text-3xl font-bold">Have a Similar Project?</h2>

            <p className="mt-4">
              Share your requirements and we'll prepare a customized quotation.
            </p>

            <Button to="/request-quote" variant="primary" className="mt-8">
              Request a Quote
              <ArrowRight className="h-5 w-5" />
            </Button>
          </section>
        </Container>
      </section>
      <CTASection />
    </>
  );
}

export default Contact;
