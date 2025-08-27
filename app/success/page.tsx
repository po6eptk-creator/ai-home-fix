'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function SuccessPage() {
  useEffect(() => {
    // Add 3 diagnoses to localStorage
    const current = localStorage.getItem('remainingDiagnoses');
    const currentCount = current ? parseInt(current) : 0;
    const newCount = currentCount + 3;
    localStorage.setItem('remainingDiagnoses', newCount.toString());
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Payment Successful!
          </h1>
          <p className="text-gray-600">
            +3 diagnoses added to your account.
          </p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg mb-6">
          <p className="text-green-800 font-medium">
            You can now continue using the AI Home Repair Assistant.
          </p>
        </div>

        <Link
          href="/"
          className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Start New Diagnosis
        </Link>
      </div>
    </div>
  );
}
