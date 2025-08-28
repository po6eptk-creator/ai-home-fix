'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Search, Mail, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold">centra</span>
              <span className="bg-green-500 text-black text-xs px-2 py-1 rounded font-bold">DEV</span>
            </div>
            
            {/* Navigation */}
            <nav className="flex items-center space-x-4">
              <button className="px-4 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition-colors">
                Docs
              </button>
              <button className="px-4 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition-colors">
                Guides
              </button>
              <button className="px-4 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition-colors">
                Get the skills
              </button>
              <button className="px-4 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition-colors flex items-center space-x-2">
                <Search className="w-4 h-4" />
                <span>Search</span>
                <span className="bg-green-500 text-black text-xs px-1.5 py-0.5 rounded">7</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text & CTA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl lg:text-6xl font-bold">
                <span className="inline-block w-8 h-8 bg-blue-500 rounded-full mr-4 align-middle"></span>
                Hello! Ready to build with Centra?
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-300">
                Build your own commerce stack.
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                With Centra's developer tools, you've got everything you need to build best-in-class ecommerce experiences.
              </p>
              <button className="px-8 py-4 border-2 border-white rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-colors">
                GET ACCESS TO SANDBOX
              </button>
            </motion.div>
            
            {/* Right Column - Visual Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gray-800 rounded-2xl p-8 aspect-[4/3] relative overflow-hidden">
                {/* Main Image Placeholder */}
                <div className="w-full h-48 bg-black rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Boot Image</span>
                </div>
                
                {/* Overlay Elements */}
                <div className="absolute top-4 right-4">
                  <div className="bg-yellow-400 text-black text-sm px-3 py-1 rounded font-semibold">
                    Orders +132%
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4">
                  <div className="bg-blue-500 text-white text-xs p-3 rounded font-mono">
                    products (share: (<br/>
                    id, name,<br/>
                    createdAt(A) (format: d<br/>
                    brand (raw)
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4">
                  <div className="bg-green-500 text-black text-sm px-3 py-1 rounded font-bold">
                    developers first
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pixelated Heading */}
      <section className="py-12 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <h2 className="text-6xl lg:text-8xl font-bold tracking-wider" style={{ fontFamily: 'monospace' }}>
              reputation build y
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Stats/Highlights */}
      <section className="py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-yellow-400 text-black p-6 rounded-xl text-center"
            >
              <div className="text-3xl font-bold mb-2">+89%</div>
              <div className="text-sm font-semibold">Conversion Rate</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-green-500 text-black p-6 rounded-xl text-center"
            >
              <div className="text-3xl font-bold mb-2">+156%</div>
              <div className="text-sm font-semibold">Revenue Growth</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-blue-500 text-white p-6 rounded-xl text-center"
            >
              <div className="text-3xl font-bold mb-2">+42%</div>
              <div className="text-sm font-semibold">Customer Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Docs Section */}
      <section className="py-24 px-6 lg:px-8 bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Visual */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative"
            >
              <div className="bg-gray-800 rounded-2xl p-8 aspect-[4/3] relative overflow-hidden">
                <div className="w-full h-48 bg-black rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Dropper Bottle</span>
                </div>
                
                <div className="absolute top-4 right-4">
                  <div className="bg-green-500 text-black text-sm px-3 py-1 rounded font-semibold">
                    Visitors +59%
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 space-y-2">
                  <div className="bg-blue-500 text-white text-sm px-3 py-1 rounded">build for growth</div>
                  <div className="bg-blue-400 text-white text-sm px-3 py-1 rounded">scale fast</div>
                  <div className="bg-blue-300 text-white text-sm px-3 py-1 rounded">innovate</div>
                </div>
                
                <div className="absolute bottom-4 right-4">
                  <div className="bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">
                    54 markets
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Right Column - Text & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="space-y-6"
            >
              <h2 className="text-4xl lg:text-5xl font-bold">
                Dig into the docs.
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Build killer experiences for your clients and their fans. Head to the docs to explore Centra's tools, frameworks, APIs and a helluvalot more.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 border border-gray-600 rounded-full text-sm">DTC API</span>
                <span className="px-3 py-1 border border-gray-600 rounded-full text-sm">Integration API (GraphQL)</span>
              </div>
              
              <button className="px-8 py-4 border-2 border-white rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-colors">
                TAKE ME TO THE DOCS
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex items-center justify-between mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold">Featured guides</h2>
            <a href="#" className="flex items-center space-x-2 text-lg hover:text-green-500 transition-colors">
              <span>See all</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Guide Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-colors"
            >
              <div className="relative">
                <div className="w-full h-48 bg-black flex items-center justify-center">
                  <span className="text-gray-500">BI Integration</span>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded font-semibold">
                    BI systems integration
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <span>15 mins</span>
                  <span>7 November 2023</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Integrating Centra with Business Intelligence systems
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-700 rounded text-xs">GraphQL</span>
                  <span className="px-2 py-1 bg-gray-700 rounded text-xs">Best practice</span>
                  <span className="px-2 py-1 bg-gray-700 rounded text-xs">BI</span>
                </div>
              </div>
            </motion.div>

            {/* Guide Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-colors"
            >
              <div className="relative">
                <div className="w-full h-48 bg-black flex items-center justify-center">
                  <span className="text-gray-500">CMS Integration</span>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded font-semibold">
                    CMS integration
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <span>12 mins</span>
                  <span>5 November 2023</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Integrating Centra with an external CMS
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-700 rounded text-xs">Frontend</span>
                  <span className="px-2 py-1 bg-gray-700 rounded text-xs">Cache</span>
                  <span className="px-2 py-1 bg-gray-700 rounded text-xs">DTC</span>
                </div>
              </div>
            </motion.div>

            {/* Guide Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-colors"
            >
              <div className="relative">
                <div className="w-full h-48 bg-black flex items-center justify-center">
                  <span className="text-gray-500">ERP Integration</span>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="bg-yellow-400 text-black text-xs px-2 py-1 rounded font-semibold">
                    ERP integration
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <span>20 mins</span>
                  <span>3 November 2023</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Integrating Centra with an ERP system using GraphQL Integration API
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-700 rounded text-xs">CMS</span>
                  <span className="px-2 py-1 bg-gray-700 rounded text-xs">How-to</span>
                  <span className="px-2 py-1 bg-gray-700 rounded text-xs">ERP</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signup Section */}
      <section className="py-24 px-6 lg:px-8 bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Sign up for product updates</h2>
            <p className="text-lg text-gray-400">
              Be the first to know about Centra webinars and product updates. #nospam
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                />
              </div>
              
              <input
                type="email"
                placeholder="Business email*"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
              />
              
              <input
                type="text"
                placeholder="Company name"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
              />
              
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
              />
              
              <div className="flex items-center space-x-3">
                <input type="checkbox" id="privacy" className="w-4 h-4 text-green-500 bg-gray-800 border-gray-700 rounded focus:ring-green-500" />
                <label htmlFor="privacy" className="text-sm text-gray-400">
                  I accept the <a href="#" className="text-green-500 hover:underline">privacy policy</a>
                </label>
              </div>
              
              <button className="w-full px-8 py-4 bg-green-500 text-black rounded-full text-lg font-semibold hover:bg-green-400 transition-colors">
                SIGN ME UP
              </button>
            </motion.div>
            
            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 2.0 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-md">
                <div className="bg-gray-800 rounded-2xl aspect-[4/3] flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📱</span>
                    </div>
                    <p className="text-sm">People with Phone</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-8 border-t border-gray-800">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {/* Logo */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-xl font-bold">centra</span>
                <span className="bg-green-500 text-black text-xs px-2 py-1 rounded font-bold">DEV</span>
              </div>
            </div>
            
            {/* Docs */}
            <div>
              <h3 className="font-semibold mb-4">Docs</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Centra concepts</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Building a frontend</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tools</a></li>
              </ul>
            </div>
            
            {/* API's */}
            <div>
              <h3 className="font-semibold mb-4">API's</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">DTC API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integration API</a></li>
              </ul>
            </div>
            
            {/* Guides */}
            <div>
              <h3 className="font-semibold mb-4">Guides</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Frontend</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Multichannel</a></li>
                <li><a href="#" className="hover:text-white transition-colors">App e-commerce</a></li>
              </ul>
            </div>
            
            {/* Contact us */}
            <div>
              <h3 className="font-semibold mb-4">Contact us</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Become a partner</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            {/* centra.com */}
            <div>
              <h3 className="font-semibold mb-4">centra.com</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Direct-to-Consumer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Wholesale</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Migrate to Centra</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Centra vs. Competitors</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Webinars & events</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog & news</a></li>
              </ul>
            </div>
          </div>
          
          {/* Social Icons */}
          <div className="flex justify-end mt-12">
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
