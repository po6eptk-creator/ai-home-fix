'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Search, Mail, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-[#f4f0ec] text-[#1c1c1c]">
      
      {/* Header */}
      <header className="border-b border-[#d4a373] bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-[#1c1c1c]">centra</span>
              <span className="bg-[#a3c586] text-white text-xs px-2 py-1 rounded font-bold">DEV</span>
            </div>
            
            {/* Navigation */}
            <nav className="flex items-center space-x-4">
              <button className="px-4 py-2 border border-[#d4a373] rounded-full text-sm hover:bg-[#d4a373] hover:text-white transition-colors font-medium">
                Docs
              </button>
              <button className="px-4 py-2 border border-[#d4a373] rounded-full text-sm hover:bg-[#d4a373] hover:text-white transition-colors font-medium">
                Guides
              </button>
              <button className="px-4 py-2 border border-[#d4a373] rounded-full text-sm hover:bg-[#d4a373] hover:text-white transition-colors font-medium">
                Get the skills
              </button>
              <button className="px-4 py-2 border border-[#d4a373] rounded-full text-sm hover:bg-[#d4a373] hover:text-white transition-colors flex items-center space-x-2 font-medium">
                <Search className="w-4 h-4" />
                <span>Search</span>
                <span className="bg-[#e07a5f] text-white text-xs px-1.5 py-0.5 rounded">7</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-6 lg:px-8 bg-[#f4f0ec]">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text & CTA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-[#1c1c1c] tracking-tight leading-tight">
                <span className="inline-block w-8 h-8 bg-[#d4a373] rounded-full mr-4 align-middle"></span>
                Hello! Ready to build with Centra?
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-[#666] tracking-tight">
                Build your own commerce stack.
              </h2>
              <p className="text-lg text-[#666] leading-relaxed font-medium">
                With Centra's developer tools, you've got everything you need to build best-in-class ecommerce experiences.
              </p>
              <button className="px-8 py-4 border-2 border-[#1c1c1c] rounded-xl text-lg font-semibold hover:bg-[#1c1c1c] hover:text-white transition-all duration-300 shadow-lg">
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
              <div className="bg-white rounded-2xl p-8 aspect-[4/3] relative overflow-hidden shadow-xl">
                {/* Main Image Placeholder */}
                <div className="w-full h-48 bg-[#1c1c1c] rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-[#d4a373] font-medium">Boot Image</span>
                </div>
                
                {/* Overlay Elements */}
                <div className="absolute top-4 right-4">
                  <div className="bg-[#e07a5f] text-white text-sm px-3 py-1 rounded font-semibold">
                    Orders +132%
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4">
                  <div className="bg-[#a3c586] text-white text-xs p-3 rounded font-mono">
                    products (share: (<br/>
                    id, name,<br/>
                    createdAt(A) (format: d<br/>
                    brand (raw)
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4">
                  <div className="bg-[#d4a373] text-white text-sm px-3 py-1 rounded font-bold">
                    developers first
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pixelated Heading */}
      <section className="py-12 px-6 lg:px-8 bg-[#1c1c1c]">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <h2 className="text-6xl lg:text-8xl font-bold tracking-wider text-white" style={{ fontFamily: 'monospace' }}>
              reputation build y
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Stats/Highlights */}
      <section className="py-16 px-6 lg:px-8 bg-[#f4f0ec]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-[#e07a5f] text-white p-6 rounded-2xl text-center shadow-xl"
            >
              <div className="text-3xl font-bold mb-2">+89%</div>
              <div className="text-sm font-semibold">Conversion Rate</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-[#a3c586] text-white p-6 rounded-2xl text-center shadow-xl"
            >
              <div className="text-3xl font-bold mb-2">+156%</div>
              <div className="text-sm font-semibold">Revenue Growth</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-[#d4a373] text-white p-6 rounded-2xl text-center shadow-xl"
            >
              <div className="text-3xl font-bold mb-2">+42%</div>
              <div className="text-sm font-semibold">Customer Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Docs Section */}
      <section className="py-24 px-6 lg:px-8 bg-[#1c1c1c]">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Visual */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 aspect-[4/3] relative overflow-hidden shadow-xl">
                <div className="w-full h-48 bg-[#1c1c1c] rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-[#d4a373] font-medium">Dropper Bottle</span>
                </div>
                
                <div className="absolute top-4 right-4">
                  <div className="bg-[#a3c586] text-white text-sm px-3 py-1 rounded font-semibold">
                    Visitors +59%
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 space-y-2">
                  <div className="bg-[#d4a373] text-white text-sm px-3 py-1 rounded">build for growth</div>
                  <div className="bg-[#e07a5f] text-white text-sm px-3 py-1 rounded">scale fast</div>
                  <div className="bg-[#a3c586] text-white text-sm px-3 py-1 rounded">innovate</div>
                </div>
                
                <div className="absolute bottom-4 right-4">
                  <div className="bg-[#e07a5f] text-white text-xs px-2 py-1 rounded font-bold">
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
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Dig into the docs.
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed font-medium">
                Build killer experiences for your clients and their fans. Head to the docs to explore Centra's tools, frameworks, APIs and a helluvalot more.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 border border-[#d4a373] rounded-full text-sm text-[#d4a373] font-medium">DTC API</span>
                <span className="px-3 py-1 border border-[#d4a373] rounded-full text-sm text-[#d4a373] font-medium">Integration API (GraphQL)</span>
              </div>
              
              <button className="px-8 py-4 border-2 border-white rounded-xl text-lg font-semibold hover:bg-white hover:text-[#1c1c1c] transition-all duration-300 shadow-lg">
                TAKE ME TO THE DOCS
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-24 px-6 lg:px-8 bg-[#f4f0ec]">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex items-center justify-between mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1c1c1c] tracking-tight">Featured guides</h2>
            <a href="#" className="flex items-center space-x-2 text-lg hover:text-[#d4a373] transition-colors font-medium">
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
              className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 shadow-xl"
            >
              <div className="relative">
                <div className="w-full h-48 bg-[#1c1c1c] flex items-center justify-center">
                  <span className="text-[#d4a373] font-medium">BI Integration</span>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="bg-[#d4a373] text-white text-xs px-2 py-1 rounded font-semibold">
                    BI systems integration
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-[#666] mb-3 font-medium">
                  <span>15 mins</span>
                  <span>7 November 2023</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#1c1c1c]">
                  Integrating Centra with Business Intelligence systems
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-[#f4f0ec] rounded text-xs text-[#1c1c1c] font-medium">GraphQL</span>
                  <span className="px-2 py-1 bg-[#f4f0ec] rounded text-xs text-[#1c1c1c] font-medium">Best practice</span>
                  <span className="px-2 py-1 bg-[#f4f0ec] rounded text-xs text-[#1c1c1c] font-medium">BI</span>
                </div>
              </div>
            </motion.div>

            {/* Guide Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 shadow-xl"
            >
              <div className="relative">
                <div className="w-full h-48 bg-[#1c1c1c] flex items-center justify-center">
                  <span className="text-[#a3c586] font-medium">CMS Integration</span>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="bg-[#a3c586] text-white text-xs px-2 py-1 rounded font-semibold">
                    CMS integration
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-[#666] mb-3 font-medium">
                  <span>12 mins</span>
                  <span>5 November 2023</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#1c1c1c]">
                  Integrating Centra with an external CMS
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-[#f4f0ec] rounded text-xs text-[#1c1c1c] font-medium">Frontend</span>
                  <span className="px-2 py-1 bg-[#f4f0ec] rounded text-xs text-[#1c1c1c] font-medium">Cache</span>
                  <span className="px-2 py-1 bg-[#f4f0ec] rounded text-xs text-[#1c1c1c] font-medium">DTC</span>
                </div>
              </div>
            </motion.div>

            {/* Guide Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 shadow-xl"
            >
              <div className="relative">
                <div className="w-full h-48 bg-[#1c1c1c] flex items-center justify-center">
                  <span className="text-[#e07a5f] font-medium">ERP Integration</span>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="bg-[#e07a5f] text-white text-xs px-2 py-1 rounded font-semibold">
                    ERP integration
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-[#666] mb-3 font-medium">
                  <span>20 mins</span>
                  <span>3 November 2023</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#1c1c1c]">
                  Integrating Centra with an ERP system using GraphQL Integration API
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-[#f4f0ec] rounded text-xs text-[#1c1c1c] font-medium">CMS</span>
                  <span className="px-2 py-1 bg-[#f4f0ec] rounded text-xs text-[#1c1c1c] font-medium">How-to</span>
                  <span className="px-2 py-1 bg-[#f4f0ec] rounded text-xs text-[#1c1c1c] font-medium">ERP</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signup Section */}
      <section className="py-24 px-6 lg:px-8 bg-[#1c1c1c]">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">Sign up for product updates</h2>
            <p className="text-lg text-gray-300 font-medium">
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
                  className="w-full px-4 py-3 bg-white border border-[#d4a373] rounded-xl text-[#1c1c1c] placeholder-[#666] focus:outline-none focus:border-[#a3c586] focus:ring-2 focus:ring-[#a3c586]/20 transition-all duration-300"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full px-4 py-3 bg-white border border-[#d4a373] rounded-xl text-[#1c1c1c] placeholder-[#666] focus:outline-none focus:border-[#a3c586] focus:ring-2 focus:ring-[#a3c586]/20 transition-all duration-300"
                />
              </div>
              
              <input
                type="email"
                placeholder="Business email*"
                className="w-full px-4 py-3 bg-white border border-[#d4a373] rounded-xl text-[#1c1c1c] placeholder-[#666] focus:outline-none focus:border-[#a3c586] focus:ring-2 focus:ring-[#a3c586]/20 transition-all duration-300"
              />
              
              <input
                type="text"
                placeholder="Company name"
                className="w-full px-4 py-3 bg-white border border-[#d4a373] rounded-xl text-[#1c1c1c] placeholder-[#666] focus:outline-none focus:border-[#a3c586] focus:ring-2 focus:ring-[#a3c586]/20 transition-all duration-300"
              />
              
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full px-4 py-3 bg-white border border-[#d4a373] rounded-xl text-[#1c1c1c] placeholder-[#666] focus:outline-none focus:border-[#a3c586] focus:ring-2 focus:ring-[#a3c586]/20 transition-all duration-300"
              />
              
              <div className="flex items-center space-x-3">
                <input type="checkbox" id="privacy" className="w-4 h-4 text-[#a3c586] bg-white border-[#d4a373] rounded focus:ring-[#a3c586]" />
                <label htmlFor="privacy" className="text-sm text-gray-300 font-medium">
                  I accept the <a href="#" className="text-[#a3c586] hover:underline">privacy policy</a>
                </label>
              </div>
              
              <button className="w-full px-8 py-4 bg-[#a3c586] text-white rounded-xl text-lg font-semibold hover:bg-[#8fb573] transition-all duration-300 shadow-lg">
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
                <div className="bg-white rounded-2xl aspect-[4/3] flex items-center justify-center shadow-xl">
                  <div className="text-center text-[#666]">
                    <div className="w-16 h-16 bg-[#f4f0ec] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📱</span>
                    </div>
                    <p className="text-sm font-medium">People with Phone</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-8 border-t border-[#d4a373] bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {/* Logo */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-xl font-bold text-[#1c1c1c]">centra</span>
                <span className="bg-[#a3c586] text-white text-xs px-2 py-1 rounded font-bold">DEV</span>
              </div>
            </div>
            
            {/* Docs */}
            <div>
              <h3 className="font-semibold mb-4 text-[#1c1c1c]">Docs</h3>
              <ul className="space-y-2 text-sm text-[#666]">
                <li><a href="#" className="hover:text-[#d4a373] transition-colors font-medium">Centra concepts</a></li>
                <li><a href="#" className="hover:text-[#d4a373] transition-colors font-medium">Building a frontend</a></li>
                <li><a href="#" className="hover:text-[#d4a373] transition-colors font-medium">Tools</a></li>
              </ul>
            </div>
            
            {/* API's */}
            <div>
              <h3 className="font-semibold mb-4 text-[#1c1c1c]">API's</h3>
              <ul className="space-y-2 text-sm text-[#666]">
                <li><a href="#" className="hover:text-[#d4a373] transition-colors font-medium">DTC API</a></li>
                <li><a href="#" className="hover:text-[#d4a373] transition-colors font-medium">Integration API</a></li>
              </ul>
            </div>
            
            {/* Guides */}
            <div>
              <h3 className="font-semibold mb-4 text-[#1c1c1c]">Guides</h3>
              <ul className="space-y-2 text-sm text-[#666]">
                <li><a href="#" className="hover:text-[#d4a373] transition-colors font-medium">Frontend</a></li>
                <li><a href="#" className="hover:text-[#d4a373] transition-colors font-medium">Multichannel</a></li>
                <li><a href="#" className="hover:text-[#d4a373] transition-colors font-medium">App e-commerce</a></li>
              </ul>
            </div>
            
            {/* Contact us */}
            <div>
              <h3 className="font-semibold mb-4 text-[#1c1c1c]">Contact us</h3>
              <ul className="space-y-2 text-sm text-[#666]">
                <li><a href="#" className="hover:text-[#d4a373] transition-colors font-medium">Become a partner</a></li>
                <li><a href="#" className="hover:text-[#d4a373] transition-colors font-medium">Support center</a></li>
                <li><a href="#" className="hover:text-[#d4a373] transition-colors font-medium">Careers</a></li>
              </ul>
            </div>
            
            {/* centra.com */}
            <div>
              <h3 className="font-semibold mb-4 text-[#1c1c1c]">centra.com</h3>
              <ul className="space-y-2 text-sm text-[#666]">
                <li><a href="#" className="hover:text-[#d4a373] transition-colors font-medium">Direct-to-Consumer</a></li>
                <li><a href="#" className="hover:text-[#d4a373] transition-colors font-medium">Wholesale</a></li>
                <li><a href="#" className="hover:text-[#d4a373] transition-colors font-medium">Migrate to Centra</a></li>
                <li><a href="#" className="hover:text-[#d4a373] transition-colors font-medium">Centra vs. Competitors</a></li>
                <li><a href="#" className="hover:text-[#d4a373] transition-colors font-medium">Webinars & events</a></li>
                <li><a href="#" className="hover:text-[#d4a373] transition-colors font-medium">Case studies</a></li>
                <li><a href="#" className="hover:text-[#d4a373] transition-colors font-medium">Blog & news</a></li>
              </ul>
            </div>
          </div>
          
          {/* Social Icons */}
          <div className="flex justify-end mt-12">
            <div className="flex space-x-4">
              <a href="#" className="text-[#666] hover:text-[#d4a373] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#666] hover:text-[#d4a373] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#666] hover:text-[#d4a373] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
