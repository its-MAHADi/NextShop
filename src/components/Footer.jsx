"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 px-2">
      <div className="max-w-7xl mx-auto  flex flex-col md:flex-row justify-between items-center">
        {/* Logo or Site Name */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-xl font-bold text-white">NextShop</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/products" className="hover:text-white transition">Products</a>
          <a className="hover:text-white transition">About</a>
          <a className="hover:text-white transition">Contact</a>
        </div>

        {/* Copyright */}
        <div>
          <p className="text-sm">&copy; {new Date().getFullYear()} NextShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
