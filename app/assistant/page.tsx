'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DiagnosisResult } from '@/types/diagnosis';
import ImageUpload from '@/components/ImageUpload';
import DiagnosisDisplay from '@/components/DiagnosisDisplay';
import { Camera, Brain, CheckCircle, AlertCircle } from 'lucide-react';

export default function AssistantPage() {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [problemDescription, setProblemDescription] = useState('');
  const [diagnosis, setDiagnosis] = useState<DiagnosisResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [remainingDiagnoses, setRemainingDiagnoses] = useState(2);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load remaining diagnoses from localStorage
    const saved = localStorage.getItem('remainingDiagnoses');
    if (saved) {
      setRemainingDiagnoses(parseInt(saved));
    }
  }, []);

  const handleImageChange = (file: File | null) => {
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
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

      const response = await fetch('/api/diagnose', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
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
                }}
                variant="secondary"
                size="lg"
              >
                Start New Diagnosis
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
