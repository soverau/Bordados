import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div className="header-right col gx-5 gy-5">
      <nav>
        <Link to="/cart">
          3 <FaCartShopping color="#b62300" />
        </Link>
      </nav>
    </div>
  );
};

export default CartWidget;
