import { FeaturedProducts } from "@/components/pages/home/featured-products";
import { HeroSection } from "@/components/pages/home/hero-section";
import { api, HydrateClient } from "@/trpc/server";
import type { Product } from '@/types';
import axios from 'axios';

export default async function Home() {
  void (await api.product.getFeatured.prefetch());
   const products =
    (await axios.get<Product[]>("https://fakestoreapi.com/products")).data
    console.log(products)
  return (
    <HydrateClient>
      <div className="min-h-screen">
        <HeroSection />
        <FeaturedProducts />
      </div>
    </HydrateClient>
  );
}
