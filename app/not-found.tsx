import Link from 'next/link';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full text-center px-4">
        <div className="mb-8">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Page Not Found
          </h1>
          <p className="text-gray-600">
            The visa appointment page you're looking for doesn't exist or may have been moved.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <Link href="/" className="btn-primary w-full flex items-center justify-center">
            <Home className="h-5 w-5 mr-2" />
            Go to Homepage
          </Link>
          
          <Link href="/countries" className="btn-secondary w-full flex items-center justify-center">
            <Search className="h-5 w-5 mr-2" />
            Browse Countries
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="btn-secondary w-full flex items-center justify-center"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back
          </button>
        </div>

        <div className="text-sm text-gray-500">
          <p>Popular searches:</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <Link href="/france-visit-visa-appointment-delhi" className="text-primary-600 hover:underline">
              France Visa Delhi
            </Link>
            <Link href="/germany-work-visa-appointment-mumbai" className="text-primary-600 hover:underline">
              Germany Work Mumbai
            </Link>
            <Link href="/usa-visit-visa-appointment-bangalore" className="text-primary-600 hover:underline">
              USA Visa Bangalore
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
