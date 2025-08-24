"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
  });

  if (status === "loading") return <p>Loading...</p>;

  if (!session) {
    if (typeof window !== "undefined") window.location.href = "/login";
    return null;
  }

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      ...product,
      userName: session.user.name,
      userEmail: session.user.email,
    };

    try {
      const res = await fetch("http://localhost:5000/add-product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      const data = await res.json();

      if (data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Product added successfully!",
          showConfirmButton: false,
          timer: 2000,
        });
        setProduct({ name: "", price: "", image: "", description: "" });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Failed to add product.",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-1 my-8 bg-white rounded-lg shadow-md px-2 mt-10 py-5">
      <h1 className="text-3xl font-bold text-green-600 text-center py-3">
        Add a New Product
      </h1>

      <h1 className="text-2xl font-bold text-center text-blue-600 mb-1">
        Welcome, {session.user.name}!
      </h1>
      <p className="text-gray-600 mb-6 text-center">
        Fill in the details below to add a new product to your store.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Enter product name"
            required
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Enter price"
            required
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            placeholder="Enter image URL"
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Enter description"
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="block font-semibold text-gray-700 mb-1">Name</label>
          <input
            type="text"
            value={session.user.name}
            readOnly
            className="w-full border px-3 py-2 rounded-md bg-gray-100"
          />
        </div>

        <div>
          <label className="block font-semibold text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={session.user.email}
            readOnly
            className="w-full border px-3 py-2 rounded-md bg-gray-100"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
