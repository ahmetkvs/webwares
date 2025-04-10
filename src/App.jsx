import { Rocket } from "lucide-react";
import TopBar from "./components/layout/TopBar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/homePage/HeroSection";
import BrandLogosSection from "./components/homePage/BrandLogosSection/BrandLogosSection";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <HeroSection />
      <BrandLogosSection />
      <Footer />
    </>
  );
}

export default App;
