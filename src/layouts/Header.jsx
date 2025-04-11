import TopBar from "./TopBar";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="sticky bg-white top-0 z-50">
      <TopBar />
      <Navbar />
    </header>
  );
}

export default Header;
