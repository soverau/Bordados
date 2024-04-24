import "../../styles/index.css";
import Header from "./header/Header";
import Carrusel from "../Carrusel.jsx";
import { Counter } from "../common/counter/Counter.jsx";
import Footer from "./footer/Footer.jsx";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <Carrusel />
        <Outlet />
        {/* <Counter /> */}
      </div>

      <Footer />
    </div>
  );
};
