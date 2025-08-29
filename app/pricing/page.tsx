'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, Zap, Crown, Calendar, DollarSign, Shield, Users, X } from 'lucide-react';
import { useUserPlan } from '@/app/context/UserPlanContext';
import ContactSalesModal from '@/components/ContactSalesModal';

const plans = [
  {
    name: 'Free',
    description: 'Perfect for trying our AI assistant',
    price: { monthly: '$0', annual: '$0' },
    period: 'forever',
    features: [
      '1 diagnosis',
      'Basic step-by-step guide',
      'Standard processing',
      'Community support'
    ],
    icon: Star,
    popular: false,
    cta: 'Get Started',
    href: '/assistant'
  },
  {
    name: 'Pro',
    description: 'For homeowners who want unlimited access',
    price: { monthly: '$19', annual: '$16' },
    period: { monthly: 'per month', annual: 'per month' },
    features: [
      'Unlimited diagnoses',
      'Priority AI processing',
      'Detailed repair guides with photos',
      'Parts & tools recommendations',
      'Email support',
      'Export to PDF'
    ],
    icon: Zap,
    popular: true,
    cta: 'Start Pro Trial',
    href: '/checkout?plan=pro'
  },
  {
    name: 'Business',
    description: 'For contractors and property managers',
    price: { monthly: '$49', annual: '$42' },
    period: { monthly: 'per month', annual: 'per month' },
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Bulk uploads',
      'API access',
      'Priority support',
      'Custom integrations',
      'Analytics dashboard'
    ],
    icon: Crown,
    popular: false,
    cta: 'Contact Sales',
    href: '/contact'
  }
];

const comparisonFeatures = [
  {
    feature: 'Diagnoses per month',
    free: '1',
    pro: 'Unlimited',
    business: 'Unlimited'
  },
  {
    feature: 'AI Processing Speed',
    free: 'Standard',
    pro: 'Priority',
    business: 'Priority'
  },
  {
    feature: 'Step-by-step Guides',
    free: 'Basic',
    pro: 'Detailed + Photos',
    business: 'Detailed + Photos'
  },
  {
    feature: 'Parts & Tools',
    free: '—',
    pro: '✓',
    business: '✓'
  },
  {
    feature: 'Export to PDF',
    free: '—',
    pro: '✓',
    business: '✓'
  },
  {
    feature: 'Email Support',
    free: '—',
    pro: '✓',
    business: 'Priority'
  },
  {
    feature: 'Team Collaboration',
    free: '—',
    pro: '—',
    business: '✓'
  },
  {
    feature: 'API Access',
    free: '—',
    pro: '—',
    business: '✓'
  },
  {
    feature: 'Bulk Uploads',
    free: '—',
    pro: '—',
    business: '✓'
  },
  {
    feature: 'Analytics Dashboard',
    free: '—',
    pro: '—',
    business: '✓'
  }
];

