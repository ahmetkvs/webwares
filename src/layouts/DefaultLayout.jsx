import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function DefaultLayout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <>
      <Header isHome={isHome} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default DefaultLayout;
