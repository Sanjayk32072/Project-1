import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const SupportForm = () => {
  const [formData, setFormData] = useState({
    inquiryType: '',
    name: '',
    email: '',
    phone: '',
    farmSize: '',
    urgency: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const inquiryTypes = [
    { value: 'technical', label: 'Technical Support', description: 'Platform functionality and troubleshooting' },
    { value: 'agricultural', label: 'Agricultural Consultation', description: 'Farming operations and best practices' },
    { value: 'sales', label: 'Sales & Pricing', description: 'Subscription plans and features' },
    { value: 'partnership', label: 'Partnership Opportunities', description: 'Business partnerships and integrations' },
    { value: 'feedback', label: 'Feedback & Suggestions', description: 'Product improvements and feature requests' },
    { value: 'billing', label: 'Billing & Account', description: 'Payment issues and account management' }
  ];

  const farmSizes = [
    { value: 'small', label: 'Small Farm (1-50 acres)' },
    { value: 'medium', label: 'Medium Farm (51-500 acres)' },
    { value: 'large', label: 'Large Farm (501-2000 acres)' },
    { value: 'enterprise', label: 'Enterprise Farm (2000+ acres)' },
    { value: 'consultant', label: 'Agricultural Consultant' },
    { value: 'other', label: 'Other' }
  ];

  const urgencyLevels = [
    { value: 'low', label: 'Low - General inquiry' },
    { value: 'medium', label: 'Medium - Need response within 24 hours' },
    { value: 'high', label: 'High - Need response within 4 hours' },
    { value: 'critical', label: 'Critical - Urgent farming decision needed' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        inquiryType: '',
        name: '',
        email: '',
        phone: '',
        farmSize: '',
        urgency: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  if (submitSuccess) {
    return (
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-card rounded-2xl p-12 text-center agricultural-shadow">
            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={40} className="text-success" />
            </div>
            <h2 className="text-3xl font-bold text-card-foreground mb-4">Message Sent Successfully!</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Thank you for contacting FarmSync. Our agricultural specialists will review your inquiry and respond within the timeframe you specified.
            </p>
            <div className="bg-success/5 rounded-lg p-4 border border-success/20">
              <p className="text-sm text-success font-medium">
                Expected Response Time: Based on your urgency level, you can expect a response within {
                  formData.urgency === 'critical' ? '15 minutes' :
                  formData.urgency === 'high' ? '4 hours' :
                  formData.urgency === 'medium'? '24 hours' : '48 hours'
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Get Expert Agricultural Support
          </h2>
          <p className="text-lg text-muted-foreground">
            Tell us about your farming challenge and we'll connect you with the right specialist.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 lg:p-12 agricultural-shadow">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Inquiry Type */}
            <div>
              <Select
                label="What type of support do you need?"
                description="This helps us route your inquiry to the right specialist"
                required
                options={inquiryTypes}
                value={formData.inquiryType}
                onChange={(value) => handleInputChange('inquiryType', value)}
                placeholder="Select inquiry type"
              />
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter your full name"
              />
              
              <Input
                label="Email Address"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="your.email@example.com"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Phone Number"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="(555) 123-4567"
                description="Optional - for urgent inquiries"
              />
              
              <Select
                label="Farm Size"
                options={farmSizes}
                value={formData.farmSize}
                onChange={(value) => handleInputChange('farmSize', value)}
                placeholder="Select farm size"
                description="Helps us provide relevant advice"
              />
            </div>

            {/* Urgency and Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Urgency Level"
                required
                options={urgencyLevels}
                value={formData.urgency}
                onChange={(value) => handleInputChange('urgency', value)}
                placeholder="Select urgency level"
              />
              
              <Input
                label="Subject"
                type="text"
                required
                value={formData.subject}
                onChange={(e) => handleInputChange('subject', e.target.value)}
                placeholder="Brief description of your inquiry"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">
                Detailed Message *
              </label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Please provide detailed information about your farming challenge, current situation, and what specific help you need..."
                rows={6}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-card-foreground bg-input"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Include details about your crops, farming practices, timeline, and any specific challenges you're facing.
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                type="submit"
                variant="default"
                size="lg"
                loading={isSubmitting}
                iconName="Send"
                iconPosition="right"
                className="flex-1"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Support Request'}
              </Button>
              
              <Button
                type="button"
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
              >
                Call Instead
              </Button>
            </div>

            {/* Additional Info */}
            <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
              <div className="flex items-start space-x-3">
                <Icon name="Shield" size={20} className="text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-card-foreground">Your Privacy is Protected</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    All information shared is confidential and used solely to provide you with the best agricultural support. We never share your farming data with third parties.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SupportForm;