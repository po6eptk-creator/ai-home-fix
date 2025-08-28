'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, ArrowLeft, BookOpen } from 'lucide-react';

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
      <li><strong>Adjustable wrench</strong></li>
      <li><strong>Phillips and flathead screwdrivers</strong></li>
      <li><strong>Plumber's tape</strong></li>
      <li><strong>Replacement washers and O-rings</strong></li>
      <li><strong>Clean cloth</strong></li>
    </ul>

    <h2>Step-by-Step Repair Process</h2>

    <h3>Step 1: Turn Off the Water Supply</h3>
    <p>Safety first! Locate the <strong>shut-off valves</strong> under your sink and turn them clockwise to stop the water flow. If you can't find individual valves, you may need to turn off the <strong>main water supply</strong> to your home.</p>

    <h3>Step 2: Remove the Faucet Handle</h3>
    <p>Look for a small cap or cover on the handle. Remove it to reveal the <strong>screw</strong> that holds the handle in place. Use the appropriate screwdriver to remove the screw and lift off the handle.</p>

    <h3>Step 3: Access the Cartridge</h3>
    <p>Once the handle is removed, you'll see the <strong>cartridge or stem</strong>. This is where the washer is located. Use your wrench to carefully remove the cartridge, being careful not to damage the <strong>threads</strong>.</p>

    <h3>Step 4: Replace the Washer</h3>
    <p>Inspect the old washer for wear and damage. Replace it with a new washer of the same size. Also check the <strong>O-ring</strong> and replace it if necessary. Apply a small amount of <strong>plumber's grease</strong> to help with future maintenance.</p>

    <h3>Step 5: Reassemble and Test</h3>
    <p>Carefully reassemble the faucet in reverse order. Make sure all parts are properly seated and tightened. Turn the water back on and test for leaks. If you still see leaks, you may need to replace the entire <strong>cartridge</strong>.</p>

    <h2>When to Call a Professional</h2>
    <p>While most faucet leaks can be fixed DIY, consider calling a plumber if:</p>
    <ul>
      <li>The leak persists after repair</li>
      <li>You're dealing with a <strong>complex faucet design</strong></li>
      <li>There are signs of <strong>water damage</strong></li>
      <li>You're not comfortable with plumbing work</li>
    </ul>

    <h2>Prevention Tips</h2>
    <p>To prevent future leaks:</p>
    <ul>
      <li>Don't <strong>overtighten</strong> faucet handles</li>
      <li>Replace washers every few years</li>
      <li>Use <strong>quality replacement parts</strong></li>
      <li>Address leaks immediately</li>
    </ul>

    <h2>Safety Reminders</h2>
    <ul>
      <li>Always turn off the water supply before starting any repair</li>
      <li>Use appropriate safety gear when working with tools</li>
      <li>If you're unsure about any step, consult a professional</li>
      <li>Keep your work area clean and well-lit</li>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="mb-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4 font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {blogPost.title}
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {blogPost.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="font-medium">{formatDate(blogPost.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="font-medium">{blogPost.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">By {blogPost.author}</span>
            </div>
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
            className="prose prose-lg prose-gray max-w-none leading-relaxed
              prose-headings:text-gray-900 prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-6
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-700 prose-p:mb-6 prose-p:leading-relaxed prose-p:text-base
              prose-ul:my-6 prose-ul:pl-6 prose-li:mb-3 prose-li:text-gray-700
              prose-ol:my-6 prose-ol:pl-6 prose-li:mb-3 prose-li:text-gray-700
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-blockquote:border-l-4 prose-blockquote:border-blue-200 prose-blockquote:pl-4 prose-blockquote:italic
              prose-hr:my-8 prose-hr:border-gray-200"
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
                      <span>{formatDate(post.date)}</span>
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
