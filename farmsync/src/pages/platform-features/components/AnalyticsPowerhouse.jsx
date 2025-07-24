import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const AnalyticsPowerhouse = () => {
  const [selectedReport, setSelectedReport] = useState('comparative');
  const [selectedTimeframe, setSelectedTimeframe] = useState('6months');

  const comparativeData = [
    { metric: 'Yield per Acre', yourFarm: 185, regional: 165, industry: 170 },
    { metric: 'Cost per Acre', yourFarm: 340, regional: 380, industry: 365 },
    { metric: 'Profit Margin', yourFarm: 28, regional: 22, industry: 25 },
    { metric: 'Water Usage', yourFarm: 85, regional: 95, industry: 90 },
    { metric: 'Fertilizer Efficiency', yourFarm: 92, regional: 78, industry: 82 }
  ];

  const trendData = [
    { month: 'Jan', yield: 0, cost: 320, profit: 0 },
    { month: 'Feb', yield: 0, cost: 340, profit: 0 },
    { month: 'Mar', yield: 0, cost: 360, profit: 0 },
    { month: 'Apr', yield: 45, cost: 380, profit: 12 },
    { month: 'May', yield: 120, cost: 350, profit: 18 },
    { month: 'Jun', yield: 165, cost: 340, profit: 24 },
    { month: 'Jul', yield: 185, cost: 335, profit: 28 }
  ];

  const performanceRadar = [
    { subject: 'Yield', A: 92, B: 78, fullMark: 100 },
    { subject: 'Efficiency', A: 88, B: 72, fullMark: 100 },
    { subject: 'Sustainability', A: 85, B: 68, fullMark: 100 },
    { subject: 'Cost Control', A: 94, B: 75, fullMark: 100 },
    { subject: 'Innovation', A: 89, B: 65, fullMark: 100 },
    { subject: 'Quality', A: 91, B: 80, fullMark: 100 }
  ];

  const predictiveData = [
    { week: 'Week 1', predicted: 180, actual: 178, confidence: 95 },
    { week: 'Week 2', predicted: 182, actual: 185, confidence: 93 },
    { week: 'Week 3', predicted: 185, actual: 183, confidence: 96 },
    { week: 'Week 4', predicted: 187, actual: null, confidence: 94 },
    { week: 'Week 5', predicted: 189, actual: null, confidence: 91 },
    { week: 'Week 6', predicted: 192, actual: null, confidence: 88 }
  ];

  const reportTypes = [
    {
      id: 'comparative',
      name: 'Comparative Analysis',
      description: 'Compare your performance against regional and industry benchmarks',
      icon: 'BarChart3'
    },
    {
      id: 'trends',
      name: 'Trend Analysis',
      description: 'Identify patterns and trends in your farming data over time',
      icon: 'TrendingUp'
    },
    {
      id: 'performance',
      name: 'Performance Radar',
      description: 'Multi-dimensional view of your farm\'s performance metrics',
      icon: 'Target'
    },
    {
      id: 'predictive',
      name: 'Predictive Modeling',
      description: 'AI-powered predictions for yield, costs, and market conditions',
      icon: 'Brain'
    }
  ];

  const insights = [
    {
      type: 'success',
      title: 'Yield Performance',
      message: 'Your corn yield is 12% above regional average. Consider expanding corn acreage next season.',
      impact: 'High',
      action: 'Expand corn production by 15 acres'
    },
    {
      type: 'warning',
      title: 'Cost Optimization',
      message: 'Fertilizer costs are trending 8% higher than optimal. Review supplier contracts.',
      impact: 'Medium',
      action: 'Negotiate bulk pricing with suppliers'
    },
    {
      type: 'info',
      title: 'Market Opportunity',
      message: 'Soybean prices predicted to increase 15% in Q4. Consider delayed selling strategy.',
      impact: 'High',
      action: 'Implement storage strategy for soybeans'
    },
    {
      type: 'success',
      title: 'Efficiency Gains',
      message: 'Water usage efficiency improved 18% with new irrigation system.',
      impact: 'Medium',
      action: 'Document best practices for replication'
    }
  ];

  const customReports = [
    {
      name: 'Monthly P&L Summary',
      description: 'Comprehensive profit and loss analysis with crop-level breakdown',
      frequency: 'Monthly',
      lastGenerated: '2024-07-20',
      status: 'active'
    },
    {
      name: 'Seasonal Performance Review',
      description: 'End-of-season analysis comparing planned vs actual performance',
      frequency: 'Seasonal',
      lastGenerated: '2024-06-30',
      status: 'active'
    },
    {
      name: 'Sustainability Scorecard',
      description: 'Environmental impact tracking and sustainability metrics',
      frequency: 'Quarterly',
      lastGenerated: '2024-07-01',
      status: 'active'
    },
    {
      name: 'Market Intelligence Brief',
      description: 'Weekly market trends and pricing analysis for your crops',
      frequency: 'Weekly',
      lastGenerated: '2024-07-22',
      status: 'active'
    }
  ];

  const renderChart = () => {
    switch (selectedReport) {
      case 'comparative':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={comparativeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
              <XAxis dataKey="metric" stroke="#666666" />
              <YAxis stroke="#666666" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid #E5E5E5',
                  borderRadius: '8px'
                }} 
              />
              <Bar dataKey="yourFarm" fill="#2D5016" name="Your Farm" />
              <Bar dataKey="regional" fill="#8B4513" name="Regional Avg" />
              <Bar dataKey="industry" fill="#F4A460" name="Industry Avg" />
            </BarChart>
          </ResponsiveContainer>
        );
      
      case 'trends':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
              <XAxis dataKey="month" stroke="#666666" />
              <YAxis stroke="#666666" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid #E5E5E5',
                  borderRadius: '8px'
                }} 
              />
              <Line type="monotone" dataKey="yield" stroke="#228B22" strokeWidth={3} name="Yield" />
              <Line type="monotone" dataKey="cost" stroke="#B22222" strokeWidth={3} name="Cost" />
              <Line type="monotone" dataKey="profit" stroke="#2D5016" strokeWidth={3} name="Profit %" />
            </LineChart>
          </ResponsiveContainer>
        );
      
      case 'performance':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={performanceRadar}>
              <PolarGrid stroke="#E5E5E5" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#666666' }} />
              <PolarRadiusAxis tick={{ fill: '#666666' }} />
              <Radar name="Your Farm" dataKey="A" stroke="#2D5016" fill="#2D5016" fillOpacity={0.3} strokeWidth={2} />
              <Radar name="Industry Avg" dataKey="B" stroke="#8B4513" fill="#8B4513" fillOpacity={0.1} strokeWidth={2} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid #E5E5E5',
                  borderRadius: '8px'
                }} 
              />
            </RadarChart>
          </ResponsiveContainer>
        );
      
      case 'predictive':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={predictiveData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
              <XAxis dataKey="week" stroke="#666666" />
              <YAxis stroke="#666666" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid #E5E5E5',
                  borderRadius: '8px'
                }} 
              />
              <Line type="monotone" dataKey="predicted" stroke="#2D5016" strokeWidth={3} strokeDasharray="5 5" name="Predicted" />
              <Line type="monotone" dataKey="actual" stroke="#228B22" strokeWidth={3} name="Actual" />
            </LineChart>
          </ResponsiveContainer>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="bg-muted py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Analytics Powerhouse
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transform raw data into actionable intelligence. Our advanced analytics engine 
            provides deep insights, predictive modeling, and comparative benchmarking.
          </p>
        </div>

        {/* Report Type Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {reportTypes.map((report) => (
            <button
              key={report.id}
              onClick={() => setSelectedReport(report.id)}
              className={`p-4 rounded-xl text-left seasonal-transition growth-hover ${
                selectedReport === report.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <Icon name={report.icon} size={24} />
                <h3 className="font-bold">{report.name}</h3>
              </div>
              <p className="text-sm opacity-90">{report.description}</p>
            </button>
          ))}
        </div>

        {/* Main Analytics Display */}
        <div className="bg-card rounded-2xl agricultural-shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-foreground">
              {reportTypes.find(r => r.id === selectedReport)?.name}
            </h3>
            <div className="flex items-center space-x-4">
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="px-3 py-1 border border-border rounded-lg bg-input text-foreground text-sm"
              >
                <option value="3months">Last 3 Months</option>
                <option value="6months">Last 6 Months</option>
                <option value="1year">Last Year</option>
                <option value="2years">Last 2 Years</option>
              </select>
              <button className="flex items-center space-x-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium seasonal-transition growth-hover">
                <Icon name="Download" size={16} />
                <span>Export</span>
              </button>
            </div>
          </div>

          <div className="h-80">
            {renderChart()}
          </div>

          {selectedReport === 'comparative' && (
            <div className="mt-6 pt-6 border-t border-border">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-success">+12%</div>
                  <div className="text-sm text-muted-foreground">Above Regional Average</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">Top 15%</div>
                  <div className="text-sm text-muted-foreground">Industry Ranking</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">94%</div>
                  <div className="text-sm text-muted-foreground">Efficiency Score</div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* AI-Generated Insights */}
          <div className="bg-card rounded-2xl agricultural-shadow-lg p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Icon name="Brain" size={24} className="text-primary" />
              <h3 className="text-xl font-bold text-foreground">AI-Generated Insights</h3>
            </div>

            <div className="space-y-4">
              {insights.map((insight, index) => (
                <div key={index} className={`p-4 rounded-lg border-l-4 ${
                  insight.type === 'success' ? 'bg-success/10 border-success' :
                  insight.type === 'warning'? 'bg-warning/10 border-warning' : 'bg-accent/10 border-accent'
                }`}>
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-foreground">{insight.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      insight.impact === 'High' ? 'bg-error/20 text-error' :
                      insight.impact === 'Medium'? 'bg-warning/20 text-warning' : 'bg-success/20 text-success'
                    }`}>
                      {insight.impact} Impact
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{insight.message}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">Recommended Action:</span>
                    <button className="text-sm text-accent hover:text-accent/80 font-medium">
                      {insight.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium seasonal-transition growth-hover">
                Generate Full Insights Report
              </button>
            </div>
          </div>

          {/* Custom Reports */}
          <div className="bg-card rounded-2xl agricultural-shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">Custom Reports</h3>
              <button className="flex items-center space-x-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium seasonal-transition growth-hover">
                <Icon name="Plus" size={16} />
                <span>New Report</span>
              </button>
            </div>

            <div className="space-y-4">
              {customReports.map((report, index) => (
                <div key={index} className="p-4 bg-muted rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-foreground">{report.name}</h4>
                      <p className="text-sm text-muted-foreground">{report.description}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-muted-foreground hover:text-foreground">
                        <Icon name="Download" size={16} />
                      </button>
                      <button className="p-1 text-muted-foreground hover:text-foreground">
                        <Icon name="Settings" size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <span className="text-muted-foreground">Frequency: {report.frequency}</span>
                      <span className="text-muted-foreground">Last: {report.lastGenerated}</span>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      report.status === 'active' ? 'bg-success/20 text-success' : 'bg-muted text-muted-foreground'
                    }`}>
                      {report.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  Schedule automated reports to be delivered to your inbox
                </p>
                <button className="text-accent hover:text-accent/80 font-medium text-sm">
                  Configure Email Delivery
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Data Visualization Capabilities */}
        <div className="bg-card rounded-2xl agricultural-shadow-lg p-6">
          <h3 className="text-xl font-bold text-foreground mb-6">Advanced Visualization Capabilities</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-muted rounded-lg">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="BarChart3" size={32} className="text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Interactive Charts</h4>
              <p className="text-sm text-muted-foreground">
                Drill down into your data with interactive charts and real-time filtering capabilities.
              </p>
            </div>

            <div className="text-center p-6 bg-muted rounded-lg">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Map" size={32} className="text-accent" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Geospatial Analysis</h4>
              <p className="text-sm text-muted-foreground">
                Visualize field performance with heat maps and satellite imagery integration.
              </p>
            </div>

            <div className="text-center p-6 bg-muted rounded-lg">
              <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Brain" size={32} className="text-success" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Predictive Models</h4>
              <p className="text-sm text-muted-foreground">
                AI-powered forecasting for yield, weather, and market conditions with confidence intervals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPowerhouse;