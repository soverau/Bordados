import { ProductCard } from "../../common/productCard/ProductCard";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <h1 className="p-5">{greeting}</h1>;
      <ProductCard />
    </div>
  );
};

export default ItemListContainer;
