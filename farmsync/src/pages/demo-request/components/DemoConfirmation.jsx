import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DemoConfirmation = ({ formData, demoType, onEdit, onSubmit, isSubmitting }) => {
  const getDemoTypeDetails = () => {
    const types = {
      'live-demo': {
        title: 'Live Demo Session',
        duration: '45 minutes',
        icon: 'Video',
        description: 'One-on-one personalized demonstration'
      },
      'group-demo': {
        title: 'Group Demonstration',
        duration: '60 minutes',
        icon: 'Users',
        description: 'Perfect for farming cooperatives'
      },
      'self-guided': {
        title: 'Interactive Tour',
        duration: 'Self-paced',
        icon: 'Play',
        description: 'Explore at your own pace'
      }
    };
    return types[demoType] || types['live-demo'];
  };

  const demoDetails = getDemoTypeDetails();

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const preparationMaterials = [
    {
      title: 'Platform Overview Guide',
      description: 'Comprehensive introduction to FarmSync features',
      icon: 'FileText'
    },
    {
      title: 'Farm Setup Checklist',
      description: 'Steps to prepare your farm data for the demo',
      icon: 'CheckSquare'
    },
    {
      title: 'Success Story Case Study',
      description: 'Similar farm success story based on your profile',
      icon: 'TrendingUp'
    },
    {
      title: 'Demo Questions Template',
      description: 'Suggested questions to maximize your demo session',
      icon: 'HelpCircle'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} className="text-success" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Review Your Demo Request</h2>
        <p className="text-muted-foreground">Please review the details below before submitting your request</p>
      </div>

      {/* Demo Type Summary */}
      <div className="bg-card rounded-lg p-6 agricultural-shadow">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <Icon name={demoDetails.icon} size={24} className="text-primary-foreground" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">{demoDetails.title}</h3>
            <p className="text-muted-foreground">{demoDetails.description}</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={16} className="text-muted-foreground" />
            <span className="text-foreground">Duration: {demoDetails.duration}</span>
          </div>
          {formData.selectedDate && formData.selectedTime && (
            <>
              <div className="flex items-center space-x-2">
                <Icon name="Calendar" size={16} className="text-muted-foreground" />
                <span className="text-foreground">{formatDate(formData.selectedDate)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-muted-foreground" />
                <span className="text-foreground">{formatTime(formData.selectedTime)} {formData.timeZone}</span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-card rounded-lg p-6 agricultural-shadow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>
          <Button variant="ghost" size="sm" onClick={() => onEdit('contact')} iconName="Edit2" iconSize={16}>
            Edit
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-muted-foreground">Name:</span>
            <span className="text-foreground ml-2">{formData.firstName} {formData.lastName}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Email:</span>
            <span className="text-foreground ml-2">{formData.email}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Phone:</span>
            <span className="text-foreground ml-2">{formData.phone || 'Not provided'}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Location:</span>
            <span className="text-foreground ml-2">{formData.location}</span>
          </div>
        </div>
      </div>

      {/* Farm Profile */}
      <div className="bg-card rounded-lg p-6 agricultural-shadow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Farm Profile</h3>
          <Button variant="ghost" size="sm" onClick={() => onEdit('farm')} iconName="Edit2" iconSize={16}>
            Edit
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-muted-foreground">Farm Name:</span>
            <span className="text-foreground ml-2">{formData.farmName}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Farm Type:</span>
            <span className="text-foreground ml-2">{formData.farmType}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Farm Size:</span>
            <span className="text-foreground ml-2">{formData.farmSize}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Experience:</span>
            <span className="text-foreground ml-2">{formData.yearsExperience} years</span>
          </div>
        </div>

        {formData.primaryCrops && formData.primaryCrops.length > 0 && (
          <div className="mt-4">
            <span className="text-muted-foreground text-sm">Primary Crops:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.primaryCrops.map((crop, index) => (
                <span key={index} className="bg-accent/20 text-accent-foreground px-2 py-1 rounded text-xs">
                  {crop}
                </span>
              ))}
            </div>
          </div>
        )}

        {formData.challenges && formData.challenges.length > 0 && (
          <div className="mt-4">
            <span className="text-muted-foreground text-sm">Key Challenges:</span>
            <div className="mt-2 text-sm text-foreground">
              {formData.challenges.slice(0, 3).join(', ')}
              {formData.challenges.length > 3 && ` and ${formData.challenges.length - 3} more`}
            </div>
          </div>
        )}
      </div>

      {/* Preparation Materials */}
      <div className="bg-card rounded-lg p-6 agricultural-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-4">What to Expect</h3>
        <p className="text-muted-foreground text-sm mb-4">
          We'll send you these preparation materials before your demo session:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          {preparationMaterials.map((material, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={material.icon} size={16} className="text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground text-sm">{material.title}</h4>
                <p className="text-muted-foreground text-xs">{material.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <Button
          variant="default"
          size="lg"
          onClick={onSubmit}
          loading={isSubmitting}
          iconName="Send"
          iconPosition="right"
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
        >
          {isSubmitting ? 'Submitting Request...' : 'Submit Demo Request'}
        </Button>
      </div>

      <div className="text-center text-sm text-muted-foreground">
        <p>You'll receive a confirmation email within 15 minutes with your demo details and preparation materials.</p>
      </div>
    </div>
  );
};

export default DemoConfirmation;