import React, { useState } from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const MobileExperience = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    farmSize: '',
    cropType: ''
  });

  const [currentScreen, setCurrentScreen] = useState(0);

  const mobileScreens = [
    {
      title: "Field Data Collection",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=600&fit=crop",
      features: [
        "Voice-to-text logging",
        "GPS location tagging",
        "Photo documentation",
        "Offline data sync"
      ]
    },
    {
      title: "Real-time Monitoring",
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=300&h=600&fit=crop",
      features: [
        "Live weather updates",
        "Crop health alerts",
        "Equipment status",
        "Market price tracking"
      ]
    },
    {
      title: "Quick Decision Making",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=600&fit=crop",
      features: [
        "Instant recommendations",
        "Profit calculators",
        "Resource optimization",
        "Community insights"
      ]
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Demo request submitted:', formData);
  };

  const nextScreen = () => {
    setCurrentScreen(prev => (prev + 1) % mobileScreens.length);
  };

  const prevScreen = () => {
    setCurrentScreen(prev => (prev - 1 + mobileScreens.length) % mobileScreens.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Mobile App Preview */}
          <div className="relative">
            <div className="text-center mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Farm Management
                <span className="block text-primary">On-the-Go</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Access your farm data anywhere with our mobile-first progressive web app. 
                Designed for the field, optimized for farming life.
              </p>
            </div>

            {/* Mobile Device Mockup */}
            <div className="relative mx-auto max-w-sm">
              {/* Phone Frame */}
              <div className="relative bg-gray-900 rounded-[3rem] p-2 agricultural-shadow-lg">
                <div className="bg-background rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-gray-900 text-white px-6 py-2 flex justify-between items-center text-sm">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1">
                      <Icon name="Signal" size={16} />
                      <Icon name="Wifi" size={16} />
                      <Icon name="Battery" size={16} />
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="h-[600px] relative overflow-hidden">
                    <Image
                      src={mobileScreens[currentScreen].image}
                      alt={mobileScreens[currentScreen].title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-bold mb-4">{mobileScreens[currentScreen].title}</h3>
                        <div className="space-y-2">
                          {mobileScreens[currentScreen].features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <Icon name="Check" size={16} className="text-success" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center space-x-2 mt-6">
                {mobileScreens.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentScreen(index)}
                    className={`w-2 h-2 rounded-full seasonal-transition ${
                      index === currentScreen ? 'bg-primary' : 'bg-border'
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevScreen}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center agricultural-shadow growth-hover"
              >
                <Icon name="ChevronLeft" size={16} />
              </button>
              
              <button
                onClick={nextScreen}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center agricultural-shadow growth-hover"
              >
                <Icon name="ChevronRight" size={16} />
              </button>
            </div>

            {/* Mobile Features */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <Icon name="Smartphone" size={24} className="text-primary mx-auto mb-2" />
                <div className="font-medium text-sm">Progressive Web App</div>
                <div className="text-xs text-muted-foreground">Install like native app</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <Icon name="WifiOff" size={24} className="text-success mx-auto mb-2" />
                <div className="font-medium text-sm">Offline Capable</div>
                <div className="text-xs text-muted-foreground">Works without internet</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <Icon name="Camera" size={24} className="text-accent mx-auto mb-2" />
                <div className="font-medium text-sm">Photo Documentation</div>
                <div className="text-xs text-muted-foreground">Auto-categorized images</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <Icon name="Mic" size={24} className="text-warning mx-auto mb-2" />
                <div className="font-medium text-sm">Voice Logging</div>
                <div className="text-xs text-muted-foreground">Hands-free data entry</div>
              </div>
            </div>
          </div>

          {/* Demo Request Form */}
          <div className="bg-card border border-border rounded-2xl p-8 agricultural-shadow">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-card-foreground mb-4">
                Request Your Free Farm Analysis
              </h3>
              <p className="text-muted-foreground">
                Get personalized insights for your farm operation. Our agricultural experts 
                will analyze your current setup and show you exactly how FarmSync can 
                increase your profitability.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                
                <Input
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <Input
                label="Email Address"
                type="email"
                name="email"
                placeholder="your.email@farm.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Farm Size (acres)"
                  type="number"
                  name="farmSize"
                  placeholder="e.g., 150"
                  value={formData.farmSize}
                  onChange={handleInputChange}
                  required
                />
                
                <Input
                  label="Primary Crop Type"
                  type="text"
                  name="cropType"
                  placeholder="e.g., Corn, Soybeans"
                  value={formData.cropType}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                className="bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-lg font-semibold"
                iconName="Calendar"
                iconPosition="right"
              >
                Schedule My Free Analysis
              </Button>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  No commitment required • 30-minute consultation • Personalized recommendations
                </p>
              </div>
            </form>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-success">500+</div>
                  <div className="text-xs text-muted-foreground">Farms Analyzed</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-primary">24h</div>
                  <div className="text-xs text-muted-foreground">Response Time</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-accent">100%</div>
                  <div className="text-xs text-muted-foreground">Free Analysis</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileExperience;