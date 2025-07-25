import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const CommunitySupport = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAskForm, setShowAskForm] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [formData, setFormData] = useState({ title: '', description: '', author: '', tags: '' });

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
    }
  ];

  const filteredDiscussions = recentDiscussions.filter((d) =>
    d.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleSubscribe = () => {
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('✅ Question submitted successfully!');
        setFormData({ title: '', description: '', author: '', tags: '' });
        setShowAskForm(false);
      } else {
        alert('❌ Submission failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('⚠️ Server error.');
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Community Support Forum</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ask questions, get expert answers, and connect with other farmers.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button variant="outline" iconName="Plus" onClick={() => setShowAskForm(!showAskForm)}>
            {showAskForm ? 'Close Form' : 'Ask Question'}
          </Button>
          <Button variant="outline" iconName="Search" onClick={() => setSearchTerm('')}>
            Clear Search
          </Button>
          <Button variant="outline" iconName="Bell" onClick={handleSubscribe}>
            {subscribed ? 'Subscribed!' : 'Subscribe to Updates'}
          </Button>
        </div>

        {/* Ask Form */}
        {showAskForm && (
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow mb-8">
            <h3 className="text-lg font-bold mb-4">Ask a New Question</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Question title"
                className="w-full border rounded p-2 mb-3"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
              <textarea
                placeholder="Describe your question..."
                className="w-full border rounded p-2 mb-3"
                rows="4"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Your name"
                className="w-full border rounded p-2 mb-3"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              />
              <input
                type="text"
                placeholder="Tags (comma separated)"
                className="w-full border rounded p-2 mb-3"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              />
              <Button variant="default" type="submit">Submit</Button>
            </form>
          </div>
        )}

        {/* Search Box */}
        <div className="max-w-md mx-auto mb-10">
          <input
            type="text"
            placeholder="Search discussions..."
            className="w-full border border-gray-300 rounded px-4 py-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Discussion List */}
        <div className="space-y-4">
          {filteredDiscussions.length === 0 ? (
            <p className="text-center text-muted-foreground">No discussions found.</p>
          ) : (
            filteredDiscussions.map((discussion) => (
              <div key={discussion.id} className="bg-white p-4 rounded shadow border hover:border-primary transition-all">
                <h4 className="font-semibold text-lg">{discussion.title}</h4>
                <p className="text-sm text-muted-foreground">
                  by {discussion.author} • {discussion.category} • {discussion.lastActivity}
                </p>
                <div className="text-xs mt-2">
                  Tags:{' '}
                  {discussion.tags.map(tag => (
                    <span key={tag} className="inline-block bg-gray-200 rounded px-2 py-0.5 mr-1">#{tag}</span>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default CommunitySupport;
