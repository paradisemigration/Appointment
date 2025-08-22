import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | VFS Appointment Portal',
  description: 'Privacy policy for VFS Appointment Portal. Learn how we protect and handle your personal information and data.',
  keywords: 'privacy policy, data protection, VFS portal privacy',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Privacy Policy</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
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
              
              <h2>1. Introduction</h2>
              <p>
                VFS Appointment Portal ("we," "our," or "us") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our visa appointment booking services.
              </p>

              <h2>2. Information We Collect</h2>
              
              <h3>2.1 Personal Information</h3>
              <p>We may collect the following personal information:</p>
              <ul>
                <li>Full name and contact information (email, phone number, address)</li>
                <li>Passport and identification details</li>
                <li>Travel plans and destination information</li>
                <li>Visa application details and preferred appointment dates</li>
                <li>Payment information (processed securely through third-party providers)</li>
              </ul>

              <h3>2.2 Technical Information</h3>
              <p>We automatically collect certain technical information:</p>
              <ul>
                <li>IP address and browser information</li>
                <li>Device information and operating system</li>
                <li>Website usage patterns and preferences</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use your information for the following purposes:</p>
              <ul>
                <li>Processing visa appointment booking requests</li>
                <li>Communicating with you about your appointments and services</li>
                <li>Providing customer support and assistance</li>
                <li>Improving our services and website functionality</li>
                <li>Sending promotional materials (with your consent)</li>
                <li>Complying with legal obligations and requirements</li>
              </ul>

              <h2>4. Information Sharing and Disclosure</h2>
              
              <h3>4.1 Service Providers</h3>
              <p>We may share your information with trusted third-party service providers who assist us in:</p>
              <ul>
                <li>VFS Global and embassy appointment systems</li>
                <li>Payment processing services</li>
                <li>Customer support platforms</li>
                <li>Website hosting and maintenance</li>
              </ul>

              <h3>4.2 Legal Requirements</h3>
              <p>We may disclose your information when required by law or to:</p>
              <ul>
                <li>Comply with legal processes or government requests</li>
                <li>Protect our rights, property, or safety</li>
                <li>Investigate potential violations of our terms</li>
                <li>Prevent fraud or security threats</li>
              </ul>

              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul>
                <li>SSL encryption for data transmission</li>
                <li>Secure servers and databases</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal information</li>
                <li>Employee training on data protection</li>
              </ul>

              <h2>6. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Typically:
              </p>
              <ul>
                <li>Appointment booking data: 2 years after service completion</li>
                <li>Payment information: As required by financial regulations</li>
                <li>Customer support records: 1 year after last interaction</li>
                <li>Website analytics: 13 months maximum</li>
              </ul>

              <h2>7. Your Rights and Choices</h2>
              <p>You have the following rights regarding your personal information:</p>
              
              <h3>7.1 Access and Correction</h3>
              <ul>
                <li>Request access to your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Update your contact preferences</li>
              </ul>

              <h3>7.2 Data Portability and Deletion</h3>
              <ul>
                <li>Request a copy of your data in a portable format</li>
                <li>Request deletion of your personal information</li>
                <li>Withdraw consent for marketing communications</li>
              </ul>

              <h2>8. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar technologies to enhance your browsing experience. Types of cookies we use:
              </p>
              <ul>
                <li><strong>Essential cookies:</strong> Required for website functionality</li>
                <li><strong>Performance cookies:</strong> Help us understand website usage</li>
                <li><strong>Functional cookies:</strong> Remember your preferences</li>
                <li><strong>Marketing cookies:</strong> Provide relevant advertisements (with consent)</li>
              </ul>
              <p>
                You can manage cookie preferences through your browser settings, though this may affect website functionality.
              </p>

              <h2>9. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for international transfers, including:
              </p>
              <ul>
                <li>Adequacy decisions by relevant authorities</li>
                <li>Standard contractual clauses</li>
                <li>Binding corporate rules</li>
                <li>Certified data protection frameworks</li>
              </ul>

              <h2>10. Children's Privacy</h2>
              <p>
                Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us to have the information removed.
              </p>

              <h2>11. Changes to Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:
              </p>
              <ul>
                <li>Posting the updated policy on our website</li>
                <li>Sending email notifications for significant changes</li>
                <li>Updating the "Last updated" date at the top of this policy</li>
              </ul>

              <h2>12. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
              </p>

              <h2>13. Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mt-6">
                <p><strong>VFS Appointment Portal</strong></p>
                <p>Email: privacy@vfsportal.com</p>
                <p>Phone: +91-9876543210</p>
                <p>Address: 123 Business District, New Delhi, India 110001</p>
                <p>Data Protection Officer: dpo@vfsportal.com</p>
              </div>

              <h2>14. Compliance</h2>
              <p>
                We are committed to compliance with applicable data protection laws, including:
              </p>
              <ul>
                <li>Information Technology Act, 2000 (India)</li>
                <li>General Data Protection Regulation (GDPR) for EU residents</li>
                <li>Other relevant international data protection regulations</li>
              </ul>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
