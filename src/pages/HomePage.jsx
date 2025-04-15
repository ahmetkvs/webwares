import HeroSection from "../components/homeSections/HeroSection";
import BestSellersSection from "../components/homeSections/BestSellersSection";
import FeaturedProductsSection from "../components/homeSections/FeaturedProductsSection";
import TopOfWeek from "../components/homeSections/TopOfWeek";
import FeaturedPostsSection from "../components/homeSections/FeaturedPostsSection";

import BestServicesSection from "../components/homeSections/BestServicesSection/BestServicesSection";
import BrandLogosSection from "../components/homeSections/BrandLogosSection/BrandLogosSection";

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
