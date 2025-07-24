import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const StoryModal = ({ story, isOpen, onClose }) => {
  if (!isOpen || !story) return null;

  const timelineEvents = [
    {
      date: story.timeline?.started || 'March 2023',
      title: 'Started with FarmSync',
      description: 'Initial setup and data migration from traditional record-keeping methods.'
    },
    {
      date: story.timeline?.firstResults || 'June 2023',
      title: 'First Measurable Results',
      description: 'Noticed improvements in crop monitoring and resource allocation efficiency.'
    },
    {
      date: story.timeline?.majorBreakthrough || 'September 2023',
      title: 'Major Breakthrough',
      description: 'Achieved significant cost reductions and yield improvements through data-driven decisions.'
    },
    {
      date: story.timeline?.currentStatus || 'Present',
      title: 'Continued Success',
      description: 'Ongoing optimization and expansion of smart farming practices across the operation.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-background rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto agricultural-shadow-lg">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src={story.farmerAvatar}
              alt={story.farmerName}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h2 className="text-xl font-bold text-foreground">{story.farmerName}'s Success Story</h2>
              <p className="text-muted-foreground">{story.farmName} • {story.location}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            iconName="X"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Hero Image */}
          <div className="relative h-64 rounded-xl overflow-hidden mb-6">
            <Image
              src={story.image}
              alt={`${story.farmerName}'s farm`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <div className="text-lg font-semibold">{story.farmSize} • {story.farmType}</div>
              <div className="text-sm opacity-90">{story.yearsExperience} years of farming experience</div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-success/10 border border-success/20 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-success mb-2">+{story.metrics.yieldIncrease}%</div>
              <div className="text-sm text-muted-foreground">Yield Increase</div>
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">-{story.metrics.costReduction}%</div>
              <div className="text-sm text-muted-foreground">Cost Reduction</div>
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">+{story.metrics.profitIncrease}%</div>
              <div className="text-sm text-muted-foreground">Profit Increase</div>
            </div>
          </div>

          {/* Story Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Challenge */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
                  <Icon name="AlertTriangle" size={20} className="text-warning" />
                  <span>The Challenge</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {story.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
                  <Icon name="Lightbulb" size={20} className="text-accent" />
                  <span>The Solution</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {story.solution || `${story.farmerName} implemented FarmSync's comprehensive agricultural management platform, focusing on data-driven decision making and precision farming techniques.`}
                </p>
                
                {/* Features Used */}
                <div>
                  <h4 className="font-medium text-foreground mb-2">Key Features Utilized:</h4>
                  <div className="flex flex-wrap gap-2">
                    {story.featuresUsed.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
                  <Icon name="TrendingUp" size={20} className="text-success" />
                  <span>The Results</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {story.results || `Through systematic implementation of FarmSync's tools, ${story.farmerName} achieved remarkable improvements in farm efficiency, cost management, and overall profitability. The data-driven approach led to optimized resource allocation and better crop management decisions.`}
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Timeline */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <span>Implementation Timeline</span>
                </h3>
                <div className="space-y-4">
                  {timelineEvents.map((event, index) => (
                    <div key={index} className="flex space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <div className="text-sm font-medium text-foreground">{event.date}</div>
                        <div className="text-sm font-medium text-foreground">{event.title}</div>
                        <div className="text-xs text-muted-foreground">{event.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="bg-muted/50 rounded-xl p-6">
                <blockquote className="text-foreground italic text-lg mb-4">
                  "{story.testimonialQuote || `FarmSync has completely transformed how I manage my farm. The insights I get from the data help me make better decisions every day, and the results speak for themselves.`}"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <Image
                    src={story.farmerAvatar}
                    alt={story.farmerName}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-foreground">{story.farmerName}</div>
                    <div className="text-sm text-muted-foreground">{story.farmName}</div>
                  </div>
                </div>
              </div>

              {/* Farm Details */}
              <div className="bg-card rounded-xl p-4 agricultural-border">
                <h4 className="font-medium text-foreground mb-3">Farm Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="text-foreground">{story.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Farm Size:</span>
                    <span className="text-foreground">{story.farmSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Primary Crops:</span>
                    <span className="text-foreground">{story.primaryCrops || 'Corn, Soybeans'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Started FarmSync:</span>
                    <span className="text-foreground">{story.implementationDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row gap-3">
            <Button
              variant="default"
              iconName="Download"
              iconPosition="left"
              className="flex-1"
            >
              Download Full Case Study
            </Button>
            <Button
              variant="outline"
              iconName="Share"
              iconPosition="left"
              className="flex-1"
            >
              Share Success Story
            </Button>
            <Button
              variant="outline"
              iconName="MessageCircle"
              iconPosition="left"
              className="flex-1"
            >
              Contact {story.farmerName}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryModal;