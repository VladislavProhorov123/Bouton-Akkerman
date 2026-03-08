import React from "react";
import Hero from "../components/Hero";
import CategoriesSection from "../sections/CategoriesSection";
import FeaturedProducts from "../components/FeaturedProducts";
import AdvantagesSection from "../sections/AdvantagesSection";
import CTA from "../sections/CTA";
import FlowerCareCTA from "../sections/FlowerCareCTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <CategoriesSection />
      <FeaturedProducts /> <FlowerCareCTA />
      <AdvantagesSection />
      <CTA />
    </div>
  );
}
