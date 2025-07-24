import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const IntegrationShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const integrations = [
    {
      id: 'weather-api',
      name: 'Weather Underground',
      category: 'weather',
      description: 'Real-time weather data and 10-day forecasts with field-specific microclimates',
      logo: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=100&h=100&fit=crop',
      status: 'connected',
      features: ['Hourly forecasts', 'Severe weather alerts', 'Historical data', 'Microclimate tracking'],
      dataPoints: '2.4M+ daily readings'
    },
    {
      id: 'satellite-imagery',
      name: 'Planet Labs',
      category: 'satellite',
      description: 'High-resolution satellite imagery for crop monitoring and field analysis',
      logo: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=100&h=100&fit=crop',
      status: 'connected',
      features: ['Daily imagery', 'NDVI analysis', 'Change detection', 'Historical comparison'],
      dataPoints: '3m resolution imagery'
    },
    {
      id: 'john-deere',
      name: 'John Deere Operations Center',
      category: 'equipment',
      description: 'Connect your John Deere equipment for automated data collection',
      logo: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=100&h=100&fit=crop',
      status: 'connected',
      features: ['Machine data sync', 'Fuel monitoring', 'Maintenance alerts', 'Field operations'],
      dataPoints: '12 machines connected'
    },
    {
      id: 'soil-sensors',
      name: 'CropX Soil Sensors',
      category: 'iot',
      description: 'Wireless soil monitoring sensors for moisture, temperature, and nutrients',
      logo: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=100&h=100&fit=crop',
      status: 'connected',
      features: ['Real-time monitoring', 'Irrigation automation', 'Nutrient tracking', 'Root zone analysis'],
      dataPoints: '48 sensors active'
    },
    {
      id: 'market-data',
      name: 'CME Group Market Data',
      category: 'market',
      description: 'Live commodity prices and market intelligence for informed selling decisions',
      logo: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=100&h=100&fit=crop',
      status: 'connected',
      features: ['Live pricing', 'Futures data', 'Market analysis', 'Price alerts'],
      dataPoints: 'Real-time updates'
    },
    {
      id: 'drone-mapping',
      name: 'DroneDeploy',
      category: 'drone',
      description: 'Automated drone mapping and crop health analysis from aerial imagery',
      logo: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=100&h=100&fit=crop',
      status: 'available',
      features: ['Automated flights', 'Crop health maps', 'Problem area detection', '3D field models'],
      dataPoints: 'Weekly mapping flights'
    },
    {
      id: 'irrigation-control',
      name: 'Valley Irrigation',
      category: 'equipment',
      description: 'Smart irrigation system control and water usage optimization',
      logo: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=100&h=100&fit=crop',
      status: 'available',
      features: ['Remote control', 'Schedule automation', 'Water usage tracking', 'Efficiency optimization'],
      dataPoints: 'Zone-based control'
    },
    {
      id: 'lab-analysis',
      name: 'Midwest Labs',
      category: 'lab',
      description: 'Digital soil and plant tissue analysis results integration',
      logo: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=100&h=100&fit=crop',
      status: 'available',
      features: ['Digital results', 'Trend analysis', 'Recommendation engine', 'Historical comparison'],
      dataPoints: 'Lab-grade accuracy'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Integrations', icon: 'Grid3X3', count: integrations.length },
    { id: 'weather', name: 'Weather Services', icon: 'Cloud', count: integrations.filter(i => i.category === 'weather').length },
    { id: 'satellite', name: 'Satellite Imagery', icon: 'Satellite', count: integrations.filter(i => i.category === 'satellite').length },
    { id: 'equipment', name: 'Farm Equipment', icon: 'Truck', count: integrations.filter(i => i.category === 'equipment').length },
    { id: 'iot', name: 'IoT Sensors', icon: 'Radio', count: integrations.filter(i => i.category === 'iot').length },
    { id: 'market', name: 'Market Data', icon: 'TrendingUp', count: integrations.filter(i => i.category === 'market').length },
    { id: 'drone', name: 'Drone Services', icon: 'Plane', count: integrations.filter(i => i.category === 'drone').length },
    { id: 'lab', name: 'Lab Services', icon: 'TestTube', count: integrations.filter(i => i.category === 'lab').length }
  ];

  const filteredIntegrations = selectedCategory === 'all' 
    ? integrations 
    : integrations.filter(integration => integration.category === selectedCategory);

  const connectedCount = integrations.filter(i => i.status === 'connected').length;
  const availableCount = integrations.filter(i => i.status === 'available').length;

  return (
    <div className="bg-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Seamless Integrations
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Connect FarmSync with your existing tools and services. Our integration ecosystem 
            brings all your agricultural data into one unified platform.
          </p>
        </div>

        {/* Integration Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card rounded-2xl agricultural-shadow p-6 text-center">
            <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle" size={32} className="text-success" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">{connectedCount}</div>
            <div className="text-muted-foreground">Active Integrations</div>
          </div>

          <div className="bg-card rounded-2xl agricultural-shadow p-6 text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Plus" size={32} className="text-accent" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">{availableCount}</div>
            <div className="text-muted-foreground">Available Integrations</div>
          </div>

          <div className="bg-card rounded-2xl agricultural-shadow p-6 text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Zap" size={32} className="text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">2.4M+</div>
            <div className="text-muted-foreground">Data Points Daily</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg seasonal-transition growth-hover ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-card-foreground hover:bg-muted'
              }`}
            >
              <Icon name={category.icon} size={18} />
              <span className="font-medium">{category.name}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                selectedCategory === category.id
                  ? 'bg-primary-foreground/20 text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredIntegrations.map((integration) => (
            <div key={integration.id} className="bg-card rounded-2xl agricultural-shadow-lg p-6 seasonal-transition growth-hover">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted">
                    <Image
                      src={integration.logo}
                      alt={integration.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{integration.name}</h3>
                    <div className={`flex items-center space-x-1 text-xs font-medium ${
                      integration.status === 'connected' ? 'text-success' : 'text-muted-foreground'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        integration.status === 'connected' ? 'bg-success' : 'bg-muted-foreground'
                      }`}></div>
                      <span>{integration.status === 'connected' ? 'Connected' : 'Available'}</span>
                    </div>
                  </div>
                </div>
                <button className={`p-2 rounded-lg seasonal-transition ${
                  integration.status === 'connected' ?'bg-success/20 text-success hover:bg-success/30' :'bg-accent/20 text-accent hover:bg-accent/30'
                }`}>
                  <Icon name={integration.status === 'connected' ? 'Settings' : 'Plus'} size={16} />
                </button>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4">{integration.description}</p>

              {/* Features */}
              <div className="space-y-2 mb-4">
                {integration.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Data Points */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Data Volume:</span>
                  <span className="text-sm font-medium text-foreground">{integration.dataPoints}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-4">
                <button className={`w-full py-2 rounded-lg font-medium seasonal-transition ${
                  integration.status === 'connected' ?'bg-muted text-foreground hover:bg-accent hover:text-accent-foreground' :'bg-primary text-primary-foreground hover:bg-primary/90'
                }`}>
                  {integration.status === 'connected' ? 'Manage Integration' : 'Connect Now'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Benefits */}
        <div className="bg-card rounded-2xl agricultural-shadow-lg p-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Why Integrate with FarmSync?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Database" size={32} className="text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Unified Data</h4>
              <p className="text-sm text-muted-foreground">
                All your agricultural data in one centralized platform for comprehensive analysis.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={32} className="text-accent" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Real-time Sync</h4>
              <p className="text-sm text-muted-foreground">
                Automatic data synchronization ensures you always have the latest information.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Brain" size={32} className="text-success" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Smart Insights</h4>
              <p className="text-sm text-muted-foreground">
                AI-powered analysis across all integrated data sources for deeper insights.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-secondary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Secure & Reliable</h4>
              <p className="text-sm text-muted-foreground">
                Enterprise-grade security ensures your data is protected and always available.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <h4 className="font-bold text-foreground mb-4">Need a Custom Integration?</h4>
            <p className="text-muted-foreground mb-6">
              Our API-first architecture makes it easy to connect any agricultural tool or service. 
              Contact our integration team to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium seasonal-transition growth-hover">
                View API Documentation
              </button>
              <button className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium seasonal-transition growth-hover">
                Request Custom Integration
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationShowcase;