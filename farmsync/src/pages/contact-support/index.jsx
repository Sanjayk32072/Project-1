import React from 'react';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import SupportForm from './components/SupportForm';
import KnowledgeBase from './components/KnowledgeBase';
import CommunitySupport from './components/CommunitySupport';
import Button from '../../components/ui/Button';

const ContactSupport = () => {
  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        <ContactHero />
        <div id="contact-methods">
          <ContactMethods />
        </div>
        <div id="support-form">
          <SupportForm />
        </div>
        <div id="knowledge-base">
          <KnowledgeBase />
        </div>
        <div id="community-support">
          <CommunitySupport />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
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
                  <span className="text-xl font-bold text-card-foreground">FarmSync</span>
                  <p className="text-sm text-muted-foreground">Intelligent Agriculture</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Transforming traditional farming into data-driven agriculture with intelligent insights and community support.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-card-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => handleNavigation('support-form')}>Help Center</button></li>
                <li><button onClick={() => handleNavigation('community-support')}>Community Forum</button></li>
                <li><button onClick={() => handleNavigation('contact-methods')}>Contact Us</button></li>
                <li><a href="#">System Status</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-card-foreground mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => handleNavigation('knowledge-base')}>Knowledge Base</button></li>
                <li>
                  <a href="https://farmer.gov.in/imagedefault/askexpert.pdf" target="_blank" rel="noopener noreferrer">
                    API Documentation
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/playlist?list=PLhaUj2uVrjuxrUPOcEqmLfBGCLnOixQgJ" target="_blank" rel="noopener noreferrer">
                    Training Videos
                  </a>
                </li>
                <li>
                  <a href="https://farmer.gov.in/bestpractices.aspx" target="_blank" rel="noopener noreferrer">
                    Best Practices
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} FarmSync. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-card-foreground">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-card-foreground">Terms of Service</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-card-foreground">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactSupport;