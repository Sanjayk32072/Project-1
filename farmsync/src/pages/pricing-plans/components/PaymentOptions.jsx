import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';


const PaymentOptions = () => {
  const [selectedOption, setSelectedOption] = useState('monthly');

  const paymentOptions = [
    {
      id: 'monthly',
      name: 'Monthly Billing',
      description: 'Pay month-to-month with full flexibility',
      icon: 'Calendar',
      benefits: [
        'No long-term commitment',
        'Cancel anytime',
        'Perfect for seasonal operations'
      ],
      discount: 0
    },
    {
      id: 'annual',
      name: 'Annual Billing',
      description: 'Save 20% with yearly payment',
      icon: 'TrendingDown',
      benefits: [
        '20% discount on all plans',
        'Priority customer support',
        'Free plan upgrades'
      ],
      discount: 20,
      popular: true
    },
    {
      id: 'harvest',
      name: 'Harvest Payment Plan',
      description: 'Pay after harvest season',
      icon: 'Wheat',
      benefits: [
        'Align payments with cash flow',
        'No interest charges',
        'Flexible payment dates'
      ],
      discount: 0,
      seasonal: true
    }
  ];

  const seasonalFlexibility = [
    {
      title: 'Spring Preparation',
      description: 'Full access to planning and preparation tools',
      months: 'March - May',
      icon: 'Sprout'
    },
    {
      title: 'Growing Season',
      description: 'Active monitoring and management features',
      months: 'June - August',
      icon: 'Sun'
    },
    {
      title: 'Harvest Time',
      description: 'Yield tracking and financial analysis',
      months: 'September - November',
      icon: 'Wheat'
    },
    {
      title: 'Winter Planning',
      description: 'Analysis, reporting, and next season planning',
      months: 'December - February',
      icon: 'Snowflake'
    }
  ];

  return (
    <div className="bg-background">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">Flexible Payment Options</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose a payment schedule that works with your farming operations and cash flow
        </p>
      </div>

      {/* Payment Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {paymentOptions.map((option) => (
          <div
            key={option.id}
            className={`relative bg-card rounded-xl p-6 agricultural-shadow seasonal-transition cursor-pointer ${
              selectedOption === option.id ? 'ring-2 ring-primary' : ''
            } ${option.popular ? 'scale-105' : ''}`}
            onClick={() => setSelectedOption(option.id)}
          >
            {option.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  Most Popular
                </div>
              </div>
            )}

            {option.seasonal && (
              <div className="absolute -top-3 right-4">
                <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                  Seasonal
                </div>
              </div>
            )}

            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                selectedOption === option.id ? 'bg-primary' : 'bg-muted'
              }`}>
                <Icon 
                  name={option.icon} 
                  size={24} 
                  className={selectedOption === option.id ? 'text-primary-foreground' : 'text-muted-foreground'} 
                />
              </div>
              
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                selectedOption === option.id 
                  ? 'bg-primary border-primary' :'border-muted-foreground'
              }`}>
                {selectedOption === option.id && (
                  <Icon name="Check" size={14} className="text-primary-foreground" />
                )}
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-card-foreground mb-2">{option.name}</h3>
              {option.discount > 0 && (
                <div className="mb-2">
                  <span className="bg-success text-success-foreground px-2 py-1 rounded text-sm font-medium">
                    Save {option.discount}%
                  </span>
                </div>
              )}
              <p className="text-sm text-muted-foreground">{option.description}</p>
            </div>

            <div className="space-y-2">
              {option.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <Icon name="Check" size={14} className="text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-card-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Seasonal Flexibility */}
      <div className="bg-card rounded-xl p-6 agricultural-shadow">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-card-foreground mb-2">Year-Round Agricultural Support</h3>
          <p className="text-muted-foreground">
            FarmSync adapts to your seasonal needs with features optimized for each farming phase
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {seasonalFlexibility.map((season, index) => (
            <div key={index} className="text-center p-4 bg-muted rounded-lg">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name={season.icon} size={24} className="text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-card-foreground mb-2">{season.title}</h4>
              <p className="text-xs text-muted-foreground mb-2">{season.months}</p>
              <p className="text-sm text-card-foreground">{season.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-accent/10 rounded-lg">
          <div className="flex items-start space-x-3">
            <Icon name="Info" size={20} className="text-accent mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-card-foreground mb-1">Harvest Payment Plan Details</h4>
              <p className="text-sm text-muted-foreground">
                Available for farms with established harvest records. Payment due within 30 days of harvest completion. 
                No interest charges when paid on time. Perfect for cash flow management during growing season.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;