import Header from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./AppLayout.css";

function AppLayout({ children }) {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <main className="main-content">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;