'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, ArrowRight, Camera, Check } from 'lucide-react';

// Helper function to format dates consistently (server and client)
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };
  return date.toLocaleDateString('en-US', options);
};

// Helper function to get category icon
const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Plumbing':
      return '🚰';
    case 'Electrical':
      return '💡';
    case 'Drywall':
      return '🧱';
    case 'Garage':
      return '🚗';
    case 'Kitchen':
      return '🍳';
    case 'Bathroom':
      return '🚿';
    default:
      return '📄';
  }
};

const blogPosts = [
  {
    slug: 'how-to-fix-leaking-faucet-5-easy-steps',
    title: 'How to Fix a Leaking Faucet in 5 Easy Steps',
    excerpt: 'Stop wasting water and money! Learn to fix common faucet leaks with our step-by-step guide. No plumber needed for most repairs.',
    image: '/blog-images/faucet-leak.jpg',
    category: 'Plumbing',
    readTime: '8 min read',
    date: '2025-01-15',
    featured: true,
    keywords: 'leaking faucet, faucet repair, plumbing DIY, water leak, faucet fix, home repair',
    description: 'Learn how to fix a leaking faucet in 5 easy steps. Save money on plumbing costs with our comprehensive DIY guide.'
  },
  {
    slug: 'reset-tripped-circuit-breaker-safely',
    title: 'Resetting a Tripped Circuit Breaker Safely',
    excerpt: 'Don\'t panic when your power goes out! Learn to safely reset a tripped circuit breaker and prevent future electrical issues.',
    image: '/blog-images/circuit-breaker.jpg',
    category: 'Electrical',
    readTime: '6 min read',
    date: '2025-01-14',
    keywords: 'circuit breaker, electrical safety, power outage, breaker reset, electrical repair, home electrical',
    description: 'Learn how to safely reset a tripped circuit breaker. Essential electrical safety guide for homeowners.'
  },
  {
    slug: 'patch-small-hole-drywall-like-pro',
    title: 'How to Patch a Small Hole in Drywall Like a Pro',
    excerpt: 'Transform your walls from damaged to perfect with our professional drywall patching techniques. Easy DIY guide.',
    image: '/blog-images/small-holes.jpg',
    category: 'Drywall',
    readTime: '10 min read',
    date: '2025-01-13',
    keywords: 'drywall repair, wall patch, hole repair, drywall patch, home improvement, wall repair',
    description: 'Learn professional techniques to patch small holes in drywall. Complete DIY guide with step-by-step instructions.'
  },
  {
    slug: 'fix-noisy-garage-door-minutes',
    title: 'Fixing a Noisy Garage Door in Minutes',
    excerpt: 'Silence that annoying garage door! Quick fixes for squeaks, rattles, and grinding noises that drive you crazy.',
    image: '/blog-images/noisy-garage.jpg',
    category: 'Garage',
    readTime: '7 min read',
    date: '2025-01-12',
    keywords: 'garage door repair, noisy garage door, garage door maintenance, door lubrication, garage repair',
    description: 'Fix a noisy garage door quickly with our step-by-step guide. Simple maintenance tips to silence squeaks and rattles.'
  },
  {
    slug: 'unclog-kitchen-sink-without-chemicals',
    title: 'Unclogging a Kitchen Sink Without Chemicals',
    excerpt: 'Clear stubborn clogs naturally! Safe, effective methods to unclog your kitchen sink without harsh chemicals.',
    image: '/blog-images/kitchen-sink.jpg',
    category: 'Kitchen',
    readTime: '8 min read',
    date: '2025-01-11',
    keywords: 'kitchen sink clog, drain unclog, natural cleaning, sink repair, plumbing DIY, clog removal',
    description: 'Learn how to unclog a kitchen sink without chemicals. Safe, natural methods for clearing stubborn drain clogs.'
  },
  {
    slug: 'replace-showerhead-10-minutes',
    title: 'How to Replace a Showerhead in 10 Minutes',
    excerpt: 'Upgrade your shower experience in minutes! Simple guide to remove old showerhead and install a new one properly.',
    image: '/blog-images/showerhead.jpg',
    category: 'Bathroom',
    readTime: '5 min read',
    date: '2025-01-10',
    keywords: 'showerhead replacement, bathroom repair, shower installation, plumbing DIY, shower upgrade',
    description: 'Replace a showerhead in 10 minutes with our easy step-by-step guide. Upgrade your shower without hiring a plumber.'
  }
];

const categories = [
  'All',
  'Plumbing',
  'Electrical',
  'Drywall',
  'Garage',
  'Kitchen',
  'Bathroom'
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const handleOpenInAssistant = (post: typeof blogPosts[0]) => {
    // Redirect to Assistant without pre-filled data
    window.location.href = '/assistant';
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setEmail('');
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setError('Something went wrong, please try again');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-display-2 font-bold text-gradient mb-6">
            Home Repair Blog
          </h1>
          <p className="text-headline-2 text-gray-600 mb-8 max-w-3xl mx-auto">
            Clear, step-by-step guides and tips to help you fix common problems—and save on contractor costs.
          </p>
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                className="rounded-full"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          {filteredPosts.filter(post => post.featured).map((post) => (
            <Card key={post.slug} className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative h-64 lg:h-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                  <div className="text-8xl lg:text-9xl">
                    {getCategoryIcon(post.category)}
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <CardTitle className="text-headline-2 mb-4">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-body-large mb-6">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button asChild className="flex-1">
                      <Link href={`/blog/${post.slug}`}>
                        Read Full Article
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => handleOpenInAssistant(post)}
                      className="flex items-center gap-2"
                    >
                      <Camera className="w-4 h-4" />
                      Open in Assistant
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.filter(post => !post.featured).map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <Card className="h-full overflow-hidden flex flex-col">
                <div className="relative h-48 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                  <div className="text-6xl">
                    {getCategoryIcon(post.category)}
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <CardHeader className="pt-6">
                    <CardTitle className="text-headline-3 line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-body mb-4 line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/blog/${post.slug}`}>
                          Read More
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                  <div className="px-6 pb-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleOpenInAssistant(post)}
                      className="w-full flex items-center justify-center gap-2"
                    >
                      <Camera className="w-4 h-4" />
                      Open in Assistant
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 text-center">
            <CardHeader>
              <CardTitle className="text-headline-2 text-white">
                Get free DIY repair guides in your inbox
              </CardTitle>
              <CardDescription className="text-blue-100 text-body-large">
                1–2 emails per month. No spam.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                    disabled={isSubmitting}
                  />
                  <Button 
                    type="submit"
                    variant="secondary" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </Button>
                </div>
                {error && (
                  <p className="text-red-200 text-sm text-center">
                    {error}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Success Modal */}
        {submitSuccess && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Thank you!
                </h3>
                <p className="text-gray-600">
                  Thank you for subscribing! You'll receive our DIY repair guides soon.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
