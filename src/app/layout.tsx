import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from '@/contexts/AuthContext';

export const metadata: Metadata = {
  title: "Workshop Management System",
  description: "Manage your workshop operations efficiently",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
