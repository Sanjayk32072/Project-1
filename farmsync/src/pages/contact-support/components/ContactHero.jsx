import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
              <Icon name="Headphones" size={32} className="text-primary-foreground" />
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Expert Agricultural Support
            <span className="block text-primary mt-2">When You Need It</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Our team of agricultural specialists and technical experts understand both farming urgencies and seasonal variations. Get the support you need to maximize your harvest success.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-card rounded-xl p-6 agricultural-shadow">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Clock" size={24} className="text-success" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">24/7 Emergency Support</h3>
              <p className="text-sm text-muted-foreground">Critical farming decisions can't wait. Emergency support during planting and harvest seasons.</p>
            </div>
            
            <div className="bg-card rounded-xl p-6 agricultural-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Users" size={24} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Agricultural Specialists</h3>
              <p className="text-sm text-muted-foreground">Expert consultants who understand farming operations and local agricultural conditions.</p>
            </div>
            
            <div className="bg-card rounded-xl p-6 agricultural-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="MessageSquare" size={24} className="text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Multiple Channels</h3>
              <p className="text-sm text-muted-foreground">Chat, phone, email, and community forums - choose your preferred communication method.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;