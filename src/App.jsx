import "./App.css";
import { Route, Routes } from "react-router";
import AppLayout from "./components/AppLayout/AppLayout";
import Accueil from "./pages/accueil/Accueil";
import Apropos from "./pages/a-propos/Apropos";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" index element={<Accueil />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </AppLayout>
  );
}

export default App;