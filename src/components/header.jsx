import CartWidget from "./common/cartWidget/CartWidget";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header homepage p-5">
      <Logo />
      <Navbar />
      <CartWidget />
    </div>
  );
};

export default Header;
