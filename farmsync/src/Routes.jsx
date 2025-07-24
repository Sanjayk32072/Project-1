import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import Homepage from "pages/homepage";
import DemoRequest from "pages/demo-request";
import ContactSupport from "pages/contact-support";
import PricingPlans from "pages/pricing-plans";
import SuccessStories from "pages/success-stories";
import PlatformFeatures from "pages/platform-features";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/demo-request" element={<DemoRequest />} />
        <Route path="/contact-support" element={<ContactSupport />} />
        <Route path="/pricing-plans" element={<PricingPlans />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/platform-features" element={<PlatformFeatures />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;