"use client";
import React from "react";
import CountUp from "react-countup";

export default function WhyChooseUs() {
  return (
    <section className=" py-10 px-2">
      <div className="max-w-7xl mx-auto  text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-6 underline decoration-blue-500">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-indigo-100 p-6 rounded-lg shadow">
            <h3 className="text-4xl font-extrabold text-indigo-600">
              <CountUp end={5000} duration={3} />+
            </h3>
            <p className="mt-2 text-lg font-medium">Happy Customers</p>
          </div>
          <div className="bg-indigo-100 p-6 rounded-lg shadow">
            <h3 className="text-4xl font-extrabold text-indigo-600">
              <CountUp end={1200} duration={3} />+
            </h3>
            <p className="mt-2 text-lg font-medium">Products Sold</p>
          </div>
          <div className="bg-indigo-100 p-6 rounded-lg shadow">
            <h3 className="text-4xl font-extrabold text-indigo-600">
              <CountUp end={150} duration={3} />+
            </h3>
            <p className="mt-2 text-lg font-medium">Trusted Partners</p>
          </div>
        </div>
      </div>
    </section>
  );
}
