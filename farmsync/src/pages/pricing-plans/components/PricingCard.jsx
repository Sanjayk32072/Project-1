import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingCard = ({ plan, isPopular, isRecommended }) => {
  const {
    name,
    subtitle,
    price,
    period,
    description,
    features,
    limitations,
    cta,
    badge
  } = plan;

  return (
    <div className={`relative bg-card rounded-xl p-6 agricultural-shadow seasonal-transition ${
      isPopular ? 'ring-2 ring-primary scale-105' : ''
    } ${isRecommended ? 'ring-2 ring-accent' : ''}`}>
      {/* Badge */}
      {(isPopular || isRecommended || badge) && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className={`px-4 py-1 rounded-full text-xs font-medium ${
            isRecommended ? 'bg-accent text-accent-foreground' :
            isPopular ? 'bg-primary text-primary-foreground': 'bg-secondary text-secondary-foreground'
          }`}>
            {isRecommended ? 'Recommended for You' : isPopular ? 'Most Popular' : badge}
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-6 pt-2">
        <h3 className="text-2xl font-bold text-card-foreground mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{subtitle}</p>
        
        <div className="mb-4">
          <span className="text-4xl font-bold text-card-foreground">${price}</span>
          <span className="text-muted-foreground">/{period}</span>
        </div>
        
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      {/* Features */}
      <div className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
            <span className="text-sm text-card-foreground">{feature}</span>
          </div>
        ))}
        
        {limitations && limitations.map((limitation, index) => (
          <div key={index} className="flex items-start space-x-3">
            <Icon name="X" size={16} className="text-muted-foreground mt-0.5 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">{limitation}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Button
        variant={isPopular ? "default" : "outline"}
        fullWidth
        className={isPopular ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}
      >
        {cta}
      </Button>

      {/* Additional Info */}
      <div className="mt-4 text-center">
        <p className="text-xs text-muted-foreground">
          14-day free trial • No setup fees • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default PricingCard;