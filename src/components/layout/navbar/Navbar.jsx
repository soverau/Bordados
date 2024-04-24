import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="top-nav col gx-5 gy-5">
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li>
          <Link to="/">Todos</Link>
        </li>
        <li>
          <Link to="/category/Kits">Kits</Link>
        </li>
        <li>
          <Link to="/category/Patterns">Patrones</Link>
        </li>
        <li>
          <Link to="/category/Threads">Hilos</Link>
        </li>
        <li>
          <Link to="/category/Accessories">Accesorios</Link>
        </li>
        <li>
          <a href="files/contacto.html">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
