"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function ProductDetails() {
  const params = useParams();
  const { id } = params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product)
    return <p className="text-center text-gray-500 mt-10">Loading product details...</p>;

  return (
    <div className="max-w-2xl mx-auto my-12 p-8 px-2 bg-white rounded-lg shadow-md">
      {/* Product Image */}
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover rounded mb-6"
        />
      )}

      {/* Product Information */}
      <div className="space-y-3 text-gray-800 text-lg mb-6">
        <div className="">
          <span className="w-32 font-semibold">Product Name : </span>
          <span className="font-bold">{product.name}</span>
        </div>
        <div className="">
          <span className="w-32 font-semibold">Price : </span>
          <span className="font-semibold text-blue-600">${product.price}</span>
        </div>
        <div className="">
          <span className="w-32 font-semibold">Description : </span>
          <span className="text-gray-600"> {product.description}</span>
        </div>
      </div>

      {/* Seller Information */}
      <div className="mb-6 p-4 border rounded-md bg-indigo-100">
        <h2 className="text-xl font-semibold mb-2">Seller Information</h2>
        <div className="">
          <span className="w-32 font-semibold">Name : </span>
          <span>{product.userName}</span>
        </div>
        <div className="">
          <span className="w-32 font-semibold">Email : </span>
          <span>{product.userEmail}</span>
        </div>
      </div>

     <div className="mt-6">
        <a
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white font-semibold rounded-md shadow hover:bg-indigo-600 transition"
        >
          <ArrowLeft size={18} /> Back to Products
        </a>
      </div>
    </div>
  );
}
