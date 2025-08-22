"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { Home } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { LayoutDashboard } from "lucide-react";
import { LogOut } from "lucide-react";
import { LogIn } from "lucide-react";


export default function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();

  // Helper: check if link is active
  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-blue-600 text-white shadow-md p-4 flex justify-between items-center">
      {/* Left side: Brand + Links */}
      <div className="flex items-center gap-8">
        {/* Brand */}
        <Link href="/" className="text-2xl font-bold">
          NextShop
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-2">
          <Link
            href="/"
            className={`flex items-center gap-1 px-3 py-1 rounded-md hover:bg-blue-500 ${
              isActive("/") ? "bg-blue-800" : ""
            }`}
          >
            <Home size={18} /> Home
          </Link>
          <Link
            href="/products"
            className={`flex items-center gap-1 px-3 py-1 rounded-md hover:bg-blue-500 ${
              isActive("/products") ? "bg-blue-800" : ""
            }`}
          >
            <ShoppingCart size={18} /> Products
          </Link>
          {session && (
            <Link
              href="/dashboard"
              className={`flex items-center gap-1 px-3 py-1 rounded-md hover:bg-blue-500 ${
                isActive("/dashboard") ? "bg-blue-800" : ""
              }`}
            >
              <LayoutDashboard size={18} /> Dashboard
            </Link>
          )}
        </div>
      </div>

      {/* Right side: Login/Logout */}
      <div>
        {session ? (
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="flex items-center gap-1 px-3 py-1 rounded-md bg-red-600 hover:bg-red-700"
          >
            <LogOut size={16} /> Logout
          </button>
        ) : (
          <Link
            href="/login"
            className={`flex items-center gap-1 px-3 py-1 rounded-md bg-green-600 hover:bg-green-700`}
          >
            <LogIn size={16} /> Login
          </Link>
        )}
      </div>
    </nav>
  );
}
