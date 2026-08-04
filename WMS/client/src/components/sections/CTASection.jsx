import { ArrowRight, Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { siteConfig } from "../../config/siteConfig";

import Button from "../common/Button";
import Container from "../common/Container";

function CTASection() {
  const { cta, contact } = siteConfig;

  const whatsappLink = `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`;

  return (
    <section className="relative overflow-hidden bg-gray-950 py-14">
      {/* Background */}

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top Left Orange Glow */}
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-orange-500/25 blur-[140px]" />

        {/* Bottom Right Amber Glow */}
        <div className="absolute -bottom-52 -right-52 h-[650px] w-[650px] rounded-full bg-amber-400/20 blur-[180px]" />

        {/* Center Soft Glow */}
        <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400/10 blur-[160px]" />

        {/* Extra Glow */}
        <div className="absolute left-[20%] top-[70%] h-[220px] w-[220px] rounded-full bg-yellow-300/10 blur-[120px]" />

        {/* Grid Pattern */}
        <div
          className="
      absolute
      inset-0
      opacity-90
      bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
      bg-[size:60px_60px]
    "
        />

        {/* Top Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />

        {/* Bottom Fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent" />
      </div>

      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-5 py-8 shadow-2xl backdrop-blur-lg sm:px-8 sm:py-10 lg:p-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1.5fr_auto] lg:gap-12">
            {/* Left */}

            <div>
              <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-2 text-xs font-medium text-orange-300 sm:px-4 sm:text-sm">
                Ready to Start?
              </span>

              <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl break-words">
                {" "}
                {cta.title.split(" ").slice(0, -2).join(" ")}
                <span className="block bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  {cta.title.split(" ").slice(-2).join(" ")}
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                {cta.description}
              </p>

              {/* Contact */}

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {" "}
                <div className="flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 transition hover:border-orange-300">
                  <Phone className="h-5 w-5 text-orange-400" />

                  <span>{contact.phone}</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 transition hover:border-orange-300">
                  <Phone className="h-5 w-5 text-orange-400" />

                  <span>{contact.alternatePhone}</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 transition hover:border-orange-300">
                  <Mail className="h-5 w-5 text-orange-400" />

                  <span>{contact.email}</span>
                </div>
              </div>
            </div>

            {/* Right */}

            <div className="flex flex-col gap-4">
              <Button to="/request-quote" size="lg">
                {cta.buttonText}

                <ArrowRight className="h-5 w-5" />
              </Button>

              <Button
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="
                  bg-gradient-to-r
                  from-orange-500
                  to-orange-600
                  text-white
                  hover:from-orange-600
                  hover:to-orange-700
                  shadow-lg
                  shadow-orange-500/30
                "
              >
                <FaWhatsapp className="h-5 w-5" />

                <span>Chat on WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CTASection;
