import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: "📊" },
    { name: "Jobs", href: "/jobs", icon: "🔧" },
    { name: "Customers", href: "/customers", icon: "👥" },
    { name: "Vehicles", href: "/vehicles", icon: "🚗" },
    { name: "Parts", href: "/parts", icon: "⚙️" },
    { name: "Reports", href: "/reports", icon: "📈" },
  ];

  return (
    <div className="w-64 bg-gray-800 h-screen fixed left-0 top-0 text-white">
      <div className="p-4">
        <nav className="space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center p-2 rounded-lg ${
                  isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
