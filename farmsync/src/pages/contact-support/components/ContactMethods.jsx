import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const [activeMethod, setActiveMethod] = useState('chat');

  const contactMethods = [
    {
      id: 'chat',
      name: 'Live Chat',
      icon: 'MessageCircle',
      availability: 'Available 24/7',
      responseTime: 'Instant response',
      description: 'Get immediate help with platform navigation and quick questions.',
      color: 'success',
      action: 'Start Chat'
    },
    {
      id: 'phone',
      name: 'Phone Support',
      icon: 'Phone',
      availability: 'Mon-Fri 6AM-8PM EST',
      responseTime: 'Immediate',
      description: 'Speak directly with agricultural specialists for complex operational guidance.',
      color: 'primary',
      action: 'Call Now'
    },
    {
      id: 'email',
      name: 'Email Support',
      icon: 'Mail',
      availability: '24/7 Submission',
      responseTime: '2-4 hours',
      description: 'Detailed technical inquiries and comprehensive support documentation.',
      color: 'accent',
      action: 'Send Email'
    },
    {
      id: 'emergency',
      name: 'Emergency Line',
      icon: 'AlertTriangle',
      availability: 'Critical seasons only',
      responseTime: '15 minutes',
      description: 'Urgent agricultural decisions during time-sensitive farming periods.',
      color: 'warning',
      action: 'Emergency Call'
    }
  ];

  const contactInfo = {
    phone: '+91 8986610724 FARM-SYNC',
    email: 'support@farmsync.com',
    emergency: '+91 9334749028',
    address: '1234 Agricultural Way, Farm Valley, IA 50001'
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Choose Your Support Channel
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Different farming situations require different support approaches. Select the method that works best for your current needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Methods */}
          <div className="space-y-4">
            {contactMethods.map((method) => (
              <div
                key={method.id}
                className={`p-6 rounded-xl border-2 cursor-pointer seasonal-transition ${
                  activeMethod === method.id
                    ? 'border-primary bg-primary/5' :'border-border bg-card hover:border-primary/30'
                }`}
                onClick={() => setActiveMethod(method.id)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    method.color === 'success' ? 'bg-success/10' :
                    method.color === 'primary' ? 'bg-primary/10' :
                    method.color === 'accent'? 'bg-accent/10' : 'bg-warning/10'
                  }`}>
                    <Icon 
                      name={method.icon} 
                      size={24} 
                      className={
                        method.color === 'success' ? 'text-success' :
                        method.color === 'primary' ? 'text-primary' :
                        method.color === 'accent'? 'text-accent' : 'text-warning'
                      }
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-card-foreground">{method.name}</h3>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Icon name="Clock" size={16} />
                        <span>{method.responseTime}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-success">{method.availability}</span>
                      <Button 
                        variant={activeMethod === method.id ? 'default' : 'outline'} 
                        size="sm"
                        iconName={method.icon}
                        iconPosition="left"
                      >
                        {method.action}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="bg-card rounded-2xl p-8 agricultural-shadow">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Phone" size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-card-foreground">General Support</p>
                  <p className="text-muted-foreground">{contactInfo.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name="Mail" size={20} className="text-accent" />
                </div>
                <div>
                  <p className="font-medium text-card-foreground">Email Support</p>
                  <p className="text-muted-foreground">{contactInfo.email}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
                  <Icon name="AlertTriangle" size={20} className="text-warning" />
                </div>
                <div>
                  <p className="font-medium text-card-foreground">Emergency Line</p>
                  <p className="text-muted-foreground">{contactInfo.emergency}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" size={20} className="text-secondary" />
                </div>
                <div>
                  <p className="font-medium text-card-foreground">Office Address</p>
                  <p className="text-muted-foreground">{contactInfo.address}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-accent/5 rounded-lg border border-accent/20">
              <div className="flex items-start space-x-3">
                <Icon name="Info" size={20} className="text-accent mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-card-foreground">Seasonal Support Hours</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Extended support hours during planting (March-May) and harvest (September-November) seasons. Emergency line available for critical farming decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;