import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const VideoTestimonial = ({ testimonial, featured = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
    // In a real implementation, this would trigger video playback
  };

  return (
    <div className={`bg-card rounded-xl overflow-hidden agricultural-shadow ${featured ? 'lg:col-span-2' : ''}`}>
      {/* Video Thumbnail */}
      <div className={`relative ${featured ? 'h-64' : 'h-48'} overflow-hidden bg-muted`}>
        <Image
          src={testimonial.thumbnail}
          alt={`${testimonial.farmerName} video testimonial`}
          className="w-full h-full object-cover"
        />
        
        {/* Play Button Overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <button
              onClick={handlePlayVideo}
              className="w-16 h-16 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center seasonal-transition growth-hover"
            >
              <Icon name="Play" size={24} color="white" className="ml-1" />
            </button>
          </div>
        )}

        {/* Video Duration */}
        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
          {testimonial.duration}
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
              <Icon name="Star" size={14} />
              <span>Featured Story</span>
            </span>
          </div>
        )}
      </div>

      {/* Testimonial Content */}
      <div className="p-6">
        {/* Farmer Info */}
        <div className="flex items-center space-x-3 mb-4">
          <Image
            src={testimonial.farmerAvatar}
            alt={testimonial.farmerName}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-foreground">{testimonial.farmerName}</h3>
            <p className="text-sm text-muted-foreground">
              {testimonial.farmName} • {testimonial.location}
            </p>
          </div>
        </div>

        {/* Quote Preview */}
        <blockquote className="text-muted-foreground italic mb-4">
          "{testimonial.quote}"
        </blockquote>

        {/* Key Results */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="text-center p-3 bg-success/10 rounded-lg">
            <div className="text-lg font-bold text-success">
              +{testimonial.results.improvement}%
            </div>
            <div className="text-xs text-muted-foreground">{testimonial.results.metric}</div>
          </div>
          <div className="text-center p-3 bg-primary/10 rounded-lg">
            <div className="text-lg font-bold text-primary">
              ${testimonial.results.savings}K
            </div>
            <div className="text-xs text-muted-foreground">Annual Savings</div>
          </div>
        </div>

        {/* Farm Details */}
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <div className="flex items-center space-x-1">
            <Icon name="MapPin" size={14} />
            <span>{testimonial.farmSize} acres</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Leaf" size={14} />
            <span>{testimonial.cropType}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Calendar" size={14} />
            <span>Since {testimonial.startYear}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          <Button
            variant="default"
            size="sm"
            onClick={handlePlayVideo}
            iconName="Play"
            iconPosition="left"
            className="flex-1"
          >
            Watch Full Story
          </Button>
          <Button
            variant="outline"
            size="sm"
            iconName="Download"
            iconPosition="left"
          >
            Case Study
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonial;