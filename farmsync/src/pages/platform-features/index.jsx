import React from 'react';
import Header from '../../components/ui/Header';
import PlatformPreview from './components/PlatformPreview';
import CropPortfolioManager from './components/CropPortfolioManager';
import FinancialCommandCenter from './components/FinancialCommandCenter';
import AnalyticsPowerhouse from './components/AnalyticsPowerhouse';
import IntegrationShowcase from './components/IntegrationShowcase';
import FeatureHighlights from './components/FeatureHighlights';
import Icon from '../../components/AppIcon';

const PlatformFeatures = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Sparkles" size={16} />
              <span>Intelligent Agricultural Platform</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Transform Your Farm with
              <span className="text-primary block">Smart Technology</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover how FarmSync's comprehensive platform combines traditional farming wisdom 
              with cutting-edge technology to maximize your agricultural success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg seasonal-transition growth-hover">
                Explore Platform Demo
              </button>
              <button className="bg-card text-foreground border border-border px-8 py-4 rounded-lg font-bold text-lg seasonal-transition growth-hover">
                Watch Video Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Preview Section */}
      <PlatformPreview />

      {/* Crop Portfolio Manager Section */}
      <CropPortfolioManager />

      {/* Financial Command Center Section */}
      <FinancialCommandCenter />

      {/* Analytics Powerhouse Section */}
      <AnalyticsPowerhouse />

      {/* Integration Showcase Section */}
      <IntegrationShowcase />

      {/* Feature Highlights Section */}
      <FeatureHighlights />

      {/* Call to Action Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Revolutionize Your Farming Operation?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of farmers who have already transformed their operations with FarmSync. 
            Start your free trial today and experience the future of agriculture.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-foreground text-primary px-8 py-4 rounded-lg font-bold text-lg seasonal-transition growth-hover">
              Start Free Trial
            </button>
            <button className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg seasonal-transition growth-hover hover:bg-primary-foreground hover:text-primary">
              Schedule Demo
            </button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-primary-foreground/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold mb-1">30 Days</div>
                <div className="opacity-80">Free Trial</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">No Setup</div>
                <div className="opacity-80">Fees Required</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">24/7</div>
                <div className="opacity-80">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
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
                  <div className="text-xl font-bold text-foreground">FarmSync</div>
                  <div className="text-sm text-muted-foreground">Intelligent Agriculture</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Empowering farmers with intelligent technology to optimize yields, 
                reduce costs, and build sustainable agricultural operations.
              </p>
              <div className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} FarmSync. All rights reserved.
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-foreground mb-4">Platform</h3>
              <div className="space-y-2">
                <div className="text-muted-foreground hover:text-foreground cursor-pointer seasonal-transition">Features</div>
                <div className="text-muted-foreground hover:text-foreground cursor-pointer seasonal-transition">Integrations</div>
                <div className="text-muted-foreground hover:text-foreground cursor-pointer seasonal-transition">Mobile App</div>
                <div className="text-muted-foreground hover:text-foreground cursor-pointer seasonal-transition">API Access</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-foreground mb-4">Support</h3>
              <div className="space-y-2">
                <div className="text-muted-foreground hover:text-foreground cursor-pointer seasonal-transition">Help Center</div>
                <div className="text-muted-foreground hover:text-foreground cursor-pointer seasonal-transition">Documentation</div>
                <div className="text-muted-foreground hover:text-foreground cursor-pointer seasonal-transition">Community</div>
                <div className="text-muted-foreground hover:text-foreground cursor-pointer seasonal-transition">Contact Us</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PlatformFeatures;