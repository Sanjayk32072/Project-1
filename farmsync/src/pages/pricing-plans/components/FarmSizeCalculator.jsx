import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const FarmSizeCalculator = ({ onPlanRecommendation }) => {
  const [formData, setFormData] = useState({
    acreage: '',
    cropTypes: '',
    managementComplexity: '',
    currentTools: ''
  });

  const cropOptions = [
    { value: '1-2', label: '1-2 crop types' },
    { value: '3-5', label: '3-5 crop types' },
    { value: '6-10', label: '6-10 crop types' },
    { value: '10+', label: '10+ crop types' }
  ];

  const complexityOptions = [
    { value: 'basic', label: 'Basic - Simple crop rotation' },
    { value: 'moderate', label: 'Moderate - Multiple fields, some automation' },
    { value: 'advanced', label: 'Advanced - Complex operations, multiple locations' }
  ];

  const toolOptions = [
    { value: 'none', label: 'Paper records only' },
    { value: 'spreadsheets', label: 'Spreadsheets' },
    { value: 'basic-software', label: 'Basic farm software' },
    { value: 'multiple-tools', label: 'Multiple digital tools' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateRecommendation = () => {
    const acreage = parseInt(formData.acreage) || 0;
    const cropComplexity = formData.cropTypes;
    const management = formData.managementComplexity;

    let recommendedPlan = 'starter';
    let confidence = 'medium';

    if (acreage <= 50 && cropComplexity === '1-2' && management === 'basic') {
      recommendedPlan = 'starter';
      confidence = 'high';
    } else if (acreage <= 500 && (cropComplexity === '3-5' || management === 'moderate')) {
      recommendedPlan = 'growth';
      confidence = 'high';
    } else if (acreage > 500 || management === 'advanced' || cropComplexity === '10+') {
      recommendedPlan = 'enterprise';
      confidence = 'high';
    } else if (acreage > 50 && acreage <= 500) {
      recommendedPlan = 'growth';
      confidence = 'medium';
    }

    onPlanRecommendation({ plan: recommendedPlan, confidence, acreage });
  };

  const isFormValid = formData.acreage && formData.cropTypes && formData.managementComplexity && formData.currentTools;

  return (
    <div className="bg-card rounded-xl p-6 agricultural-shadow">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
          <Icon name="Calculator" size={20} className="text-accent-foreground" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-card-foreground">Farm Size Calculator</h3>
          <p className="text-sm text-muted-foreground">Find your perfect plan in 30 seconds</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Input
          label="Total Farm Acreage"
          type="number"
          placeholder="e.g., 150"
          value={formData.acreage}
          onChange={(e) => handleInputChange('acreage', e.target.value)}
          description="Include all cultivated land"
        />

        <Select
          label="Number of Crop Types"
          options={cropOptions}
          value={formData.cropTypes}
          onChange={(value) => handleInputChange('cropTypes', value)}
          placeholder="Select crop diversity"
        />

        <Select
          label="Management Complexity"
          options={complexityOptions}
          value={formData.managementComplexity}
          onChange={(value) => handleInputChange('managementComplexity', value)}
          placeholder="Choose complexity level"
        />

        <Select
          label="Current Tools"
          options={toolOptions}
          value={formData.currentTools}
          onChange={(value) => handleInputChange('currentTools', value)}
          placeholder="What do you use now?"
        />
      </div>

      <Button
        variant="default"
        fullWidth
        onClick={calculateRecommendation}
        disabled={!isFormValid}
        className="bg-primary text-primary-foreground hover:bg-primary/90"
      >
        <Icon name="Search" size={18} className="mr-2" />
        Find My Perfect Plan
      </Button>
    </div>
  );
};

export default FarmSizeCalculator;