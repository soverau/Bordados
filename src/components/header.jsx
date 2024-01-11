import CartWidget from "./cartwidget";
import Logo from "./logo";
import Navbar from "./navbar";

const Header = () => {
  return (
    <div className="header homepage gx-5 gy-5">
      <Logo />
      <Navbar />
      <CartWidget />
    </div>
  );
};

export default Header;
