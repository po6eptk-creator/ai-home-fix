'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, Zap, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    description: 'Perfect for trying our AI assistant',
    price: { monthly: '$0', annual: '$0' },
    period: 'forever',
    features: [
      '2 diagnoses',
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
    free: '2',
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
  const [isAnnual, setIsAnnual] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container-apple py-12">
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
              Save 15%
            </span>
          )}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
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
                
                <Card className={`h-full ${plan.popular ? 'ring-2 ring-blue-500 shadow-xl' : ''}`}>
                  <CardHeader className="text-center pb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-headline-2">{plan.name}</CardTitle>
                    <CardDescription className="text-body-large">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
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
                        <p className="text-sm text-green-600 font-medium mt-1">Save 15% annually</p>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-body text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
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

          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">Features</h3>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900">Free</h3>
                </div>
                <div className="text-center relative">
                  <h3 className="font-semibold text-gray-900">Pro</h3>
                  <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
                    Most Popular
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900">Business</h3>
                </div>
              </div>

              {/* Table Rows */}
              <div className="space-y-4">
                {comparisonFeatures.map((row, index) => (
                  <div key={index} className="grid grid-cols-4 gap-4 items-center py-3 border-b border-gray-100">
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
          <h2 className="text-headline-1 font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="font-semibold text-gray-900 mb-2">
                Can I cancel anytime?
              </h3>
              <p className="text-gray-600">
                Yes, anytime. No long-term contracts.
              </p>
            </div>
            
            <div className="text-left">
              <h3 className="font-semibold text-gray-900 mb-2">
                What if I'm not satisfied?
              </h3>
              <p className="text-gray-600">
                30-day money-back guarantee on paid plans.
              </p>
            </div>
            
            <div className="text-left">
              <h3 className="font-semibold text-gray-900 mb-2">
                Is my data secure?
              </h3>
              <p className="text-gray-600">
                We use enterprise-grade security and never sell your data.
              </p>
            </div>
            
            <div className="text-left">
              <h3 className="font-semibold text-gray-900 mb-2">
                Do you offer team discounts?
              </h3>
              <p className="text-gray-600">
                Yes! Custom pricing for teams of 5+ users.
              </p>
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
          <Button variant="secondary" size="lg" asChild>
            <a href="/contact">Contact Support</a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
