"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { Home, ShoppingCart, LayoutDashboard, LogOut, LogIn, X, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => pathname === path;

  const navLinks = [
    { href: "/", label: "Home", icon: <Home size={18} /> },
    { href: "/products", label: "Products", icon: <ShoppingCart size={18} /> },
  ];

  if (session) navLinks.push({ href: "/dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> });

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-md  py-3 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-1">
        {/* Brand */}
        <Link href="/" className="text-2xl font-bold">
          NextShop
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-4 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-1 px-3 py-1 rounded-md hover:bg-blue-500 ${
                isActive(link.href) ? "bg-blue-800" : ""
              }`}
            >
              {link.icon} {link.label}
            </Link>
          ))}

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
              className="flex items-center gap-1 px-3 py-1 rounded-md bg-green-600 hover:bg-green-700"
            >
              <LogIn size={16} /> Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="cursor-pointer bg-white px-1 py-1 rounded-md text-black"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-600 shadow-lg transform transition-transform duration-300 z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-blue-500">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            className="bg-white px-1 py-1 cursor-pointer text-black rounded-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col mt-4 gap-3 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-blue-500 ${
                isActive(link.href) ? "bg-blue-800" : ""
              }`}
            >
              {link.icon} {link.label}
            </Link>
          ))}

          {session ? (
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 hover:bg-red-700 mt-2"
            >
              <LogOut size={16} /> Logout
            </button>
          ) : (
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-md bg-green-600 hover:bg-green-700 mt-2"
            >
              <LogIn size={16} /> Login
            </Link>
          )}
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}
