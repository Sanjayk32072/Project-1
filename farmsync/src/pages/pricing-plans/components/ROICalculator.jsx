import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    farmSize: '',
    currentYield: '',
    cropType: '',
    currentExpenses: ''
  });

  const [results, setResults] = useState({
    potentialSavings: 0,
    yieldImprovement: 0,
    annualROI: 0,
    paybackPeriod: 0
  });

  const cropTypes = [
    { value: 'corn', label: 'Corn', avgYield: 175, improvementRate: 0.12 },
    { value: 'soybeans', label: 'Soybeans', avgYield: 50, improvementRate: 0.15 },
    { value: 'wheat', label: 'Wheat', avgYield: 45, improvementRate: 0.10 },
    { value: 'cotton', label: 'Cotton', avgYield: 800, improvementRate: 0.18 },
    { value: 'vegetables', label: 'Vegetables', avgYield: 25000, improvementRate: 0.20 },
    { value: 'other', label: 'Other Crops', avgYield: 100, improvementRate: 0.12 }
  ];

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  useEffect(() => {
    if (inputs.farmSize && inputs.currentYield && inputs.cropType && inputs.currentExpenses) {
      calculateROI();
    }
  }, [inputs]);

  const calculateROI = () => {
    const farmSize = parseFloat(inputs.farmSize) || 0;
    const currentYield = parseFloat(inputs.currentYield) || 0;
    const currentExpenses = parseFloat(inputs.currentExpenses) || 0;
    
    const selectedCrop = cropTypes.find(crop => crop.value === inputs.cropType);
    if (!selectedCrop) return;

    // Calculate improvements based on industry averages
    const expenseReduction = currentExpenses * 0.08; // 8% average expense reduction
    const yieldIncrease = currentYield * selectedCrop.improvementRate;
    const additionalRevenue = yieldIncrease * farmSize * 4.5; // Assuming $4.5 per bushel/unit
    
    const totalAnnualBenefit = expenseReduction + additionalRevenue;
    const farmSyncCost = farmSize <= 50 ? 588 : farmSize <= 500 ? 1788 : 3588; // Annual cost
    
    const annualROI = ((totalAnnualBenefit - farmSyncCost) / farmSyncCost) * 100;
    const paybackPeriod = farmSyncCost / (totalAnnualBenefit / 12); // Months

    setResults({
      potentialSavings: expenseReduction,
      yieldImprovement: additionalRevenue,
      annualROI: Math.max(0, annualROI),
      paybackPeriod: Math.max(1, paybackPeriod)
    });
  };

  return (
    <div className="bg-card rounded-xl p-6 agricultural-shadow">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-success rounded-lg flex items-center justify-center">
          <Icon name="TrendingUp" size={20} className="text-success-foreground" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-card-foreground">ROI Calculator</h3>
          <p className="text-sm text-muted-foreground">See your potential returns</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Input
          label="Farm Size (acres)"
          type="number"
          placeholder="e.g., 250"
          value={inputs.farmSize}
          onChange={(e) => handleInputChange('farmSize', e.target.value)}
        />

        <Select
          label="Primary Crop Type"
          options={cropTypes}
          value={inputs.cropType}
          onChange={(value) => handleInputChange('cropType', value)}
          placeholder="Select your main crop"
        />

        <Input
          label="Current Yield (per acre)"
          type="number"
          placeholder="e.g., 160"
          value={inputs.currentYield}
          onChange={(e) => handleInputChange('currentYield', e.target.value)}
          description="Bushels, tons, or units per acre"
        />

        <Input
          label="Annual Expenses ($)"
          type="number"
          placeholder="e.g., 50000"
          value={inputs.currentExpenses}
          onChange={(e) => handleInputChange('currentExpenses', e.target.value)}
          description="Total farm operating costs"
        />
      </div>

      {/* Results */}
      {results.annualROI > 0 && (
        <div className="border-t border-border pt-6">
          <h4 className="text-lg font-semibold text-card-foreground mb-4">Your Potential Returns</h4>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-success">${results.potentialSavings.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">Annual Savings</div>
            </div>
            
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-primary">${results.yieldImprovement.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">Additional Revenue</div>
            </div>
            
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-accent">{results.annualROI.toFixed(0)}%</div>
              <div className="text-xs text-muted-foreground">Annual ROI</div>
            </div>
            
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-secondary">{results.paybackPeriod.toFixed(1)}</div>
              <div className="text-xs text-muted-foreground">Months to ROI</div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-success/10 rounded-lg">
            <p className="text-sm text-success font-medium">
              Based on industry averages, FarmSync users typically see 8-20% cost reduction and 10-18% yield improvement within the first year.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ROICalculator;