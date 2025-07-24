import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const StoryCard = ({ story, onViewDetails }) => {
  const getImprovementColor = (value) => {
    if (value >= 25) return 'text-success';
    if (value >= 15) return 'text-accent';
    return 'text-primary';
  };

  return (
    <div className="bg-card rounded-xl overflow-hidden agricultural-shadow seasonal-transition growth-hover">
      {/* Story Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={story.image}
          alt={`${story.farmerName}'s farm`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
            {story.farmType}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-background/90 text-foreground px-2 py-1 rounded text-xs font-medium">
            {story.location}
          </span>
        </div>
      </div>

      {/* Story Content */}
      <div className="p-6">
        {/* Farmer Info */}
        <div className="flex items-center space-x-3 mb-4">
          <Image
            src={story.farmerAvatar}
            alt={story.farmerName}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-foreground">{story.farmerName}</h3>
            <p className="text-sm text-muted-foreground">{story.farmSize} • {story.yearsExperience} years farming</p>
          </div>
        </div>

        {/* Story Preview */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {story.challenge}
        </p>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <div className={`text-lg font-bold ${getImprovementColor(story.metrics.yieldIncrease)}`}>
              +{story.metrics.yieldIncrease}%
            </div>
            <div className="text-xs text-muted-foreground">Yield</div>
          </div>
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <div className={`text-lg font-bold ${getImprovementColor(story.metrics.costReduction)}`}>
              -{story.metrics.costReduction}%
            </div>
            <div className="text-xs text-muted-foreground">Costs</div>
          </div>
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <div className={`text-lg font-bold ${getImprovementColor(story.metrics.profitIncrease)}`}>
              +{story.metrics.profitIncrease}%
            </div>
            <div className="text-xs text-muted-foreground">Profit</div>
          </div>
        </div>

        {/* Features Used */}
        <div className="mb-4">
          <div className="text-xs text-muted-foreground mb-2">Key Features Used:</div>
          <div className="flex flex-wrap gap-1">
            {story.featuresUsed.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="bg-primary/10 text-primary px-2 py-1 rounded text-xs"
              >
                {feature}
              </span>
            ))}
            {story.featuresUsed.length > 3 && (
              <span className="text-xs text-muted-foreground">
                +{story.featuresUsed.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={14} />
              <span>{story.implementationDate}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="MapPin" size={14} />
              <span>{story.region}</span>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(story)}
            iconName="ArrowRight"
            iconPosition="right"
          >
            Read Story
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;