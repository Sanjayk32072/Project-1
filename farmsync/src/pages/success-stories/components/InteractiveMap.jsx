import React, { useState } from 'react';


const InteractiveMap = ({ stories, onLocationSelect, selectedLocation }) => {
  const [hoveredLocation, setHoveredLocation] = useState(null);

  const locations = [
    { id: 1, name: 'Iowa', x: 45, y: 35, count: 3, region: 'Midwest' },
    { id: 2, name: 'California', x: 8, y: 55, count: 4, region: 'West Coast' },
    { id: 3, name: 'Texas', x: 35, y: 70, count: 2, region: 'South' },
    { id: 4, name: 'Nebraska', x: 40, y: 40, count: 2, region: 'Great Plains' },
    { id: 5, name: 'Illinois', x: 50, y: 42, count: 3, region: 'Midwest' },
    { id: 6, name: 'Kansas', x: 38, y: 52, count: 2, region: 'Great Plains' }
  ];

  return (
    <div className="bg-card rounded-xl p-6 agricultural-shadow">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-foreground">Success Stories Across America</h3>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <span>Active Stories</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-accent rounded-full"></div>
            <span>Selected Region</span>
          </div>
        </div>
      </div>

      <div className="relative">
        {/* US Map SVG */}
        <div className="relative w-full h-96 bg-muted/30 rounded-lg overflow-hidden">
          <svg
            viewBox="0 0 100 60"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Simplified US Map Outline */}
            <path
              d="M10 15 L90 15 L90 50 L10 50 Z M15 20 L85 20 L85 45 L15 45 Z"
              fill="var(--color-muted)"
              stroke="var(--color-border)"
              strokeWidth="0.5"
            />
            
            {/* Location Markers */}
            {locations.map((location) => (
              <g key={location.id}>
                <circle
                  cx={location.x}
                  cy={location.y}
                  r={selectedLocation === location.id ? "2.5" : "2"}
                  fill={selectedLocation === location.id ? "var(--color-accent)" : "var(--color-primary)"}
                  className="cursor-pointer seasonal-transition"
                  onMouseEnter={() => setHoveredLocation(location)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  onClick={() => onLocationSelect(location.id)}
                />
                <text
                  x={location.x}
                  y={location.y - 3}
                  textAnchor="middle"
                  className="text-xs fill-foreground font-medium pointer-events-none"
                >
                  {location.count}
                </text>
              </g>
            ))}
          </svg>

          {/* Hover Tooltip */}
          {hoveredLocation && (
            <div
              className="absolute bg-popover border border-border rounded-lg p-3 agricultural-shadow-lg z-10 pointer-events-none"
              style={{
                left: `${hoveredLocation.x}%`,
                top: `${hoveredLocation.y - 10}%`,
                transform: 'translate(-50%, -100%)'
              }}
            >
              <div className="text-sm font-medium text-popover-foreground">{hoveredLocation.name}</div>
              <div className="text-xs text-muted-foreground">{hoveredLocation.count} Success Stories</div>
              <div className="text-xs text-muted-foreground">{hoveredLocation.region} Region</div>
            </div>
          )}
        </div>

        {/* Location Stats */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => onLocationSelect(location.id)}
              className={`p-3 rounded-lg text-left seasonal-transition growth-hover ${
                selectedLocation === location.id
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-muted hover:bg-muted/80'
              }`}
            >
              <div className="font-medium text-sm">{location.name}</div>
              <div className="text-xs opacity-70">{location.count} stories</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;