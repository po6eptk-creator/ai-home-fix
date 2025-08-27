'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, ArrowLeft, Share2, BookOpen } from 'lucide-react';

// This would normally come from a CMS or database
const blogPost = {
  slug: 'how-to-fix-leaking-faucet',
  title: 'How to Fix a Leaking Faucet in 5 Simple Steps',
  excerpt: 'Learn the most common causes of faucet leaks and how to fix them yourself with our step-by-step guide.',
  content: `
    <p>A leaking faucet is one of the most common household problems, and it can be incredibly frustrating. Not only does it waste water, but the constant dripping sound can drive anyone crazy. The good news is that most faucet leaks can be fixed with basic tools and a little know-how.</p>
    
    <h2>What Causes Faucet Leaks?</h2>
    <p>Before we dive into the repair process, let's understand what typically causes faucet leaks:</p>
    <ul>
      <li><strong>Worn-out washers:</strong> The most common cause of leaks</li>
      <li><strong>Damaged O-rings:</strong> These create seals between moving parts</li>
      <li><strong>Corroded valve seats:</strong> The connection between the faucet and spout</li>
      <li><strong>Loose parts:</strong> Over time, parts can become loose</li>
    </ul>

    <h2>Tools You'll Need</h2>
    <p>Before starting any repair, gather these essential tools:</p>
    <ul>
      <li>Adjustable wrench</li>
      <li>Phillips and flathead screwdrivers</li>
      <li>Plumber's tape</li>
      <li>Replacement washers and O-rings</li>
      <li>Clean cloth</li>
    </ul>

    <h2>Step 1: Turn Off the Water Supply</h2>
    <p>Safety first! Locate the shut-off valves under your sink and turn them clockwise to stop the water flow. If you can't find individual valves, you may need to turn off the main water supply to your home.</p>

    <h2>Step 2: Remove the Faucet Handle</h2>
    <p>Look for a small cap or cover on the handle. Remove it to reveal the screw that holds the handle in place. Use the appropriate screwdriver to remove the screw and lift off the handle.</p>

    <h2>Step 3: Access the Cartridge</h2>
    <p>Once the handle is removed, you'll see the cartridge or stem. This is where the washer is located. Use your wrench to carefully remove the cartridge, being careful not to damage the threads.</p>

    <h2>Step 4: Replace the Washer</h2>
    <p>Inspect the old washer for wear and damage. Replace it with a new washer of the same size. Also check the O-ring and replace it if necessary. Apply a small amount of plumber's grease to help with future maintenance.</p>

    <h2>Step 5: Reassemble and Test</h2>
    <p>Carefully reassemble the faucet in reverse order. Make sure all parts are properly seated and tightened. Turn the water back on and test for leaks. If you still see leaks, you may need to replace the entire cartridge.</p>

    <h2>When to Call a Professional</h2>
    <p>While most faucet leaks can be fixed DIY, consider calling a plumber if:</p>
    <ul>
      <li>The leak persists after repair</li>
      <li>You're dealing with a complex faucet design</li>
      <li>There are signs of water damage</li>
      <li>You're not comfortable with plumbing work</li>
    </ul>

    <h2>Prevention Tips</h2>
    <p>To prevent future leaks:</p>
    <ul>
      <li>Don't overtighten faucet handles</li>
      <li>Replace washers every few years</li>
      <li>Use quality replacement parts</li>
      <li>Address leaks immediately</li>
    </ul>
  `,
  image: '/blog/leaking-faucet.jpg',
  category: 'Plumbing',
  readTime: '5 min read',
  date: '2024-01-15',
  author: 'AI Home Fix Team'
};

const relatedPosts = [
  {
    slug: 'kitchen-sink-clogged',
    title: 'Kitchen Sink Clogged? Try These 6 Solutions First',
    excerpt: 'Before calling a plumber, try these DIY solutions to unclog your kitchen sink.',
    category: 'Plumbing',
    date: '2024-01-08'
  },
  {
    slug: 'water-heater-troubleshooting',
    title: 'Water Heater Troubleshooting: No Hot Water?',
    excerpt: 'Don\'t take a cold shower! Learn how to diagnose and fix water heater problems.',
    category: 'Plumbing',
    date: '2024-01-03'
  }
];

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Image */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 h-64 md:h-96 flex items-center justify-center">
        <div className="text-center text-white">
          <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <p className="text-lg opacity-75">Blog Header Image</p>
        </div>
      </div>

      <div className="container-apple py-12">
        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="mb-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {blogPost.category}
            </span>
          </div>

          <h1 className="text-display-2 font-bold text-gray-900 mb-6">
            {blogPost.title}
          </h1>

          <p className="text-headline-3 text-gray-600 mb-8">
            {blogPost.excerpt}
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(blogPost.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{blogPost.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>By {blogPost.author}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </motion.div>

        {/* Related Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-headline-1 font-bold text-gray-900 mb-8">
            Related Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((post, index) => (
              <Card key={post.slug} className="h-full">
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
                <CardContent>
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
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
            <CardHeader>
              <CardTitle className="text-headline-2 text-white">
                Need Help with This Repair?
              </CardTitle>
              <CardDescription className="text-blue-100 text-body-large">
                Upload a photo of your specific problem and get personalized AI-powered solutions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/assistant">
                  Try AI Assistant
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
