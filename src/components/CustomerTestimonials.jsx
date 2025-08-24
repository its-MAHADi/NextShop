"use client";
import React from "react";

export default function CustomerTestimonials() {
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "Amazing products and excellent customer service. I’ll definitely buy again!",
      image: "https://i.ibb.co.com/fVrtR2YL/John-Doe1.jpg",
    },
    {
      name: "Sarah Khan",
      feedback:
        "Fast delivery and top-notch quality! Highly recommended for everyone.",
      image: "https://i.ibb.co.com/kVMD8FRF/Sarah-Khan.jpg",
    },
    {
      name: "Alex Smith",
      feedback:
        "Their prices are reasonable and the product quality exceeded my expectations.",
      image: "https://i.ibb.co.com/NnZD5hQB/Alex-Smith.png",
    },
  ];

  return (
    <section className="py-4 bg-white px-2">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-6 underline decoration-blue-500">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="border p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center text-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <p className="italic text-gray-600">"{item.feedback}"</p>
              <h4 className="mt-4 font-semibold text-indigo-600">- {item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
