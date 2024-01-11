import Products from "./products";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <h1 className="p-5">{greeting}</h1>;
      <Products />
    </div>
  );
};

export default ItemListContainer;
