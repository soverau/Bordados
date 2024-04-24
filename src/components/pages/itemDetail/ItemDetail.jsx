import { ProductCard } from "../../common/productCard/ProductCard";

const ItemDetail = ({ item }) => {
  // return <div>{item.title}</div>
  return (
    <div className="container">
      <div className="row">
        <ProductCard
          key={item.id}
          title={item.title}
          description={item.description}
          img={item.img}
          price={item.price}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
