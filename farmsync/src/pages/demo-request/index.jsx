import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import DemoTypeSelector from './components/DemoTypeSelector';
import FarmProfileForm from './components/FarmProfileForm';
import ContactInfoForm from './components/ContactInfoForm';
import SchedulingCalendar from './components/SchedulingCalendar';
import DemoConfirmation from './components/DemoConfirmation';

const DemoRequest = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDemoType, setSelectedDemoType] = useState('');
  const [formData, setFormData] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const steps = [
    { id: 1, title: 'Demo Type', description: 'Choose your preferred demo format' },
    { id: 2, title: 'Farm Profile', description: 'Tell us about your farming operation' },
    { id: 3, title: 'Contact Info', description: 'Provide your contact details' },
    { id: 4, title: 'Schedule', description: 'Pick a convenient time' },
    { id: 5, title: 'Confirmation', description: 'Review and submit your request' }
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (stepId) => {
    // Allow navigation to previous steps or current step
    if (stepId <= currentStep) {
      setCurrentStep(stepId);
    }
  };

  const handleDemoTypeSelect = (type) => {
    setSelectedDemoType(type);
  };

  const handleFormChange = (newData) => {
    setFormData(newData);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(''); // Reset time when date changes
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleEdit = (section) => {
    switch (section) {
      case 'contact':
        setCurrentStep(3);
        break;
      case 'farm':
        setCurrentStep(2);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const canProceedToNext = () => {
    switch (currentStep) {
      case 1:
        return selectedDemoType !== '';
      case 2:
        return formData.farmName && formData.farmType && formData.farmSize && formData.location;
      case 3:
        return formData.firstName && formData.lastName && formData.email && formData.location && formData.timeZone && formData.agreedToTerms;
      case 4:
        return selectedDemoType === 'self-guided' || (selectedDate && selectedTime);
      default:
        return true;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <DemoTypeSelector
            selectedType={selectedDemoType}
            onTypeSelect={handleDemoTypeSelect}
          />
        );
      case 2:
        return (
          <FarmProfileForm
            formData={formData}
            onFormChange={handleFormChange}
          />
        );
      case 3:
        return (
          <ContactInfoForm
            formData={formData}
            onFormChange={handleFormChange}
          />
        );
      case 4:
        if (selectedDemoType === 'self-guided') {
          return (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Play" size={32} className="text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Ready for Your Interactive Tour</h2>
                <p className="text-muted-foreground">
                  Your self-guided demo is ready to start immediately. No scheduling required!
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 agricultural-shadow max-w-md mx-auto">
                <h3 className="font-semibold text-foreground mb-4">What's Included:</h3>
                <ul className="space-y-2 text-sm text-left">
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-success" />
                    <span>Complete platform walkthrough</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-success" />
                    <span>Sample farm data to explore</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-success" />
                    <span>Interactive tutorials</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-success" />
                    <span>Downloadable resources</span>
                  </li>
                </ul>
              </div>
            </div>
          );
        }
        return (
          <SchedulingCalendar
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onDateSelect={handleDateSelect}
            onTimeSelect={handleTimeSelect}
          />
        );
      case 5:
        return (
          <DemoConfirmation
            formData={{
              ...formData,
              selectedDate,
              selectedTime
            }}
            demoType={selectedDemoType}
            onEdit={handleEdit}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        );
      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>Demo Request Submitted - FarmSync</title>
          <meta name="description" content="Your demo request has been submitted successfully. We'll be in touch soon!" />
        </Helmet>
        <div className="min-h-screen bg-background">
          <Header />
          <div className="pt-16">
            <div className="container mx-auto px-6 py-16">
              <div className="max-w-2xl mx-auto text-center space-y-8">
                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="CheckCircle" size={40} className="text-success" />
                </div>
                
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-4">Demo Request Submitted!</h1>
                  <p className="text-lg text-muted-foreground">
                    Thank you for your interest in FarmSync. We've received your demo request and will be in touch shortly.
                  </p>
                </div>

                <div className="bg-card rounded-lg p-6 agricultural-shadow text-left">
                  <h2 className="text-lg font-semibold text-foreground mb-4">What happens next?</h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-foreground text-xs font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">Confirmation Email</h3>
                        <p className="text-sm text-muted-foreground">You'll receive a confirmation email within 15 minutes with your demo details.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-foreground text-xs font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">Preparation Materials</h3>
                        <p className="text-sm text-muted-foreground">We'll send you customized resources based on your farm profile.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-foreground text-xs font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">Demo Session</h3>
                        <p className="text-sm text-muted-foreground">
                          {selectedDemoType === 'self-guided' ?'Access your interactive tour immediately via the link in your email.' :'Join your scheduled demo session and discover how FarmSync can transform your farming operation.'
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" onClick={() => window.location.href = '/homepage'}>
                    Return to Homepage
                  </Button>
                  <Button variant="default" onClick={() => window.location.href = '/contact-support'}>
                    Contact Support
                  </Button>
                </div>

                <div className="text-sm text-muted-foreground">
                  <p>Questions? Contact us at <a href="mailto:demo@farmsync.com" className="text-primary hover:underline">demo@farmsync.com</a> or call <a href="tel:+1-555-FARM-SYNC" className="text-primary hover:underline">(555) FARM-SYNC</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Request a Demo - FarmSync</title>
        <meta name="description" content="Schedule a personalized demo of FarmSync and discover how our intelligent agricultural management platform can transform your farming operation." />
        <meta name="keywords" content="farm management demo, agricultural software demo, farming technology demonstration" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="pt-16">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Experience FarmSync in Action
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  See how our intelligent agricultural management platform can transform your farming operation with a personalized demonstration tailored to your specific needs.
                </p>
                
                <div className="flex flex-wrap justify-center gap-8 text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={20} className="text-primary" />
                    <span className="text-foreground">45-minute personalized demo</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" size={20} className="text-primary" />
                    <span className="text-foreground">Agricultural specialists</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Calendar" size={20} className="text-primary" />
                    <span className="text-foreground">Flexible scheduling</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="bg-card border-b border-border">
            <div className="container mx-auto px-6 py-6">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between">
                  {steps.map((step, index) => (
                    <div key={step.id} className="flex items-center">
                      <button
                        onClick={() => handleStepClick(step.id)}
                        className={`flex items-center space-x-3 ${
                          step.id <= currentStep ? 'cursor-pointer' : 'cursor-not-allowed'
                        }`}
                        disabled={step.id > currentStep}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold seasonal-transition ${
                          step.id < currentStep
                            ? 'bg-success text-success-foreground'
                            : step.id === currentStep
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {step.id < currentStep ? (
                            <Icon name="Check" size={16} />
                          ) : (
                            step.id
                          )}
                        </div>
                        <div className="hidden md:block text-left">
                          <div className={`text-sm font-medium ${
                            step.id <= currentStep ? 'text-foreground' : 'text-muted-foreground'
                          }`}>
                            {step.title}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {step.description}
                          </div>
                        </div>
                      </button>
                      
                      {index < steps.length - 1 && (
                        <div className={`w-8 md:w-16 h-0.5 mx-2 md:mx-4 ${
                          step.id < currentStep ? 'bg-success' : 'bg-border'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto">
              {renderStepContent()}
              
              {/* Navigation Buttons */}
              {currentStep < 5 && (
                <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    iconName="ChevronLeft"
                    iconPosition="left"
                  >
                    Previous
                  </Button>
                  
                  <div className="text-sm text-muted-foreground">
                    Step {currentStep} of {steps.length}
                  </div>
                  
                  <Button
                    variant="default"
                    onClick={handleNext}
                    disabled={!canProceedToNext()}
                    iconName="ChevronRight"
                    iconPosition="right"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {currentStep === 4 && selectedDemoType === 'self-guided' ? 'Continue' : 'Next'}
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="bg-muted/30 py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-center text-foreground mb-12">
                  Trusted by Agricultural Professionals
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Award" size={32} className="text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Industry Recognition</h3>
                    <p className="text-sm text-muted-foreground">
                      Winner of the 2024 Agricultural Technology Innovation Award
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Users" size={32} className="text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">10,000+ Farmers</h3>
                    <p className="text-sm text-muted-foreground">
                      Trusted by agricultural professionals across all 50 states
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="TrendingUp" size={32} className="text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">25% Average ROI</h3>
                    <p className="text-sm text-muted-foreground">
                      Farmers report significant improvements in profitability
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoRequest;