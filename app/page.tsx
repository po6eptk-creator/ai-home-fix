'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/Badge';
import { 
  Zap, 
  Shield, 
  DollarSign, 
  Camera, 
  Brain, 
  CheckCircle,
  Star,
  ArrowRight
} from 'lucide-react';

const valueProps = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get a reliable diagnosis in under 60 seconds."
  },
  {
    icon: Shield,
    title: "Safe & Reliable",
    description: "Every solution includes built-in safety checks."
  },
  {
    icon: DollarSign,
    title: "Save Money",
    description: "Avoid unnecessary contractor visits and fees."
  }
];

const howItWorks = [
  {
    icon: Camera,
    title: "Upload Photo",
    description: "Take a clear photo of the problem area."
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description: "We identify the issue and generate a repair plan."
  },
  {
    icon: CheckCircle,
    title: "Get Solution",
    description: "Follow the step-by-step guide with parts and tools."
  }
];

const testimonials = [
  {
    name: "Sarah J.",
    role: "Homeowner",
    content: "Fixed my leaking faucet in 10 minutes. I would've called a plumber. The guide was clear and safe.",
    rating: 5,
    avatar: "/avatars/sarah.jpg",
    beforePhoto: "/testimonials/faucet-before.jpg",
    afterPhoto: "/testimonials/faucet-after.jpg",
    verified: true
  },
  {
    name: "Mike C.",
    role: "DIY Enthusiast",
    content: "Explained exactly what part I needed. Saved me $180 on a service call.",
    rating: 5,
    avatar: "/avatars/mike.jpg",
    beforePhoto: "/testimonials/outlet-before.jpg",
    afterPhoto: "/testimonials/outlet-after.jpg",
    verified: true
  },
  {
    name: "Emily R.",
    role: "First-time Homeowner",
    content: "Even as a beginner, I felt confident. Step-by-step with photos, plus safety notes.",
    rating: 5,
    avatar: "/avatars/emily.jpg",
    beforePhoto: "/testimonials/drain-before.jpg",
    afterPhoto: "/testimonials/drain-after.jpg",
    verified: true
  },
  {
    name: "David L.",
    role: "Property Manager",
    content: "Saves me hours of research. The AI instantly identifies the problem and gives me the exact solution.",
    rating: 5,
    avatar: "/avatars/david.jpg",
    beforePhoto: "/testimonials/garage-before.jpg",
    afterPhoto: "/testimonials/garage-after.jpg",
    verified: true
  },
  {
    name: "Lisa M.",
    role: "Homeowner",
    content: "The safety warnings are so helpful. I never would have known to turn off the water first!",
    rating: 5,
    avatar: "/avatars/lisa.jpg",
    beforePhoto: "/testimonials/water-heater-before.jpg",
    afterPhoto: "/testimonials/water-heater-after.jpg",
    verified: true
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
                Fix any home problem in 60 seconds
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 mb-8 font-medium">
                Upload a photo and description. Our AI diagnoses the issue, gives step-by-step repair instructions, parts, tools, and safety checks—so you can fix it today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-black hover:bg-gray-800" asChild>
                  <Link href="/assistant">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="secondary" size="lg" className="h-14 px-8 text-lg font-semibold border-2 border-black hover:bg-black hover:text-white" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                2 free diagnoses • No credit card needed
              </p>
            </motion.div>

            {/* Right Column - Repair Cases Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="flex gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
                {/* Case 1 */}
                <div className="flex-shrink-0 w-80 lg:w-72">
                  <div className="relative group cursor-pointer">
                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-6 h-64 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Camera className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-gray-600 font-medium">Before: Leaking Faucet</p>
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-white rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-between">
                                             <div>
                         <h3 className="text-lg font-bold text-gray-900 mb-2">Leaking faucet fixed</h3>
                         <div className="flex flex-wrap gap-2 mb-4">
                           <Badge type="risk" value="Low" />
                           <Badge type="difficulty" value="Easy" />
                           <Badge type="time" value="15 min" />
                           <Badge type="cost" value="$5" />
                         </div>
                       </div>
                      <Button className="w-full" asChild>
                        <Link href="/assistant">Upload photo</Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Case 2 */}
                <div className="flex-shrink-0 w-80 lg:w-72">
                  <div className="relative group cursor-pointer">
                    <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-6 h-64 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Zap className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-gray-600 font-medium">Before: Dead Outlet</p>
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-white rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-between">
                                             <div>
                         <h3 className="text-lg font-bold text-gray-900 mb-2">Electrical outlet repaired</h3>
                         <div className="flex flex-wrap gap-2 mb-4">
                           <Badge type="risk" value="Medium" />
                           <Badge type="difficulty" value="Medium" />
                           <Badge type="time" value="30 min" />
                           <Badge type="cost" value="$15" />
                         </div>
                       </div>
                      <Button className="w-full" asChild>
                        <Link href="/assistant">Upload photo</Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Case 3 */}
                <div className="flex-shrink-0 w-80 lg:w-72">
                  <div className="relative group cursor-pointer">
                    <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-6 h-64 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Shield className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-gray-600 font-medium">Before: Clogged Drain</p>
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-white rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-between">
                                             <div>
                         <h3 className="text-lg font-bold text-gray-900 mb-2">Drain unclogged</h3>
                         <div className="flex flex-wrap gap-2 mb-4">
                           <Badge type="risk" value="Low" />
                           <Badge type="difficulty" value="Easy" />
                           <Badge type="time" value="20 min" />
                           <Badge type="cost" value="$8" />
                         </div>
                       </div>
                      <Button className="w-full" asChild>
                        <Link href="/assistant">Upload photo</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Navigation Arrows */}
              <div className="hidden lg:flex justify-between absolute top-1/2 -translate-y-1/2 w-full -mx-4">
                <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <ArrowRight className="w-5 h-5 rotate-180" />
                </button>
                <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose AI Home Fix?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of home maintenance with our cutting-edge AI technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => {
              const Icon = prop.icon;
              return (
                <motion.div
                  key={prop.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center h-full bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold">{prop.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-lg text-gray-600">
                        {prop.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to solve any home repair problem
            </p>
            <p className="text-sm text-gray-500 mt-4">
              No account required to try. Works with plumbing, electrical, appliances, HVAC, and more.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Linear Flow Steps */}
            <div className="relative">
              {/* Progress Line */}
              <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {howItWorks.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="text-center relative"
                    >
                      {/* Step Number */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold z-10">
                        {index + 1}
                      </div>
                      
                      {/* Icon */}
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
                <Link href="/assistant">
                  Start free diagnosis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <p className="text-sm text-gray-500 mt-3">
                No credit card required • 2 free diagnoses
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Loved by Homeowners
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our users are saying about their experience
            </p>
          </motion.div>

          <div className="overflow-x-auto pb-6">
            <div className="flex gap-6 min-w-max">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-80 flex-shrink-0"
                >
                  <Card className="h-full bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      {/* Header with Avatar and Verification */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">
                              {testimonial.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-semibold text-gray-900">{testimonial.name}</p>
                              {testimonial.verified && (
                                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs font-medium">
                                  ✓ Verified
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                          </div>
                        </div>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>

                      {/* Before/After Photos */}
                      <div className="flex gap-2 mb-4">
                        <div className="flex-1 bg-gray-100 rounded-lg p-2 text-center">
                          <div className="w-full h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center">
                            <span className="text-xs text-gray-500">Before</span>
                          </div>
                        </div>
                        <div className="flex-1 bg-gray-100 rounded-lg p-2 text-center">
                          <div className="w-full h-16 bg-gradient-to-br from-green-200 to-green-300 rounded flex items-center justify-center">
                            <span className="text-xs text-green-600">After</span>
                          </div>
                        </div>
                      </div>

                      {/* Testimonial Content */}
                      <p className="text-sm text-gray-700 leading-relaxed">
                        &quot;{testimonial.content}&quot;
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Fix Your Home?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of homeowners saving time and money with AI-powered repair guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="h-14 px-8 text-lg font-semibold bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link href="/assistant">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-semibold border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <Link href="/pricing">View Plans</Link>
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              2 free diagnoses • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
