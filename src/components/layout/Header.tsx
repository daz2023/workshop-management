import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold">Workshop Management</h1>
            </div>
          </div>
          <div className="flex items-center">
            <nav className="hidden md:flex space-x-4">
              <Link href="/dashboard" className="text-gray-700 hover:text-gray-900">
                Dashboard
              </Link>
              <Link href="/jobs" className="text-gray-700 hover:text-gray-900">
                Jobs
              </Link>
              <Link href="/customers" className="text-gray-700 hover:text-gray-900">
                Customers
              </Link>
              <Link href="/vehicles" className="text-gray-700 hover:text-gray-900">
                Vehicles
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
