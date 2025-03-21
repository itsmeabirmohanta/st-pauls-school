'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">St. Paul's School</h3>
            <p className="text-sm mb-2">Excellence in Education Since 1925</p>
            <address className="text-sm not-italic">
              123 Education Ave<br />
              City, State 12345<br />
              <a href="tel:(555) 123-4567" className="hover:text-white">(555) 123-4567</a><br />
              <a href="mailto:info@stpauls.edu" className="hover:text-white">info@stpauls.edu</a>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-white">About Us</Link>
              </li>
              <li>
                <Link href="/academics" className="text-sm hover:text-white">Academics</Link>
              </li>
              <li>
                <Link href="/admissions" className="text-sm hover:text-white">Admissions</Link>
              </li>
              <li>
                <Link href="/events" className="text-sm hover:text-white">Events</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/portal" className="text-sm hover:text-white">Parent Portal</Link>
              </li>
              <li>
                <Link href="/calendar" className="text-sm hover:text-white">Academic Calendar</Link>
              </li>
              <li>
                <Link href="/library" className="text-sm hover:text-white">Library</Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm hover:text-white">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for updates.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-gray-900 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2024 St. Paul's School. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="text-sm hover:text-white">Terms of Use</Link>
              <Link href="/sitemap" className="text-sm hover:text-white">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 