'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, 
  Zap, 
  Shield, 
  Heart, 
  Mail
} from 'lucide-react';

const highlights = [
  {
    icon: Zap,
    title: "Lightning Fast AI",
    description: "Diagnoses in seconds with high accuracy."
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Every guide includes mandatory safety checks."
  },
  {
    icon: Heart,
    title: "Built for Everyone",
    description: "Clear, step-by-step guides for all skill levels."
  }
];

const team = [
  {
    name: "Alex Chen",
    role: "CEO & Founder",
    avatar: "/avatars/alex.jpg",
    bio: "Former Google AI researcher, 10+ yrs in ML."
  },
  {
    name: "Sarah Kim",
    role: "CTO",
    avatar: "/avatars/sarah.jpg",
    bio: "Computer vision & home automation expert."
  },
  {
    name: "Mike Rodriguez",
    role: "Head of Product",
    avatar: "/avatars/mike.jpg",
    bio: "Led product at Airbnb and Uber."
  },
  {
    name: "Emily Watson",
    role: "Lead Designer",
    avatar: "/avatars/emily.jpg",
    bio: "UX designer focused on clarity and safety."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container-apple py-12">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-display-2 font-bold text-gradient mb-6">
            About AI Home Fix
          </h1>
          <p className="text-headline-2 text-gray-600 mb-8 max-w-4xl mx-auto">
            We democratize home repair knowledge with AI—so anyone can fix common household problems safely and confidently.
          </p>
          <p className="text-body-large text-gray-500 max-w-3xl mx-auto">
            Every year, millions of homeowners face repair problems that cost them 
            time, money, and stress. We believe that with the right AI technology, 
            anyone can become a confident DIY repair expert.
          </p>
        </motion.div>

        {/* Why Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-headline-1 font-bold text-gray-900 mb-4">
              Why Choose AI Home Fix?
            </h2>
            <p className="text-body-large text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge AI with deep home repair expertise to deliver 
              solutions that actually work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-headline-3">{highlight.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-body">
                        {highlight.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-headline-1 font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-body-large text-gray-600 max-w-2xl mx-auto">
              We're a small team of AI researchers, engineers, and home repair 
              enthusiasts passionate about making home maintenance accessible to everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center">
                  <CardHeader>
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <CardTitle className="text-headline-3">{member.name}</CardTitle>
                    <CardDescription className="text-body font-medium text-blue-600">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-body text-gray-600">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card className="p-8">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-headline-2">Get in touch</CardTitle>
              <CardDescription className="text-body-large">
                Questions or feedback? We'd love to hear from you.
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                    <option>Feedback</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                
                <Button className="w-full h-14 text-lg" type="submit">
                  Send Message
                  <Mail className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-display-3 font-bold text-gradient mb-2">10K+</div>
                <p className="text-body text-gray-600">Happy Homeowners</p>
              </div>
              <div>
                <div className="text-display-3 font-bold text-gradient mb-2">50K+</div>
                <p className="text-body text-gray-600">Problems Solved</p>
              </div>
              <div>
                <div className="text-display-3 font-bold text-gradient mb-2">$2M+</div>
                <p className="text-body text-gray-600">Saved</p>
              </div>
            </div>
        </motion.div>
      </div>
    </div>
  );
}
