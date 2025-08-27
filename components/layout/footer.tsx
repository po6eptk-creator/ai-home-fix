import Link from 'next/link';
import { Wrench, Mail, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-apple">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gradient">AI Home Fix</span>
              </Link>
              <p className="text-gray-600 text-body mb-6 max-w-md">
                Transform your home repairs with AI-powered diagnostics. Get instant, 
                accurate solutions for any household problem.
              </p>
              <div className="flex space-x-4">
                <a
                  href="mailto:hello@aihomefix.com"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/aihomefix"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/company/aihomefix"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/aihomefix"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/assistant" className="text-gray-600 hover:text-gray-900 transition-colors">
                    AI Assistant
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-200 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                © 2024 AI Home Fix. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-2 md:mt-0">
                Made with ❤️ for homeowners everywhere
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
