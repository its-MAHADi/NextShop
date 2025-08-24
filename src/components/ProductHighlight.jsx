"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductHighlight() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products/recent")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Recent Products</h2>
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
            <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="font-bold mt-1">${product.price}</p>
            <p className="text-gray-500">
              <Link href={`/products/${product._id}`}>
                {product.description?.slice(0, 50)}...{" "}
                <span className="text-blue-500 hover:underline">
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
