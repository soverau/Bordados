const Navbar = () => {
  return (
    <nav className="top-nav col gx-5 gy-5">
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li>
          <a href="files/nosotros.html">Nosotros</a>
        </li>
        <li>
          <a href="files/resultados.html">Kits</a>
        </li>
        <li>
          <a href="files/resultados.html">Patrones</a>
        </li>
        <li>
          <a href="files/busqueda.html">Hilos</a>
        </li>
        <li>
          <a href="files/busqueda.html">Accesorios</a>
        </li>
        <li>
          <a href="files/contacto.html">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
