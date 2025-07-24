import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CropPortfolioManager = () => {
  const [selectedCrop, setSelectedCrop] = useState('corn');
  const [inputData, setInputData] = useState({
    cropType: 'corn',
    plantingDate: '2024-04-15',
    acres: '25'
  });

  const crops = [
    {
      id: 'corn',
      name: 'Corn',
      variety: 'Pioneer P1197AM',
      acres: 25,
      plantingDate: '2024-04-15',
      expectedHarvest: '2024-09-20',
      currentStage: 'Grain Filling',
      healthScore: 94,
      predictedYield: '185 bu/acre',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
      timeline: [
        { stage: 'Planting', date: '2024-04-15', status: 'completed', icon: 'Seed' },
        { stage: 'Emergence', date: '2024-04-28', status: 'completed', icon: 'Sprout' },
        { stage: 'V6 Growth', date: '2024-06-10', status: 'completed', icon: 'TreePine' },
        { stage: 'Tasseling', date: '2024-07-15', status: 'completed', icon: 'Flower' },
        { stage: 'Grain Filling', date: '2024-08-01', status: 'current', icon: 'Wheat' },
        { stage: 'Maturity', date: '2024-09-10', status: 'upcoming', icon: 'Award' },
        { stage: 'Harvest', date: '2024-09-20', status: 'upcoming', icon: 'Truck' }
      ],
      alerts: [
        { type: 'warning', message: 'Corn rootworm detected in sector 3', priority: 'medium' },
        { type: 'info', message: 'Optimal irrigation window: Next 48 hours', priority: 'low' }
      ]
    },
    {
      id: 'soybeans',
      name: 'Soybeans',
      variety: 'Asgrow AG2834',
      acres: 18,
      plantingDate: '2024-05-10',
      expectedHarvest: '2024-10-15',
      currentStage: 'Pod Development',
      healthScore: 89,
      predictedYield: '52 bu/acre',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop',
      timeline: [
        { stage: 'Planting', date: '2024-05-10', status: 'completed', icon: 'Seed' },
        { stage: 'Emergence', date: '2024-05-22', status: 'completed', icon: 'Sprout' },
        { stage: 'Flowering', date: '2024-07-05', status: 'completed', icon: 'Flower' },
        { stage: 'Pod Development', date: '2024-07-20', status: 'current', icon: 'Wheat' },
        { stage: 'Seed Fill', date: '2024-08-15', status: 'upcoming', icon: 'Award' },
        { stage: 'Maturity', date: '2024-10-01', status: 'upcoming', icon: 'Award' },
        { stage: 'Harvest', date: '2024-10-15', status: 'upcoming', icon: 'Truck' }
      ],
      alerts: [
        { type: 'success', message: 'Nitrogen fixation optimal in all sectors', priority: 'low' }
      ]
    }
  ];

  const currentCrop = crops.find(crop => crop.id === selectedCrop);

  const handleInputChange = (field, value) => {
    setInputData(prev => ({ ...prev, [field]: value }));
  };

  const generateSampleAnalytics = () => {
    const { cropType, plantingDate, acres } = inputData;
    const plantDate = new Date(plantingDate);
    const currentDate = new Date();
    const daysGrown = Math.floor((currentDate - plantDate) / (1000 * 60 * 60 * 24));
    
    const yieldEstimates = {
      corn: Math.round(170 + (daysGrown * 0.2)),
      soybeans: Math.round(45 + (daysGrown * 0.1)),
      wheat: Math.round(55 + (daysGrown * 0.15))
    };

    return {
      daysGrown,
      estimatedYield: yieldEstimates[cropType] || 0,
      totalProduction: Math.round((yieldEstimates[cropType] || 0) * parseInt(acres)),
      healthScore: Math.min(95, 75 + Math.floor(daysGrown / 10))
    };
  };

  const sampleAnalytics = generateSampleAnalytics();

  return (
    <div className="bg-muted py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Crop Portfolio Manager
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Track every aspect of your crop lifecycle with precision. From planting to harvest, 
            get AI-powered insights that optimize your farming decisions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Crop Selection & Timeline */}
          <div className="bg-card rounded-2xl agricultural-shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">Active Crops</h3>
              <div className="flex space-x-2">
                {crops.map((crop) => (
                  <button
                    key={crop.id}
                    onClick={() => setSelectedCrop(crop.id)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium seasonal-transition ${
                      selectedCrop === crop.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                    }`}
                  >
                    {crop.name}
                  </button>
                ))}
              </div>
            </div>

            {currentCrop && (
              <>
                {/* Crop Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                    <Image
                      src={currentCrop.image}
                      alt={currentCrop.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-foreground">{currentCrop.name}</h4>
                    <p className="text-sm text-muted-foreground">{currentCrop.variety}</p>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-sm text-muted-foreground">{currentCrop.acres} acres</span>
                      <div className="flex items-center space-x-1">
                        <div className={`w-2 h-2 rounded-full ${
                          currentCrop.healthScore >= 90 ? 'bg-success' : 
                          currentCrop.healthScore >= 70 ? 'bg-warning' : 'bg-error'
                        }`}></div>
                        <span className="text-sm font-medium">{currentCrop.healthScore}% Health</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Growth Timeline */}
                <div className="space-y-3">
                  <h5 className="font-medium text-foreground">Growth Timeline</h5>
                  {currentCrop.timeline.map((stage, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        stage.status === 'completed' ? 'bg-success text-success-foreground' :
                        stage.status === 'current' ? 'bg-primary text-primary-foreground' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        <Icon name={stage.icon} size={16} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className={`font-medium ${
                            stage.status === 'current' ? 'text-primary' : 'text-foreground'
                          }`}>
                            {stage.stage}
                          </span>
                          <span className="text-sm text-muted-foreground">{stage.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Alerts */}
                {currentCrop.alerts.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <h5 className="font-medium text-foreground mb-3">Active Alerts</h5>
                    <div className="space-y-2">
                      {currentCrop.alerts.map((alert, index) => (
                        <div key={index} className={`p-3 rounded-lg flex items-start space-x-2 ${
                          alert.type === 'warning' ? 'bg-warning/10 border border-warning/20' :
                          alert.type === 'success'? 'bg-success/10 border border-success/20' : 'bg-accent/10 border border-accent/20'
                        }`}>
                          <Icon 
                            name={alert.type === 'warning' ? 'AlertTriangle' : 
                                  alert.type === 'success' ? 'CheckCircle' : 'Info'} 
                            size={16} 
                            className={
                              alert.type === 'warning' ? 'text-warning' :
                              alert.type === 'success'? 'text-success' : 'text-accent'
                            }
                          />
                          <p className="text-sm text-foreground">{alert.message}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Interactive Analytics Demo */}
          <div className="bg-card rounded-2xl agricultural-shadow-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-6">Try Our Analytics</h3>
            <p className="text-muted-foreground mb-6">
              Input your crop data below to see instant analytics and predictions.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Crop Type</label>
                <select
                  value={inputData.cropType}
                  onChange={(e) => handleInputChange('cropType', e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="corn">Corn</option>
                  <option value="soybeans">Soybeans</option>
                  <option value="wheat">Wheat</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Planting Date</label>
                <input
                  type="date"
                  value={inputData.plantingDate}
                  onChange={(e) => handleInputChange('plantingDate', e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Acres Planted</label>
                <input
                  type="number"
                  value={inputData.acres}
                  onChange={(e) => handleInputChange('acres', e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter acres"
                />
              </div>
            </div>

            {/* Generated Analytics */}
            <div className="bg-muted rounded-lg p-4">
              <h4 className="font-medium text-foreground mb-4">Instant Analytics</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{sampleAnalytics.daysGrown}</div>
                  <div className="text-sm text-muted-foreground">Days Growing</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">{sampleAnalytics.healthScore}%</div>
                  <div className="text-sm text-muted-foreground">Health Score</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">{sampleAnalytics.estimatedYield}</div>
                  <div className="text-sm text-muted-foreground">Bu/Acre Est.</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">{sampleAnalytics.totalProduction}</div>
                  <div className="text-sm text-muted-foreground">Total Bu Est.</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium seasonal-transition growth-hover">
                Get Full Analytics Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropPortfolioManager;