import HeroSection from "../components/sections/HeroSection";
import BestSellersSection from "../components/sections/BestSellersSection";
import FeaturedProductsSection from "../components/sections/FeaturedProductsSection";
import TopOfWeek from "../components/sections/TopOfWeek";
import FeaturedPostsSection from "../components/sections/FeaturedPostsSection";

import BestServicesSection from "../components/sections/BestServicesSection/BestServicesSection";
import BrandLogosSection from "../components/sections/BrandLogosSection/BrandLogosSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandLogosSection />
      <TopOfWeek />
      <BestSellersSection />
      <FeaturedProductsSection />
      <BestServicesSection />
      <FeaturedPostsSection />
    </>
  );
}

export default HomePage;