export default function PricingPage() {
  const { isPro, isBusiness } = useUserPlan();
  const [isAnnual, setIsAnnual] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isContactSalesModalOpen, setIsContactSalesModalOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Dynamic plans based on user's current plan
  const getPlans = () => {
    // Calculate annual prices with 45% discount
    const proMonthlyPrice = 19;
    const businessMonthlyPrice = 49;
    
    const proAnnualPrice = Math.round(proMonthlyPrice * 12 * 0.55); // 45% discount
    const businessAnnualPrice = Math.round(businessMonthlyPrice * 12 * 0.55); // 45% discount
    
    const proMonthlyEquivalent = Math.round(proAnnualPrice / 12);
    const businessMonthlyEquivalent = Math.round(businessAnnualPrice / 12);
    
    return [
      {
        name: 'Free',
        description: 'Perfect for trying our AI assistant',
        price: { monthly: '$0', annual: '$0' },
        period: 'forever',
        features: [
          '1 diagnosis',
          'Basic step-by-step guide',
          'Standard processing',
          'Community support'
        ],
        icon: Star,
        popular: false,
        cta: isPro || isBusiness ? 'Use AI Helper' : 'Get Started',
        href: '/assistant'
      },
      {
        name: 'Pro',
        description: 'For homeowners who want unlimited access',
        price: { 
          monthly: `$${proMonthlyPrice}`, 
          annual: `$${proMonthlyEquivalent}` 
        },
        period: { 
          monthly: 'per month', 
          annual: 'per month billed annually' 
        },
        features: [
          'Unlimited diagnoses',
          'Priority AI processing',
          'Detailed repair guides with photos',
          'Parts & tools recommendations',
          'Email support',
          'Export to PDF'
        ],
        icon: Zap,
        popular: !isBusiness,
        cta: isBusiness ? 'Upgraded' : (isPro ? 'Current Plan' : 'Start Pro Trial'),
        href: isBusiness ? '#' : '/checkout?plan=pro'
      },
      {
        name: 'Business',
        description: 'For contractors and property managers',
        price: { 
          monthly: `$${businessMonthlyPrice}`, 
          annual: `$${businessMonthlyEquivalent}` 
        },
        period: { 
          monthly: 'per month', 
          annual: 'per month billed annually' 
        },
        features: [
          'Everything in Pro',
          'Team collaboration',
          'Bulk uploads',
          'API access',
          'Priority support',
          'Custom integrations',
          'Analytics dashboard'
        ],
        icon: Crown,
        popular: isBusiness,
        cta: isBusiness ? 'Current Plan' : 'Contact Sales',
        href: isBusiness ? '#' : null,
        isContactSales: !isBusiness
      }
    ];
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactForm.phone.trim()) {
      alert('Please enter your phone number');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null); // Clear any previous errors
    
    try {
      // Use the same API payload structure as ContactSalesModal
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: contactForm.name,
          email: 'contact@ai-home-fix.com', // Use a default email since form doesn't collect email
          subject: 'Contact Support - AI Home Fix',
          message: `Phone: ${contactForm.phone}\n\nThis is a contact support request from the AI Home Fix pricing page.`
        }),
      });

      if (response.ok) {
        // Success case - 2xx response
        setSubmitSuccess(true);
        setContactForm({ name: '', phone: '' });
        setTimeout(() => {
          setIsContactModalOpen(false);
          setSubmitSuccess(false);
        }, 3000);
      } else {
        // Non-2xx response (400, 500, etc.)
        console.error('Contact form submission failed', response.status, response.statusText);
        setSubmitError('Something went wrong. Please try again later.');
      }
    } catch (error) {
      // Network error, timeout, or other issues
      console.error('Contact form error:', error);
      setSubmitError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsContactModalOpen(false);
    setSubmitSuccess(false);
    setSubmitError(null);
    setContactForm({ name: '', phone: '' });
  };

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isContactModalOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isContactModalOpen]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-display-2 font-bold text-gradient mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-headline-2 text-gray-600 mb-8 max-w-3xl mx-auto">
            Start free. Upgrade when you're ready. 30-day money-back guarantee.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              isAnnual ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isAnnual ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-sm font-medium transition-colors ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
            Annual
          </span>
          {isAnnual && (
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
              Save 45%
            </span>
          )}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                      {getPlans().map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <Card className={`h-full flex flex-col ${plan.popular ? 'ring-2 ring-blue-500 shadow-xl' : ''}`}>
                  <CardHeader className="text-center pb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-headline-2">{plan.name}</CardTitle>
                    <CardDescription className="text-body-large">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex flex-col h-full space-y-6">
                    {/* Price */}
                    <div className="text-center">
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-display-3 font-bold text-gray-900">
                          {typeof plan.price === 'string' ? plan.price : plan.price[isAnnual ? 'annual' : 'monthly']}
                        </span>
                        {plan.period !== 'forever' && (
                          <span className="text-body text-gray-500">
                            /{typeof plan.period === 'string' ? plan.period : plan.period[isAnnual ? 'annual' : 'monthly']}
                          </span>
                        )}
                      </div>
                      {plan.period === 'forever' && (
                        <p className="text-body text-gray-500 mt-2">No credit card required</p>
                      )}
                      {isAnnual && plan.name !== 'Free' && (
                        <p className="text-sm text-green-600 font-medium mt-1">Save 45% annually</p>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 flex-grow">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-body text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <div className="mt-auto pt-6">
                      {plan.isContactSales ? (
                        <Button
                          className={`w-full h-14 text-lg ${
                            plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600' : ''
                          }`}
                          variant={plan.popular ? 'gradient' : 'default'}
                          onClick={() => setIsContactSalesModalOpen(true)}
                        >
                          {plan.cta}
                        </Button>
                      ) : (
                        <Button
                          className={`w-full h-14 text-lg ${
                            plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600' : ''
                          }`}
                          variant={plan.popular ? 'gradient' : 'default'}
                          asChild
                        >
                          <a href={plan.href}>
                            {plan.cta}
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-headline-1 font-bold text-gray-900 mb-4">
              Compare Plans
            </h2>
            <p className="text-body text-gray-600">
              See exactly what's included in each plan
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <div className="min-w-[800px] p-6">
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-6 mb-8">
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">Features</h3>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900">Free</h3>
                </div>
                <div className="text-center relative">
                  <div className="mb-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Most Popular
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900">Pro</h3>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900">Business</h3>
                </div>
              </div>

              {/* Table Rows */}
              <div className="space-y-2">
                {comparisonFeatures.map((row, index) => (
                  <div key={index} className="grid grid-cols-4 gap-6 items-center py-4 border-b border-gray-100 last:border-b-0">
                    <div className="text-left">
                      <span className="text-sm font-medium text-gray-700">{row.feature}</span>
                    </div>
                    <div className="text-center">
                      <span className={`text-sm ${row.free === '—' ? 'text-gray-400' : 'text-gray-700'}`}>
                        {row.free}
                      </span>
                    </div>
                    <div className="text-center">
                      <span className={`text-sm ${row.pro === '—' ? 'text-gray-400' : 'text-gray-700'}`}>
                        {row.pro}
                      </span>
                    </div>
                    <div className="text-center">
                      <span className={`text-sm ${row.business === '—' ? 'text-gray-400' : 'text-gray-700'}`}>
                        {row.business}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-500">
            No credit card for Free plan • 30-day money-back guarantee on Pro/Business
          </p>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <h2 className="text-headline-1 font-bold text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left p-6 rounded-xl hover:bg-gray-50 transition-colors duration-200 group">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Calendar className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Can I cancel anytime?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Yes, anytime. No long-term contracts.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-left p-6 rounded-xl hover:bg-gray-50 transition-colors duration-200 group">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <DollarSign className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    What if I'm not satisfied?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    30-day money-back guarantee on paid plans.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-left p-6 rounded-xl hover:bg-gray-50 transition-colors duration-200 group">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    Is my data secure?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We use enterprise-grade security and never sell your data.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-left p-6 rounded-xl hover:bg-gray-50 transition-colors duration-200 group">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    Do you offer team discounts?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Yes! Custom pricing for teams of 5+ users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-body-large text-gray-600 mb-6">
            Still have questions? We're here to help.
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            onClick={() => setIsContactModalOpen(true)}
          >
            Contact Support
          </Button>
        </motion.div>

        {/* Contact Support Modal */}
        {isContactModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div 
              className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Request a Callback</h2>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Content */}
                {!submitSuccess ? (
                  <>
                    <p className="text-gray-600 mb-6">
                      Leave your contact details and our team will get in touch with you shortly.
                    </p>

                    {/* Error Message */}
                    {submitError && (
                      <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-700 text-sm">{submitError}</p>
                      </div>
                    )}

                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Your Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your phone number"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-12 text-lg font-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Request'}
                      </Button>
                    </form>

                    <p className="text-xs text-gray-500 mt-4 text-center">
                      By submitting, you agree to the{' '}
                      <a href="/privacy" className="text-blue-600 hover:text-blue-700 underline">
                        processing of your personal data
                      </a>
                      .
                    </p>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Thank you!
                    </h3>
                    <p className="text-gray-600">
                      We'll contact you within 24 hours.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Contact Sales Modal */}
        <ContactSalesModal 
          isOpen={isContactSalesModalOpen} 
          onClose={() => setIsContactSalesModalOpen(false)} 
        />
      </div>
    </div>
  );
}
