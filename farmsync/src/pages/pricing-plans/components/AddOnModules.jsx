import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AddOnModules = () => {
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const addOns = [
    {
      id: 'weather',
      name: 'Advanced Weather Integration',
      price: 29,
      period: 'month',
      icon: 'CloudRain',
      description: 'Hyperlocal weather forecasting with field-specific alerts and irrigation recommendations',
      features: [
        'Microclimate weather data',
        'Frost and storm alerts',
        'Irrigation scheduling',
        'Disease pressure forecasts',
        'Historical weather analysis'
      ],
      popular: true
    },
    {
      id: 'satellite',
      name: 'Satellite Imagery Analysis',
      price: 49,
      period: 'month',
      icon: 'Satellite',
      description: 'High-resolution satellite monitoring for crop health, growth patterns, and yield prediction',
      features: [
        'Weekly satellite updates',
        'NDVI crop health mapping',
        'Growth stage monitoring',
        'Yield prediction models',
        'Historical imagery archive'
      ],
      popular: false
    },
    {
      id: 'support',
      name: 'Priority Expert Support',
      price: 99,
      period: 'month',
      icon: 'Users',
      description: 'Direct access to agricultural experts and priority customer support',
      features: [
        '24/7 expert consultation',
        'Personalized farm analysis',
        'Custom report generation',
        'Phone and video support',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const toggleAddOn = (addOnId) => {
    setSelectedAddOns(prev => 
      prev.includes(addOnId) 
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    );
  };

  const calculateTotal = () => {
    return addOns
      .filter(addOn => selectedAddOns.includes(addOn.id))
      .reduce((total, addOn) => total + addOn.price, 0);
  };

  return (
    <div className="bg-background">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">Enhance Your Farm Intelligence</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Supercharge your farming operations with specialized modules designed for advanced agricultural management
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {addOns.map((addOn) => (
          <div
            key={addOn.id}
            className={`relative bg-card rounded-xl p-6 agricultural-shadow seasonal-transition cursor-pointer ${
              selectedAddOns.includes(addOn.id) ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => toggleAddOn(addOn.id)}
          >
            {addOn.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                  Most Popular
                </div>
              </div>
            )}

            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                selectedAddOns.includes(addOn.id) ? 'bg-primary' : 'bg-muted'
              }`}>
                <Icon 
                  name={addOn.icon} 
                  size={24} 
                  className={selectedAddOns.includes(addOn.id) ? 'text-primary-foreground' : 'text-muted-foreground'} 
                />
              </div>
              
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                selectedAddOns.includes(addOn.id) 
                  ? 'bg-primary border-primary' :'border-muted-foreground'
              }`}>
                {selectedAddOns.includes(addOn.id) && (
                  <Icon name="Check" size={14} className="text-primary-foreground" />
                )}
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-card-foreground mb-2">{addOn.name}</h3>
              <div className="mb-3">
                <span className="text-2xl font-bold text-card-foreground">${addOn.price}</span>
                <span className="text-muted-foreground">/{addOn.period}</span>
              </div>
              <p className="text-sm text-muted-foreground">{addOn.description}</p>
            </div>

            <div className="space-y-2">
              {addOn.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <Icon name="Check" size={14} className="text-success mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-card-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedAddOns.length > 0 && (
        <div className="bg-card rounded-xl p-6 agricultural-shadow">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-card-foreground">Selected Add-ons</h3>
              <p className="text-sm text-muted-foreground">
                {selectedAddOns.length} module{selectedAddOns.length > 1 ? 's' : ''} selected
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-card-foreground">${calculateTotal()}</div>
              <div className="text-sm text-muted-foreground">per month</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" onClick={() => setSelectedAddOns([])}>
              Clear Selection
            </Button>
            <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Add to Plan
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddOnModules;