'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Building, TrendingUp, Shield, Zap, ArrowRight } from 'lucide-react';

export default function B2BPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="text-left">
                <h1 className="text-display-2 font-bold text-gradient mb-6">
                  AI Diagnostics for Pros: Smarter, Faster, Better Service
                </h1>
                <p className="text-headline-2 text-gray-600 mb-8">
                  Turn every repair request into a precise diagnosis and actionable plan — empower your professionals to deliver faster, safer, and more reliable service.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8 py-3" asChild>
                    <a href="#contact-demo">
                      <Building className="w-5 h-5 mr-2" />
                      Request Demo
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 py-3" asChild>
                    <a href="#contact-partner">
                      <ArrowRight className="w-5 h-5 mr-2" />
                      Partner with Us
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* Right Column - Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md lg:max-w-lg">
                  <div className="bg-gray-200 rounded-2xl aspect-[4/3] flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-sm">Smiling Repair Professionals</p>
                      <p className="text-xs">/public/b2b-hero.jpg</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Your Advantages Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-display-3 font-bold text-gray-900 mb-4">
                Your Advantages
              </h2>
              <p className="text-headline-3 text-gray-600 max-w-2xl mx-auto">
                Transform your maintenance operations with measurable improvements in efficiency and cost savings.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
                  <p className="text-gray-600">Reduction in diagnostic time</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">30%</div>
                  <p className="text-gray-600">Lower maintenance costs</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">90%</div>
                  <p className="text-gray-600">Faster issue resolution</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <p className="text-gray-600">AI support availability</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our B2B AI Assistant Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-display-3 font-bold text-gray-900 mb-4">
                Our B2B AI Assistant
              </h2>
              <p className="text-headline-3 text-gray-600">
                AI-powered tool for service providers:
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Feature List */}
              <div className="space-y-6">
                <div className="flex items-start text-lg text-gray-700">
                  <span className="text-2xl mr-4 mt-1">✅</span>
                  <span>Instant problem recognition from photo or video.</span>
                </div>
                <div className="flex items-start text-lg text-gray-700">
                  <span className="text-2xl mr-4 mt-1">✅</span>
                  <span>Step-by-step repair guide with best practices.</span>
                </div>
                <div className="flex items-start text-lg text-gray-700">
                  <span className="text-2xl mr-4 mt-1">✅</span>
                  <span>Shopping list & tools suggestions.</span>
                </div>
                <div className="flex items-start text-lg text-gray-700">
                  <span className="text-2xl mr-4 mt-1">✅</span>
                  <span>Safety alerts for risky jobs.</span>
                </div>
                <div className="flex items-start text-lg text-gray-700">
                  <span className="text-2xl mr-4 mt-1">✅</span>
                  <span>Transparent cost estimate to share with clients.</span>
                </div>
              </div>
              
              {/* Right Column - Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md lg:max-w-lg">
                  <div className="bg-gray-200 rounded-2xl aspect-[4/3] flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <Zap className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-sm">AI Assistant Helping Repair Worker</p>
                      <p className="text-xs">/public/b2b-solution.jpg</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-display-3 font-bold text-gray-900 mb-4">
                How it works
              </h2>
              <p className="text-headline-3 text-gray-600 max-w-2xl mx-auto">
                Simple 4-step process that transforms customer service and technician efficiency.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Flow Steps */}
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-lg">1</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Customer uploads photo
                    </h3>
                    <p className="text-gray-600">
                      AI pre-diagnosis.
                    </p>
                  </div>
                </div>

                {/* Arrow (hidden on mobile) */}
                <div className="hidden lg:block ml-5">
                  <div className="w-px h-8 bg-gray-300 mx-auto"></div>
                  <div className="text-center">
                    <ArrowRight className="w-5 h-5 text-gray-400 mx-auto" />
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-lg">2</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Master receives AI summary
                    </h3>
                    <p className="text-gray-600">
                      Steps + tools needed.
                    </p>
                  </div>
                </div>

                {/* Arrow (hidden on mobile) */}
                <div className="hidden lg:block ml-5">
                  <div className="w-px h-8 bg-gray-300 mx-auto"></div>
                  <div className="text-center">
                    <ArrowRight className="w-5 h-5 text-gray-400 mx-auto" />
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-lg">3</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Master arrives fully prepared
                    </h3>
                    <p className="text-gray-600">
                      Faster fix.
                    </p>
                  </div>
                </div>

                {/* Arrow (hidden on mobile) */}
                <div className="hidden lg:block ml-5">
                  <div className="w-px h-8 bg-gray-300 mx-auto"></div>
                  <div className="text-center">
                    <ArrowRight className="w-5 h-5 text-gray-400 mx-auto" />
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-lg">4</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Customer satisfaction ↑
                    </h3>
                    <p className="text-gray-600">
                      Repeat business.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Flowchart Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md lg:max-w-lg">
                  <div className="bg-gray-200 rounded-2xl aspect-[4/3] flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <ArrowRight className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-sm">Simple Flow Illustration</p>
                      <p className="text-xs">/public/b2b-flow.jpg</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ready to Transform Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-center"
          >
            <div className="bg-blue-600 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Maintenance Operations?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join leading property management companies who are already saving time and money with AI-powered diagnostics.
              </p>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                <Building className="w-5 h-5 mr-2" />
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Demo Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            id="contact-demo"
            className="mb-16"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Request a Demo
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  See how AI diagnostics can transform your maintenance operations. Our team will walk you through the platform and answer all your questions.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <Building className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Demo Request Form
                </h3>
                <p className="text-gray-600 mb-6">
                  [Demo request form placeholder - Company name, contact info, team size, current challenges]
                </p>
                <Button size="lg" className="px-8 py-3">
                  Schedule Demo Call
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Partner Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            id="contact-partner"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Partner with Us
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Join our network of trusted partners and help us revolutionize the home repair industry with AI-powered diagnostics.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <Users className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Partnership Inquiry
                </h3>
                <p className="text-gray-600 mb-6">
                  [Partnership form placeholder - Company details, partnership type, integration requirements]
                </p>
                <Button size="lg" variant="outline" className="px-8 py-3">
                  Submit Partnership Request
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
