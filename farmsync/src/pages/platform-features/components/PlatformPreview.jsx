import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PlatformPreview = () => {
  const [activeTab, setActiveTab] = useState('crop-management');

  const tabs = [
    {
      id: 'crop-management',
      name: 'Crop Management',
      icon: 'Sprout',
      description: 'Complete lifecycle tracking and optimization'
    },
    {
      id: 'financial-intelligence',
      name: 'Financial Intelligence',
      icon: 'DollarSign',
      description: 'Comprehensive expense and profit analysis'
    },
    {
      id: 'analytics-lab',
      name: 'Analytics Laboratory',
      icon: 'BarChart3',
      description: 'Advanced reporting and predictive insights'
    },
    {
      id: 'community-marketplace',
      name: 'Community Marketplace',
      icon: 'Users',
      description: 'Farmer networking and resource sharing'
    }
  ];

  const tabContent = {
    'crop-management': {
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=500&fit=crop',
      features: [
        'Real-time growth monitoring with AI-powered insights',
        'Pest and disease early warning system',
        'Automated irrigation scheduling based on soil moisture',
        'Yield prediction with 94% accuracy rate'
      ],
      metrics: [
        { label: 'Active Crops', value: '12', change: '+3 this season' },
        { label: 'Health Score', value: '94%', change: '+8% vs last month' },
        { label: 'Predicted Yield', value: '2.4T', change: '+15% vs target' }
      ]
    },
    'financial-intelligence': {
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop',
      features: [
        'Automated expense categorization and tracking',
        'Real-time profit margin analysis by crop',
        'Budget forecasting with seasonal adjustments',
        'ROI optimization recommendations'
      ],
      metrics: [
        { label: 'Monthly Profit', value: '$8,450', change: '+22% vs last month' },
        { label: 'Cost per Acre', value: '$340', change: '-12% optimized' },
        { label: 'ROI', value: '28%', change: '+5% improvement' }
      ]
    },
    'analytics-lab': {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      features: [
        'Comparative benchmarking against regional farms',
        'Predictive modeling for market trends',
        'Custom report generation and scheduling',
        'Data visualization with interactive charts'
      ],
      metrics: [
        { label: 'Data Points', value: '2.4M', change: 'Collected this season' },
        { label: 'Accuracy Rate', value: '96%', change: 'Prediction accuracy' },
        { label: 'Reports Generated', value: '47', change: 'This month' }
      ]
    },
    'community-marketplace': {
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop',
      features: [
        'Local farmer networking and knowledge sharing',
        'Equipment rental and resource exchange',
        'Bulk purchasing coordination for better prices',
        'Expert consultation booking system'
      ],
      metrics: [
        { label: 'Active Farmers', value: '1,247', change: 'In your region' },
        { label: 'Resources Shared', value: '89', change: 'This week' },
        { label: 'Cost Savings', value: '18%', change: 'Through bulk buying' }
      ]
    }
  };

  const currentContent = tabContent[activeTab];

  return (
    <div className="bg-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Experience FarmSync in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our intelligent agricultural ecosystem through interactive demonstrations. 
            See how real farmers are transforming their operations with data-driven insights.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg seasonal-transition growth-hover ${
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-card-foreground hover:bg-muted'
              }`}
            >
              <Icon name={tab.icon} size={20} />
              <div className="text-left">
                <div className="font-medium text-sm">{tab.name}</div>
                <div className="text-xs opacity-80 hidden sm:block">{tab.description}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-card rounded-2xl agricultural-shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Preview Image */}
            <div className="relative h-64 lg:h-96 overflow-hidden">
              <Image
                src={currentContent.image}
                alt={`${tabs.find(t => t.id === activeTab)?.name} Preview`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4">
                  <div className="grid grid-cols-3 gap-4">
                    {currentContent.metrics.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className="text-lg font-bold text-foreground">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                        <div className="text-xs text-success font-medium">{metric.change}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="p-6 lg:p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">
                {tabs.find(t => t.id === activeTab)?.name} Features
              </h3>
              <div className="space-y-4">
                {currentContent.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={14} className="text-success" />
                    </div>
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Ready to explore?</p>
                    <p className="font-medium text-foreground">Start your free trial today</p>
                  </div>
                  <button className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-medium seasonal-transition growth-hover">
                    Try Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformPreview;