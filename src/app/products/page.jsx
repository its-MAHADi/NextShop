"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);

        // Extract unique categories
        const uniqueCategories = ["All", ...new Set(data.map((p) => p.category))];
        setCategories(uniqueCategories);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    let updated = products;

    // Filter by category
    if (selectedCategory !== "All") {
      updated = updated.filter((p) => p.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm.trim() !== "") {
      updated = updated.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(updated);
  }, [searchTerm, selectedCategory, products]);

  return (
    <div className="max-w-7xl mx-auto py-10 mt-10 px-2">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-6 underline decoration-blue-500">All Products</h2>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          className="border px-4 py-2 rounded w-full sm:w-1/3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Category Filter */}
        <select
          className="border px-4 py-2 rounded w-full sm:w-1/4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition"
          >
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover rounded mb-3"
              />
            )}
            <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
            <p className="text-blue-600 font-semibold mb-2">${product.price}</p>
            <p className="text-gray-500 mb-3">
              {product.description?.slice(0, 60)}...
            </p>
            <Link
              href={`/products/${product._id}`}
              className="inline-block bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
