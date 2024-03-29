import "../styles/index.css";
{
  /*import ItemListContainer from "./ItemListContainer.jsx";*/
}
import Carrusel from "./Carrusel.jsx";
import Footer from "./layout/footer/Footer.jsx";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer.jsx";

const Home = () => {
  return (
    <div className="main">
      <Carrusel />
      <ItemListContainer greeting={"Welcome"} />
      <Footer />
    </div>
  );
};

export default Home;
