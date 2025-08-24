import CustomerTestimonials from "@/components/CustomerTestimonials";
import Hero from "@/components/Hero";
import ProductHighlight from "@/components/ProductHighlight";
import ShopByCategory from "@/components/ShopByCategory";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
   <div className="space-y-12">
<Hero></Hero>
<ProductHighlight></ProductHighlight>
<ShopByCategory></ShopByCategory>
<CustomerTestimonials></CustomerTestimonials>
<WhyChooseUs></WhyChooseUs>
</div>
  );
}
