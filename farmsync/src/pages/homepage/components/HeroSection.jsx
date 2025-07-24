import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentSeason, setCurrentSeason] = useState('spring');
  const [liveMetrics, setLiveMetrics] = useState({
    temperature: 72,
    humidity: 65,
    soilMoisture: 78,
    cropHealth: 94
  });

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        temperature: prev.temperature + (Math.random() - 0.5) * 2,
        humidity: Math.max(40, Math.min(90, prev.humidity + (Math.random() - 0.5) * 3)),
        soilMoisture: Math.max(60, Math.min(95, prev.soilMoisture + (Math.random() - 0.5) * 2)),
        cropHealth: Math.max(85, Math.min(100, prev.cropHealth + (Math.random() - 0.5) * 1))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Seasonal background animation
  useEffect(() => {
    const seasons = ['spring', 'summer', 'autumn', 'winter'];
    const seasonInterval = setInterval(() => {
      setCurrentSeason(prev => {
        const currentIndex = seasons.indexOf(prev);
        return seasons[(currentIndex + 1) % seasons.length];
      });
    }, 8000);

    return () => clearInterval(seasonInterval);
  }, []);

  const getSeasonalGradient = () => {
    const gradients = {
      spring: 'from-green-50 via-emerald-50 to-lime-50',
      summer: 'from-yellow-50 via-amber-50 to-orange-50',
      autumn: 'from-orange-50 via-red-50 to-yellow-50',
      winter: 'from-blue-50 via-slate-50 to-gray-50'
    };
    return gradients[currentSeason];
  };

  return (
    <section className={`relative min-h-screen bg-gradient-to-br ${getSeasonalGradient()} seasonal-transition overflow-hidden`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-secondary rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Transform Data Into{' '}
                <span className="text-primary bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                  Harvest Success
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Bridge traditional farming wisdom with modern precision agriculture.
                FarmSync empowers farmers with intelligent insights that drive profitability
                and sustainable growth through data-driven decisions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/demo-request">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold growth-hover"
                  iconName="TrendingUp"
                  iconPosition="right"
                >
                  Start Your Free Farm Analysis
                </Button>
              </Link>

              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground growth-hover"
                iconName="Play"
                iconPosition="left"
              >
                See FarmSync in Action
              </Button>
            </div>

            {/* Success Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-success">23%</div>
                <div className="text-sm text-muted-foreground">Average Profit Increase</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-primary">50,000+</div>
                <div className="text-sm text-muted-foreground">Acres Managed</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-accent">98%</div>
                <div className="text-sm text-muted-foreground">User Retention</div>
              </div>
            </div>
          </div>

          {/* Right Content - Live Dashboard Preview */}
          <div className="relative">
            <div className="bg-card border border-border rounded-2xl agricultural-shadow-lg p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-card-foreground">Live Farm Dashboard</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">Live</span>
                </div>
              </div>

              {/* Weather Widget */}
              <div className="bg-muted rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Icon name="Sun" size={20} className="text-warning" />
                    <span className="font-medium">Current Conditions</span>
                  </div>
                  <span className="text-2xl font-bold">{Math.round(liveMetrics.temperature)}°F</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Humidity</span>
                    <span className="font-medium">{Math.round(liveMetrics.humidity)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Soil Moisture</span>
                    <span className="font-medium">{Math.round(liveMetrics.soilMoisture)}%</span>
                  </div>
                </div>
              </div>

              {/* Crop Health Indicators */}
              <div className="space-y-3">
                <h4 className="font-medium">Crop Health Status</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-success rounded-full"></div>
                      <span className="text-sm">Corn Field A</span>
                    </div>
                    <span className="text-sm font-medium">{Math.round(liveMetrics.cropHealth)}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-success h-2 rounded-full seasonal-transition"
                      style={{ width: `${liveMetrics.cropHealth}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Profit Metrics */}
              <div className="bg-accent/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">This Month's Profit</span>
                  <Icon name="TrendingUp" size={16} className="text-success" />
                </div>
                <div className="text-2xl font-bold text-success">$12,450</div>
                <div className="text-sm text-muted-foreground">+18% from last month</div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="sm" className="text-xs">
                  <Icon name="Plus" size={14} className="mr-1" />
                  Log Activity
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  <Icon name="Camera" size={14} className="mr-1" />
                  Photo Report
                </Button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center animate-bounce">
              <Icon name="Zap" size={16} className="text-primary-foreground" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full flex items-center justify-center animate-pulse">
              <Icon name="Leaf" size={12} className="text-accent-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
