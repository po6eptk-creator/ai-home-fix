'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    slug: 'how-to-fix-leaking-faucet',
    title: 'How to Fix a Leaking Faucet in 5 Simple Steps',
    excerpt: 'Learn the most common causes of faucet leaks and how to fix them yourself with our step-by-step guide.',
    image: '/blog/leaking-faucet.jpg',
    category: 'Plumbing',
    readTime: '5 min read',
    date: '2024-01-15',
    featured: true
  },
  {
    slug: 'electrical-outlet-repair',
    title: 'Electrical Outlet Not Working? Here\'s What to Check',
    excerpt: 'Don\'t call an electrician yet! Most outlet problems can be fixed with basic troubleshooting.',
    image: '/blog/electrical-outlet.jpg',
    category: 'Electrical',
    readTime: '7 min read',
    date: '2024-01-12'
  },
  {
    slug: 'drywall-repair-guide',
    title: 'Complete Guide to Drywall Repair: From Small Holes to Large Damage',
    excerpt: 'Master the art of drywall repair with our comprehensive guide covering everything from nail holes to large patches.',
    image: '/blog/drywall-repair.jpg',
    category: 'Drywall',
    readTime: '12 min read',
    date: '2024-01-10'
  },
  {
    slug: 'kitchen-sink-clogged',
    title: 'Kitchen Sink Clogged? Try These 6 Solutions First',
    excerpt: 'Before calling a plumber, try these DIY solutions to unclog your kitchen sink.',
    image: '/blog/kitchen-sink.jpg',
    category: 'Plumbing',
    readTime: '6 min read',
    date: '2024-01-08'
  },
  {
    slug: 'garage-door-repair',
    title: 'Garage Door Won\'t Open? Common Problems and Solutions',
    excerpt: 'Diagnose and fix common garage door issues with our troubleshooting guide.',
    image: '/blog/garage-door.jpg',
    category: 'Garage',
    readTime: '8 min read',
    date: '2024-01-05'
  },
  {
    slug: 'water-heater-troubleshooting',
    title: 'Water Heater Troubleshooting: No Hot Water?',
    excerpt: 'Don\'t take a cold shower! Learn how to diagnose and fix water heater problems.',
    image: '/blog/water-heater.jpg',
    category: 'Plumbing',
    readTime: '10 min read',
    date: '2024-01-03'
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container-apple py-12">
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
            Expert tips, tutorials, and guides to help you tackle any home repair project 
            with confidence and save money on contractor costs.
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
                variant={category === 'All' ? 'default' : 'outline'}
                size="sm"
                className="rounded-full"
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
          {blogPosts.filter(post => post.featured).map((post) => (
            <Card key={post.slug} className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 h-64 lg:h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <Calendar className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg opacity-75">Featured Post</p>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-headline-2 mb-4">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-body-large mb-6">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href={`/blog/${post.slug}`}>
                      Read Full Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <Card className="h-full overflow-hidden">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Calendar className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Blog Image</p>
                  </div>
                </div>
                <CardHeader>
                  <div className="mb-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
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
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
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
                Stay Updated with Home Repair Tips
              </CardTitle>
              <CardDescription className="text-blue-100 text-body-large">
                Get the latest repair guides and DIY tips delivered to your inbox.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                />
                <Button variant="secondary" size="lg">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
