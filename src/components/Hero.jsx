"use client";

import Link from "next/link";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Hero() {
  const images = [
    "https://i.ibb.co.com/2Y6Qs2pT/smartphone.webp",
    "https://i.ibb.co/6c3QFFZP/Networking-Devices.webp",
    "https://i.ibb.co.com/qFrN3bFP/laptop.jpg",
    "https://i.ibb.co/4RqMfJRn/Wearable-Devices.png",
  ];

  return (
    <section className="relative max-w-7xl mx-auto mt-14">
      {/* Carousel with gradient overlay */}
      <div className="relative">
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          interval={4000}
        >
          {images.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Hero Image ${index + 1}`}
                className="object-cover w-full h-[400px] sm:h-[550px] md:h-[500px]"
              />
            </div>
          ))}
        </Carousel>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/40"></div>

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
            Welcome to NextShop
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white drop-shadow-md mb-6">
            Your one-stop shop for amazing products.
          </p>
          <Link
            href="/products"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            View Products
          </Link>
        </div>
      </div>
    </section>
  );
}
