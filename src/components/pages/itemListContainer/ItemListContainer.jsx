import { ProductCard } from "../../common/productCard/ProductCard";
import Product1 from "/src/assets/images/DMC_CATEGORIES_16x9_Ratio_DESKTOP-MOBILE_720px_GOS_KN-1.jpg";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <h1 className="p-5">{greeting}</h1>
      <div className="container">
        <div className="row">
          <ProductCard
            image={Product1}
            titulo={"Kits"}
            descripcion={
              "Some quick example text to build on the card title and make up the bulk of the card content."
            }
          />
          <ProductCard
            image={Product1}
            titulo={"Patrone"}
            descripcion={
              "Some quick example text to build on the card title and make up the bulk of the card content."
            }
          />
          <ProductCard
            image={Product1}
            titulo={"Hilos"}
            descripcion={
              "Some quick example text to build on the card title and make up the bulk of the card content."
            }
          />
          <ProductCard
            image={Product1}
            titulo={"Accesorio"}
            descripcion={
              "Some quick example text to build on the card title and make up the bulk of the card content."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
