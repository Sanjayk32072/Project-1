import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TestimonialCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sanjay kumar Mahto",
      title: "Organic Vegetable Farmer",
      location: "Jharkhand, India",
      farmSize: "150 acres",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      videoThumbnail: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop",
      quote: `FarmSync transformed my organic operation completely. The predictive analytics helped me increase my tomato yield by 28% while reducing water usage by 15%. The financial tracking showed me exactly where I was losing money on pest control.`,
      results: {
        yieldIncrease: "28%",
        costSavings: "$12,400",
        timeReduction: "6 hours/week"
      },
      beforeAfter: {
        before: "Manual tracking, inconsistent yields",
        after: "Data-driven decisions, 28% yield increase"
      }
    },
    {
      id: 2,
      name: "Vinay kumar",
      title: "Corn & Soybean Producer",
      location: "Jharkhand, India",
      farmSize: "800 acres",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      videoThumbnail: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop",
      quote: `The community marketplace feature connected me with three neighboring farms for equipment sharing. We saved over $45,000 in equipment costs last season. The crop management system predicted our harvest timing perfectly.`,
      results: {
        yieldIncrease: "19%",
        costSavings: "$45,000",
        timeReduction: "12 hours/week"
      },
      beforeAfter: {
        before: "Isolated farming, high equipment costs",
        after: "Collaborative network, $45K savings"
      }
    },
    {
      id: 3,
      name: "Champa kumari",
      title: "Sustainable Agriculture Consultant",
      location: "Hazaribagh, India",
      farmSize: "Managing 12 farms",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      videoThumbnail: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop",
      quote: `As a consultant managing multiple farms, FarmSync's analytics dashboard gives me real-time insights across all operations. My clients have seen an average 22% profit increase since implementing the platform's recommendations.`,
      results: {
        yieldIncrease: "22%",
        costSavings: "$89,000",
        timeReduction: "20 hours/week"
      },
      beforeAfter: {
        before: "Manual farm visits, delayed insights",
        after: "Real-time monitoring, 22% profit boost"
      }
    },
    {
      id: 4,
      name: "Prakash kumar",
      title: "Dairy & Crop Farmer",
      location: "Bokaro, India",
      farmSize: "320 acres + 150 head",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      videoThumbnail: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=300&fit=crop",
      quote: `The integrated approach to crop and livestock management is incredible. FarmSync helped me optimize feed costs by tracking crop yields and quality. Our milk production efficiency improved by 16% in just one season.`,
      results: {
        yieldIncrease: "16%",
        costSavings: "$23,800",
        timeReduction: "8 hours/week"
      },
      beforeAfter: {
        before: "Separate crop and dairy tracking",
        after: "Integrated management, 16% efficiency gain"
      }
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Real Farmers, Real Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how farmers across the country are transforming their operations 
            with FarmSync's intelligent agriculture platform.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative">
          <div className="bg-card border border-border rounded-3xl agricultural-shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Video/Image Section */}
              <div className="relative bg-muted">
                <Image
                  src={current.videoThumbnail}
                  alt={`${current.name}'s farm`}
                  className="w-full h-80 lg:h-full object-cover"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-primary/90 hover:bg-primary text-primary-foreground rounded-full w-20 h-20 p-0"
                  >
                    <Icon name="Play" size={32} />
                  </Button>
                </div>

                {/* Farm Info Overlay */}
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
                  <div className="text-sm font-medium">{current.farmSize}</div>
                  <div className="text-xs opacity-80">{current.location}</div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                {/* Quote */}
                <div className="mb-8">
                  <Icon name="Quote" size={32} className="text-primary mb-4" />
                  <blockquote className="text-lg lg:text-xl text-card-foreground leading-relaxed mb-6">
                    "{current.quote}"
                  </blockquote>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success">{current.results.yieldIncrease}</div>
                    <div className="text-xs text-muted-foreground">Yield Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{current.results.costSavings}</div>
                    <div className="text-xs text-muted-foreground">Cost Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">{current.results.timeReduction}</div>
                    <div className="text-xs text-muted-foreground">Time Saved</div>
                  </div>
                </div>

                {/* Before/After */}
                <div className="bg-muted rounded-lg p-4 mb-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-error mb-1">Before FarmSync:</div>
                      <div className="text-muted-foreground">{current.beforeAfter.before}</div>
                    </div>
                    <div>
                      <div className="font-medium text-success mb-1">After FarmSync:</div>
                      <div className="text-muted-foreground">{current.beforeAfter.after}</div>
                    </div>
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={current.avatar}
                    alt={current.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-card-foreground text-lg">{current.name}</div>
                    <div className="text-muted-foreground">{current.title}</div>
                    <div className="text-sm text-muted-foreground">{current.location}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-6 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-background border-2 border-border agricultural-shadow growth-hover"
            >
              <Icon name="ChevronLeft" size={20} />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-6 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-background border-2 border-border agricultural-shadow growth-hover"
            >
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex items-center justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full seasonal-transition ${
                index === currentTestimonial ? 'bg-primary' : 'bg-border hover:bg-muted-foreground'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Play/Pause Control */}
        <div className="flex items-center justify-center mt-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-muted-foreground hover:text-foreground"
          >
            <Icon name={isPlaying ? "Pause" : "Play"} size={16} className="mr-2" />
            {isPlaying ? "Pause" : "Play"} Auto-advance
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;