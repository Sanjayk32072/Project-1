import React from 'react';
import Icon from '../../../components/AppIcon';

const DemoTypeSelector = ({ selectedType, onTypeSelect }) => {
  const demoTypes = [
    {
      id: 'live-demo',
      title: 'Live Demo Session',
      description: 'One-on-one personalized demonstration with our agricultural specialist',
      duration: '45 minutes',
      icon: 'Video',
      features: [
        'Personalized farm setup',
        'Real-time Q&A session',
        'Custom use case walkthrough',
        'Implementation planning'
      ],
      recommended: true
    },
    {
      id: 'group-demo',
      title: 'Group Demonstration',
      description: 'Perfect for farming cooperatives and agricultural organizations',
      duration: '60 minutes',
      icon: 'Users',
      features: [
        'Multi-farm scenarios',
        'Collaborative features',
        'Bulk pricing discussion',
        'Team training overview'
      ]
    },
    {
      id: 'self-guided',
      title: 'Interactive Tour',
      description: 'Explore FarmSync at your own pace with guided tutorials',
      duration: 'Self-paced',
      icon: 'Play',
      features: [
        'Immediate access',
        'Sample farm data',
        'Step-by-step guides',
        'Download resources'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Choose Your Demo Experience</h2>
        <p className="text-muted-foreground">Select the demonstration format that works best for your schedule and needs</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {demoTypes.map((type) => (
          <div
            key={type.id}
            onClick={() => onTypeSelect(type.id)}
            className={`relative p-6 rounded-lg border-2 cursor-pointer seasonal-transition growth-hover ${
              selectedType === type.id
                ? 'border-primary bg-primary/5 agricultural-shadow-lg'
                : 'border-border bg-card hover:border-primary/50'
            }`}
          >
            {type.recommended && (
              <div className="absolute -top-3 left-6">
                <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Recommended
                </span>
              </div>
            )}

            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                selectedType === type.id ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}>
                <Icon name={type.icon} size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{type.title}</h3>
                <p className="text-sm text-muted-foreground">{type.duration}</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4">{type.description}</p>

            <ul className="space-y-2">
              {type.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2 text-sm">
                  <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {selectedType === type.id && (
              <div className="absolute top-4 right-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Check" size={16} className="text-primary-foreground" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DemoTypeSelector;