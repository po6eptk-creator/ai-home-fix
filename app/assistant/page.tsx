'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DiagnosisResult } from '@/types/diagnosis';
import ImageUpload from '@/components/ImageUpload';
import DiagnosisDisplay from '@/components/DiagnosisDisplay';
import { Camera, Brain, CheckCircle, AlertCircle, Sun, Crosshair, RotateCw, RefreshCw, Camera as CameraIcon, HelpCircle, Shield, Eye, User } from 'lucide-react';

export default function AssistantPage() {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [problemDescription, setProblemDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [diagnosis, setDiagnosis] = useState<DiagnosisResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [remainingDiagnoses, setRemainingDiagnoses] = useState(2);
  const [error, setError] = useState<string | null>(null);
  const [errorType, setErrorType] = useState<'file-size' | 'format' | 'focus' | null>(null);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

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

  const loadSampleImage = async () => {
    try {
      const response = await fetch('/sample-faucet.jpg');
      const blob = await response.blob();
      const file = new File([blob], 'sample-faucet.jpg', { type: 'image/jpeg' });
      handleImageChange(file);
      setProblemDescription('Kitchen faucet leaking under the handle. Water drips when turned on.');
      setSelectedCategory('Plumbing');
    } catch (error) {
      console.error('Failed to load sample image:', error);
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
    // Load remaining diagnoses from localStorage
    const saved = localStorage.getItem('remainingDiagnoses');
    if (saved) {
      setRemainingDiagnoses(parseInt(saved));
    }

    // Handle URL parameters for pre-filling from blog posts
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get('title');
    const category = urlParams.get('category');
    const image = urlParams.get('image');

    if (title) {
      setProblemDescription(title);
    }
    if (category && categories.includes(category)) {
      setSelectedCategory(category);
    }
    if (image) {
      // Load the image from the blog post
      loadBlogImage(image);
    }
  }, []);

  const loadBlogImage = async (imagePath: string) => {
    try {
      const response = await fetch(imagePath);
      const blob = await response.blob();
      const file = new File([blob], 'blog-image.jpg', { type: 'image/jpeg' });
      handleImageChange(file);
    } catch (error) {
      console.error('Failed to load blog image:', error);
    }
  };

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
    if (!image || !problemDescription.trim()) {
      setError('Add a photo to continue.');
      return;
    }

    if (remainingDiagnoses <= 0) {
      setError('No diagnoses remaining. Please purchase more credits.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('description', problemDescription);
      if (selectedCategory) {
        formData.append('category', selectedCategory);
      }

      const response = await fetch('/api/diagnose', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        
        // Check for specific error types from API
        if (errorData.error === 'no_focus' || errorData.error === 'unclear_image') {
          setErrorType('focus');
          setError('We couldn\'t detect the problem. Try refocusing.');
          return;
        }
        
        throw new Error('Failed to diagnose problem');
      }

      const result = await response.json();
      setDiagnosis(result);

      // Deduct one diagnosis
      const newRemaining = remainingDiagnoses - 1;
      setRemainingDiagnoses(newRemaining);
      localStorage.setItem('remainingDiagnoses', newRemaining.toString());
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
    } catch (err) {
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
            Upload a photo → get your fix in 1 minute
          </p>
          
          {/* Free Tier Counter */}
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-lg font-medium">
            <CheckCircle className="w-5 h-5" />
            <span>{remainingDiagnoses} free diagnoses left</span>
          </div>
        </motion.div>

        {/* Main Form */}
        {!diagnosis && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="p-8">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-headline-2">Start Your Diagnosis</CardTitle>
                <CardDescription className="text-body-large">
                  Upload a photo and describe the problem to get instant AI-powered solutions
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-8">
                {/* Photo Tips */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-gray-700">Good photo tips</h3>
                    <button
                      onClick={loadSampleImage}
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      Try with sample
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
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
                    {categories.map((category) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setSelectedCategory(selectedCategory === category ? '' : category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                          selectedCategory === category
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
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
                <div className="flex gap-4">
                  {remainingDiagnoses > 0 ? (
                    <Button
                      onClick={handleDiagnose}
                      disabled={isLoading || !image || !problemDescription.trim()}
                      className="flex-1 h-14 text-lg"
                    >
                      {isLoading ? (
                        <>
                          <Brain className="w-5 h-5 mr-2 animate-pulse" />
                          Analyzing photo… (~10–20 sec)
                        </>
                      ) : (
                        <>
                          <Camera className="w-5 h-5 mr-2" />
                          Get Diagnosis
                        </>
                      )}
                    </Button>
                  ) : (
                    <Button
                      onClick={handleBuyCredits}
                      variant="gradient"
                      className="flex-1 h-14 text-lg"
                    >
                      Buy 3 Extra Fixes
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
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
            <DiagnosisDisplay diagnosis={diagnosis} />
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
      </div>
    </div>
  );
}
