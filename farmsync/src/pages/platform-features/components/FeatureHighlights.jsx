import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FeatureHighlights = () => {
  const [expandedFeature, setExpandedFeature] = useState(null);

  const features = [
    {
      id: 'mobile-optimization',
      title: 'Mobile-First Field Companion',
      description: 'Designed for farmers who work in the field. Capture data, take photos, and access insights from anywhere.',
      icon: 'Smartphone',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop',
      highlights: [
        'Offline data collection with automatic sync',
        'Voice-to-text logging for hands-free operation',
        'GPS-tagged photo documentation',
        'Weather-resistant interface design'
      ],
      technicalSpecs: [
        'Works offline for up to 30 days',
        'Automatic cloud sync when connected',
        'Camera integration with metadata',
        'Voice recognition in 12 languages'
      ],
      benefits: [
        'Reduce data entry time by 75%',
        'Never lose field observations',
        'Instant access to critical information',
        'Seamless desktop-mobile workflow'
      ]
    },
    {
      id: 'ai-recommendations',
      title: 'AI-Powered Decision Support',
      description: 'Get intelligent recommendations based on your farm data, weather patterns, and market conditions.',
      icon: 'Brain',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      highlights: [
        'Personalized farming recommendations',
        'Predictive pest and disease alerts',
        'Optimal planting and harvesting timing',
        'Resource optimization suggestions'
      ],
      technicalSpecs: [
        'Machine learning algorithms trained on 10M+ data points',
        '96% accuracy in yield predictions',
        'Real-time weather integration',
        'Continuous model improvement'
      ],
      benefits: [
        'Increase yields by up to 20%',
        'Reduce input costs by 15%',
        'Minimize crop losses from pests/disease',
        'Optimize resource allocation'
      ]
    },
    {
      id: 'collaborative-farming',
      title: 'Community-Driven Knowledge Sharing',
      description: 'Connect with local farmers, share experiences, and learn from the agricultural community.',
      icon: 'Users',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
      highlights: [
        'Local farmer networking platform',
        'Knowledge sharing and best practices',
        'Equipment and resource sharing',
        'Group purchasing for better prices'
      ],
      technicalSpecs: [
        'Geolocation-based farmer matching',
        'Secure messaging and file sharing',
        'Group coordination tools',
        'Reputation and rating system'
      ],
      benefits: [
        'Learn from experienced farmers',
        'Reduce costs through bulk purchasing',
        'Access to shared equipment',
        'Build local agricultural networks'
      ]
    },
    {
      id: 'sustainability-tracking',
      title: 'Sustainability & Compliance Management',
      description: 'Track environmental impact, manage certifications, and ensure regulatory compliance.',
      icon: 'Leaf',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
      highlights: [
        'Carbon footprint tracking',
        'Organic certification management',
        'Water usage optimization',
        'Biodiversity impact assessment'
      ],
      technicalSpecs: [
        'EPA-compliant reporting tools',
        'Automated compliance checking',
        'Third-party certification integration',
        'Environmental impact calculators'
      ],
      benefits: [
        'Meet sustainability goals',
        'Qualify for green incentives',
        'Maintain organic certifications',
        'Reduce environmental impact'
      ]
    },
    {
      id: 'advanced-analytics',
      title: 'Enterprise-Grade Analytics',
      description: 'Professional-level reporting and analytics typically reserved for large agricultural operations.',
      icon: 'BarChart3',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      highlights: [
        'Multi-year trend analysis',
        'Comparative benchmarking',
        'Custom report generation',
        'Predictive modeling capabilities'
      ],
      technicalSpecs: [
        'Real-time data processing',
        'Interactive dashboard customization',
        'Automated report scheduling',
        'API access for custom integrations'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify optimization opportunities',
        'Track performance over time',
        'Professional reporting for stakeholders'
      ]
    },
    {
      id: 'financial-intelligence',
      title: 'Comprehensive Financial Management',
      description: 'Transform your farm into a profitable business with intelligent financial tracking and analysis.',
      icon: 'DollarSign',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
      highlights: [
        'Automated expense categorization',
        'Profit margin analysis by crop',
        'Budget forecasting and planning',
        'Tax preparation assistance'
      ],
      technicalSpecs: [
        'Bank account integration',
        'Receipt scanning and OCR',
        'Multi-currency support',
        'Tax code compliance'
      ],
      benefits: [
        'Improve profit margins by 25%',
        'Reduce bookkeeping time by 80%',
        'Better financial planning',
        'Simplified tax preparation'
      ]
    }
  ];

  const toggleExpanded = (featureId) => {
    setExpandedFeature(expandedFeature === featureId ? null : featureId);
  };

  return (
    <div className="bg-muted py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Comprehensive Feature Set
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the full range of capabilities that make FarmSync the most comprehensive 
            agricultural management platform available today.
          </p>
        </div>

        <div className="space-y-8">
          {features.map((feature, index) => (
            <div key={feature.id} className="bg-card rounded-2xl agricultural-shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content Side */}
                <div className="p-6 lg:p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Icon name={feature.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">Feature #{index + 1}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{feature.description}</p>

                  {/* Key Highlights */}
                  <div className="space-y-3 mb-6">
                    {feature.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Check" size={12} className="text-success" />
                        </div>
                        <span className="text-sm text-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expand/Collapse Button */}
                  <button
                    onClick={() => toggleExpanded(feature.id)}
                    className="flex items-center space-x-2 text-primary hover:text-primary/80 font-medium seasonal-transition"
                  >
                    <span>{expandedFeature === feature.id ? 'Show Less' : 'Learn More'}</span>
                    <Icon 
                      name={expandedFeature === feature.id ? 'ChevronUp' : 'ChevronDown'} 
                      size={16} 
                    />
                  </button>

                  {/* Expanded Content */}
                  {expandedFeature === feature.id && (
                    <div className="mt-6 pt-6 border-t border-border space-y-6">
                      {/* Technical Specifications */}
                      <div>
                        <h4 className="font-bold text-foreground mb-3">Technical Specifications</h4>
                        <div className="space-y-2">
                          {feature.technicalSpecs.map((spec, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <Icon name="Settings" size={14} className="text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Benefits */}
                      <div>
                        <h4 className="font-bold text-foreground mb-3">Key Benefits</h4>
                        <div className="space-y-2">
                          {feature.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <Icon name="TrendingUp" size={14} className="text-success flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex space-x-4">
                        <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium seasonal-transition growth-hover">
                          Try This Feature
                        </button>
                        <button className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-medium seasonal-transition growth-hover">
                          Watch Demo
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Image Side */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/30"></div>
                  
                  {/* Overlay Stats */}
                  <div className="absolute bottom-4 left-4 right-4 lg:top-4 lg:bottom-auto lg:right-4 lg:left-auto lg:w-48">
                    <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-center lg:text-left">
                        <div className="text-lg font-bold text-foreground">Feature #{index + 1}</div>
                        <div className="text-sm text-muted-foreground">
                          {feature.highlights.length} Key Capabilities
                        </div>
                        <div className="text-xs text-success font-medium mt-1">
                          ✓ Available in all plans
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Summary */}
        <div className="mt-16 bg-card rounded-2xl agricultural-shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Everything You Need in One Platform
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              FarmSync combines all these powerful features into a single, integrated platform 
              that grows with your farming operation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((feature, index) => (
              <div key={feature.id} className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name={feature.icon} size={24} className="text-primary" />
                </div>
                <div className="text-sm font-medium text-foreground">{feature.title.split(' ')[0]}</div>
                <div className="text-xs text-muted-foreground">{feature.title.split(' ').slice(1).join(' ')}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg seasonal-transition growth-hover">
              Start Your Free Trial Today
            </button>
            <p className="text-sm text-muted-foreground mt-2">
              No credit card required • 30-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlights;