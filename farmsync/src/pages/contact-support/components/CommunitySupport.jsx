import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const CommunitySupport = () => {
  const [activeTab, setActiveTab] = useState('discussions');

  const forumStats = {
    totalMembers: 12847,
    activeToday: 342,
    questionsAnswered: 8934,
    expertContributors: 156
  };

  const recentDiscussions = [
    {
      id: 1,
      title: 'Best practices for corn planting in clay soil?',
      author: 'Sachin',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      category: 'Crop Management',
      replies: 23,
      views: 456,
      lastActivity: '2 hours ago',
      isAnswered: true,
      tags: ['corn', 'soil', 'planting']
    },
    {
      id: 2,
      title: 'Organic pest control methods for tomatoes',
      author: 'Vijay kumar',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      category: 'Pest Management',
      replies: 18,
      views: 289,
      lastActivity: '4 hours ago',
      isAnswered: false,
      tags: ['organic', 'pest-control', 'tomatoes']
    },
    {
      id: 3,
      title: 'ROI calculation for new irrigation system',
      author: 'Amir dev',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      category: 'Financial Planning',
      replies: 31,
      views: 672,
      lastActivity: '6 hours ago',
      isAnswered: true,
      tags: ['irrigation', 'roi', 'investment']
    },
    {
      id: 4,
      title: 'Weather data integration with FarmSync',
      author: 'Rajesh kumar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      category: 'Technical Support',
      replies: 12,
      views: 234,
      lastActivity: '8 hours ago',
      isAnswered: false,
      tags: ['weather', 'integration', 'api']
    }
  ];

  const expertContributors = [
    {
      id: 1,
      name: 'Dr. Sanjay kumar',
      title: 'Agricultural Scientist',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150',
      expertise: 'Soil Science & Crop Rotation',
      contributions: 234,
      rating: 4.9,
      isOnline: true
    },
    {
      id: 2,
      name: 'vinay kumar',
      title: 'Farm Management Consultant',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150',
      expertise: 'Financial Planning & Analytics',
      contributions: 189,
      rating: 4.8,
      isOnline: false
    },
    {
      id: 3,
      name: 'Rishabh pant',
      title: 'Sustainable Agriculture Expert',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150',
      expertise: 'Organic Farming & Sustainability',
      contributions: 156,
      rating: 4.9,
      isOnline: true
    }
  ];

  const communityFeatures = [
    {
      icon: 'Users',
      title: 'Peer-to-Peer Learning',
      description: 'Connect with farmers facing similar challenges and share practical solutions.'
    },
    {
      icon: 'Award',
      title: 'Expert Contributors',
      description: 'Get advice from agricultural scientists, consultants, and experienced farmers.'
    },
    {
      icon: 'MessageSquare',
      title: 'Real-Time Discussions',
      description: 'Join live conversations about seasonal farming topics and urgent questions.'
    },
    {
      icon: 'BookOpen',
      title: 'Knowledge Sharing',
      description: 'Access community-generated guides, tips, and best practices.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Community Support Forum
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of farmers sharing knowledge, solving problems together, and building a stronger agricultural community.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-card rounded-xl p-6 text-center agricultural-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Users" size={24} className="text-primary" />
            </div>
            <div className="text-2xl font-bold text-card-foreground">{forumStats.totalMembers.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Community Members</div>
          </div>
          
          <div className="bg-card rounded-xl p-6 text-center agricultural-shadow">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Activity" size={24} className="text-success" />
            </div>
            <div className="text-2xl font-bold text-card-foreground">{forumStats.activeToday}</div>
            <div className="text-sm text-muted-foreground">Active Today</div>
          </div>
          
          <div className="bg-card rounded-xl p-6 text-center agricultural-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="CheckCircle" size={24} className="text-accent" />
            </div>
            <div className="text-2xl font-bold text-card-foreground">{forumStats.questionsAnswered.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Questions Answered</div>
          </div>
          
          <div className="bg-card rounded-xl p-6 text-center agricultural-shadow">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Award" size={24} className="text-secondary" />
            </div>
            <div className="text-2xl font-bold text-card-foreground">{forumStats.expertContributors}</div>
            <div className="text-sm text-muted-foreground">Expert Contributors</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Forum Content */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl agricultural-shadow">
              {/* Tab Navigation */}
              <div className="border-b border-border p-6">
                <div className="flex space-x-1">
                  <button
                    onClick={() => setActiveTab('discussions')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium seasonal-transition ${
                      activeTab === 'discussions' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-card-foreground hover:bg-muted'
                    }`}
                  >
                    Recent Discussions
                  </button>
                  <button
                    onClick={() => setActiveTab('experts')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium seasonal-transition ${
                      activeTab === 'experts' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-card-foreground hover:bg-muted'
                    }`}
                  >
                    Expert Contributors
                  </button>
                </div>
              </div>

              {/* Discussions Tab */}
              {activeTab === 'discussions' && (
                <div className="p-6">
                  <div className="space-y-4">
                    {recentDiscussions.map((discussion) => (
                      <div key={discussion.id} className="p-4 border border-border rounded-lg hover:border-primary/30 seasonal-transition cursor-pointer">
                        <div className="flex items-start space-x-4">
                          <Image
                            src={discussion.avatar}
                            alt={discussion.author}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="text-base font-semibold text-card-foreground truncate">
                                {discussion.title}
                              </h4>
                              {discussion.isAnswered && (
                                <div className="w-5 h-5 bg-success/10 rounded-full flex items-center justify-center">
                                  <Icon name="Check" size={12} className="text-success" />
                                </div>
                              )}
                            </div>
                            
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                              <span>by {discussion.author}</span>
                              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                                {discussion.category}
                              </span>
                              <span>{discussion.lastActivity}</span>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex flex-wrap gap-1">
                                {discussion.tags.map((tag) => (
                                  <span key={tag} className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground">
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                              
                              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                  <Icon name="MessageSquare" size={12} />
                                  <span>{discussion.replies}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Icon name="Eye" size={12} />
                                  <span>{discussion.views}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Button variant="outline" iconName="ArrowRight" iconPosition="right">
                      View All Discussions
                    </Button>
                  </div>
                </div>
              )}

              {/* Experts Tab */}
              {activeTab === 'experts' && (
                <div className="p-6">
                  <div className="space-y-4">
                    {expertContributors.map((expert) => (
                      <div key={expert.id} className="p-4 border border-border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <Image
                              src={expert.avatar}
                              alt={expert.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            {expert.isOnline && (
                              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-card"></div>
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className="font-semibold text-card-foreground">{expert.name}</h4>
                              <div className="flex items-center space-x-1">
                                <Icon name="Star" size={12} className="text-warning fill-current" />
                                <span className="text-xs text-muted-foreground">{expert.rating}</span>
                              </div>
                            </div>
                            
                            <p className="text-sm text-primary font-medium mb-1">{expert.title}</p>
                            <p className="text-sm text-muted-foreground mb-2">{expert.expertise}</p>
                            
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-muted-foreground">
                                {expert.contributions} contributions
                              </span>
                              <Button variant="outline" size="sm">
                                Ask Question
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Join Community CTA */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Join Our Community</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with fellow farmers and get answers to your agricultural questions.
                </p>
                <Button variant="default" fullWidth iconName="UserPlus" iconPosition="left">
                  Join Forum
                </Button>
              </div>
            </div>

            {/* Community Features */}
            <div className="bg-card rounded-xl p-6 agricultural-shadow">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Community Features</h3>
              <div className="space-y-4">
                {communityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={feature.icon} size={16} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-card-foreground mb-1">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-card rounded-xl p-6 agricultural-shadow">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" fullWidth iconName="Plus" iconPosition="left">
                  Ask Question
                </Button>
                <Button variant="outline" fullWidth iconName="Search" iconPosition="left">
                  Search Forum
                </Button>
                <Button variant="outline" fullWidth iconName="Bell" iconPosition="left">
                  Subscribe to Updates
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySupport;