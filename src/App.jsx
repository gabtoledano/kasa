import "./App.css";
import { Route, Routes } from "react-router";
import AppLayout from "./components/AppLayout/AppLayout";
import Accueil from './pages/accueil/Accueil.jsx';
import Apropos from "./pages/a-propos/Apropos.jsx";
import AppartmentDetail from "./pages/appartment-detail/AppartmentDetail.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" index element={<Accueil />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/appartements/:id" element={<AppartmentDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppLayout>
  );
}

export default App;