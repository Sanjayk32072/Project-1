import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import PlatformOverview from './components/PlatformOverview';
import TestimonialCarousel from './components/TestimonialCarousel';
import MobileExperience from './components/MobileExperience';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <PlatformOverview />
        <TestimonialCarousel />
        <MobileExperience />
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary-foreground"
                  >
                    <path
                      d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12 16C12 16 8 18 8 22H16C16 18 12 16 12 16Z"
                      fill="currentColor"
                      opacity="0.7"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-card-foreground">FarmSync</div>
                  <div className="text-xs text-muted-foreground">Intelligent Agriculture</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Transforming traditional farming into data-driven agriculture through 
                intelligent insights and community collaboration.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/platform-features" className="hover:text-foreground seasonal-transition">Features</a></li>
                <li><a href="/pricing-plans" className="hover:text-foreground seasonal-transition">Pricing</a></li>
                <li><a href="/demo-request" className="hover:text-foreground seasonal-transition">Demo</a></li>
                <li><a href="/success-stories" className="hover:text-foreground seasonal-transition">Success Stories</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/contact-support" className="hover:text-foreground seasonal-transition">Help Center</a></li>
                <li><a href="/contact-support" className="hover:text-foreground seasonal-transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-foreground seasonal-transition">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground seasonal-transition">API</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>support@farmsync.com</div>
                <div>1-800-FARM-SYNC</div>
                <div>Available 24/7</div>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} FarmSync. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground seasonal-transition">Privacy Policy</a>
              <a href="#" className="hover:text-foreground seasonal-transition">Terms of Service</a>
              <a href="#" className="hover:text-foreground seasonal-transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;