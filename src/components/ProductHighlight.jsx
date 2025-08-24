"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductHighlight() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://next-shop-server-three.vercel.app/products/recent")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-2">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-6 underline decoration-blue-500">Recent Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg p-4 bg-white shadow"
          >
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover rounded mb-2"
              />
            )}
            <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="font-bold text-blue-500 mt-1">${product.price}</p>
            <p className="text-gray-500">
              <Link href={`/products/${product._id}`}>
                {product.description?.slice(0, 50)}...{" "}
                <span className="text-blue-500 font-semibold hover:underline">
                  Read more
                </span>
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
