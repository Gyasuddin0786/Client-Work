import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,

} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Container from "../common/Container";
import { siteConfig } from "../../config/siteConfig";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const serviceLinks = [
  {
    label: "Gate Fabrication",
    to: "/services/gate-fabrication",
  },
  {
    label: "Railing Fabrication",
    to: "/services/railing-fabrication",
  },
  {
    label: "Grill Fabrication",
    to: "/services/grill-fabrication",
  },
  {
    label: "Shed Fabrication",
    to: "/services/shed-fabrication",
  },
  {
    label: "Staircase Fabrication",
    to: "/services/staircase-fabrication",
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  const whatsappNumber =
    siteConfig.contact?.whatsapp?.replace(/\D/g, "") || "";

  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const socialLinks = [
    {
      label: "Facebook",
      icon: FaFacebookF,
      href: siteConfig.socialLinks?.facebook,
    },
    {
      label: "Instagram",
      icon: FaInstagram,
      href: siteConfig.socialLinks?.instagram,
    },
    {
      label: "X (Twitter)",
      icon: FaXTwitter,
      href: siteConfig.socialLinks?.twitter,
    },
    {
      label: "YouTube",
      icon: FaYoutube,
      href: siteConfig.socialLinks?.youtube,
    },
    {
      label: "WhatsApp",
      icon: FaWhatsapp,
      href: whatsappUrl,
    },
  ].filter((item) => item.href);

  return (
    <footer className="bg-slate-950 text-slate-300">

      <Container>

        {/* Top */}

        <div className="border-b border-slate-800 py-14">

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">

            {/* Company */}

            <div className="text-center sm:text-left">

              <Link
                to="/"
                className="inline-flex items-center justify-center gap-3 sm:justify-start"
              >
                {siteConfig.logo ? (
                  <img
                    src={siteConfig.logo}
                    alt={siteConfig.companyName}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 font-bold text-white">
                    {siteConfig.companyName.charAt(0)}
                  </div>
                )}

                <div>

                  <h2 className="text-2xl font-bold text-white">
                    {siteConfig.companyName}
                  </h2>

                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
                    Design Your Vision. Our Strength.
                  </p>

                </div>

              </Link>

              <p className="mx-auto mt-6 max-w-md leading-7 text-slate-400 sm:mx-0">
                We provide professional steel & welding and fabrication services for
                residential, commercial and industrial projects with quality
                workmanship, precision engineering and on-time delivery.
              </p>

              {/* Social */}

              <div className="mt-8 flex justify-center gap-3 sm:justify-start flex-wrap">

                {socialLinks.map(({ label, href, icon: Icon }) => (

                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-slate-700
              bg-slate-900
              text-slate-400
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-orange-500
              hover:bg-orange-500
              hover:text-white
              hover:shadow-lg
              hover:shadow-orange-500/30
            "
                  >
                    <Icon size={18} />
                  </a>

                ))}

              </div>

            </div>

            {/* Explore */}

            {/* Explore */}

            <div className="text-center sm:text-left">

              <h3 className="text-lg font-semibold text-white">
                Explore
              </h3>

              <ul className="mt-6 space-y-4">

                {quickLinks.map((item) => (

                  <li key={item.to}>

                    <Link
                      to={item.to}
                      className="
            inline-flex
            text-slate-400
            transition-all
            duration-300
            hover:translate-x-1
            hover:text-orange-400
          "
                    >
                      {item.label}
                    </Link>

                  </li>

                ))}

              </ul>

            </div>

            {/* Services */}

            <div className="text-center sm:text-left">

              <h3 className="text-lg font-semibold text-white">
                Services
              </h3>

              <ul className="mt-6 space-y-4">

                {serviceLinks.map((item) => (

                  <li key={item.to}>

                    <Link
                      to={item.to}
                      className="
            inline-flex
            text-slate-400
            transition-all
            duration-300
            hover:translate-x-1
            hover:text-orange-400
          "
                    >
                      {item.label}
                    </Link>

                  </li>

                ))}

              </ul>

            </div>

          </div>

        </div>

        {/* Footer Bottom */}


          <div
            className="
      flex
      flex-col
      items-center
      justify-between
      gap-4
      border-t
      border-slate-800
      pt-6
      text-center
      md:flex-row
      md:text-left
    "
          >

            <p className="text-sm text-slate-500">
              © {currentYear}{" "}
              <span className="font-medium text-slate-300">
                {siteConfig.companyName}
              </span>
              . All Rights Reserved.
            </p>

            <div
              className="
        flex
        flex-wrap
        items-center
        justify-center
        gap-6
      "
            >

              <Link
                to="/privacy-policy"
                className="
          text-sm
          text-slate-500
          transition-colors
          duration-300
          hover:text-orange-400
        "
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="
          text-sm
          text-slate-500
          transition-colors
          duration-300
          hover:text-orange-400
        "
              >
                Terms & Conditions
              </Link>

            </div>

          </div>

      </Container>

    </footer>
  );
}

export default Footer;