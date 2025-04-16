import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";

function DefaultLayout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <>
      <ScrollToTop />
      <Header isHome={isHome} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default DefaultLayout;
