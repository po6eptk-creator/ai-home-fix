'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Shield, Zap, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Unlimited Diagnoses",
    description: "Get AI-powered solutions for any home repair problem"
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Every solution includes comprehensive safety checks"
  },
  {
    icon: Check,
    title: "Step-by-Step Guides",
    description: "Detailed instructions with parts and tools recommendations"
  }
];

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container-apple py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-display-2 font-bold text-gradient mb-6">
              Upgrade to Pro
            </h1>
            <p className="text-headline-2 text-gray-600 mb-8">
              Get unlimited access to our AI-powered home repair assistant
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Pricing Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="p-8 h-fit">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-headline-2">Pro Plan</CardTitle>
                  <CardDescription className="text-body-large">
                    Perfect for homeowners who want unlimited access
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Price */}
                  <div className="text-center">
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className="text-display-3 font-bold text-gray-900">
                        $19
                      </span>
                      <span className="text-body text-gray-500">
                        /month
                      </span>
                    </div>
                    <p className="text-body text-gray-500">Cancel anytime • 30-day money-back guarantee</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    {features.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <div key={feature.title} className="flex items-start gap-3">
                          <Icon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-gray-900">{feature.title}</p>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full h-14 text-lg" size="lg">
                    Start Pro Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>

                  {/* Security Notice */}
                  <div className="text-center text-sm text-gray-500">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Shield className="w-4 h-4" />
                      <span>Secure payment powered by Stripe</span>
                    </div>
                    <p>Your payment information is encrypted and secure</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Value Props */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-headline-1 font-bold text-gray-900 mb-6">
                  Why Upgrade to Pro?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Unlimited Diagnoses</h3>
                      <p className="text-gray-600">
                        No more limits! Get AI-powered solutions for every home repair problem you encounter.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Priority Processing</h3>
                      <p className="text-gray-600">
                        Get faster response times and priority access to our AI assistant.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Enhanced Safety</h3>
                      <p className="text-gray-600">
                        Advanced safety checks and detailed risk assessments for every repair.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold">S</span>
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2">
                        "The Pro plan has saved me hundreds of dollars in contractor fees. 
                        The unlimited diagnoses are worth every penny!"
                      </p>
                      <p className="text-sm font-semibold text-gray-900">Sarah Johnson</p>
                      <p className="text-sm text-gray-500">Pro Member</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Can I cancel anytime?</h4>
                    <p className="text-sm text-gray-600">Yes, you can cancel your subscription at any time with no penalties.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">What if I'm not satisfied?</h4>
                    <p className="text-sm text-gray-600">We offer a 30-day money-back guarantee. If you're not happy, we'll refund you.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Is my data secure?</h4>
                    <p className="text-sm text-gray-600">Absolutely. We use enterprise-grade security and never share your data.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
