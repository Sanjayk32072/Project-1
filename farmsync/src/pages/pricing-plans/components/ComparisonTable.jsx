import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ComparisonTable = () => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const plans = [
    {
      name: 'Starter Farm',
      price: 49,
      subtitle: 'Up to 50 acres',
      popular: false
    },
    {
      name: 'Growth Farm',
      price: 149,
      subtitle: '51-500 acres',
      popular: true
    },
    {
      name: 'Enterprise Farm',
      price: 299,
      subtitle: '500+ acres',
      popular: false
    }
  ];

  const featureCategories = [
    {
      name: 'Crop Management',
      features: [
        {
          name: 'Crop tracking fields',
          starter: '5 fields',
          growth: '25 fields',
          enterprise: 'Unlimited'
        },
        {
          name: 'Growth stage monitoring',
          starter: true,
          growth: true,
          enterprise: true
        },
        {
          name: 'Pest & disease tracking',
          starter: 'Basic',
          growth: 'Advanced',
          enterprise: 'AI-powered'
        },
        {
          name: 'Harvest planning',
          starter: true,
          growth: true,
          enterprise: true
        },
        {
          name: 'Crop rotation planning',
          starter: false,
          growth: true,
          enterprise: true
        }
      ]
    },
    {
      name: 'Financial Management',
      features: [
        {
          name: 'Expense tracking',
          starter: 'Basic',
          growth: 'Advanced',
          enterprise: 'Enterprise'
        },
        {
          name: 'Profit analysis',
          starter: 'Simple',
          growth: 'Detailed',
          enterprise: 'Comprehensive'
        },
        {
          name: 'Budget forecasting',
          starter: false,
          growth: true,
          enterprise: true
        },
        {
          name: 'Tax reporting',
          starter: false,
          growth: 'Basic',
          enterprise: 'Advanced'
        },
        {
          name: 'Multi-farm consolidation',
          starter: false,
          growth: false,
          enterprise: true
        }
      ]
    },
    {
      name: 'Analytics & Reporting',
      features: [
        {
          name: 'Basic reports',
          starter: true,
          growth: true,
          enterprise: true
        },
        {
          name: 'Custom dashboards',
          starter: false,
          growth: true,
          enterprise: true
        },
        {
          name: 'Predictive analytics',
          starter: false,
          growth: 'Limited',
          enterprise: 'Full access'
        },
        {
          name: 'Benchmark comparisons',
          starter: false,
          growth: true,
          enterprise: true
        },
        {
          name: 'Export capabilities',
          starter: 'PDF',
          growth: 'PDF, Excel',
          enterprise: 'All formats'
        }
      ]
    },
    {
      name: 'Support & Community',
      features: [
        {
          name: 'Email support',
          starter: true,
          growth: true,
          enterprise: true
        },
        {
          name: 'Community access',
          starter: 'Basic',
          growth: 'Full',
          enterprise: 'Premium'
        },
        {
          name: 'Expert consultations',
          starter: false,
          growth: '2 per year',
          enterprise: 'Unlimited'
        },
        {
          name: 'Phone support',
          starter: false,
          growth: false,
          enterprise: true
        },
        {
          name: 'Dedicated account manager',
          starter: false,
          growth: false,
          enterprise: true
        }
      ]
    }
  ];

  const renderFeatureValue = (value) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Icon name="Check" size={16} className="text-success mx-auto" />
      ) : (
        <Icon name="X" size={16} className="text-muted-foreground mx-auto" />
      );
    }
    return <span className="text-sm text-card-foreground">{value}</span>;
  };

  const visibleCategories = showAllFeatures ? featureCategories : featureCategories.slice(0, 2);

  return (
    <div className="bg-background">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">Detailed Feature Comparison</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Compare all features across our plans to find the perfect fit for your farming operation
        </p>
      </div>

      <div className="bg-card rounded-xl agricultural-shadow overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-4 gap-4 p-6 bg-muted border-b border-border">
          <div className="font-semibold text-card-foreground">Features</div>
          {plans.map((plan, index) => (
            <div key={index} className="text-center">
              <div className={`font-semibold text-card-foreground ${plan.popular ? 'text-primary' : ''}`}>
                {plan.name}
              </div>
              <div className="text-sm text-muted-foreground">{plan.subtitle}</div>
              <div className="text-lg font-bold text-card-foreground mt-1">
                ${plan.price}<span className="text-sm font-normal">/mo</span>
              </div>
              {plan.popular && (
                <div className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium mt-1">
                  Most Popular
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Feature Categories */}
        {visibleCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <div className="px-6 py-4 bg-muted/50 border-b border-border">
              <h3 className="font-semibold text-card-foreground">{category.name}</h3>
            </div>
            {category.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="grid grid-cols-4 gap-4 p-4 border-b border-border hover:bg-muted/30 seasonal-transition">
                <div className="font-medium text-card-foreground">{feature.name}</div>
                <div className="text-center">{renderFeatureValue(feature.starter)}</div>
                <div className="text-center">{renderFeatureValue(feature.growth)}</div>
                <div className="text-center">{renderFeatureValue(feature.enterprise)}</div>
              </div>
            ))}
          </div>
        ))}

        {/* Show More/Less Button */}
        <div className="p-6 text-center border-t border-border">
          <Button
            variant="outline"
            onClick={() => setShowAllFeatures(!showAllFeatures)}
          >
            {showAllFeatures ? (
              <>
                <Icon name="ChevronUp" size={16} className="mr-2" />
                Show Less Features
              </>
            ) : (
              <>
                <Icon name="ChevronDown" size={16} className="mr-2" />
                Show All Features
              </>
            )}
          </Button>
        </div>

        {/* CTA Section */}
        <div className="grid grid-cols-4 gap-4 p-6 bg-muted/30">
          <div className="font-medium text-card-foreground">Get Started</div>
          {plans.map((plan, index) => (
            <div key={index} className="text-center">
              <Button
                variant={plan.popular ? "default" : "outline"}
                size="sm"
                fullWidth
                className={plan.popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}
              >
                Start Free Trial
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-8 text-center">
        <div className="bg-card rounded-lg p-6 agricultural-shadow">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Shield" size={20} className="text-success" />
            <span className="font-semibold text-card-foreground">All Plans Include</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Icon name="Check" size={14} className="text-success" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Check" size={14} className="text-success" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Check" size={14} className="text-success" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Check" size={14} className="text-success" />
              <span>Data export included</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Check" size={14} className="text-success" />
              <span>Mobile app access</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Check" size={14} className="text-success" />
              <span>SSL security</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;