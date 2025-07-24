import React from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const FarmProfileForm = ({ formData, onFormChange }) => {
  const farmTypes = [
    { value: 'crop-farming', label: 'Crop Farming' },
    { value: 'livestock', label: 'Livestock' },
    { value: 'mixed-farming', label: 'Mixed Farming' },
    { value: 'organic', label: 'Organic Farming' },
    { value: 'greenhouse', label: 'Greenhouse/Indoor' },
    { value: 'specialty-crops', label: 'Specialty Crops' }
  ];

  const farmSizes = [
    { value: 'small', label: 'Small (1-50 acres)' },
    { value: 'medium', label: 'Medium (51-200 acres)' },
    { value: 'large', label: 'Large (201-500 acres)' },
    { value: 'enterprise', label: 'Enterprise (500+ acres)' }
  ];

  const primaryCrops = [
    { value: 'corn', label: 'Corn' },
    { value: 'soybeans', label: 'Soybeans' },
    { value: 'wheat', label: 'Wheat' },
    { value: 'cotton', label: 'Cotton' },
    { value: 'rice', label: 'Rice' },
    { value: 'vegetables', label: 'Vegetables' },
    { value: 'fruits', label: 'Fruits' },
    { value: 'hay', label: 'Hay/Forage' },
    { value: 'other', label: 'Other' }
  ];

  const managementChallenges = [
    'Record keeping and documentation',
    'Expense tracking and budgeting',
    'Crop planning and rotation',
    'Weather monitoring and planning',
    'Equipment maintenance scheduling',
    'Labor management',
    'Market price tracking',
    'Compliance and certification',
    'Inventory management',
    'Financial reporting'
  ];

  const handleInputChange = (field, value) => {
    onFormChange({ ...formData, [field]: value });
  };

  const handleChallengeToggle = (challenge) => {
    const currentChallenges = formData.challenges || [];
    const updatedChallenges = currentChallenges.includes(challenge)
      ? currentChallenges.filter(c => c !== challenge)
      : [...currentChallenges, challenge];
    
    handleInputChange('challenges', updatedChallenges);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Tell Us About Your Farm</h2>
        <p className="text-muted-foreground">Help us customize your demo to showcase the most relevant features</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Farm Name"
          type="text"
          placeholder="Enter your farm name"
          value={formData.farmName || ''}
          onChange={(e) => handleInputChange('farmName', e.target.value)}
          required
        />

        <Select
          label="Farm Type"
          placeholder="Select your farm type"
          options={farmTypes}
          value={formData.farmType || ''}
          onChange={(value) => handleInputChange('farmType', value)}
          required
        />

        <Select
          label="Farm Size"
          placeholder="Select your farm size"
          options={farmSizes}
          value={formData.farmSize || ''}
          onChange={(value) => handleInputChange('farmSize', value)}
          required
        />

        <Select
          label="Primary Crops"
          placeholder="Select your main crops"
          options={primaryCrops}
          value={formData.primaryCrops || []}
          onChange={(value) => handleInputChange('primaryCrops', value)}
          multiple
          searchable
        />

        <Input
          label="Years in Farming"
          type="number"
          placeholder="Enter years of experience"
          value={formData.yearsExperience || ''}
          onChange={(e) => handleInputChange('yearsExperience', e.target.value)}
          min="0"
          max="100"
        />

        <Input
          label="Current Management Tools"
          type="text"
          placeholder="e.g., Excel, QuickBooks, paper records"
          value={formData.currentTools || ''}
          onChange={(e) => handleInputChange('currentTools', e.target.value)}
          description="What tools do you currently use for farm management?"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-4">
          Current Management Challenges
          <span className="text-muted-foreground ml-1">(Select all that apply)</span>
        </label>
        <div className="grid md:grid-cols-2 gap-3">
          {managementChallenges.map((challenge) => (
            <Checkbox
              key={challenge}
              label={challenge}
              checked={(formData.challenges || []).includes(challenge)}
              onChange={() => handleChallengeToggle(challenge)}
            />
          ))}
        </div>
      </div>

      <div>
        <Input
          label="Specific Goals"
          type="text"
          placeholder="What do you hope to achieve with farm management software?"
          value={formData.goals || ''}
          onChange={(e) => handleInputChange('goals', e.target.value)}
          description="Help us understand your primary objectives"
        />
      </div>
    </div>
  );
};

export default FarmProfileForm;