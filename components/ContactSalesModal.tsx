'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Check, X, Loader2, Building2 } from 'lucide-react';
import { useUserPlan } from '@/app/context/UserPlanContext';

interface ContactSalesModalProps {
  isOpen: boolean;
  onClose: () => void;
  inquiryType?: 'business-plan' | 'b2b' | 'demo' | 'partnership';
}

interface ContactForm {
  name: string;
  email: string;
  company: string;
  message: string;
}

export default function ContactSalesModal({ isOpen, onClose, inquiryType = 'business-plan' }: ContactSalesModalProps) {
  const { setUserPlan } = useUserPlan();
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');

  // Handle body scroll locking when modal is open
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      return () => {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && !isSubmitting) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose, isSubmitting]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!contactForm.name.trim() || !contactForm.email.trim()) {
      setError('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactForm.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    setIsSubmitting(true);
    
    // Determine subject and message based on inquiry type
    let subject = 'Business Plan Inquiry - AI Home Fix';
    let message = `Company: ${contactForm.company || 'Not provided'}\n\nInquiry: ${contactForm.message || 'Business plan inquiry'}\n\nThis is a business plan inquiry from the AI Home Fix pricing modal.`;
    
    switch (inquiryType) {
      case 'b2b':
        subject = 'B2B Inquiry - AI Home Fix';
        message = `Company: ${contactForm.company || 'Not provided'}\n\nInquiry: ${contactForm.message || 'B2B inquiry'}\n\nThis is a B2B inquiry from the AI Home Fix B2B page.`;
        break;
      case 'demo':
        subject = 'Demo Request - AI Home Fix';
        message = `Company: ${contactForm.company || 'Not provided'}\n\nInquiry: ${contactForm.message || 'Demo request'}\n\nThis is a demo request from the AI Home Fix B2B page.`;
        break;
      case 'partnership':
        subject = 'Partnership Request - AI Home Fix';
        message = `Company: ${contactForm.company || 'Not provided'}\n\nInquiry: ${contactForm.message || 'Partnership request'}\n\nThis is a partnership request from the AI Home Fix B2B page.`;
        break;
      default:
        // business-plan (default)
        break;
    }
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: contactForm.name,
          email: contactForm.email,
          subject,
          message
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setContactForm({ name: '', email: '', company: '', message: '' });
        
        // Update global user plan state
        setUserPlan('business');
        
        // Close modal after showing success message
        setTimeout(() => {
          onClose();
          setSubmitSuccess(false);
        }, 3000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (error) {
      setError('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[70] p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-xl max-w-md w-full max-h-[90vh] flex flex-col"
      >
        {/* Header - Fixed */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <Building2 className="w-4 h-4 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Contact Sales</h2>
              <p className="text-sm text-gray-500">
                {inquiryType === 'b2b' && 'B2B Inquiry'}
                {inquiryType === 'demo' && 'Demo Request'}
                {inquiryType === 'partnership' && 'Partnership Request'}
                {inquiryType === 'business-plan' && 'Business Plan Inquiry'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-2"
            disabled={isSubmitting}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          {!submitSuccess ? (
            <>
              {/* Description */}
              <div className="mb-4 md:mb-6">
                <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                  {inquiryType === 'demo' && 'Tell us about your demo requirements and our team will schedule a personalized demonstration within 24 hours.'}
                  {inquiryType === 'partnership' && 'Tell us about your partnership goals and our team will explore collaboration opportunities within 24 hours.'}
                  {(inquiryType === 'b2b' || inquiryType === 'business-plan') && 'Tell us about your business needs and our sales team will get in touch with you within 24 hours.'}
                </p>
                {/* Only show pricing block for business-plan inquiries */}
                {inquiryType === 'business-plan' && (
                  <div className="bg-purple-50 p-3 md:p-4 rounded-xl">
                    <h4 className="font-semibold text-purple-900 mb-2 text-sm md:text-base">Business Plan - $49/month</h4>
                    <ul className="text-xs md:text-sm text-purple-800 space-y-0.5 md:space-y-1">
                      <li>• Everything in Pro</li>
                      <li>• Team collaboration</li>
                      <li>• Bulk uploads</li>
                      <li>• API access</li>
                      <li>• Custom integrations</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5 md:mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base"
                    placeholder="Your full name"
                    disabled={isSubmitting}
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5 md:mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base"
                    placeholder="your@company.com"
                    disabled={isSubmitting}
                    required
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5 md:mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    value={contactForm.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base"
                    placeholder="Your company name"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5 md:mb-2">
                    Message
                  </label>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-sm md:text-base"
                    rows={3}
                    placeholder="Tell us about your business needs, team size, and specific requirements..."
                    disabled={isSubmitting}
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-3 md:px-4 py-2.5 md:py-3 rounded-xl text-sm">
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-10 md:h-12 text-base md:text-lg"
                  variant="gradient"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 md:w-5 md:h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Mail className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>

              {/* Footer Note */}
              <div className="mt-3 md:mt-4 text-center text-xs md:text-sm text-gray-500">
                <p>We'll respond within 24 hours</p>
                <p>No spam, unsubscribe anytime</p>
              </div>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-4 md:py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Thank you!</h3>
              <p className="text-gray-600 mb-4">
                Our sales team will contact you soon.
              </p>
              <div className="bg-green-50 p-4 rounded-xl">
                <p className="text-sm text-green-800">
                  We've received your inquiry and will get back to you within 24 hours with a personalized business plan proposal.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer - Fixed (only show for form state) */}
        {!submitSuccess && (
          <div className="border-t border-gray-200 p-3 md:p-4 flex-shrink-0">
            <div className="text-center text-xs text-gray-400">
              <p>Secure form • Your data is protected</p>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
