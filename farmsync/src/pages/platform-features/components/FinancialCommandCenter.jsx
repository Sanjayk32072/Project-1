import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const FinancialCommandCenter = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  const [selectedCrop, setSelectedCrop] = useState('all');

  const expenseData = [
    { month: 'Jan', seeds: 2400, fertilizer: 1800, fuel: 1200, labor: 3200, equipment: 800 },
    { month: 'Feb', seeds: 1800, fertilizer: 2200, fuel: 1400, labor: 3000, equipment: 1200 },
    { month: 'Mar', seeds: 3200, fertilizer: 2800, fuel: 1800, labor: 3400, equipment: 900 },
    { month: 'Apr', seeds: 4200, fertilizer: 3200, fuel: 2200, labor: 3800, equipment: 1400 },
    { month: 'May', seeds: 2800, fertilizer: 2400, fuel: 2000, labor: 3600, equipment: 1100 },
    { month: 'Jun', seeds: 1600, fertilizer: 1800, fuel: 2400, labor: 4000, equipment: 1300 }
  ];

  const profitData = [
    { name: 'Corn', profit: 12400, expenses: 8200, margin: 34 },
    { name: 'Soybeans', profit: 8900, expenses: 6100, margin: 31 },
    { name: 'Wheat', profit: 5600, expenses: 4200, margin: 25 },
    { name: 'Hay', profit: 3200, expenses: 2800, margin: 13 }
  ];

  const expenseBreakdown = [
    { name: 'Seeds', value: 18200, color: '#2D5016' },
    { name: 'Fertilizer', value: 14200, color: '#8B4513' },
    { name: 'Fuel', value: 11000, color: '#F4A460' },
    { name: 'Labor', value: 21000, color: '#228B22' },
    { name: 'Equipment', value: 6800, color: '#DAA520' }
  ];

  const roiTrend = [
    { month: 'Jan', roi: 18 },
    { month: 'Feb', roi: 22 },
    { month: 'Mar', roi: 25 },
    { month: 'Apr', roi: 28 },
    { month: 'May', roi: 31 },
    { month: 'Jun', roi: 34 }
  ];

  const kpiCards = [
    {
      title: 'Monthly Profit',
      value: '$8,450',
      change: '+22%',
      trend: 'up',
      icon: 'TrendingUp',
      color: 'success'
    },
    {
      title: 'Cost per Acre',
      value: '$340',
      change: '-12%',
      trend: 'down',
      icon: 'DollarSign',
      color: 'primary'
    },
    {
      title: 'ROI',
      value: '28%',
      change: '+5%',
      trend: 'up',
      icon: 'Target',
      color: 'accent'
    },
    {
      title: 'Budget Remaining',
      value: '$24,600',
      change: '68%',
      trend: 'neutral',
      icon: 'Wallet',
      color: 'secondary'
    }
  ];

  const budgetForecasts = [
    {
      category: 'Seeds & Planting',
      budgeted: 25000,
      spent: 18200,
      projected: 23800,
      status: 'on-track'
    },
    {
      category: 'Fertilizers & Chemicals',
      budgeted: 18000,
      spent: 14200,
      projected: 17600,
      status: 'under-budget'
    },
    {
      category: 'Fuel & Energy',
      budgeted: 12000,
      spent: 11000,
      projected: 13200,
      status: 'over-budget'
    },
    {
      category: 'Labor & Services',
      budgeted: 22000,
      spent: 21000,
      projected: 21800,
      status: 'on-track'
    }
  ];

  return (
    <div className="bg-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Financial Command Center
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transform your farm's financial data into actionable insights. Track expenses, 
            analyze profitability, and optimize your budget with intelligent forecasting.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {kpiCards.map((kpi, index) => (
            <div key={index} className="bg-card rounded-2xl agricultural-shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  kpi.color === 'success' ? 'bg-success/20' :
                  kpi.color === 'primary' ? 'bg-primary/20' :
                  kpi.color === 'accent'? 'bg-accent/20' : 'bg-secondary/20'
                }`}>
                  <Icon 
                    name={kpi.icon} 
                    size={24} 
                    className={
                      kpi.color === 'success' ? 'text-success' :
                      kpi.color === 'primary' ? 'text-primary' :
                      kpi.color === 'accent'? 'text-accent' : 'text-secondary'
                    }
                  />
                </div>
                <div className={`flex items-center space-x-1 text-sm font-medium ${
                  kpi.trend === 'up' ? 'text-success' :
                  kpi.trend === 'down'? 'text-error' : 'text-muted-foreground'
                }`}>
                  {kpi.trend !== 'neutral' && (
                    <Icon 
                      name={kpi.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} 
                      size={16} 
                    />
                  )}
                  <span>{kpi.change}</span>
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground mb-1">{kpi.value}</div>
                <div className="text-sm text-muted-foreground">{kpi.title}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Expense Tracking Chart */}
          <div className="bg-card rounded-2xl agricultural-shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">Expense Tracking</h3>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-3 py-1 border border-border rounded-lg bg-input text-foreground text-sm"
              >
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={expenseData}>
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
                  <Bar dataKey="seeds" stackId="a" fill="#2D5016" />
                  <Bar dataKey="fertilizer" stackId="a" fill="#8B4513" />
                  <Bar dataKey="fuel" stackId="a" fill="#F4A460" />
                  <Bar dataKey="labor" stackId="a" fill="#228B22" />
                  <Bar dataKey="equipment" stackId="a" fill="#DAA520" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              {[
                { name: 'Seeds', color: '#2D5016' },
                { name: 'Fertilizer', color: '#8B4513' },
                { name: 'Fuel', color: '#F4A460' },
                { name: 'Labor', color: '#228B22' },
                { name: 'Equipment', color: '#DAA520' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm text-muted-foreground">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Profit Analysis */}
          <div className="bg-card rounded-2xl agricultural-shadow-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-6">Profit Analysis by Crop</h3>
            
            <div className="space-y-4">
              {profitData.map((crop, index) => (
                <div key={index} className="p-4 bg-muted rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-foreground">{crop.name}</span>
                    <span className="text-sm font-medium text-success">{crop.margin}% margin</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <span>Profit: ${crop.profit.toLocaleString()}</span>
                    <span>Expenses: ${crop.expenses.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div 
                      className="bg-success h-2 rounded-full" 
                      style={{ width: `${crop.margin}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-success mb-1">$30,100</div>
                <div className="text-sm text-muted-foreground">Total Profit This Season</div>
                <div className="text-sm text-success font-medium">+18% vs Last Year</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Expense Breakdown */}
          <div className="bg-card rounded-2xl agricultural-shadow-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-6">Expense Breakdown</h3>
            
            <div className="h-48 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expenseBreakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    dataKey="value"
                  >
                    {expenseBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`$${value.toLocaleString()}`, 'Amount']}
                    contentStyle={{ 
                      backgroundColor: '#FFFFFF', 
                      border: '1px solid #E5E5E5',
                      borderRadius: '8px'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-2">
              {expenseBreakdown.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm text-foreground">{item.name}</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    ${item.value.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ROI Trend */}
          <div className="bg-card rounded-2xl agricultural-shadow-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-6">ROI Trend</h3>
            
            <div className="h-48 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={roiTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
                  <XAxis dataKey="month" stroke="#666666" />
                  <YAxis stroke="#666666" />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'ROI']}
                    contentStyle={{ 
                      backgroundColor: '#FFFFFF', 
                      border: '1px solid #E5E5E5',
                      borderRadius: '8px'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="roi" 
                    stroke="#2D5016" 
                    strokeWidth={3}
                    dot={{ fill: '#2D5016', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">28%</div>
              <div className="text-sm text-muted-foreground">Current ROI</div>
              <div className="text-sm text-success font-medium">+5% vs Target</div>
            </div>
          </div>

          {/* Budget Forecasting */}
          <div className="bg-card rounded-2xl agricultural-shadow-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-6">Budget Forecasting</h3>
            
            <div className="space-y-4">
              {budgetForecasts.map((budget, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{budget.category}</span>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      budget.status === 'on-track' ? 'bg-success/20 text-success' :
                      budget.status === 'under-budget'? 'bg-accent/20 text-accent' : 'bg-warning/20 text-warning'
                    }`}>
                      {budget.status === 'on-track' ? 'On Track' :
                       budget.status === 'under-budget'? 'Under Budget' : 'Over Budget'}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground flex justify-between">
                    <span>Spent: ${budget.spent.toLocaleString()}</span>
                    <span>Projected: ${budget.projected.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        budget.status === 'on-track' ? 'bg-success' :
                        budget.status === 'under-budget'? 'bg-accent' : 'bg-warning'
                      }`}
                      style={{ width: `${(budget.spent / budget.budgeted) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium seasonal-transition growth-hover">
                Generate Full Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialCommandCenter;