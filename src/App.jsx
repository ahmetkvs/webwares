import { Rocket } from "lucide-react";
import TopBar from "./components/layout/TopBar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/homePage/HeroSection";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <HeroSection />
      <Footer />
    </>
  );
}

export default App;
