import CartImage from "../assets/images/grocery-store.png";

const CartWidget = () => {
  return (
    <div className="header-right col gx-5 gy-5">
      <nav>
        3 <img className="cart" src={CartImage} alt="Shopping Cart" />
      </nav>
    </div>
  );
};

export default CartWidget;
