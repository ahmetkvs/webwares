import { Rocket } from "lucide-react";
import TopBar from "./components/layout/TopBar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <div className="w-full h-60 bg-orange-400"></div>
      <Footer />
    </>
  );
}

export default App;
