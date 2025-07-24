import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import FarmSizeCalculator from './components/FarmSizeCalculator';
import PricingCard from './components/PricingCard';
import ROICalculator from './components/ROICalculator';
import AddOnModules from './components/AddOnModules';
import PaymentOptions from './components/PaymentOptions';
import ComparisonTable from './components/ComparisonTable';

const PricingPlans = () => {
  const [recommendedPlan, setRecommendedPlan] = useState(null);

  const pricingPlans = [
    {
      name: 'Starter Farm',
      subtitle: 'Perfect for small farms up to 50 acres',
      price: 49,
      period: 'month',
      description: 'Essential tools for beginning your digital farming journey',
      features: [
        'Track up to 5 crop fields',
        'Basic expense tracking',
        'Simple profit analysis',
        'Mobile app access',
        'Email support',
        'Community forum access'
      ],
      limitations: [
        'No predictive analytics',
        'Limited reporting options',
        'No expert consultations'
      ],
      cta: 'Start Free Trial',
      badge: null
    },
    {
      name: 'Growth Farm',
      subtitle: 'Ideal for expanding operations 51-500 acres',
      price: 149,
      period: 'month',
      description: 'Advanced features for growing agricultural businesses',
      features: [
        'Track up to 25 crop fields',
        'Advanced expense categorization',
        'Detailed profit & loss analysis',
        'Predictive yield analytics',
        'Custom dashboard creation',
        'Budget forecasting tools',
        'Benchmark comparisons',
        '2 expert consultations/year',
        'Priority email support'
      ],
      limitations: [
        'No multi-farm management',
        'Limited white-label options'
      ],
      cta: 'Start Free Trial',
      badge: 'Most Popular'
    },
    {
      name: 'Enterprise Farm',
      subtitle: 'Comprehensive solution for 500+ acres',
      price: 299,
      period: 'month',
      description: 'Complete agricultural intelligence platform',
      features: [
        'Unlimited crop field tracking',
        'Multi-farm management',
        'AI-powered crop insights',
        'Advanced financial modeling',
        'Custom report generation',
        'White-label options',
        'Unlimited expert consultations',
        'Dedicated account manager',
        'Phone & video support',
        'API access for integrations'
      ],
      limitations: [],
      cta: 'Contact Sales',
      badge: null
    }
  ];

  const handlePlanRecommendation = (recommendation) => {
    setRecommendedPlan(recommendation);
  };

  const testimonials = [
    {
      name: "Sarah Mitchell",
      farm: "Mitchell Family Farms",
      acres: 320,
      quote: "FarmSync helped us increase our corn yield by 15% while reducing input costs by $12,000 annually.",
      plan: "Growth Farm",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Robert Chen",
      farm: "Golden Valley Agriculture",
      acres: 850,
      quote: "The multi-farm management features saved us 20 hours per week in administrative work.",
      plan: "Enterprise Farm",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Maria Rodriguez",
      farm: "Sunrise Organic Farm",
      acres: 45,
      quote: "As a new farmer, FarmSync made tracking expenses and planning so much easier. ROI in 3 months!",
      plan: "Starter Farm",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."
    },
    {
      question: "What happens to my data if I cancel?",
      answer: "Your data remains accessible for 90 days after cancellation. You can export all your information during this period. We never delete your data without explicit consent."
    },
    {
      question: "Do you offer discounts for multiple farms?",
      answer: "Yes, Enterprise plans include multi-farm management. For agricultural consultants managing multiple client farms, we offer special pricing. Contact our sales team for details."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees for any plan. We also provide free data migration assistance and onboarding support to help you get started quickly."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, ACH bank transfers, and offer special harvest payment plans for seasonal cash flow management."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Transparent Pricing for Every Farm Size
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              From small family farms to large agricultural enterprises, find the perfect plan 
              to transform your farming operations with intelligent data-driven insights.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Farm Size Calculator */}
          <div className="mb-16">
            <FarmSizeCalculator onPlanRecommendation={handlePlanRecommendation} />
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                plan={plan}
                isPopular={plan.badge === 'Most Popular'}
                isRecommended={recommendedPlan?.plan === plan.name.toLowerCase().replace(' ', '')}
              />
            ))}
          </div>

          {/* ROI Calculator */}
          <div className="mb-16">
            <ROICalculator />
          </div>
        </div>
      </section>

      {/* Add-on Modules */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <AddOnModules />
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <PaymentOptions />
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <ComparisonTable />
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Trusted by Farmers Worldwide</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how FarmSync is helping farmers of all sizes increase profitability and optimize operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-xl p-6 agricultural-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.farm}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.acres} acres</p>
                  </div>
                </div>
                <blockquote className="text-card-foreground mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-2">
                  <Icon name="Star" size={16} className="text-warning fill-current" />
                  <Icon name="Star" size={16} className="text-warning fill-current" />
                  <Icon name="Star" size={16} className="text-warning fill-current" />
                  <Icon name="Star" size={16} className="text-warning fill-current" />
                  <Icon name="Star" size={16} className="text-warning fill-current" />
                  <span className="text-sm text-muted-foreground ml-2">Using {testimonial.plan}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about FarmSync pricing and features
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card rounded-xl p-6 agricultural-shadow">
                <h3 className="text-lg font-semibold text-card-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Farm?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of farmers who are already using FarmSync to increase profits and optimize operations. 
              Start your free trial today and see the difference intelligent farming makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Start 14-Day Free Trial
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Schedule a Demo
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-75">
              No credit card required • Full access to all features • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto">
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
                  <span className="text-xl font-bold text-card-foreground">FarmSync</span>
                  <p className="text-sm text-muted-foreground">Intelligent Agriculture Platform</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Transforming traditional farming into data-driven agriculture with intelligent insights 
                and comprehensive farm management tools.
              </p>
              <div className="flex space-x-4">
                <Icon name="Facebook" size={20} className="text-muted-foreground hover:text-primary cursor-pointer seasonal-transition" />
                <Icon name="Twitter" size={20} className="text-muted-foreground hover:text-primary cursor-pointer seasonal-transition" />
                <Icon name="Instagram" size={20} className="text-muted-foreground hover:text-primary cursor-pointer seasonal-transition" />
                <Icon name="Linkedin" size={20} className="text-muted-foreground hover:text-primary cursor-pointer seasonal-transition" />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary seasonal-transition">Features</a></li>
                <li><a href="#" className="hover:text-primary seasonal-transition">Pricing</a></li>
                <li><a href="#" className="hover:text-primary seasonal-transition">Mobile App</a></li>
                <li><a href="#" className="hover:text-primary seasonal-transition">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary seasonal-transition">Help Center</a></li>
                <li><a href="#" className="hover:text-primary seasonal-transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary seasonal-transition">Community</a></li>
                <li><a href="#" className="hover:text-primary seasonal-transition">Training</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} FarmSync. All rights reserved. Built for farmers, by agricultural technology experts.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PricingPlans;