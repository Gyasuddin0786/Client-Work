import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import { siteConfig } from "../../config/siteConfig";
import {
    ShieldCheck,
    Database,
    Lock,
    Globe,
    Mail,
} from "lucide-react";
function PrivacyPolicy() {
    return (
        <section className="bg-gray-50 py-20">
            <Container>

                <SectionHeading
                    eyebrow="Legal Information"
                    title="Privacy Policy"
                    description="Your privacy is important to us. This page explains how we collect, use and protect your personal information."
                    centered
                />

                {/* Cards */}

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

                            <Database size={32} />

                        </div>

                        <h2 className="text-2xl font-bold text-slate-900">
                            Information We Collect
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            When you contact us through our website, request a quotation,
                            or communicate with our team, we may collect your name,
                            phone number, email address, project location and project
                            details to provide better service.
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

                            <ShieldCheck size={32} />

                        </div>

                        <h2 className="text-2xl font-bold text-slate-900">
                            How We Use Your Information
                        </h2>

                        <ul className="mt-5 space-y-3 text-slate-600">

                            <li>• Respond to your enquiries and requests.</li>

                            <li>• Prepare quotations for fabrication projects.</li>

                            <li>• Contact you regarding your ongoing project.</li>

                            <li>• Improve customer support and service quality.</li>

                            <li>• Share important project updates when necessary.</li>

                        </ul>

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

                            <Lock size={32} />

                        </div>

                        <h2 className="text-2xl font-bold text-slate-900">
                            Information Protection
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            We use reasonable security measures to protect your personal
                            information from unauthorized access, misuse or disclosure.
                            Your information is never sold or shared with third parties
                            except where required by law.
                        </p>

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

                            <Globe size={32} />

                        </div>

                        <h2 className="text-2xl font-bold text-slate-900">
                            Third-Party Services
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Our website may use trusted third-party services such as
                            Google Maps, WhatsApp and Email services to improve your
                            experience. These services may collect certain information
                            according to their own privacy policies. We recommend
                            reviewing their privacy practices before using those
                            services.
                        </p>

                    </div>

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

                            <Mail size={32} />

                        </div>

                        <h2 className="text-2xl font-bold text-slate-900">
                            Contact Us
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            If you have any questions regarding this Privacy Policy or
                            how your personal information is handled, please feel free
                            to contact us. Our team will be happy to assist you.
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

                            <ShieldCheck size={32} />

                        </div>

                        <h2 className="text-2xl font-bold text-slate-900">
                            Your Privacy Rights
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            You have the right to request access to your personal information,
                            ask us to update incorrect details, or request the deletion of your
                            data where permitted by applicable laws. If you have any concerns
                            about your privacy, please contact us and we will respond as soon
                            as possible.
                        </p>

                    </div>

                </div>

                {/* Contact Card */}

                <div className="mt-12 overflow-hidden rounded-[32px] border border-orange-200 bg-white shadow-xl">

                    {/* Header */}

                    <div className="bg-gradient-to-r from-orange-500 to-orange-400 px-8 py-8">

                        <div className="flex items-center gap-5">

                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">

                                <Mail className="h-8 w-8 text-white" />

                            </div>

                            <div>

                                <h2 className="text-3xl font-bold text-white">
                                    Privacy Support
                                </h2>

                                <p className="mt-2 text-orange-100">
                                    Have questions about your privacy or personal data?
                                    Our support team is always ready to help.
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
    );
}

export default PrivacyPolicy;