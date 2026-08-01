import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "../components/layout/Layout";

// Public Pages
import Home from "../pages/Home/Home";

// Temporary placeholder pages
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Portfolio from "../pages/Portfolio/Portfolio";
import PortfolioDetails from "../pages/Portfolio/PortfolioDetails";
import RequestQuote from "../pages/RequestQuote/RequestQuote";
import Services from "../pages/Services/Services";
import ServiceDetails from "../pages/Services/ServiceDetails";
import NotFound from "../pages/NotFound/NotFound";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "../pages/Terms/TermsCondition";

function AppRoutes() {
  return (
    <Routes>
      {/* ==========================
          Public Website
      ========================== */}
      <Route element={<Layout />}>
        <Route index element={<Home />} />

    <Route
      path="privacy-policy"
      element={<PrivacyPolicy />}
    />

    <Route
      path="terms"
      element={<TermsConditions />}
    />
        <Route
          path="services"
          element={<Services />}
        />

        <Route
          path="services/:slug"
          element={<ServiceDetails />}
        />

        <Route
          path="portfolio"
          element={<Portfolio />}
        />

        <Route
          path="portfolio/:slug"
          element={<PortfolioDetails />}
        />

        <Route
          path="request-quote"
          element={<RequestQuote />}
        />

        <Route
          path="about"
          element={<About />}
        />

        <Route
          path="contact"
          element={<Contact />}
        />
      </Route>

      {/* ==========================
          Future Customer Routes
      ========================== */}

      {/*
      <Route
        path="/customer"
        element={<CustomerLayout />}
      >
        <Route index element={<Dashboard />} />

        <Route path="orders" />

        <Route path="profile" />
      </Route>
      */}

      {/* ==========================
          Future Admin Routes
      ========================== */}

      {/*
      <Route
        path="/admin"
        element={<AdminLayout />}
      >
        <Route index element={<Dashboard />} />

        <Route path="services" />

        <Route path="projects" />

        <Route path="orders" />

        <Route path="customers" />

        <Route path="quotes" />
      </Route>
      */}

      {/* ==========================
          Redirects
      ========================== */}

      <Route
        path="/home"
        element={<Navigate to="/" replace />}
      />
      
      {/* ==========================
          404
      ========================== */}

      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}

export default AppRoutes;