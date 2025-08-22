import type { Metadata } from 'next';
import Link from 'next/link';
import { Users, Award, Globe, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | VFS Appointment Portal',
  description: 'Learn about our professional visa appointment booking services. We help thousands of customers secure VFS appointments for European and global destinations.',
  keywords: 'about VFS portal, visa services, appointment booking company',
};

const stats = [
  { icon: Users, label: 'Happy Customers', value: '10,000+' },
  { icon: Globe, label: 'Countries Covered', value: '35+' },
  { icon: Clock, label: 'Years Experience', value: '5+' },
  { icon: Award, label: 'Success Rate', value: '98%' },
];

const team = [
  {
    name: 'Rajesh Kumar',
    role: 'Founder & CEO',
    image: '👨‍💼',
    description: 'Expert in visa services with 10+ years experience in VFS appointments.'
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Operations',
    image: '👩‍💼',
    description: 'Manages our global operations and ensures 98% success rate.'
  },
  {
    name: 'Ahmed Al-Rashid',
    role: 'Customer Success Manager',
    image: '👨‍🎓',
    description: 'Dedicated to providing 24/7 support to our valued customers.'
  },
  {
    name: 'Sarah Johnson',
    role: 'Visa Specialist',
    image: '👩‍🔬',
    description: 'Specializes in European and Schengen visa requirements.'
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-medium">About Us</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About VFS Portal
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
            Your trusted partner for professional visa appointment booking services worldwide
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2019, VFS Appointment Portal was born from a simple observation: 
                getting visa appointments shouldn't be a stressful, time-consuming process. 
                Our founders experienced the frustration firsthand while trying to secure 
                appointments for family members.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Today, we've helped over 10,000 customers secure visa appointments across 
                35+ countries. Our professional team understands the intricacies of VFS 
                systems and works tirelessly to ensure our customers get their appointments 
                quickly and efficiently.
              </p>
              <p className="text-lg text-gray-700">
                We believe that everyone deserves access to reliable, professional visa 
                services at minimal cost, which is why we've built our reputation on 
                transparency, efficiency, and customer satisfaction.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Professional team with 5+ years experience</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">98% success rate in appointment booking</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">24/7 customer support via WhatsApp</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Transparent pricing with no hidden fees</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Fast booking within 24 hours</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Numbers Speak</h2>
            <p className="text-xl text-gray-600">Trusted by thousands across the globe</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Dedicated professionals committed to your success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Book Your Visa Appointment?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their visa appointment needs.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center bg-white text-primary-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
