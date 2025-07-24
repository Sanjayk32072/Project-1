import React from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const ContactInfoForm = ({ formData, onFormChange }) => {
  const timeZones = [
    { value: 'EST', label: 'South India Time (SIT)' },
    { value: 'CST', label: 'Central IndiaTime (CST)' },
    { value: 'MST', label: 'Mountain Time (MST)' },
    { value: 'PST', label: 'Pacific Time (PST)' },
    { value: 'AKST', label: 'North India Time (NIT)' },
    { value: 'HST', label: 'Jharkhand Time (JT)' }
  ];

  const preferredTimes = [
    { value: 'early-morning', label: 'Early Morning (6:00 AM - 8:00 AM)' },
    { value: 'morning', label: 'Morning (8:00 AM - 12:00 PM)' },
    { value: 'afternoon', label: 'Afternoon (12:00 PM - 5:00 PM)' },
    { value: 'evening', label: 'Evening (5:00 PM - 8:00 PM)' }
  ];

  const communicationPreferences = [
    'Email updates about new features',
    'Seasonal farming tips and guides',
    'Market insights and pricing alerts',
    'Webinar invitations',
    'Success stories from other farmers'
  ];

  const handleInputChange = (field, value) => {
    onFormChange({ ...formData, [field]: value });
  };

  const handlePreferenceToggle = (preference) => {
    const currentPrefs = formData.communicationPrefs || [];
    const updatedPrefs = currentPrefs.includes(preference)
      ? currentPrefs.filter(p => p !== preference)
      : [...currentPrefs, preference];
    
    handleInputChange('communicationPrefs', updatedPrefs);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Contact Information</h2>
        <p className="text-muted-foreground">We'll use this information to schedule your personalized demo</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="First Name"
          type="text"
          placeholder="Enter your first name"
          value={formData.firstName || ''}
          onChange={(e) => handleInputChange('firstName', e.target.value)}
          required
        />

        <Input
          label="Last Name"
          type="text"
          placeholder="Enter your last name"
          value={formData.lastName || ''}
          onChange={(e) => handleInputChange('lastName', e.target.value)}
          required
        />

        <Input
          label="Email Address"
          type="email"
          placeholder="Enter your email address"
          value={formData.email || ''}
          onChange={(e) => handleInputChange('email', e.target.value)}
          description="We'll send demo details and follow-up resources here"
          required
        />

        <Input
          label="Phone Number"
          type="tel"
          placeholder="+91 9334749028"
          value={formData.phone || ''}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          description="For demo reminders and quick questions"
        />

        <Input
          label="Farm Location (City, State)"
          type="text"
          placeholder="e.g., Sanjay , Bokaro"
          value={formData.location || ''}
          onChange={(e) => handleInputChange('location', e.target.value)}
          description="Helps us provide region-specific insights"
          required
        />

        <Select
          label="Time Zone"
          placeholder="Select your time zone"
          options={timeZones}
          value={formData.timeZone || ''}
          onChange={(value) => handleInputChange('timeZone', value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-4">
          Preferred Demo Times
          <span className="text-muted-foreground ml-1">(Select all that work for you)</span>
        </label>
        <div className="grid md:grid-cols-2 gap-3">
          {preferredTimes.map((time) => (
            <Checkbox
              key={time.value}
              label={time.label}
              checked={(formData.preferredTimes || []).includes(time.value)}
              onChange={() => {
                const currentTimes = formData.preferredTimes || [];
                const updatedTimes = currentTimes.includes(time.value)
                  ? currentTimes.filter(t => t !== time.value)
                  : [...currentTimes, time.value];
                handleInputChange('preferredTimes', updatedTimes);
              }}
            />
          ))}
        </div>
      </div>

      <div>
        <Input
          label="Additional Notes"
          type="text"
          placeholder="Any specific questions or topics you'd like us to cover?"
          value={formData.notes || ''}
          onChange={(e) => handleInputChange('notes', e.target.value)}
          description="Help us prepare for your demo session"
        />
      </div>

      <div className="border-t border-border pt-6">
        <label className="block text-sm font-medium text-foreground mb-4">
          Communication Preferences
          <span className="text-muted-foreground ml-1">(Optional)</span>
        </label>
        <div className="space-y-3">
          {communicationPreferences.map((preference) => (
            <Checkbox
              key={preference}
              label={preference}
              checked={(formData.communicationPrefs || []).includes(preference)}
              onChange={() => handlePreferenceToggle(preference)}
            />
          ))}
        </div>
      </div>

      <div className="bg-muted/50 p-4 rounded-lg">
        <Checkbox
          label="I agree to receive demo-related communications and understand I can unsubscribe at any time"
          checked={formData.agreedToTerms || false}
          onChange={(e) => handleInputChange('agreedToTerms', e.target.checked)}
          required
        />
      </div>
    </div>
  );
};

export default ContactInfoForm;