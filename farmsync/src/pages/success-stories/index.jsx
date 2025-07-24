import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import InteractiveMap from './components/InteractiveMap';
import StoryCard from './components/StoryCard';
import FilterPanel from './components/FilterPanel';
import VideoTestimonial from './components/VideoTestimonial';
import MetricsOverview from './components/MetricsOverview';
import StoryModal from './components/StoryModal';

const SuccessStories = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    farmType: 'all',
    farmSize: 'all',
    region: 'all',
    challenge: 'all'
  });

  // Mock success stories data
  const successStories = [
    {
      id: 1,
      farmerName: "Sanjay kuma patel",
      farmName: "Sanjay Family Farms",
      location: "Bokaro",
      region: "midwest",
      farmSize: "450 acres",
      farmType: "row-crops",
      yearsExperience: 15,
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop",
      farmerAvatar: "https://randomuser.me/api/portraits/women/32.jpg",
      challenge: `Managing variable soil conditions across our 450-acre operation was becoming increasingly difficult. Traditional methods weren't giving us the precision we needed to optimize yields while controlling costs. We were seeing inconsistent results across different field sections.`,
      solution: `Implemented FarmSync's precision agriculture tools with soil mapping and variable rate application features.`,
      results: `Achieved remarkable improvements in both yield consistency and input efficiency through data-driven field management.`,
      testimonialQuote: `FarmSync helped us understand our fields like never before. The soil mapping feature alone saved us thousands in fertilizer costs while boosting our yields.`,
      metrics: {
        yieldIncrease: 31,
        costReduction: 18,
        profitIncrease: 23
      },
      featuresUsed: ["Soil Mapping", "Variable Rate Application", "Yield Analytics", "Cost Tracking", "Weather Integration"],
      implementationDate: "March 2023",
      primaryCrops: "Corn, Soybeans",
      timeline: {
        started: "March 2023",
        firstResults: "June 2023",
        majorBreakthrough: "September 2023",
        currentStatus: "Present"
      }
    },
    {
      id: 2,
      farmerName: "Ram Rodriguez",
      farmName: "xyz Organic Farms",
      location: "Ranchi",
      region: "west-coast",
      farmSize: "125 acres",
      farmType: "organic",
      yearsExperience: 22,
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop",
      farmerAvatar: "https://randomuser.me/api/portraits/men/45.jpg",
      challenge: `Transitioning to organic certification while maintaining profitability was our biggest challenge. We needed to track every input and practice meticulously while optimizing our crop rotation for soil health and pest management.`,
      solution: `Utilized FarmSync's organic compliance tracking and crop rotation optimization tools.`,
      results: `Successfully achieved organic certification while improving soil health and maintaining competitive yields.`,
      testimonialQuote: `The compliance tracking in FarmSync made our organic certification process seamless. We now have complete traceability for every practice on our farm.`,
      metrics: {
        yieldIncrease: 19,
        costReduction: 25,
        profitIncrease: 34
      },
      featuresUsed: ["Organic Compliance", "Crop Rotation Planning", "Pest Management", "Financial Tracking", "Certification Management"],
      implementationDate: "January 2023",
      primaryCrops: "Organic Vegetables, Herbs"
    },
    {
      id: 3,
      farmerName: "Ajay sharma",
      farmName: "Thompson Grain Co.",
      location: "HZB",
      region: "great-plains",
      farmSize: "1,200 acres",
      farmType: "row-crops",
      yearsExperience: 28,
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop",
      farmerAvatar: "https://randomuser.me/api/portraits/men/52.jpg",
      challenge: `Managing such a large operation efficiently was becoming overwhelming. We needed better visibility into our costs, equipment usage, and field performance to make informed decisions about resource allocation.`,
      solution: `Implemented comprehensive farm management with equipment tracking and field analytics.`,
      results: `Streamlined operations across all 1,200 acres with significant improvements in efficiency and profitability.`,
      testimonialQuote: `FarmSync gave us the visibility we needed to run our large operation like a well-oiled machine. Every decision is now backed by solid data.`,
      metrics: {
        yieldIncrease: 22,
        costReduction: 15,
        profitIncrease: 28
      },
      featuresUsed: ["Equipment Tracking", "Field Analytics", "Cost Management", "Inventory Control", "Performance Dashboards"],
      implementationDate: "April 2023",
      primaryCrops: "Wheat, Corn, Soybeans"
    },
    {
      id: 4,
      farmerName: "Talesh kr",
      farmName: "Sunrise Specialty Farms",
      location: "Gumia",
      region: "west-coast",
      farmSize: "85 acres",
      farmType: "specialty-produce",
      yearsExperience: 12,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
      farmerAvatar: "https://randomuser.me/api/portraits/women/28.jpg",
      challenge: `Growing specialty crops for high-end markets requires precise timing and quality control. We needed better tracking of harvest windows, quality metrics, and customer delivery schedules to maximize our premium pricing.`,
      solution: `Leveraged FarmSync's harvest planning and quality tracking features for specialty crop management.`,
      results: `Improved harvest timing and quality consistency, leading to stronger relationships with premium buyers.`,
      testimonialQuote: `The harvest planning tools help us hit those critical quality windows that our premium buyers demand. Our rejection rates dropped to almost zero.`,
      metrics: {
        yieldIncrease: 16,
        costReduction: 12,
        profitIncrease: 41
      },
      featuresUsed: ["Harvest Planning", "Quality Tracking", "Customer Management", "Market Analytics", "Delivery Scheduling"],
      implementationDate: "February 2023",
      primaryCrops: "Specialty Vegetables, Berries"
    },
    {
      id: 5,
      farmerName: "Bhunesh",
      farmName: "Bhunesh Family Ranch",
      location: "banaso",
      region: "south",
      farmSize: "800 acres",
      farmType: "mixed",
      yearsExperience: 35,
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&h=600&fit=crop",
      farmerAvatar: "https://randomuser.me/api/portraits/men/58.jpg",
      challenge: `Running a mixed operation with both crops and livestock presented unique challenges in resource allocation and integrated management. We needed a system that could handle the complexity of our diversified farm.`,
      solution: `Implemented integrated crop and livestock management with resource optimization tools.`,
      results: `Achieved better integration between crop and livestock operations, optimizing resource use across the entire farm.`,
      testimonialQuote: `FarmSync handles our complex mixed operation beautifully. The integration between crop and livestock management has improved our overall efficiency tremendously.`,
      metrics: {
        yieldIncrease: 24,
        costReduction: 20,
        profitIncrease: 32
      },
      featuresUsed: ["Integrated Management", "Resource Optimization", "Livestock Tracking", "Pasture Management", "Feed Planning"],
      implementationDate: "May 2023",
      primaryCrops: "Hay, Pasture, Feed Crops"
    },
    {
      id: 6,
      farmerName: "Lisa Anderson",
      farmName: "Green Valley Organics",
      location: "HJH",
      region: "midwest",
      farmSize: "320 acres",
      farmType: "organic",
      yearsExperience: 18,
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop",
      farmerAvatar: "https://randomuser.me/api/portraits/women/42.jpg",
      challenge: `Balancing organic practices with economic viability required careful monitoring of soil health, pest populations, and input costs. We needed better data to make informed decisions about organic treatments and timing.`,
      solution: `Used FarmSync's organic farming tools with integrated pest and soil health monitoring.`,
      results: `Improved organic yields while reducing input costs through better timing and targeted applications.`,
      testimonialQuote: `The soil health monitoring has been a game-changer for our organic operation. We can see the improvements in real-time and adjust our practices accordingly.`,
      metrics: {
        yieldIncrease: 27,
        costReduction: 22,
        profitIncrease: 29
      },
      featuresUsed: ["Soil Health Monitoring", "Organic Pest Management", "Input Optimization", "Certification Tracking", "Yield Analysis"],
      implementationDate: "June 2023",
      primaryCrops: "Organic Corn, Soybeans, Vegetables"
    }
  ];

  // Mock video testimonials data
  const videoTestimonials = [
    {
      id: 1,
      farmerName: "SANJAY",
      farmName: "SANJAY Family Farms",
      location: "GUMIA",
      thumbnail: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop",
      farmerAvatar: "https://randomuser.me/api/portraits/women/32.jpg",
      duration: "3:45",
      quote: "FarmSync transformed how we manage our 450-acre operation. The data insights help us make better decisions every day.",
      results: {
        improvement: 31,
        metric: "Yield Increase",
        savings: 45
      },
      farmSize: "450",
      cropType: "Row Crops",
      startYear: "2023"
    },
    {
      id: 2,
      farmerName: "vikash Rodriguez",
      farmName: "Rodriguez Organic Farms",
      location: "GUMIA",
      thumbnail: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop",
      farmerAvatar: "https://randomuser.me/api/portraits/men/45.jpg",
      duration: "4:12",
      quote: "The organic compliance tracking made our certification process seamless and stress-free.",
      results: {
        improvement: 34,
        metric: "Profit Increase",
        savings: 32
      },
      farmSize: "125",
      cropType: "Organic Produce",
      startYear: "2023"
    },
    {
      id: 3,
      farmerName: "vivek kr",
      farmName: "vivek Grain Co.",
      location: "bhopal",
      thumbnail: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop",
      farmerAvatar: "https://randomuser.me/api/portraits/men/52.jpg",
      duration: "5:20",
      quote: "Managing 1,200 acres efficiently seemed impossible until we found FarmSync. Now every decision is data-driven.",
      results: {
        improvement: 28,
        metric: "Profit Increase",
        savings: 180
      },
      farmSize: "1,200",
      cropType: "Grain Crops",
      startYear: "2023"
    }
  ];

  // Mock metrics data
  const overallMetrics = {
    avgYieldIncrease: 23,
    avgCostReduction: 19,
    totalFarmers: 1247,
    totalAcres: 156780
  };

  // Filter stories based on current filters
  const filteredStories = successStories.filter(story => {
    if (filters.farmType !== 'all' && story.farmType !== filters.farmType) return false;
    if (filters.region !== 'all' && story.region !== filters.region) return false;
    if (filters.farmSize !== 'all') {
      const acres = parseInt(story.farmSize);
      if (filters.farmSize === 'small' && acres >= 100) return false;
      if (filters.farmSize === 'medium' && (acres < 100 || acres > 500)) return false;
      if (filters.farmSize === 'large' && acres <= 500) return false;
    }
    return true;
  });

  const handleLocationSelect = (locationId) => {
    setSelectedLocation(locationId === selectedLocation ? null : locationId);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      farmType: 'all',
      farmSize: 'all',
      region: 'all',
      challenge: 'all'
    });
  };

  const handleViewStoryDetails = (story) => {
    setSelectedStory(story);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStory(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Success Stories - FarmSync | Real Farmer Transformations</title>
        <meta name="description" content="Discover how farmers across America are transforming their operations with FarmSync. Real stories, measurable results, and proven ROI from our agricultural management platform." />
        <meta name="keywords" content="farm success stories, agricultural transformation, farming ROI, precision agriculture results, farm management success" />
      </Helmet>

      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Real Farmers, Real Results
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Discover how farmers across America are transforming their operations with FarmSync. 
                From small family farms to large commercial operations, see the measurable impact of 
                data-driven agriculture on yield, costs, and profitability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Play"
                  iconPosition="left"
                  className="bg-primary hover:bg-primary/90"
                >
                  Watch Success Stories
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Download"
                  iconPosition="left"
                >
                  Download Case Studies
                </Button>
              </div>
            </div>

            {/* Metrics Overview */}
            <MetricsOverview metrics={overallMetrics} />
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <InteractiveMap
              stories={successStories}
              onLocationSelect={handleLocationSelect}
              selectedLocation={selectedLocation}
            />
          </div>
        </section>

        {/* Filter and Stories Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Explore Success Stories
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Filter by farm type, size, region, or challenge to find stories most relevant to your operation. 
                Each story includes detailed metrics and downloadable case studies.
              </p>
            </div>

            {/* Filter Panel */}
            <div className="mb-12">
              <FilterPanel
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
                totalStories={successStories.length}
                filteredCount={filteredStories.length}
              />
            </div>

            {/* Stories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories.map((story) => (
                <StoryCard
                  key={story.id}
                  story={story}
                  onViewDetails={handleViewStoryDetails}
                />
              ))}
            </div>

            {/* No Results Message */}
            {filteredStories.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No Stories Found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filters to see more success stories.
                </p>
                <Button
                  variant="outline"
                  onClick={handleClearFilters}
                  iconName="RotateCcw"
                  iconPosition="left"
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Video Testimonials Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Hear From Our Farmers
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Watch farmers share their transformation stories in their own words. 
                These video testimonials showcase real results from real operations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {videoTestimonials.map((testimonial, index) => (
                <VideoTestimonial
                  key={testimonial.id}
                  testimonial={testimonial}
                  featured={index === 0}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8">
              Join thousands of farmers who have transformed their operations with FarmSync. 
              Start your free trial today and see the difference data-driven farming can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                iconName="Rocket"
                iconPosition="left"
                className="bg-background text-foreground hover:bg-background/90"
              >
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Trusted by Agricultural Leaders
              </h3>
              <p className="text-muted-foreground">
                Endorsed by universities, extension services, and industry associations
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {[
                "USDA Partnership",
                "Agricultural Extension",
                "Farm Bureau Endorsed",
                "University Research"
              ].map((trust, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-muted rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Icon name="Award" size={24} className="text-muted-foreground" />
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">{trust}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Story Modal */}
      <StoryModal
        story={selectedStory}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary-foreground"
                  >
                    <path
                      d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12 16C12 16 8 18 8 22H16C16 18 12 16 12 16Z"
                      fill="currentColor"
                      opacity="0.7"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-bold">FarmSync</div>
                  <div className="text-sm opacity-80">Intelligent Agriculture</div>
                </div>
              </div>
              <p className="text-background/80 mb-4">
                Transforming traditional farming into data-driven agriculture. 
                Join thousands of farmers who trust FarmSync for their success.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Success Stories</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>Case Studies</li>
                <li>Video Testimonials</li>
                <li>ROI Calculator</li>
                <li>Farmer Directory</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>Download Reports</li>
                <li>Research Papers</li>
                <li>Best Practices</li>
                <li>Industry Insights</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
            <p>&copy; {new Date().getFullYear()} FarmSync. All rights reserved. Empowering farmers with intelligent agriculture solutions.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SuccessStories;