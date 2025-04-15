import TopBar from "./TopBar";
import Navbar from "./Navbar";

function Header(props) {
  return (
    <header className="sticky bg-white top-0 z-50">
      <TopBar isHome={props.isHome} />
      <Navbar isHome={props.isHome} />
    </header>
  );
}

export default Header;
