import Navbar from "../Navbar/Navbar.jsx";

export default function AppLayout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
      {/* Footer component here */}
    </div>
  );
}
