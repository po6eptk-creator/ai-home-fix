'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Camera, Wrench, Settings, Star, CheckCircle, Zap, Shield, Package } from 'lucide-react';
import Link from 'next/link';

export default function ForTest2Page() {
  return (
    <div className="min-h-screen bg-[#f4f0ec]">
      
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f4f0ec]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-[#1c1c1c] mb-6 tracking-tight leading-tight">
              Smart AI Help for Home Repairs
            </h1>
            <p className="text-xl md:text-2xl text-[#1c1c1c] mb-8 max-w-3xl mx-auto font-light">
              Get instant diagnosis and step-by-step repair guides for any household problem. 
              Upload a photo and let our AI guide you through the fix.
            </p>
            <Button size="lg" className="h-16 px-10 text-lg font-bold bg-[#1c1c1c] hover:bg-[#2a2a2a] text-white rounded-xl transition-all duration-300 shadow-lg" asChild>
              <Link href="/assistant">
                Start Free Diagnosis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <p className="text-sm text-[#666] mt-6 font-medium">
              2 free diagnoses • No credit card needed
            </p>
          </motion.div>
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1c1c1c]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Common Household Issues
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
              From simple fixes to complex repairs, our AI can help with any home problem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plumbing Issues */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-[#f4f0ec] rounded-2xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="bg-[#a3c586] p-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Wrench className="w-8 h-8 text-[#a3c586]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white text-center mb-4 tracking-tight">Plumbing Problems</h3>
                </div>
                <CardContent className="p-8">
                  <ul className="space-y-4 text-[#1c1c1c]">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#a3c586] mr-3 flex-shrink-0" />
                      <span className="font-medium">Leaking faucets & pipes</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#a3c586] mr-3 flex-shrink-0" />
                      <span className="font-medium">Clogged drains & toilets</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#a3c586] mr-3 flex-shrink-0" />
                      <span className="font-medium">Running toilets</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#a3c586] mr-3 flex-shrink-0" />
                      <span className="font-medium">Low water pressure</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Electrical Issues */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-[#f4f0ec] rounded-2xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="bg-[#d4a373] p-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Zap className="w-8 h-8 text-[#d4a373]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white text-center mb-4 tracking-tight">Electrical Issues</h3>
                </div>
                <CardContent className="p-8">
                  <ul className="space-y-4 text-[#1c1c1c]">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#d4a373] mr-3 flex-shrink-0" />
                      <span className="font-medium">Dead outlets & switches</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#d4a373] mr-3 flex-shrink-0" />
                      <span className="font-medium">Flickering lights</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#d4a373] mr-3 flex-shrink-0" />
                      <span className="font-medium">Circuit breaker trips</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#d4a373] mr-3 flex-shrink-0" />
                      <span className="font-medium">Wiring problems</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* General Repairs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-[#f4f0ec] rounded-2xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="bg-[#e07a5f] p-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Settings className="w-8 h-8 text-[#e07a5f]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white text-center mb-4 tracking-tight">General Repairs</h3>
                </div>
                <CardContent className="p-8">
                  <ul className="space-y-4 text-[#1c1c1c]">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#e07a5f] mr-3 flex-shrink-0" />
                      <span className="font-medium">Broken door handles</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#e07a5f] mr-3 flex-shrink-0" />
                      <span className="font-medium">Sticky windows</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#e07a5f] mr-3 flex-shrink-0" />
                      <span className="font-medium">Loose cabinet hinges</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#e07a5f] mr-3 flex-shrink-0" />
                      <span className="font-medium">Drywall holes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How AI Home Fix Helps Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f4f0ec]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-[#1c1c1c] mb-4 tracking-tight">
              How AI Home Fix Helps
            </h2>
            <p className="text-xl text-[#1c1c1c] max-w-2xl mx-auto font-light">
              Three simple steps to solve any home repair problem
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Progress Line */}
              <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-1 bg-gradient-to-r from-[#d4a373] to-[#e07a5f] rounded-full"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#d4a373] text-white rounded-full flex items-center justify-center text-lg font-bold z-10 shadow-lg">
                    1
                  </div>
                  
                  <div className="w-24 h-24 bg-[#1c1c1c] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <Camera className="w-12 h-12 text-[#d4a373]" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#1c1c1c] mb-2 tracking-tight">
                    Upload Photo
                  </h3>
                  <p className="text-sm text-[#666] leading-relaxed font-medium">
                    Take a clear photo of the problem area and add a brief description of what's happening.
                  </p>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#d4a373] text-white rounded-full flex items-center justify-center text-lg font-bold z-10 shadow-lg">
                    2
                  </div>
                  
                  <div className="w-24 h-24 bg-[#1c1c1c] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <Zap className="w-12 h-12 text-[#d4a373]" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#1c1c1c] mb-2 tracking-tight">
                    AI Diagnosis
                  </h3>
                  <p className="text-sm text-[#666] leading-relaxed font-medium">
                    Our AI analyzes the image and provides an instant diagnosis with safety warnings and risk assessment.
                  </p>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#d4a373] text-white rounded-full flex items-center justify-center text-lg font-bold z-10 shadow-lg">
                    3
                  </div>
                  
                  <div className="w-24 h-24 bg-[#1c1c1c] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <Wrench className="w-12 h-12 text-[#d4a373]" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#1c1c1c] mb-2 tracking-tight">
                    Step-by-Step Guide
                  </h3>
                  <p className="text-sm text-[#666] leading-relaxed font-medium">
                    Get detailed repair instructions, tool recommendations, and parts lists to complete the fix.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Parts Suggestions Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1c1c1c]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                Tools & Parts Suggestions
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                Our AI doesn't just diagnose the problem—it tells you exactly what tools and parts you need to fix it. 
                No more multiple trips to the hardware store or buying the wrong supplies.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#d4a373] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Precise Tool Lists</h3>
                    <p className="text-gray-300 text-sm font-medium">Get exact tool recommendations based on your specific repair.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#d4a373] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Parts Specifications</h3>
                    <p className="text-gray-300 text-sm font-medium">Exact part numbers, sizes, and specifications for your repair.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#d4a373] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Cost Estimates</h3>
                    <p className="text-gray-300 text-sm font-medium">Know the total cost before you start the repair.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Right Column - Example List */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#f4f0ec] rounded-2xl border-0 shadow-xl overflow-hidden">
                <div className="bg-[#a3c586] p-6">
                  <h3 className="text-2xl font-bold text-white text-center tracking-tight">
                    Example: Leaking Faucet Repair
                  </h3>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-[#1c1c1c] mb-4 flex items-center text-lg">
                        <Wrench className="w-6 h-6 mr-3 text-[#a3c586]" />
                        Tools Needed
                      </h4>
                      <ul className="space-y-3 text-[#1c1c1c]">
                        <li className="flex items-center">
                          <span className="w-3 h-3 bg-[#a3c586] rounded-full mr-3"></span>
                          <span className="font-medium">Adjustable wrench</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-3 h-3 bg-[#a3c586] rounded-full mr-3"></span>
                          <span className="font-medium">Phillips screwdriver</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-3 h-3 bg-[#a3c586] rounded-full mr-3"></span>
                          <span className="font-medium">Plumber's tape</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-[#1c1c1c] mb-4 flex items-center text-lg">
                        <Package className="w-6 h-6 mr-3 text-[#e07a5f]" />
                        Parts Required
                      </h4>
                      <ul className="space-y-3 text-[#1c1c1c]">
                        <li className="flex items-center">
                          <span className="w-3 h-3 bg-[#e07a5f] rounded-full mr-3"></span>
                          <span className="font-medium">Faucet cartridge (model specific)</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-3 h-3 bg-[#e07a5f] rounded-full mr-3"></span>
                          <span className="font-medium">O-rings (various sizes)</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-3 h-3 bg-[#e07a5f] rounded-full mr-3"></span>
                          <span className="font-medium">Washers</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-[#1c1c1c] rounded-xl p-6">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white">Estimated Cost:</span>
                        <span className="text-3xl font-bold text-[#d4a373]">$15-25</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Success Stories Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f4f0ec]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-[#1c1c1c] mb-4 tracking-tight">
              Customer Success Stories
            </h2>
            <p className="text-xl text-[#1c1c1c] max-w-2xl mx-auto font-light">
              Real homeowners who fixed their problems with AI Home Fix
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-[#1c1c1c] rounded-2xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="bg-[#d4a373] p-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-[#d4a373] font-bold text-xl">M</span>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-white text-lg">Mark T.</p>
                    <p className="text-white text-sm opacity-90">Homeowner</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#d4a373] fill-current" />
                      ))}
                    </div>
                    <span className="bg-[#a3c586] text-white px-3 py-1 rounded-full text-xs font-bold">
                      ✓ Verified
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-300 leading-relaxed font-medium">
                    "Fixed my leaking kitchen faucet in 20 minutes! The AI told me exactly which cartridge to buy and walked me through the whole process. Saved me $150 on a plumber."
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-[#1c1c1c] rounded-2xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="bg-[#a3c586] p-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-[#a3c586] font-bold text-xl">J</span>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-white text-lg">Jennifer L.</p>
                    <p className="text-white text-sm opacity-90">DIY Enthusiast</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#a3c586] fill-current" />
                      ))}
                    </div>
                    <span className="bg-[#a3c586] text-white px-3 py-1 rounded-full text-xs font-bold">
                      ✓ Verified
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-300 leading-relaxed font-medium">
                    "The electrical outlet in my bedroom was dead. AI Home Fix diagnosed it as a loose wire connection and showed me how to fix it safely. No more extension cords!"
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-[#1c1c1c] rounded-2xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="bg-[#e07a5f] p-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-[#e07a5f] font-bold text-xl">R</span>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-white text-lg">Robert K.</p>
                    <p className="text-white text-sm opacity-90">First-time Homeowner</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#e07a5f] fill-current" />
                      ))}
                    </div>
                    <span className="bg-[#a3c586] text-white px-3 py-1 rounded-full text-xs font-bold">
                      ✓ Verified
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-300 leading-relaxed font-medium">
                    "As a new homeowner, I was clueless about repairs. AI Home Fix helped me fix a running toilet and a sticky door. The step-by-step guides are perfect for beginners."
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get Started CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1c1c1c]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Ready to Fix Your Home?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-light">
              Join thousands of homeowners who are saving money and time with AI-powered repair guidance.
            </p>
            <Button size="lg" className="h-16 px-10 text-lg font-bold bg-[#d4a373] hover:bg-[#c49262] text-white rounded-xl transition-all duration-300 shadow-xl" asChild>
              <Link href="/assistant">
                Start Free Diagnosis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <p className="text-sm text-gray-400 mt-6 font-medium">
              No credit card required • 2 free diagnoses • Instant results
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
