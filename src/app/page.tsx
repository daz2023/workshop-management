'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    router.push('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to Workshop Management</h1>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/customers" className="block p-6 bg-white rounded-lg shadow hover:bg-gray-50">
              <h2 className="text-xl font-semibold text-gray-900">Customers</h2>
              <p className="mt-2 text-gray-600">Manage your customer database</p>
            </Link>
            <Link href="/jobs" className="block p-6 bg-white rounded-lg shadow hover:bg-gray-50">
              <h2 className="text-xl font-semibold text-gray-900">Jobs</h2>
              <p className="mt-2 text-gray-600">Track and manage workshop jobs</p>
            </Link>
            <Link href="/inventory" className="block p-6 bg-white rounded-lg shadow hover:bg-gray-50">
              <h2 className="text-xl font-semibold text-gray-900">Inventory</h2>
              <p className="mt-2 text-gray-600">Manage your parts and inventory</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
