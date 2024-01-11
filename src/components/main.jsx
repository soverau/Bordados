import ItemListContainer from "./ItemListContainer.jsx";
import Carrusel from "./carrusel";
import Footer from "./footer";
import Products from "./products";

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
