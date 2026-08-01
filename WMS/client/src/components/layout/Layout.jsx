import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import CookiesConsent from "../common/CookiesConsent";

function Layout() {
  const { pathname } = useLocation();

  // Scroll to top whenever the route changes.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      {/* Global Public Navbar */}
      <Navbar />

      {/* Current Route/Page */}
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>

      {/* Global Public Footer */}
      <Footer />
      <CookiesConsent/>
    </div>
  );
}

export default Layout;