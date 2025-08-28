'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, Zap, Crown, X, Mail, CreditCard } from 'lucide-react';
import FakeStripeModal from './FakeStripeModal';
import ContactSalesModal from './ContactSalesModal';
import { useUserPlan } from '@/app/context/UserPlanContext';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}



const plans = [
  {
    name: 'Free',
    description: 'Perfect for trying our AI assistant',
    price: '$0',
    period: 'forever',
    features: [
      '2 diagnoses',
      'Basic step-by-step guide',
      'Standard processing',
      'Community support'
    ],
    icon: Star,
    popular: false,
    disabled: true,
    disabledText: 'Already used',
    cta: 'Current Plan',
    action: null
  },
  {
    name: 'Pro',
    description: 'For homeowners who want unlimited access',
    price: '$19',
    period: 'per month',
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
    disabled: false,
    cta: 'Start Pro Trial',
    action: 'stripe'
  },
  {
    name: 'Business',
    description: 'For contractors and property managers',
    price: '$49',
    period: 'per month',
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
    disabled: false,
    cta: 'Contact Sales',
    action: 'contact'
  }
];

export default function PricingModal({ isOpen, onClose }: PricingModalProps) {
  const { userPlan, isPro, isBusiness } = useUserPlan();
  const [showFakeStripeModal, setShowFakeStripeModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  // Dynamic plans based on user's current plan
  const getPlans = () => [
    {
      name: 'Free',
      description: 'Perfect for trying our AI assistant',
      price: '$0',
      period: 'forever',
      features: [
        '2 diagnoses',
        'Basic step-by-step guide',
        'Standard processing',
        'Community support'
      ],
      icon: Star,
      popular: false,
      disabled: isPro || isBusiness,
      disabledText: isPro || isBusiness ? 'Upgraded' : 'Already used',
      cta: isPro || isBusiness ? 'Upgraded' : 'Current Plan',
      action: null
    },
    {
      name: 'Pro',
      description: 'For homeowners who want unlimited access',
      price: '$19',
      period: 'per month',
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
      disabled: isBusiness,
      cta: isBusiness ? 'Upgraded' : (isPro ? 'Current Plan' : 'Start Pro Trial'),
      action: isBusiness ? null : 'stripe'
    },
    {
      name: 'Business',
      description: 'For contractors and property managers',
      price: '$49',
      period: 'per month',
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
      disabled: false,
      cta: isBusiness ? 'Current Plan' : 'Contact Sales',
      action: isBusiness ? null : 'contact'
    }
  ];

  // Handle body scroll locking when modal is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      
      // Lock body scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      // Cleanup function to restore scroll
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
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  const handlePlanAction = (action: string | null) => {
    if (action === 'stripe') {
      setShowFakeStripeModal(true);
    } else if (action === 'contact') {
      setShowContactModal(true);
    }
  };

  const handleStripeSuccess = () => {
    // Close the pricing modal since the user plan has been updated
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Main Pricing Modal */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] flex flex-col"
        >
          {/* Modal Header - Fixed */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 flex-shrink-0">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Choose Your Plan</h2>
              <p className="text-gray-600 text-sm md:text-base">Upgrade to get unlimited AI-powered home repair assistance</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-2"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Modal Content - Scrollable */}
          <div className="flex-1 overflow-y-auto p-6">


            {/* Plans Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {getPlans().map((plan, index) => {
                const Icon = plan.icon;
                return (
                  <Card 
                    key={plan.name} 
                    className={`relative ${plan.popular ? 'ring-2 ring-blue-500' : ''} ${plan.disabled ? 'opacity-60' : ''}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <CardHeader className="text-center pb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      {/* Price */}
                      <div className="text-center">
                        <div className="flex items-baseline justify-center gap-1 mb-1">
                          <span className="text-3xl font-bold text-gray-900">
                            {plan.price}
                          </span>
                          <span className="text-gray-500">
                            /{plan.period}
                          </span>
                        </div>
                        {plan.disabled && (
                          <p className="text-sm text-gray-500 font-medium">{plan.disabledText}</p>
                        )}
                      </div>

                      {/* Features */}
                      <div className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Button
                        onClick={() => handlePlanAction(plan.action)}
                        disabled={plan.disabled}
                        className={`w-full h-12 ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                        variant={plan.popular ? 'default' : 'outline'}
                      >
                        {plan.cta}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Footer */}
            <div className="text-center text-sm text-gray-500">
              <p>All plans include a 30-day money-back guarantee</p>
              <p>Cancel anytime • No hidden fees</p>
            </div>
          </div>

          {/* Modal Footer - Fixed */}
          <div className="border-t border-gray-200 p-4 flex-shrink-0">
            <div className="text-center text-xs text-gray-400">
              <p>Secure payment processing • 256-bit SSL encryption</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Fake Stripe Modal */}
      <FakeStripeModal
        isOpen={showFakeStripeModal}
        onClose={() => setShowFakeStripeModal(false)}
        onSuccess={handleStripeSuccess}
      />

      {/* Contact Sales Modal */}
      <ContactSalesModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />
    </>
  );
}
