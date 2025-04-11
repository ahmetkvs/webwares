import Footer from "./Footer";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

function DefaultLayout({ children }) {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default DefaultLayout;
