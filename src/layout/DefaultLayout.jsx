import TopBar from "../components/layout/TopBar";

function DefaultLayout({ children }) {
  return (
    <>
      <TopBar />
      {/*Navbar*/}
      <main>{children}</main>
      {/*Footer*/}
    </>
  );
}
