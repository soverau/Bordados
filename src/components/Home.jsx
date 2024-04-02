import "../styles/index.css";
{
  /*import ItemListContainer from "./ItemListContainer.jsx";*/
}
import Carrusel from "./Carrusel.jsx";
import { Counter } from "./common/counter/Counter.jsx";
import Footer from "./layout/footer/Footer.jsx";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer.jsx";

const Home = () => {
  return (
    <div className="main">
      <Carrusel />
      <ItemListContainer greeting={"Welcome"} />
      <Counter />
      <Footer />
    </div>
  );
};

export default Home;
