import "../styles/index.css";
import ItemListContainer from "./ItemListContainer.jsx";
import Carrusel from "./Carrusel.jsx";
import { Footer } from "./Footer.jsx";
import Products from "./Products.jsx";

const Main = () => {
  return (
    <div className="main">
      <Carrusel />
      <ItemListContainer greeting={"Welcome"} />
      <Footer />
    </div>
  );
};

export default Main;
