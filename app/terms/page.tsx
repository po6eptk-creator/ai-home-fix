'use client';

import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-display-2 font-bold text-gradient mb-6">
              Terms of Service
            </h1>
            <p className="text-body-large text-gray-600">
              Last updated: August 28, 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-headline-1 font-bold text-gray-900 mb-4">
                  Agreement to Terms
                </h2>
                <p className="text-body text-gray-700 leading-relaxed">
                  By accessing and using AI Home Fix ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-headline-1 font-bold text-gray-900 mb-4">
                  Service Description
                </h2>
                <p className="text-body text-gray-700 leading-relaxed">
                  AI Home Fix provides AI-powered diagnostic services for home repairs. Our service analyzes photos of household problems and provides step-by-step repair guides, parts recommendations, and safety information. While our AI strives for accuracy, all recommendations should be verified and used at your own discretion.
                </p>
              </section>

              <section>
                <h2 className="text-headline-1 font-bold text-gray-900 mb-4">
                  Eligibility
                </h2>
                <p className="text-body text-gray-700 leading-relaxed">
                  You must be at least 18 years old to use this service. By using AI Home Fix, you represent and warrant that you are at least 18 years of age and have the legal capacity to enter into these terms.
                </p>
              </section>

              <section>
                <h2 className="text-headline-1 font-bold text-gray-900 mb-4">
                  User Responsibilities
                </h2>
                <div className="space-y-4">
                  <p className="text-body text-gray-700 leading-relaxed">
                    As a user of our service, you agree to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-body text-gray-700 leading-relaxed">
                    <li>Provide accurate and complete information when using our service</li>
                    <li>Follow all safety guidelines and recommendations provided</li>
                    <li>Use the service only for lawful purposes</li>
                    <li>Not attempt to reverse engineer or interfere with our systems</li>
                    <li>Respect the intellectual property rights of AI Home Fix</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-headline-1 font-bold text-gray-900 mb-4">
                  Disclaimer of Warranties
                </h2>
                <div className="space-y-4">
                  <p className="text-body text-gray-700 leading-relaxed">
                    <strong>IMPORTANT:</strong> Our service provides AI-generated recommendations for educational and informational purposes only. We include safety checks and warnings, but users must:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-body text-gray-700 leading-relaxed">
                    <li>Follow all safety guidelines at their own risk</li>
                    <li>Verify all recommendations before proceeding with repairs</li>
                    <li>Consult qualified professionals for complex or dangerous repairs</li>
                    <li>Ensure they have the necessary skills and tools for the repair</li>
                    <li>Comply with all local building codes and regulations</li>
                  </ul>
                  <p className="text-body text-gray-700 leading-relaxed">
                    AI Home Fix is not liable for any damages, injuries, or losses resulting from the use of our recommendations. Users assume all risks associated with home repairs.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-headline-1 font-bold text-gray-900 mb-4">
                  Subscription Plans and Billing
                </h2>
                <div className="space-y-4">
                  <h3 className="text-headline-3 font-semibold text-gray-900 mb-2">
                    Free Plan
                  </h3>
                  <p className="text-body text-gray-700 leading-relaxed">
                    Includes 2 free diagnoses per month with basic step-by-step guides and standard processing.
                  </p>
                  
                  <h3 className="text-headline-3 font-semibold text-gray-900 mb-2">
                    Pro Plan
                  </h3>
                  <p className="text-body text-gray-700 leading-relaxed">
                    $19/month (or $16/month with annual billing) includes unlimited diagnoses, priority AI processing, detailed repair guides with photos, parts & tools recommendations, email support, and PDF export.
                  </p>
                  
                  <h3 className="text-headline-3 font-semibold text-gray-900 mb-2">
                    Business Plan
                  </h3>
                  <p className="text-body text-gray-700 leading-relaxed">
                    $49/month (or $42/month with annual billing) includes everything in Pro plus team collaboration, bulk uploads, API access, priority support, custom integrations, and analytics dashboard.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-headline-1 font-bold text-gray-900 mb-4">
                  Cancellation and Refunds
                </h2>
                <div className="space-y-4">
                  <p className="text-body text-gray-700 leading-relaxed">
                    <strong>Cancellation:</strong> You may cancel your subscription at any time. Cancellation will take effect at the end of your current billing period.
                  </p>
                  <p className="text-body text-gray-700 leading-relaxed">
                    <strong>Refund Policy:</strong> We offer a 30-day money-back guarantee for Pro and Business plans. If you're not satisfied with our service within 30 days of your first payment, we'll provide a full refund.
                  </p>
                  <p className="text-body text-gray-700 leading-relaxed">
                    <strong>Free Plan:</strong> The free plan includes 2 diagnoses at no cost, with no refund necessary.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-headline-1 font-bold text-gray-900 mb-4">
                  Intellectual Property
                </h2>
                <p className="text-body text-gray-700 leading-relaxed">
                  All content, features, and functionality of AI Home Fix, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, are the exclusive property of AI Home Fix and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-headline-1 font-bold text-gray-900 mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-body text-gray-700 leading-relaxed">
                  In no event shall AI Home Fix, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
                </p>
              </section>

              <section>
                <h2 className="text-headline-1 font-bold text-gray-900 mb-4">
                  Privacy and Data Protection
                </h2>
                <p className="text-body text-gray-700 leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices regarding the collection and use of your information.
                </p>
              </section>

              <section>
                <h2 className="text-headline-1 font-bold text-gray-900 mb-4">
                  Governing Law
                </h2>
                <p className="text-body text-gray-700 leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-headline-1 font-bold text-gray-900 mb-4">
                  Changes to Terms
                </h2>
                <p className="text-body text-gray-700 leading-relaxed">
                  We reserve the right to modify or replace these Terms of Service at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
              </section>

              <section>
                <h2 className="text-headline-1 font-bold text-gray-900 mb-4">
                  Contact Information
                </h2>
                <p className="text-body text-gray-700 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-gray-50 rounded-xl p-6 mt-4">
                  <p className="text-body text-gray-700">
                    <strong>Email:</strong> r.kalimullin@atlantix.cc
                  </p>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
