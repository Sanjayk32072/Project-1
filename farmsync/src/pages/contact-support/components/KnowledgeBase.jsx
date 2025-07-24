import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const KnowledgeBase = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: 'Grid3X3', count: 156 },
    { id: 'getting-started', name: 'Getting Started', icon: 'PlayCircle', count: 24 },
    { id: 'crop-management', name: 'Crop Management', icon: 'Sprout', count: 45 },
    { id: 'financial-tracking', name: 'Financial Tracking', icon: 'DollarSign', count: 32 },
    { id: 'analytics', name: 'Analytics & Reports', icon: 'BarChart3', count: 28 },
    { id: 'mobile-app', name: 'Mobile App', icon: 'Smartphone', count: 19 },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: 'AlertCircle', count: 8 }
  ];

  const popularArticles = [
    {
      id: 1,
      title: 'Setting Up Your First Crop Profile',
      category: 'getting-started',
      readTime: '5 min read',
      views: 2847,
      description: 'Step-by-step guide to creating and configuring your first crop profile in FarmSync.',
      tags: ['setup', 'crops', 'beginner']
    },
    {
      id: 2,
      title: 'Understanding Profit Analytics Dashboard',
      category: 'analytics',
      readTime: '8 min read',
      views: 2156,
      description: 'Learn how to interpret your profit analytics and make data-driven farming decisions.',
      tags: ['analytics', 'profit', 'dashboard']
    },
    {
      id: 3,
      title: 'Mobile Field Data Collection Best Practices',
      category: 'mobile-app',
      readTime: '6 min read',
      views: 1923,
      description: 'Maximize efficiency when collecting field data using the FarmSync mobile app.',
      tags: ['mobile', 'data-collection', 'field-work']
    },
    {
      id: 4,
      title: 'Seasonal Expense Tracking Strategies',
      category: 'financial-tracking',
      readTime: '7 min read',
      views: 1745,
      description: 'Organize your farm expenses by season for better financial planning and tax preparation.',
      tags: ['expenses', 'seasonal', 'planning']
    },
    {
      id: 5,
      title: 'Troubleshooting Sync Issues',
      category: 'troubleshooting',
      readTime: '4 min read',
      views: 1432,
      description: 'Common solutions for data synchronization problems between devices.',
      tags: ['sync', 'troubleshooting', 'technical']
    },
    {
      id: 6,
      title: 'Advanced Crop Rotation Planning',
      category: 'crop-management',
      readTime: '12 min read',
      views: 1289,
      description: 'Plan multi-year crop rotations using FarmSync\'s advanced planning tools.',
      tags: ['rotation', 'planning', 'advanced']
    }
  ];

  const filteredArticles = popularArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Knowledge Base & Self-Help
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find instant answers to common questions and learn advanced farming techniques with our comprehensive resource library.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl p-6 agricultural-shadow sticky top-24">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Browse by Category</h3>
              
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-left seasonal-transition ${
                      selectedCategory === category.id
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-card-foreground hover:bg-muted'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon name={category.icon} size={18} />
                      <span className="text-sm font-medium">{category.name}</span>
                    </div>
                    <span className="text-xs opacity-70">{category.count}</span>
                  </button>
                ))}
              </div>

              <div className="mt-8 p-4 bg-accent/5 rounded-lg border border-accent/20">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Lightbulb" size={16} className="text-accent" />
                  <span className="text-sm font-medium text-card-foreground">Quick Tip</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Can't find what you're looking for? Try using agricultural terms in your search or contact our specialists directly.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search Bar */}
            <div className="mb-8">
              <Input
                type="search"
                placeholder="Search knowledge base... (e.g., 'crop rotation', 'expense tracking', 'mobile sync')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="text-lg"
              />
            </div>

            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {selectedCategory === 'all' ? 'All Articles' : categories.find(c => c.id === selectedCategory)?.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
                  {searchQuery && ` for "${searchQuery}"`}
                </p>
              </div>
              
              <Button variant="outline" size="sm" iconName="ExternalLink" iconPosition="right">
                View All
              </Button>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredArticles.map((article) => (
                <div key={article.id} className="bg-card rounded-xl p-6 agricultural-shadow growth-hover cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon 
                          name={categories.find(c => c.id === article.category)?.icon || 'FileText'} 
                          size={16} 
                          className="text-primary" 
                        />
                      </div>
                      <span className="text-xs font-medium text-primary capitalize">
                        {categories.find(c => c.id === article.category)?.name}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Icon name="Clock" size={12} />
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Eye" size={12} />
                        <span>{article.views.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-card-foreground mb-3 line-clamp-2">
                    {article.title}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {article.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {article.tags.slice(0, 2).map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                      {article.tags.length > 2 && (
                        <span className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground">
                          +{article.tags.length - 2}
                        </span>
                      )}
                    </div>
                    
                    <Icon name="ArrowRight" size={16} className="text-primary" />
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Search" size={24} className="text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">No articles found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search terms or browse a different category.
                </p>
                <Button variant="outline" onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}>
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Contact CTA */}
            <div className="mt-12 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">Still need help?</h3>
              <p className="text-muted-foreground mb-6">
                Our agricultural specialists are ready to provide personalized support for your farming challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="default" iconName="MessageCircle" iconPosition="left">
                  Start Live Chat
                </Button>
                <Button variant="outline" iconName="Phone" iconPosition="left">
                  Schedule Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeBase;