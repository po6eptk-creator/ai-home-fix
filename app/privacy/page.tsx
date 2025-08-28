'use client';

import { motion } from 'framer-motion';

export default function PrivacyPage() {
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
              Privacy Policy
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
                  Introduction
                </h2>
                <p className="text-body text-gray-700 leading-relaxed">
                  AI Home Fix ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our AI-powered home repair diagnostic service.
                </p>
              </section>

              <section>
                <h2 className="text-headline-1 font-bold text-gray-900 mb-4">
                  Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-headline-3 font-semibold text-gray-900 mb-2">
                      Photos and Images
                    </h3>
                    <p className="text-body text-gray-700 leading-relaxed">
                      When you upload photos for AI diagnosis, we temporarily process these images to provide repair recommendations. Images are automatically processed to remove EXIF data and blur faces for privacy protection.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-headline-3 font-semibold text-gray-900 mb-2">
                      Contact Information
                    </h3>
                    <p className="text-body text-gray-700 leading-relaxed">
                      When you contact us through our contact forms, we collect your name, email address, and message content to respond to your inquiries.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-headline-3 font-semibold text-gray-900 mb-2">
                      Usage Data
                    </h3>
                    <p className="text-body text-gray-700 leading-relaxed">
                      We collect anonymous usage data to improve our service, including diagnostic results, feature usage, and service performance metrics.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-headline-1 font-bold text-gray-900 mb-4">
                  How We Use Your Information
                </h2>
                <div className="space-y-4">
                  <p className="text-body text-gray-700 leading-relaxed">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-body text-gray-700 leading-relaxed">
                    <li>Provide AI-powered home repair diagnostics and recommendations</li>
                    <li>Respond to your customer service inquiries</li>
                    <li>Improve our AI models and service quality</li>
                    <li>Send important service updates and notifications</li>
                    <li>Ensure the security and integrity of our platform</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-headline-1 font-bold text-gray-900 mb-4">
                  Data Processing and AI
                </h2>
                <p className="text-body text-gray-700 leading-relaxed">
                  Your uploaded photos are processed exclusively by our AI systems to provide repair diagnostics. We do not sell, rent, or share your personal data with third parties. All data processing is conducted in accordance with industry best practices and applicable privacy laws.
                </p>
              </section>

              <section>
                <h2 className="text-headline-1 font-bold text-gray-900 mb-4">
                  Data Security
                </h2>
                <div className="space-y-4">
                  <p className="text-body text-gray-700 leading-relaxed">
                    We implement comprehensive security measures to protect your data:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-body text-gray-700 leading-relaxed">
                    <li><strong>Encryption:</strong> All data is encrypted in transit and at rest using industry-standard protocols</li>
                    <li><strong>EXIF Removal:</strong> Photo metadata is automatically stripped to protect your privacy</li>
                    <li><strong>Face Blurring:</strong> Our AI automatically detects and blurs faces in uploaded images</li>
                    <li><strong>Secure Storage:</strong> Data is stored on secure, cloud-based infrastructure with regular security audits</li>
                    <li><strong>Access Controls:</strong> Strict access controls limit who can view your personal information</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-headline-1 font-bold text-gray-900 mb-4">
                  Cookies and Analytics
                </h2>
                <p className="text-body text-gray-700 leading-relaxed">
                  We use essential cookies to provide basic functionality and improve user experience. These cookies are necessary for the website to function properly and cannot be disabled. We do not use tracking cookies or third-party analytics that collect personal information.
                </p>
              </section>

              <section>
                <h2 className="text-headline-1 font-bold text-gray-900 mb-4">
                  Data Retention
                </h2>
                <p className="text-body text-gray-700 leading-relaxed">
                  Uploaded photos are automatically deleted after 30 days. Contact form submissions are retained for up to 2 years to provide customer support. Usage data is anonymized and retained indefinitely for service improvement purposes.
                </p>
              </section>

              <section>
                <h2 className="text-headline-1 font-bold text-gray-900 mb-4">
                  Your Rights
                </h2>
                <p className="text-body text-gray-700 leading-relaxed">
                  You have the right to access, correct, or delete your personal information. You can also request a copy of your data or object to certain processing activities. To exercise these rights, please contact us using the information below.
                </p>
              </section>

              <section>
                <h2 className="text-headline-1 font-bold text-gray-900 mb-4">
                  Changes to This Policy
                </h2>
                <p className="text-body text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-headline-1 font-bold text-gray-900 mb-4">
                  Contact Us
                </h2>
                <p className="text-body text-gray-700 leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
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
