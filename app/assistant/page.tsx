'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DiagnosisResult } from '@/types/diagnosis';
import ImageUpload from '@/components/ImageUpload';
import DiagnosisDisplay from '@/components/DiagnosisDisplay';
import PricingModal from '@/components/PricingModal';
import { useUserPlan } from '@/app/context/UserPlanContext';
import { Brain, CheckCircle, AlertCircle, Sun, Crosshair, RotateCw, RefreshCw, Camera as CameraIcon, HelpCircle, Shield, Eye, User, X, Zap, Fan, WashingMachine, Hammer, Square, Home, Leaf } from 'lucide-react';

export default function AssistantPage() {
  const { userPlan, isPro, isBusiness } = useUserPlan();
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [problemDescription, setProblemDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [diagnosis, setDiagnosis] = useState<DiagnosisResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [remainingDiagnoses, setRemainingDiagnoses] = useState(1);
  const [diagnosisCount, setDiagnosisCount] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [errorType, setErrorType] = useState<'file-size' | 'format' | 'focus' | null>(null);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showPricingModal, setShowPricingModal] = useState(false);


  const categories = [
    'Plumbing',
    'Electrical', 
    'HVAC',
    'Appliances',
    'Carpentry',
    'Drywall',
    'Roofing',
    'Landscaping'
  ];

  const categoryIcons: Record<string, any> = {
    'Plumbing': WashingMachine, // Using washing machine as faucet alternative
    'Electrical': Zap,
    'HVAC': Fan,
    'Appliances': WashingMachine,
    'Carpentry': Hammer,
    'Drywall': Square, // Using square as wall/brick alternative
    'Roofing': Home,
    'Landscaping': Leaf
  };

  const amazonCategoryLinks: Record<string, {tools: string; parts: string}> = {
    plumbing: {
      tools: "https://www.amazon.com/s?i=tools&rh=n%3A680468011",
      parts: "https://www.amazon.com/s?i=hi&rh=n%3A13397491"
    },
    carpentry: {
      tools: "https://www.amazon.com/s?i=tools&rh=n%3A552690",
      parts: "https://www.amazon.com/s?i=hi&rh=n%3A552690011"
    },
    electrical: {
      tools: "https://www.amazon.com/s?i=tools&rh=n%3A495224",
      parts: "https://www.amazon.com/s?i=hi&rh=n%3A498796"
    },
    hvac: {
      tools: "https://www.amazon.com/s?i=tools&rh=n%3A680468011",
      parts: "https://www.amazon.com/s?i=hi&rh=n%3A13397491"
    },
    appliances: {
      tools: "https://www.amazon.com/s?i=tools&rh=n%3A680468011",
      parts: "https://www.amazon.com/s?i=hi&rh=n%3A13397491"
    },
    drywall: {
      tools: "https://www.amazon.com/s?i=tools&rh=n%3A552690",
      parts: "https://www.amazon.com/s?i=hi&rh=n%3A552690011"
    },
    roofing: {
      tools: "https://www.amazon.com/s?i=tools&rh=n%3A552690",
      parts: "https://www.amazon.com/s?i=hi&rh=n%3A552690011"
    },
    landscaping: {
      tools: "https://www.amazon.com/s?i=tools&rh=n%3A552690",
      parts: "https://www.amazon.com/s?i=hi&rh=n%3A553764"
    },
    default: {
      tools: "https://www.amazon.com/s?i=tools",
      parts: "https://www.amazon.com/s?i=hi"
    }
  };



  const validateImage = (file: File): { isValid: boolean; errorType?: 'file-size' | 'format' } => {
    // Check file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      return { isValid: false, errorType: 'file-size' };
    }
    
    // Check file format
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (!validTypes.includes(file.type)) {
      return { isValid: false, errorType: 'format' };
    }
    
    return { isValid: true };
  };

  const handleRetakePhoto = () => {
    setError(null);
    setErrorType(null);
    setImage(null);
    setImagePreview(null);
    setProblemDescription('');
    setSelectedCategory('');
  };

  const handleRefocusGuide = () => {
    // This could open a modal or navigate to a guide page
    alert('Refocus Guide:\n\n1. Ensure good lighting\n2. Keep camera steady\n3. Focus on the problem area\n4. Take photo from multiple angles\n5. Avoid shadows and glare');
  };

  const privacyFeatures = [
    {
      icon: Shield,
      title: 'EXIF auto-remove',
      description: 'All location and device metadata is automatically stripped from your photos before processing. Your privacy is protected.'
    },
    {
      icon: Eye,
      title: 'Faces auto-blur',
      description: 'Our AI automatically detects and blurs any faces in your photos to protect privacy. Only the repair area is analyzed.'
    },
    {
      icon: User,
      title: 'No account required',
      description: 'Start diagnosing immediately without creating an account. Your photos are processed securely and deleted after analysis.'
    }
  ];

  useEffect(() => {
    // Load remaining diagnoses and diagnosis count from localStorage
    const savedRemaining = localStorage.getItem('remainingDiagnoses');
    const savedCount = localStorage.getItem('diagnosisCount');
    
    // For new users, set to 1 free diagnosis
    if (savedRemaining === null) {
      setRemainingDiagnoses(1);
      localStorage.setItem('remainingDiagnoses', '1');
    } else {
      setRemainingDiagnoses(parseInt(savedRemaining));
    }
    
    if (savedCount) {
      setDiagnosisCount(parseInt(savedCount));
    }

    // Check for uploaded image from homepage
    const homepageImage = sessionStorage.getItem('homepageUploadedImage');
    if (homepageImage) {
      console.log('Found homepage image in sessionStorage, loading...');
      // Convert data URL to File object and load it
      (async () => {
        try {
          const response = await fetch(homepageImage);
          const blob = await response.blob();
          const file = new File([blob], 'homepage-upload.jpg', { type: 'image/jpeg' });
          handleImageChange(file);
          
          // Clear the sessionStorage after loading
          sessionStorage.removeItem('homepageUploadedImage');
          console.log('Homepage image loaded successfully');
        } catch (error) {
          console.error('Failed to load homepage image:', error);
          sessionStorage.removeItem('homepageUploadedImage');
        }
      })();
    } else {
      // Clean up any stale sessionStorage entries on page load
      sessionStorage.removeItem('homepageUploadedImage');
    }


  }, [categories]);

  const handleImageChange = (file: File | null) => {
    setError(null);
    setErrorType(null);
    
    if (file) {
      const validation = validateImage(file);
      if (!validation.isValid) {
        setErrorType(validation.errorType!);
        setError(validation.errorType === 'file-size' 
          ? 'Image too big. Please upload <10MB.'
          : 'Unsupported format. Use JPG/PNG.'
        );
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
    
    setImage(file);
    if (!file) {
      setImagePreview(null);
    }
  };

  const handleDiagnose = async () => {
    if (!problemDescription.trim()) {
      setError('Please describe the problem to continue.');
      return;
    }

    // Check diagnosis limit for free users only
    if (!isPro && !isBusiness && diagnosisCount >= 1) {
      setShowPricingModal(true);
      return;
    }

    // Check remaining diagnoses for free users only
    if (!isPro && !isBusiness && remainingDiagnoses <= 0) {
      setShowPricingModal(true);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Convert image to base64 if provided
      let imageBase64: string | undefined;
      if (image) {
        const reader = new FileReader();
        imageBase64 = await new Promise((resolve, reject) => {
          reader.onload = () => {
            const result = reader.result as string;
            // Remove the data:image/jpeg;base64, prefix
            const base64String = result.split(',')[1];
            resolve(base64String);
          };
          reader.onerror = reject;
          reader.readAsDataURL(image!);
        });
      }

      // Prepare request body
      const requestBody = {
        description: problemDescription,
        ...(imageBase64 && { imageBase64 }),
        ...(selectedCategory && { category: selectedCategory })
      };

      // Log the request body to console
      console.log('Request body for /api/assistant:', requestBody);

      // Make API call to /api/assistant
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Something went wrong. Please try again.');
      }

      const data = await response.json();
      
      // Store the AI response
      setDiagnosis({
        problem: {
          title: problemDescription,
          confidence: 0.9,
          altHypotheses: []
        },
        diy: {
          summary: data.overview,
          steps: data.steps.map((step: string, index: number) => ({
            title: `Step ${index + 1}`,
            detail: step
          })),
          tools: [
            {
              name: 'Basic tools',
              searchQueries: ['basic home repair tools']
            }
          ],
          parts: [
            {
              name: 'Common household items',
              searchQueries: ['home repair supplies']
            }
          ],
          estimatedCost: {
            currency: 'USD',
            min: 20,
            max: 100
          }
        },
        safety: {
          globalNotices: data.safetyTips || ['Use protective gloves and proper tools to avoid injury.'],
          risks: [
            {
              title: 'General Safety',
              description: 'Follow all safety precautions when performing home repairs',
              severity: 'medium'
            }
          ],
          showHireProCTA: false,
          category: selectedCategory || 'General'
        },
        tipVideoQuery: `${selectedCategory || 'home repair'} ${problemDescription}`
      });

      // Increment diagnosis count and update localStorage
      const newCount = diagnosisCount + 1;
      setDiagnosisCount(newCount);
      localStorage.setItem('diagnosisCount', newCount.toString());
      
      // Deduct one diagnosis only for free users (for backward compatibility)
      if (!isPro && !isBusiness) {
        const newRemaining = remainingDiagnoses - 1;
        setRemainingDiagnoses(newRemaining);
        localStorage.setItem('remainingDiagnoses', newRemaining.toString());
      }

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBuyCredits = async () => {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
      });
      
      if (response.ok) {
        const { url } = await response.json();
        window.location.href = url;
      } else {
        setError('Failed to initiate checkout');
      }
    } catch {
      setError('Failed to initiate checkout');
    }
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container-apple py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-display-2 font-bold text-gradient mb-4">
            AI Home Repair Assistant
          </h1>
          <p className="text-headline-2 text-gray-600 mb-8">
            Upload a photo of your issue → Get instant AI-powered repair guidance, parts list, and safety tips.
          </p>
          
          {/* Plan Status */}
          {isPro || isBusiness ? (
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-6 py-3 rounded-full text-lg font-medium">
              <CheckCircle className="w-5 h-5" />
              <span>{isBusiness ? 'Business Plan' : 'Pro Plan'} - Unlimited Access</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-lg font-medium">
              <CheckCircle className="w-5 h-5" />
              <span>{remainingDiagnoses} free diagnosis left</span>
              <span className="text-yellow-500">⚡</span>
            </div>
          )}
        </motion.div>



        {/* Main Form */}
        {!diagnosis && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            {/* Progress Indicator */}
            <div className="text-center mb-4">
              <p className="text-sm text-gray-500 font-medium">
                Step 1 of 2
              </p>
            </div>
            
            <Card className="p-8">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-headline-2">Start Your Diagnosis</CardTitle>
                <CardDescription className="text-body-large">
                  Describe the problem and optionally upload a photo to get instant AI-powered solutions
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-8">
                {/* Photo Tips */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="mb-3">
                    <h3 className="text-sm font-semibold text-gray-700">Good photo tips</h3>
                  </div>
                  <div className="flex items-center justify-center gap-8">
                    <div className="flex items-center gap-2">
                      <Sun className="w-4 h-4 text-yellow-500" />
                      <span className="text-xs text-gray-600">Good lighting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Crosshair className="w-4 h-4 text-blue-500" />
                      <span className="text-xs text-gray-600">Keep in focus</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <RotateCw className="w-4 h-4 text-green-500" />
                      <span className="text-xs text-gray-600">Right angle</span>
                    </div>
                  </div>
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">
                    Upload Photo
                  </label>
                  <ImageUpload
                    onImageChange={handleImageChange}
                    imagePreview={imagePreview}
                  />
                </div>

                {/* Privacy & Trust Strip */}
                <div className="border-t border-gray-100 pt-6">
                  <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
                    {privacyFeatures.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <button
                          key={index}
                          onClick={() => setShowPrivacyModal(true)}
                          className="flex items-center gap-1.5 hover:text-gray-700 transition-colors"
                        >
                          <Icon className="w-3 h-3" />
                          <span>{feature.title}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Category Selection */}
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">
                    Problem Category (Optional)
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {categories.map((category) => {
                      const Icon = categoryIcons[category];
                      return (
                        <button
                          key={category}
                          type="button"
                          onClick={() => setSelectedCategory(selectedCategory === category ? '' : category)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                            selectedCategory === category
                              ? 'bg-blue-600 text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          {category}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Problem Description */}
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">
                    Describe the Problem
                  </label>
                  <textarea
                    value={problemDescription}
                    onChange={(e) => setProblemDescription(e.target.value)}
                    placeholder="e.g., &quot;Kitchen faucet leaking under the handle. Leak increases when turned on.&quot;"
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-body"
                    rows={4}
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl flex items-center gap-3"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{error}</span>
                  </motion.div>
                )}

                {/* Action Buttons */}
                <div className="space-y-3">
                  <div className="flex gap-4">
                    {(isPro || isBusiness || remainingDiagnoses > 0) ? (
                      <Button
                        onClick={handleDiagnose}
                        disabled={isLoading || !problemDescription.trim()}
                        className="flex-1 h-14 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg"
                      >
                        {isLoading ? (
                          <>
                            <Brain className="w-5 h-5 mr-2 animate-pulse" />
                            Analyzing… (~10–20 sec)
                          </>
                        ) : (
                          <>
                            <Brain className="w-5 h-5 mr-2" />
                            Get Diagnosis
                          </>
                        )}
                      </Button>
                    ) : (
                      <Button
                        onClick={() => setShowPricingModal(true)}
                        variant="gradient"
                        className="flex-1 h-14 text-lg"
                      >
                        Upgrade to Pro Plan — Unlimited Access
                      </Button>
                    )}
                  </div>
                  
                  {/* Trust Line */}
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      ⚡ Instant results • 🔒 Secure & private • ✅ No account required
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* What happens next? Section */}
        {!diagnosis && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto mt-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What happens next?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get your repair solution in just 3 simple steps
              </p>
            </div>

            {/* 3-Step Process */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Upload photo</h3>
                <p className="text-gray-600">Take a clear photo of your repair issue</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">AI analysis</h3>
                <p className="text-gray-600">Our AI identifies the problem and safety concerns</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Get fix plan</h3>
                <p className="text-gray-600">Receive step-by-step instructions and parts list</p>
              </motion.div>
            </div>

            {/* Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="max-w-md mx-auto"
            >
              <Card className="bg-white rounded-2xl shadow-lg border-0 p-6">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <img 
                      src="/avatars/sarah.jpg" 
                      alt="Sarah J." 
                      className="w-16 h-16 rounded-full object-cover shadow-lg" 
                    />
                  </div>
                  <blockquote className="text-lg text-gray-700 mb-4 italic">
                    "Fixed my faucet in 10 minutes with AI Home Fix!"
                  </blockquote>
                  <div>
                    <p className="font-bold text-gray-900">Sarah J.</p>
                    <p className="text-sm text-gray-600">Homeowner</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        )}

        {/* Loading Skeleton */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8">
              <CardHeader className="text-center pb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <RefreshCw className="w-6 h-6 text-blue-600 animate-spin" />
                  <h2 className="text-headline-2">Analyzing your photo...</h2>
                </div>
                <p className="text-body text-gray-600">This usually takes 10-20 seconds</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Analysis Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-blue-200 rounded-full animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-3 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-green-200 rounded-full animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-3 bg-gray-200 rounded w-2/3 animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-purple-200 rounded-full animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded w-18 animate-pulse"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-3 bg-gray-200 rounded w-4/5 animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                {/* Progress Steps */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-600">Analyzing safety</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-sm text-gray-600">Building steps</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-sm text-gray-600">Compiling parts</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Error Cards */}
        {error && errorType && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="border-red-200 bg-red-50">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-headline-2 text-red-900">Upload Issue</CardTitle>
                <CardDescription className="text-body text-red-700">
                  {error}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleRetakePhoto}
                    className="flex-1"
                    variant="outline"
                  >
                    <CameraIcon className="w-4 h-4 mr-2" />
                    Retake photo
                  </Button>
                  <Button
                    onClick={handleRefocusGuide}
                    className="flex-1"
                    variant="outline"
                  >
                    <HelpCircle className="w-4 h-4 mr-2" />
                    Refocus guide
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Diagnosis Result */}
        {diagnosis && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <DiagnosisDisplay 
              diagnosis={diagnosis} 
              problemDescription={problemDescription} 
              amazonCategoryLinks={amazonCategoryLinks}
              showUpgradeBanner={!isPro && !isBusiness && diagnosisCount >= 1}
              onUpgradeClick={() => setShowPricingModal(true)}
            />
            <div className="text-center mt-8">
              <Button
                onClick={() => {
                  setDiagnosis(null);
                  setImage(null);
                  setImagePreview(null);
                  setProblemDescription('');
                  setSelectedCategory('');
                }}
                variant="secondary"
                size="lg"
              >
                Start New Diagnosis
              </Button>
            </div>
          </motion.div>
        )}

        {/* Privacy Modal */}
        {showPrivacyModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-xl max-w-md w-full p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Privacy & Trust</h3>
                <button
                  onClick={() => setShowPrivacyModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4">
                {privacyFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <button
                  onClick={() => setShowPrivacyModal(false)}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Got it
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {/* Pricing Modal */}
        <PricingModal 
          isOpen={showPricingModal} 
          onClose={() => setShowPricingModal(false)} 
        />
      </div>
    </div>
  );
}
