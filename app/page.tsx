'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/Badge';
import { useUserPlan } from '@/app/context/UserPlanContext';
import { 
  Zap, 
  Shield, 
  DollarSign, 
  Camera, 
  Brain, 
  CheckCircle,
  Star,
  ArrowRight,
  Upload,
  FileImage
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
    content: "Fixed my leaking faucet in 10 minutes using AI Home Fix. I would've called a plumber otherwise—clear and safe guide!",
    rating: 5,
    avatar: "/avatars/sarah.jpg",
    beforePhoto: "/testimonials/faucet-before.jpg",
    afterPhoto: "/testimonials/faucet-after.jpg",
    verified: true
  },
  {
    name: "Mike C.",
    role: "DIY Enthusiast",
    content: "AI Home Fix explained exactly what part I needed. Saved me $180 on a service call.",
    rating: 5,
    avatar: "/avatars/mike.jpg",
    beforePhoto: "/testimonials/outlet-before.jpg",
    afterPhoto: "/testimonials/outlet-after.jpg",
    verified: true
  },
  {
    name: "Emily R.",
    role: "First-time Homeowner",
    content: "Even as a beginner, AI Home Fix gave me confidence. Step-by-step with photos and safety notes.",
    rating: 5,
    avatar: "/avatars/emily.jpg",
    beforePhoto: "/testimonials/drain-before.jpg",
    afterPhoto: "/testimonials/drain-after.jpg",
    verified: true
  },
  {
    name: "David L.",
    role: "Property Manager",
    content: "AI Home Fix saves me hours of research. It instantly identifies problems and provides the right solutions.",
    rating: 5,
    avatar: "/avatars/alex.jpg",
    beforePhoto: "/testimonials/garage-before.jpg",
    afterPhoto: "/testimonials/garage-after.jpg",
    verified: true
  },

];

