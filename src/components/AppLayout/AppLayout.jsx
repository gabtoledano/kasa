import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";

export default function AppLayout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}
