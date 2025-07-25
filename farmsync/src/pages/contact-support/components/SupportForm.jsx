import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import axios from 'axios';

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
    { value: 'technical', label: 'Technical Support' },
    { value: 'agricultural', label: 'Agricultural Consultation' },
    { value: 'sales', label: 'Sales & Pricing' },
    { value: 'partnership', label: 'Partnership Opportunities' },
    { value: 'feedback', label: 'Feedback & Suggestions' },
    { value: 'billing', label: 'Billing & Account' }
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
    { value: 'medium', label: 'Medium - Response within 24 hours' },
    { value: 'high', label: 'High - Response within 4 hours' },
    { value: 'critical', label: 'Critical - Urgent farming decision' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post('http://localhost:8080/api/support', formData);
      setSubmitSuccess(true);
      setFormData({
        inquiryType: '', name: '', email: '', phone: '',
        farmSize: '', urgency: '', subject: '', message: ''
      });
    } catch (error) {
      console.error('Submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="text-center p-8 bg-green-100 rounded-xl">
        <Icon name="CheckCircle" size={40} className="text-green-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold">Message Sent!</h2>
        <p className="mt-2 text-gray-700">We'll respond within your specified urgency level.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Select
        label="Support Type"
        required
        options={inquiryTypes}
        value={formData.inquiryType}
        onChange={val => handleInputChange('inquiryType', val)}
      />
      <Input label="Full Name" required value={formData.name} onChange={e => handleInputChange('name', e.target.value)} />
      <Input label="Email" type="email" required value={formData.email} onChange={e => handleInputChange('email', e.target.value)} />
      <Input label="Phone" value={formData.phone} onChange={e => handleInputChange('phone', e.target.value)} />
      <Select
        label="Farm Size"
        options={farmSizes}
        value={formData.farmSize}
        onChange={val => handleInputChange('farmSize', val)}
      />
      <Select
        label="Urgency"
        required
        options={urgencyLevels}
        value={formData.urgency}
        onChange={val => handleInputChange('urgency', val)}
      />
      <Input label="Subject" required value={formData.subject} onChange={e => handleInputChange('subject', e.target.value)} />
      <textarea
        required
        value={formData.message}
        onChange={e => handleInputChange('message', e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md"
        rows={4}
        placeholder="Write your message here..."
      />
      <div className="flex gap-4">
        <Button type="submit" variant="default" size="lg" loading={isSubmitting} iconName="Send">
          {isSubmitting ? 'Sending...' : 'Send Support Request'}
        </Button>
        <Button
          type="button"
          variant="outline"
          size="lg"
          iconName="Phone"
          onClick={() => window.location.href = 'tel:+918986610724'}
        >
          Call Instead
        </Button>
      </div>
    </form>
  );
};

export default SupportForm;