export default function HomePage() {
  const { isPro, isBusiness } = useUserPlan();
  const router = useRouter();
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (file: File) => {
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      setIsUploading(true);
      try {
        const dataUrl = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = () => {
            resolve(reader.result as string);
          };
          reader.readAsDataURL(file);
        });
        
        // Store the image data URL in sessionStorage
        sessionStorage.setItem('homepageUploadedImage', dataUrl);
        console.log('Image stored in sessionStorage, redirecting to assistant...');
        
        // Redirect to assistant page
        router.push('/assistant');
      } catch (error) {
        console.error('Error processing file:', error);
        setIsUploading(false);
      }
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

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
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                AI Home Fix – Professional All-In-One Home Repair Assistant
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Upload your problem photo, get instant AI diagnosis, step-by-step repair guidance, and save money on costly service calls.
              </p>
              
              {/* Testimonial Quote */}
                               <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
                   <div className="flex items-start space-x-4">
                     <img
                       src="https://randomuser.me/api/portraits/women/44.jpg"
                       alt="Sarah J. - Homeowner"
                       className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                     />
                     <div>
                       <p className="text-gray-700 italic mb-2">
                         "A game-changer for home repairs. I fixed my leaking faucet in minutes with AI Home Fix."
                       </p>
                       <div className="flex items-center space-x-2">
                         <div className="flex">
                           {[...Array(5)].map((_, i) => (
                             <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                           ))}
                         </div>
                         <span className="text-sm text-gray-500 font-medium">Sarah J., Homeowner</span>
                       </div>
                     </div>
                   </div>
                 </div>

              
            </motion.div>

            {/* Right Column - Upload Block */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Card className="bg-white rounded-2xl shadow-xl border-0 overflow-hidden">
                <div 
                  className="relative bg-cover bg-center bg-no-repeat p-8"
                  style={{
                    backgroundImage: `url('https://pdf.net/_next/static/media/defaultBg.00bbc60d.svg')`,
                    minHeight: '400px'
                  }}
                >
                  <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
                  
                  {/* Drag & Drop Area */}
                  <div className="relative z-10">
                    <div
                      className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                        isDragOver 
                          ? 'border-blue-500 bg-blue-50' 
                          : isUploading
                          ? 'border-gray-400 bg-gray-50'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                    >
                      <div className="space-y-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                          {isUploading ? (
                            <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                          ) : (
                            <Upload className="w-8 h-8 text-gray-400" />
                          )}
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {isUploading ? 'Processing your image...' : 'Drop file here to start'}
                          </h3>
                          <p className="text-gray-500 mb-4">
                            {isUploading ? 'Redirecting to AI Assistant...' : 'JPG, PNG files accepted'}
                          </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                          <Button
                            onClick={() => fileInputRef.current?.click()}
                            disabled={isUploading}
                            className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isUploading ? (
                              <>
                                <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                Processing...
                              </>
                            ) : (
                              <>
                                <FileImage className="w-4 h-4 mr-2" />
                                Choose file
                              </>
                            )}
                          </Button>
                          <p className="text-sm text-gray-500 self-center">
                            {isUploading ? 'Uploading...' : 'or drag and drop'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hidden file input */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </div>
              </Card>
            </motion.div>
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

          <div className="max-w-6xl mx-auto">
            {/* Modern Flow Steps */}
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
                {howItWorks.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      {/* Step Card */}
                      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                        {/* Large Step Number */}
                        <div className="text-center mb-6">
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full shadow-lg mb-4">
                            <span className="text-2xl font-bold text-white">{index + 1}</span>
                          </div>
                        </div>
                        
                        {/* Large Icon */}
                        <div className="text-center mb-6">
                          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-sm">
                            <Icon className="w-10 h-10 text-blue-600" />
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="text-center">
                          <h3 className="text-xl font-bold text-gray-900 mb-3">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Arrow Connector */}
                      {index < howItWorks.length - 1 && (
                        <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                          <div className="w-8 h-8 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center">
                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Mobile Arrow Connectors */}
              <div className="md:hidden flex justify-center items-center space-x-4 mt-8">
                {howItWorks.slice(0, -1).map((_, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg" asChild>
                <Link href="/assistant">
                  Start free diagnosis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <p className="text-sm text-gray-500 mt-3">
                No credit card required • 1 free diagnosis
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
              Loved by Homeowners
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our users are saying about their experience
            </p>
          </motion.div>

          {/* Featured Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-20">
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                </svg>
              </div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-20">
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                </svg>
              </div>
              
              {/* Featured Quote */}
              <blockquote className="text-2xl md:text-3xl text-gray-800 font-serif italic leading-relaxed mb-8 px-8">
                &quot;Fixed my leaking faucet in 10 minutes using AI Home Fix. I would&apos;ve called a plumber otherwise—clear and safe guide!&quot;
              </blockquote>
              
              {/* Featured Avatar and Name */}
              <div className="flex flex-col items-center">
                <img 
                  src="/avatars/sarah.jpg" 
                  alt="Sarah J." 
                  className="w-16 h-16 rounded-full object-cover mb-4 shadow-lg" 
                />
                <div className="text-center">
                  <p className="font-bold text-gray-900 text-lg">Sarah J.</p>
                  <p className="text-gray-600">Homeowner</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.slice(1).map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white rounded-2xl shadow-lg border-0 hover:shadow-xl transition-all duration-300 p-8">
                  {/* Testimonial Content */}
                  <blockquote className="text-gray-700 leading-relaxed mb-6 text-base">
                    &quot;{testimonial.content}&quot;
                  </blockquote>
                  
                  {/* Avatar, Name, and Role */}
                  <div className="flex items-center gap-4">
                    {testimonial.name === "Mike C." && (
                      <img 
                        src="/avatars/mike.jpg" 
                        alt="Mike C." 
                        className="w-12 h-12 rounded-full object-cover flex-shrink-0" 
                      />
                    )}
                    {testimonial.name === "Emily R." && (
                      <img 
                        src="/avatars/emily.jpg" 
                        alt="Emily R." 
                        className="w-12 h-12 rounded-full object-cover flex-shrink-0" 
                      />
                    )}
                    {testimonial.name === "David L." && (
                      <img 
                        src="/avatars/alex.jpg" 
                        alt="David L." 
                        className="w-12 h-12 rounded-full object-cover flex-shrink-0" 
                      />
                    )}

                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
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
                  {isPro || isBusiness ? 'Use AI Helper' : 'Start Free Trial'}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-semibold border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <Link href="/pricing">View Plans</Link>
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              {isPro || isBusiness ? 'Unlimited access' : '1 free diagnosis • Cancel anytime'}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
