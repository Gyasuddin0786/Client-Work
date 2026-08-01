// File: src/components/sections/HeroSection.jsx

import {
  ArrowRight,
  CheckCircle2,
  Star,
} from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa'
import { siteConfig } from "../../config/siteConfig";

import Badge from "../common/Badge";
import Button from "../common/Button";
import Container from "../common/Container";

function HeroSection() {
  const { hero, contact, features } = siteConfig;

  const whatsappLink = `https://wa.me/${contact.whatsapp.replace(
    /\D/g,
    ""
  )}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-orange-50">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Top Left Orange Glow */}
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-orange-500/25 blur-[140px]" />

        {/* Bottom Right Amber Glow */}
        <div className="absolute -bottom-52 -right-52 h-[650px] w-[650px] rounded-full bg-amber-400/20 blur-[180px]" />

        {/* Center Soft Glow */}
        <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400/10 blur-[160px]" />

        {/* Extra Small Glow */}
        <div className="absolute left-[20%] top-[70%] h-[220px] w-[220px] rounded-full bg-yellow-300/10 blur-[120px]" />

        {/* Industrial Grid */}
        <div
          className="
      absolute
      inset-0
      opacity-30
      bg-[linear-gradient(to_right,rgba(100,116,139,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.22)_1px,transparent_1px)]
      bg-[size:60px_60px]
    "
        />

        {/* Top Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent" />

        {/* Bottom Fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-100/30 via-transparent to-transparent" />

      </div>

      <Container>
        <div className="relative grid min-h-screen items-center gap-16 py-24 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <Badge
              variant="warning"
              className="rounded-full px-4 py-2"
            >
              <Star size={14}/>
              {hero.badge}
            </Badge>
            <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              Design{" "}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Your Vision.
              </span>
              <br />
              We Build It Strong.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              {hero.subtitle}
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap grid gap-4 xs:grid-cols-2 sm:grid-cols-2">
              <Button
                to={hero.primaryButton.link}
                size="lg"
              >
                <span>{hero.primaryButton.text}</span>

                <ArrowRight className="h-5 w-5" />
              </Button>

              <Button
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className=" bg-gradient-to-r
    from-orange-500
    to-orange-600
    text-white
    border-0
    shadow-lg
    shadow-orange-500/30
    hover:from-orange-600
    hover:to-orange-700
    hover:shadow-xl
    hover:shadow-orange-500/40"
              >
                <FaWhatsapp className="h-5 w-5 text-white" />

                <span>Chat on WhatsApp</span>
              </Button>
            </div>

            {/* Features */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="
        group
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-slate-200
        bg-white/80
        p-2
        shadow-sm
        backdrop-blur
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-orange-300
        hover:shadow-xl
      "
                >
                  <div
                    className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          bg-orange-100
          text-orange-600
          transition-colors
          duration-300
          group-hover:bg-orange-500
          group-hover:text-white
        "
                  >
                    <CheckCircle2 className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {feature}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      High-quality workmanship
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
              <img
                src="/images/hero/welding-hero.png"
                alt="Professional Welding & Fabrication"
                className="aspect-[4/5] w-full object-fit"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 left-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl hover:border-orange-300">
              <p className="text-sm text-slate-500">
                Custom Fabrication
              </p>

              <h3 className="mt-1 text-lg font-bold text-slate-900">
                Residential & Commercial
              </h3>
            </div>

            {/* Quality Badge */}
            <div className="absolute -right-4 top-8 rounded-xl bg-orange-500 px-5 py-3 text-white shadow-xl">
              <p className="text-xs uppercase tracking-wider">
                Quality
              </p>

              <p className="text-lg font-bold">
                Guaranteed
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;