import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <div>
      <section className="text-center py-20 bg-blue-50 rounded-lg">
      <h1 className="text-4xl font-bold mb-4">Welcome to NextShop</h1>
      <p className="text-lg mb-6">Your one-stop shop for amazing products.</p>
      <Link href="/products" className="btn btn-primary">View Products</Link>
      </section>
    </div>
  )
}
