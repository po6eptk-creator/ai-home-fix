'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Upload, X, Camera } from 'lucide-react';

interface ImageUploadProps {
  onImageChange: (file: File | null) => void;
  imagePreview: string | null;
}

export default function ImageUpload({ onImageChange, imagePreview }: ImageUploadProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isSampleImage, setIsSampleImage] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle paste events
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (items) {
        for (let i = 0; i < items.length; i++) {
          if (items[i].type.startsWith('image/')) {
            const file = items[i].getAsFile();
            if (file) {
              onImageChange(file);
            }
            break;
          }
        }
      }
    };

    document.addEventListener('paste', handlePaste);
    return () => document.removeEventListener('paste', handlePaste);
  }, [onImageChange]);

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
      const file = files[0];
      if (file.type.startsWith('image/')) {
        onImageChange(file);
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onImageChange(files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemove = () => {
    onImageChange(null);
    setIsSampleImage(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-4">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />
      
      {!imagePreview ? (
        <div className="space-y-4">
          {/* Main Drop Zone */}
          <div
            className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all duration-200 bg-gray-50 ${
              isDragOver
                ? 'border-blue-500 bg-blue-50 scale-105'
                : 'border-gray-300 hover:border-gray-400 hover:bg-gray-100'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleClick}
          >
            <div className="space-y-6">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                <Camera className="w-10 h-10 text-blue-600" />
              </div>
              <div>
                <p className="text-xl font-semibold text-gray-700 mb-2">
                  Drag your photo of the issue here or click to upload
                </p>
                <p className="text-sm text-gray-500">
                  Supports JPG, PNG, GIF up to 10MB • Good lighting recommended
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Or paste an image with ⌘V
                </p>
              </div>
            </div>
          </div>

          {/* Browse Files Button */}
          <div className="flex justify-center">
            <button
              onClick={handleClick}
              className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors shadow-md"
            >
              <Upload className="w-4 h-4" />
              <span>Browse Files</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="relative">
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <Image
              src={imagePreview}
              alt={isSampleImage ? "Sample problem image" : "Uploaded image"}
              width={600}
              height={400}
              className="w-full h-80 object-cover"
            />
          </div>
          <button
            onClick={handleRemove}
            className="absolute top-3 right-3 bg-red-500 text-white rounded-xl p-2 hover:bg-red-600 transition-colors shadow-md"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}


    </div>
  );
}
