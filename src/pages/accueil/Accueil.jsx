import { Banner } from "../../components/Banner/Banner.jsx";
import { Appartments } from "../../components/Appartments/Appartments.jsx";
import homeImage from "../../assets/img1.jpg";

function Accueil() {
  return (
    <>
      <Banner image={homeImage} title="Chez vous, partout et ailleurs" />
      <Appartments />
    </>
  );
}

export default Accueil;
