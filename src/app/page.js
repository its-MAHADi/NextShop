import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div className="space-y-12">
<section className="text-center py-20 bg-blue-50 rounded-lg">
<h1 className="text-4xl font-bold mb-4">Welcome to NextShop</h1>
<p className="text-lg mb-6">Your one-stop shop for amazing products.</p>
<Link href="/products" className="btn btn-primary">View Products</Link>
</section>


<section className="grid md:grid-cols-3 gap-6">
<div className="border p-4 rounded">Product Highlight 1</div>
<div className="border p-4 rounded">Product Highlight 2</div>
<div className="border p-4 rounded">Product Highlight 3</div>
</section>


<section className="py-12 text-center bg-gray-100 rounded">
<h2 className="text-2xl font-bold">Why Choose NextShop?</h2>
<p className="mt-2">Easy, Fast, and Secure Shopping Experience</p>
</section>
</div>
  );
}
