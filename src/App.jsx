import { Rocket } from "lucide-react";
import TopBar from "./components/layout/TopBar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/homePage/HeroSection";
import BrandLogosSection from "./components/homePage/BrandLogosSection/BrandLogosSection";
import TopOfWeek from "./components/homePage/TopOfWeek";
import BestSellersSection from "./components/homePage/BestSellersSection";
import BestServices from "./components/homePage/BestServicesSection/BestServicesSection";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <HeroSection />
      <BrandLogosSection />
      <TopOfWeek />
      <BestSellersSection />
      <BestServices />
      <Footer />
    </>
  );
}

export default App;
