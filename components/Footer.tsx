import Link from 'next/link';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold">VFS Portal</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional visa appointment booking services for all European countries and major global destinations.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+91-9876543210</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Countries</h3>
            <ul className="space-y-2">
              <li><Link href="/france-visit-visa-appointment-delhi" className="text-gray-400 hover:text-white transition-colors">France Visa</Link></li>
              <li><Link href="/germany-visit-visa-appointment-mumbai" className="text-gray-400 hover:text-white transition-colors">Germany Visa</Link></li>
              <li><Link href="/usa-visit-visa-appointment-bangalore" className="text-gray-400 hover:text-white transition-colors">USA Visa</Link></li>
              <li><Link href="/uk-visit-visa-appointment-delhi" className="text-gray-400 hover:text-white transition-colors">UK Visa</Link></li>
              <li><Link href="/canada-visit-visa-appointment-hyderabad" className="text-gray-400 hover:text-white transition-colors">Canada Visa</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5" />
                <div>
                  <p className="text-gray-400">123 Business District</p>
                  <p className="text-gray-400">New Delhi, India 110001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <p className="text-gray-400">info@vfsportal.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <p className="text-gray-400">+91-9876543210</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 VFS Portal. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
