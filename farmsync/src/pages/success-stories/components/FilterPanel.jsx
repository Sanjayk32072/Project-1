import React from 'react';

import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const FilterPanel = ({ filters, onFilterChange, onClearFilters, totalStories, filteredCount }) => {
  const farmTypeOptions = [
    { value: 'all', label: 'All Farm Types' },
    { value: 'row-crops', label: 'Row Crops' },
    { value: 'specialty-produce', label: 'Specialty Produce' },
    { value: 'organic', label: 'Organic Operations' },
    { value: 'livestock', label: 'Livestock' },
    { value: 'mixed', label: 'Mixed Operations' }
  ];

  const farmSizeOptions = [
    { value: 'all', label: 'All Farm Sizes' },
    { value: 'small', label: 'Small (< 100 acres)' },
    { value: 'medium', label: 'Medium (100-500 acres)' },
    { value: 'large', label: 'Large (500+ acres)' }
  ];

  const regionOptions = [
    { value: 'all', label: 'All Regions' },
    { value: 'midwest', label: 'Midwest' },
    { value: 'west-coast', label: 'West Coast' },
    { value: 'south', label: 'South' },
    { value: 'great-plains', label: 'Great Plains' },
    { value: 'northeast', label: 'Northeast' }
  ];

  const challengeOptions = [
    { value: 'all', label: 'All Challenges' },
    { value: 'cost-reduction', label: 'Cost Reduction' },
    { value: 'yield-optimization', label: 'Yield Optimization' },
    { value: 'water-management', label: 'Water Management' },
    { value: 'pest-control', label: 'Pest Control' },
    { value: 'crop-rotation', label: 'Crop Rotation' },
    { value: 'financial-planning', label: 'Financial Planning' }
  ];

  const hasActiveFilters = Object.values(filters).some(value => value !== 'all');

  return (
    <div className="bg-card rounded-xl p-6 agricultural-shadow">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Filter Success Stories</h3>
          <p className="text-sm text-muted-foreground">
            Showing {filteredCount} of {totalStories} stories
          </p>
        </div>
        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={onClearFilters}
            iconName="X"
            iconPosition="left"
          >
            Clear Filters
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Select
          label="Farm Type"
          options={farmTypeOptions}
          value={filters.farmType}
          onChange={(value) => onFilterChange('farmType', value)}
          className="w-full"
        />

        <Select
          label="Farm Size"
          options={farmSizeOptions}
          value={filters.farmSize}
          onChange={(value) => onFilterChange('farmSize', value)}
          className="w-full"
        />

        <Select
          label="Region"
          options={regionOptions}
          value={filters.region}
          onChange={(value) => onFilterChange('region', value)}
          className="w-full"
        />

        <Select
          label="Primary Challenge"
          options={challengeOptions}
          value={filters.challenge}
          onChange={(value) => onFilterChange('challenge', value)}
          className="w-full"
        />
      </div>

      {/* Quick Filter Tags */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="text-sm text-muted-foreground mb-3">Quick Filters:</div>
        <div className="flex flex-wrap gap-2">
          {[
            { label: 'High Yield Gains (25%+)', filter: { challenge: 'yield-optimization' } },
            { label: 'Cost Savings (20%+)', filter: { challenge: 'cost-reduction' } },
            { label: 'Organic Farms', filter: { farmType: 'organic' } },
            { label: 'Large Operations', filter: { farmSize: 'large' } },
            { label: 'Midwest Success', filter: { region: 'midwest' } }
          ].map((quickFilter, index) => (
            <button
              key={index}
              onClick={() => {
                Object.entries(quickFilter.filter).forEach(([key, value]) => {
                  onFilterChange(key, value);
                });
              }}
              className="px-3 py-1 bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground rounded-full text-xs seasonal-transition"
            >
              {quickFilter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;