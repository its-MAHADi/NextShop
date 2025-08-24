"use client";

import React from "react";

// ৪টি IT সম্পর্কিত ক্যাটাগরি (ডামি)
const categories = [
  { name: "Laptops & Computers", image: "https://i.ibb.co.com/V0RgHfcw/Laptops-Computers.jpg" },
  { name: "Smartphones & Tablets", image: "https://i.ibb.co.com/ZRBrcXmk/Smartphones-Tablets.jpg" },
  { name: "Networking Devices", image: "https://i.ibb.co.com/6c3QFFZP/Networking-Devices.webp" },
  { name: "Wearable Devices", image: "https://i.ibb.co.com/4RqMfJRn/Wearable-Devices.png" },
];

export default function ShopByCategory() {
  return (
    <div className="max-w-7xl mx-auto py-6 px-2">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-6 underline decoration-blue-500">Shop By Category</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4">
              <h3 className="text-lg font-bold">{cat.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
