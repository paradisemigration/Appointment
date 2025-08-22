import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | VFS Appointment Portal',
  description: 'Terms and conditions for using VFS Appointment Portal services. Read our terms of service for visa appointment booking.',
  keywords: 'terms of service, terms and conditions, VFS portal terms',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Terms of Service</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-primary-100">
            Last updated: August 22, 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using VFS Appointment Portal ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2>2. Description of Service</h2>
              <p>
                VFS Appointment Portal provides visa appointment booking services for various countries including European nations and other global destinations. Our services include:
              </p>
              <ul>
                <li>VFS appointment booking assistance</li>
                <li>Visa consultation services</li>
                <li>Document preparation guidance</li>
                <li>Customer support through multiple channels</li>
              </ul>

              <h2>3. Service Fees and Payment</h2>
              <p>
                Our services are provided at minimal cost with transparent pricing. Service fees are clearly displayed before booking confirmation. Payment is required to secure appointment booking services.
              </p>
              <ul>
                <li>Service fees are non-refundable once the appointment booking process has been initiated</li>
                <li>Government visa fees are separate and paid directly to relevant authorities</li>
                <li>We do not guarantee visa approval - our service is limited to appointment booking</li>
              </ul>

              <h2>4. User Responsibilities</h2>
              <p>As a user of our services, you agree to:</p>
              <ul>
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account information</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use our services for any illegal or unauthorized purpose</li>
                <li>Respect the intellectual property rights of VFS Appointment Portal</li>
              </ul>

              <h2>5. Limitation of Liability</h2>
              <p>
                VFS Appointment Portal acts as an intermediary service provider. We are not responsible for:
              </p>
              <ul>
                <li>Visa approval or rejection decisions made by consulates or embassies</li>
                <li>Changes in visa requirements or procedures by government authorities</li>
                <li>Delays or cancellations by VFS Global or government offices</li>
                <li>Any consequential damages arising from use of our services</li>
              </ul>

              <h2>6. Privacy and Data Protection</h2>
              <p>
                We are committed to protecting your privacy and personal information. Our Privacy Policy, which is incorporated into these terms by reference, details how we collect, use, and protect your data.
              </p>

              <h2>7. Appointment Booking Policy</h2>
              <p>
                Our appointment booking service operates under the following conditions:
              </p>
              <ul>
                <li>We strive to secure appointments within 24 hours but cannot guarantee specific dates</li>
                <li>Appointment availability depends on VFS Global and embassy schedules</li>
                <li>We will provide alternative dates if requested dates are unavailable</li>
                <li>Customers are responsible for attending appointments as scheduled</li>
              </ul>

              <h2>8. Cancellation and Refund Policy</h2>
              <p>
                Cancellation and refund policies are as follows:
              </p>
              <ul>
                <li>Service fees are generally non-refundable once booking process begins</li>
                <li>Refunds may be considered in exceptional circumstances at our discretion</li>
                <li>Government fees paid to authorities are non-refundable</li>
                <li>Appointment rescheduling may incur additional charges</li>
              </ul>

              <h2>9. Intellectual Property</h2>
              <p>
                All content on VFS Appointment Portal, including text, graphics, logos, and software, is the property of VFS Appointment Portal and is protected by copyright and other intellectual property laws.
              </p>

              <h2>10. Prohibited Uses</h2>
              <p>You may not use our service:</p>
              <ul>
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
              </ul>

              <h2>11. Disclaimer</h2>
              <p>
                The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, VFS Appointment Portal excludes all representations, warranties, conditions, and terms express or implied.
              </p>

              <h2>12. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these terms of service at any time. Changes will be effective immediately upon posting on our website. Your continued use of the service after changes are posted constitutes acceptance of the modified terms.
              </p>

              <h2>13. Governing Law</h2>
              <p>
                These terms of service are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in Delhi, India.
              </p>

              <h2>14. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <ul>
                <li>Email: legal@vfsportal.com</li>
                <li>Phone: +91-9876543210</li>
                <li>Address: 123 Business District, New Delhi, India 110001</li>
              </ul>

              <h2>15. Severability</h2>
              <p>
                If any part of these terms of service is deemed unlawful, void, or unenforceable, that part will be deemed severable and will not affect the validity and enforceability of the remaining provisions.
              </p>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
