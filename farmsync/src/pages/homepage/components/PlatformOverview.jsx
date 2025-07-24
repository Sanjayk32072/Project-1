import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PlatformOverview = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const platformFeatures = [
    {
      id: 'crop-management',
      title: 'Intelligent Crop Management',
      description: 'Advanced predictive analytics track crop lifecycle, optimize planting schedules, and forecast yield potential with precision agriculture insights.',
      icon: 'Sprout',
      color: 'success',
      stats: { label: 'Yield Increase', value: '15%' },
      preview: {
        title: 'Predictive Analytics Preview',
        data: [
          { crop: 'Corn', health: 94, yield: '185 bu/acre', status: 'Excellent' },
          { crop: 'Soybeans', health: 87, yield: '52 bu/acre', status: 'Good' },
          { crop: 'Wheat', health: 91, yield: '68 bu/acre', status: 'Excellent' }
        ]
      }
    },
    {
      id: 'financial-center',
      title: 'Financial Intelligence Center',
      description: 'Comprehensive expense tracking, profit analysis, and ROI calculators provide clear financial insights for informed business decisions.',
      icon: 'DollarSign',
      color: 'primary',
      stats: { label: 'Cost Savings', value: '$8,500' },
      preview: {
        title: 'ROI Calculator Widget',
        data: [
          { category: 'Seeds', spent: '$12,400', projected: '$18,600', roi: '50%' },
          { category: 'Fertilizer', spent: '$8,200', projected: '$14,760', roi: '80%' },
          { category: 'Equipment', spent: '$25,000', projected: '$31,250', roi: '25%' }
        ]
      }
    },
    {
      id: 'community-marketplace',
      title: 'Community Marketplace',
      description: 'Connect with local farmers, share resources, rent equipment, and collaborate on sustainable farming practices within your agricultural community.',
      icon: 'Users',
      color: 'accent',
      stats: { label: 'Active Farmers', value: '2,400+' },
      preview: {
        title: 'Farmer Network Activity',
        data: [
          { farmer: 'Sarah Johnson', activity: 'Shared: Organic pest control tips', time: '2h ago' },
          { farmer: 'Mike Rodriguez', activity: 'Available: John Deere 6120M rental', time: '4h ago' },
          { farmer: 'Emma Davis', activity: 'Looking for: Corn harvesting crew', time: '6h ago' }
        ]
      }
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      success: {
        bg: 'bg-success/10',
        text: 'text-success',
        border: 'border-success/20',
        hover: 'hover:bg-success/20'
      },
      primary: {
        bg: 'bg-primary/10',
        text: 'text-primary',
        border: 'border-primary/20',
        hover: 'hover:bg-primary/20'
      },
      accent: {
        bg: 'bg-accent/10',
        text: 'text-accent-foreground',
        border: 'border-accent/20',
        hover: 'hover:bg-accent/20'
      }
    };
    return colors[color];
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Intelligent Agriculture Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how FarmSync transforms traditional farming into data-driven agriculture 
            with our comprehensive suite of intelligent farming tools.
          </p>
        </div>

        {/* Platform Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {platformFeatures.map((feature) => {
            const colorClasses = getColorClasses(feature.color);
            const isHovered = hoveredCard === feature.id;

            return (
              <div
                key={feature.id}
                className={`relative bg-card border border-border rounded-2xl p-8 agricultural-shadow seasonal-transition cursor-pointer ${
                  isHovered ? 'agricultural-shadow-lg scale-105' : 'growth-hover'
                }`}
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Feature Icon */}
                <div className={`w-16 h-16 ${colorClasses.bg} ${colorClasses.border} border-2 rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon name={feature.icon} size={32} className={colorClasses.text} />
                </div>

                {/* Feature Content */}
                <div className="space-y-4 mb-6">
                  <h3 className="text-2xl font-bold text-card-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  
                  {/* Stats */}
                  <div className={`inline-flex items-center space-x-2 px-4 py-2 ${colorClasses.bg} rounded-full`}>
                    <Icon name="TrendingUp" size={16} className={colorClasses.text} />
                    <span className="text-sm font-medium">{feature.stats.label}: {feature.stats.value}</span>
                  </div>
                </div>

                {/* Interactive Preview */}
                <div className={`absolute inset-0 bg-card border border-border rounded-2xl p-6 seasonal-transition ${
                  isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}>
                  <div className="h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-card-foreground">{feature.preview.title}</h4>
                      <Icon name="Eye" size={16} className="text-muted-foreground" />
                    </div>
                    
                    <div className="flex-1 space-y-3 overflow-hidden">
                      {feature.preview.data.map((item, index) => (
                        <div key={index} className="bg-muted rounded-lg p-3">
                          {feature.id === 'crop-management' && (
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <Icon name="Leaf" size={14} className="text-success" />
                                <span className="text-sm font-medium">{item.crop}</span>
                              </div>
                              <div className="text-right">
                                <div className="text-xs text-muted-foreground">Health: {item.health}%</div>
                                <div className="text-xs font-medium">{item.yield}</div>
                              </div>
                            </div>
                          )}
                          
                          {feature.id === 'financial-center' && (
                            <div className="space-y-1">
                              <div className="flex justify-between items-center">
                                <span className="text-sm font-medium">{item.category}</span>
                                <span className="text-xs text-success">+{item.roi}</span>
                              </div>
                              <div className="flex justify-between text-xs text-muted-foreground">
                                <span>Spent: {item.spent}</span>
                                <span>Projected: {item.projected}</span>
                              </div>
                            </div>
                          )}
                          
                          {feature.id === 'community-marketplace' && (
                            <div className="space-y-1">
                              <div className="flex items-center space-x-2">
                                <Icon name="User" size={12} className="text-muted-foreground" />
                                <span className="text-sm font-medium">{item.farmer}</span>
                                <span className="text-xs text-muted-foreground ml-auto">{item.time}</span>
                              </div>
                              <p className="text-xs text-muted-foreground">{item.activity}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="outline" size="sm" className="mt-4">
                      <Icon name="ArrowRight" size={14} className="mr-1" />
                      Explore Feature
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link to="/platform-features">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold growth-hover"
              iconName="Layers"
              iconPosition="right"
            >
              Explore All Platform Features
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;