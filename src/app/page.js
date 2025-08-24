import Hero from "@/components/Hero";
import ProductHighlight from "@/components/ProductHighlight";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div className="space-y-12">
<Hero></Hero>


<ProductHighlight></ProductHighlight>


<section className="py-12 text-center bg-gray-100 rounded">
<h2 className="text-2xl font-bold">Why Choose NextShop?</h2>
<p className="mt-2">Easy, Fast, and Secure Shopping Experience</p>
</section>
</div>
  );
}
