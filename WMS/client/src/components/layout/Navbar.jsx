import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle, ArrowRight,}
from "lucide-react";

import Container from "../common/Container";
import Button from "../common/Button";
import { siteConfig } from "../../config/siteConfig";

const navigation = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Services",
    to: "/services",
  },
  {
    label: "Our Work",
    to: "/portfolio",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  // Add navbar background/shadow after scrolling.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu whenever route changes.
  useEffect(() => {
    // setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scrolling while mobile menu is open.
  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close mobile menu using Escape key.
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const getNavLinkClass = ({ isActive }) => {
    return [
      "relative text-sm font-medium transition-colors duration-200",
      "focus-visible:outline-none focus-visible:ring-2",
      "focus-visible:ring-blue-500 focus-visible:ring-offset-4",
      "rounded-sm",
      isActive
        ? "text-orange-600"
        : "text-slate-700 hover:text-slate-950",
    ]
      .filter(Boolean)
      .join(" ");
  };

  const whatsappNumber = siteConfig.whatsapp?.replace(/\D/g, "");

  const whatsappMessage = encodeURIComponent(
    "Hi, I would like to discuss a steel & welding or fabrication project."
  );

  const whatsappUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    : null;

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled
          ? "border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur"
          : "border-b border-transparent bg-white",
      ].join(" ")}
    >
      <Container>
        <nav
          className="flex h-12 items-center justify-between gap-6"
          aria-label="Main navigation"
        >
          {/* Logo / Brand */}
          <Link
            to="/"
            className="flex shrink-0 items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            aria-label={`${siteConfig.companyName} home`}
          >
            {siteConfig.logo ? (
              <img
                src={siteConfig.logo}
                alt={siteConfig.companyName}
                className="h-10 w-auto object-contain rounded-full"
              />
            ) : (
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-lg font-bold text-white">
                {siteConfig.companyName?.charAt(0)?.toUpperCase() || "W"}
              </span>
            )}

            <div className="hidden sm:block">
              <span className="block text-base font-bold leading-tight text-slate-950">
                {siteConfig.companyName}
              </span>

              {siteConfig.shortTagline && (
                <span className="mt-0.5 block text-xs font-semibold uppercase tracking-[0.15em] text-orange-400">
                  {siteConfig.shortTagline}
                </span>
              )}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={getNavLinkClass}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            {whatsappUrl && (
              <Button
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                size="sm"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle
                  size={18}
                  aria-hidden="true"
                />
                WhatsApp
              </Button>
            )}

            <Button
              to="/request-quote"
              size="sm"
            >
              Request a Quote
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className={[
              "inline-flex h-11 w-11 items-center justify-center rounded-lg",
              "text-slate-700 transition-colors",
              "hover:bg-slate-100 hover:text-slate-950",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-blue-500 focus-visible:ring-offset-2",
              "lg:hidden",
            ].join(" ")}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
          >
            {isMenuOpen ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white lg:hidden"
        >
          <Container>
            <div className="flex max-h-[calc(100vh-4.5rem)] flex-col overflow-y-auto py-5">
              <div className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      [
                        "rounded-lg px-4 py-3 text-base font-medium",
                        "transition-colors",
                        "focus-visible:outline-none focus-visible:ring-2",
                        "focus-visible:ring-blue-500",
                        isActive
                          ? "text-orange-600"
                          : "text-slate-700 hover:bg-slate-100 hover:text-slate-950",
                      ].join(" ")
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              <div className="my-5 border-t border-slate-200" />

              <div className="flex flex-col gap-3">
                <Button
                  to="/request-quote"
                  className="w-full"
                >
                  Request a Quote <ArrowRight className="h-5 w-5" />
                </Button>

                {whatsappUrl && (
                  <Button
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    className="w-full"
                  >
                    <MessageCircle
                      size={18}
                      aria-hidden="true"
                    />
                    Chat on WhatsApp
                  </Button>
                )}
              </div>

              {(siteConfig.phone || siteConfig.email) && (
                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Contact
                  </p>

                  <div className="flex flex-col gap-2 text-sm">
                    {siteConfig.phone && (
                      <a
                        href={`tel:${siteConfig.phone.replace(
                          /[^\d+]/g,
                          ""
                        )}`}
                        className="w-fit text-slate-700 transition-colors hover:text-blue-600"
                      >
                        {siteConfig.phone}
                      </a>
                    )}

                    {siteConfig.email && (
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="w-fit break-all text-slate-700 transition-colors hover:text-blue-600"
                      >
                        {siteConfig.email}
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

export default Navbar;