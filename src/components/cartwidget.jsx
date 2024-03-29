import { FaCartShopping } from "react-icons/fa6";

const CartWidget = () => {
  return (
    <div className="header-right col gx-5 gy-5">
      <nav>
        3 <FaCartShopping color="#b62300" />
      </nav>
    </div>
  );
};

export default CartWidget;
