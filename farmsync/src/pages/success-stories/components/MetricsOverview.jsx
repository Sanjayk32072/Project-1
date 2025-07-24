import React from 'react';
import Icon from '../../../components/AppIcon';

const MetricsOverview = ({ metrics }) => {
  const statCards = [
    {
      title: 'Average Yield Increase',
      value: `+${metrics.avgYieldIncrease}%`,
      icon: 'TrendingUp',
      color: 'success',
      description: 'Across all success stories'
    },
    {
      title: 'Average Cost Reduction',
      value: `-${metrics.avgCostReduction}%`,
      icon: 'DollarSign',
      color: 'primary',
      description: 'In operational expenses'
    },
    {
      title: 'Total Farmers Helped',
      value: metrics.totalFarmers.toLocaleString(),
      icon: 'Users',
      color: 'accent',
      description: 'Success stories documented'
    },
    {
      title: 'Combined Farm Area',
      value: `${metrics.totalAcres.toLocaleString()}`,
      icon: 'Map',
      color: 'secondary',
      description: 'Acres under management'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      success: 'bg-success/10 text-success border-success/20',
      primary: 'bg-primary/10 text-primary border-primary/20',
      accent: 'bg-accent/10 text-accent border-accent/20',
      secondary: 'bg-secondary/10 text-secondary border-secondary/20'
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <div className="bg-card rounded-xl p-6 agricultural-shadow">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Transforming Agriculture Through Data
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Real results from real farmers who've embraced smart agriculture with FarmSync. 
          These metrics represent measurable improvements across diverse farming operations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl border-2 seasonal-transition growth-hover ${getColorClasses(stat.color)}`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(stat.color)}`}>
                <Icon name={stat.icon} size={24} />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">{stat.value}</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">{stat.title}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Insights */}
      <div className="mt-8 pt-6 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">
              Farmer Satisfaction Rate
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-success mb-2">$2.3M</div>
            <div className="text-sm text-muted-foreground">
              Total Cost Savings Generated
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">18</div>
            <div className="text-sm text-muted-foreground">
              Months Average ROI Timeline
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsOverview;