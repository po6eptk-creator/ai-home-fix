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

const blogPosts = [
  {
    slug: 'how-to-fix-leaking-faucet',
    title: 'How to Fix a Leaking Faucet in 10 Minutes',
    excerpt: 'Step-by-step guide to stop common faucet leaks without calling a plumber. Learn causes, tools needed, and quick fix instructions.',
    image: '/blog-images/faucet-leak.jpg',
    category: 'Plumbing',
    readTime: '10 min read',
    date: '2024-01-15',
    featured: true
  },
  {
    slug: 'organize-garage-tools',
    title: 'How to Organize Your Garage Tools',
    excerpt: 'Simple system to keep tools tidy and easy to access. Learn pegboards, shelving units, labeling, and space-saving ideas.',
    image: '/blog-images/garage-tools.jpg',
    category: 'Garage',
    readTime: '8 min read',
    date: '2024-01-14'
  },
  {
    slug: 'fixing-noisy-garage-door',
    title: 'Fixing a Noisy Garage Door',
    excerpt: 'Quiet down your garage door with basic maintenance. Learn lubrication tips, tightening bolts, and replacing worn rollers.',
    image: '/blog-images/noisy-garage.jpg',
    category: 'Garage',
    readTime: '6 min read',
    date: '2024-01-13'
  },
  {
    slug: 'repairing-leaking-kitchen-sink-pipe',
    title: 'Repairing a Leaking Kitchen Sink Pipe',
    excerpt: 'Stop leaks under the sink with quick fixes. Learn identifying leak points, tightening connections, and replacing washers.',
    image: '/blog-images/kitchen-pipe.jpg',
    category: 'Kitchen',
    readTime: '9 min read',
    date: '2024-01-12'
  },
  {
    slug: 'unclogging-dishwasher-drain',
    title: 'Unclogging a Dishwasher Drain',
    excerpt: 'Solve water drainage problems in your dishwasher. Learn checking filters, cleaning drain hose, and when to call a pro.',
    image: '/blog-images/dishwasher-drain.jpg',
    category: 'Kitchen',
    readTime: '7 min read',
    date: '2024-01-11'
  },
  {
    slug: 'replace-showerhead',
    title: 'How to Replace a Showerhead',
    excerpt: 'Upgrade or fix your shower in minutes. Learn removing old showerhead, installing new one, and sealing properly.',
    image: '/blog-images/showerhead.jpg',
    category: 'Bathroom',
    readTime: '5 min read',
    date: '2024-01-10'
  },
  {
    slug: 'fixing-running-toilet',
    title: 'Fixing a Running Toilet',
    excerpt: 'Save water and money by repairing a constantly running toilet. Learn adjusting flapper, fixing fill valve, and troubleshooting.',
    image: '/blog-images/running-toilet.jpg',
    category: 'Bathroom',
    readTime: '8 min read',
    date: '2024-01-09'
  },
  {
    slug: 'unclogging-slow-drain-safely',
    title: 'Unclogging a Slow Drain Safely',
    excerpt: 'Easy methods to clear clogged sinks using household tools. Avoid harsh chemicals and learn preventive tips.',
    image: '/blog-images/slow-drain.jpg',
    category: 'Plumbing',
    readTime: '8 min read',
    date: '2024-01-08'
  },
  {
    slug: 'reset-tripped-circuit-breaker',
    title: 'How to Reset a Tripped Circuit Breaker',
    excerpt: 'Understand why breakers trip and how to safely reset them. Learn safety warnings and when to call an electrician.',
    image: '/blog-images/circuit-breaker.jpg',
    category: 'Electrical',
    readTime: '7 min read',
    date: '2024-01-07'
  },
  {
    slug: 'replacing-light-switch',
    title: 'Replacing a Light Switch',
    excerpt: 'Beginner-friendly guide to swap out a faulty switch. Learn tools needed, shutting off power, and wiring basics.',
    image: '/blog-images/light-switch.jpg',
    category: 'Electrical',
    readTime: '12 min read',
    date: '2024-01-06'
  },
  {
    slug: 'fixing-small-holes-drywall',
    title: 'Fixing Small Holes in Drywall',
    excerpt: 'How to repair nail holes and dents with minimal tools. Complete guide to filling, sanding, priming, and painting.',
    image: '/blog-images/small-holes.jpg',
    category: 'Drywall',
    readTime: '6 min read',
    date: '2024-01-05'
  },
  {
    slug: 'patching-medium-drywall-hole',
    title: 'Patching a Medium-Sized Drywall Hole',
    excerpt: 'Repair a larger hole using patch kits or scrap drywall. Step-by-step cutting, patching, taping, and finishing.',
    image: '/blog-images/medium-hole.jpg',
    category: 'Drywall',
    readTime: '15 min read',
    date: '2024-01-04'
  },
  {
    slug: 'electrical-outlet-repair',
    title: 'Electrical Outlet Not Working? Here\'s What to Check',
    excerpt: 'Save money: Don\'t call an electrician yet! Most outlet problems can be fixed with basic troubleshooting.',
    image: '/blog-images/electrical-outlet.jpg',
    category: 'Electrical',
    readTime: '7 min read',
    date: '2024-01-03'
  },
  {
    slug: 'drywall-repair-guide',
    title: 'Complete Guide to Drywall Repair: From Small Holes to Large Damage',
    excerpt: 'Save money: Master the art of drywall repair with our comprehensive guide covering everything from nail holes to large patches.',
    image: '/blog-images/drywall-repair.jpg',
    category: 'Drywall',
    readTime: '12 min read',
    date: '2024-01-02'
  },
  {
    slug: 'kitchen-sink-clogged',
    title: 'Kitchen Sink Clogged? Try These 6 Solutions First',
    excerpt: 'Save money: Before calling a plumber, try these DIY solutions to unclog your kitchen sink.',
    image: '/blog-images/kitchen-sink.jpg',
    category: 'Kitchen',
    readTime: '6 min read',
    date: '2024-01-01'
  },
  {
    slug: 'garage-door-repair',
    title: 'Garage Door Won\'t Open? Common Problems and Solutions',
    excerpt: 'Save money: Diagnose and fix common garage door issues with our troubleshooting guide.',
    image: '/blog-images/garage-door.jpg',
    category: 'Garage',
    readTime: '8 min read',
    date: '2023-12-31'
  },
  {
    slug: 'water-heater-troubleshooting',
    title: 'Water Heater Troubleshooting: No Hot Water?',
    excerpt: 'Save money: Don\'t take a cold shower! Learn how to diagnose and fix water heater problems.',
    image: '/blog-images/water-heater.jpg',
    category: 'Plumbing',
    readTime: '10 min read',
    date: '2023-12-30'
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
    // Create URL with pre-filled data for Assistant
    const params = new URLSearchParams({
      title: post.title,
      category: post.category,
      image: post.image
    });
    window.location.href = `/assistant?${params.toString()}`;
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
                <div className="relative h-64 lg:h-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
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
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
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
