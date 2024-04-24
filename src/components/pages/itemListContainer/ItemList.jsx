import { ProductCard } from "../../common/productCard/ProductCard";

const ItemList = ({ items, error }) => {
  console.log(items);
  return (
    <div className="container">
      <div className="row">
        {items.map(({ id, title, description, img, price }) => {
          return (
            <ProductCard
              key={id}
              title={title}
              description={description}
              img={img}
              price={price}
            />
          );
        })}
        {error && <h2>error</h2>}
        {/* {items.length > 0 ? (
          <>
            <ProductCard
              title={items[0].title}
              description={items[0].description}
              img={items[0].img}
              price={items[0].price}
            />
            <ProductCard
              title={items[1].title}
              description={items[1].description}
              img={items[1].img}
              price={items[1].price}
            />
            <ProductCard
              title={items[2].title}
              description={items[2].description}
              img={items[2].img}
              price={items[2].price}
            />
            <ProductCard
              title={items[3].title}
              description={items[3].description}
              img={items[3].img}
              price={items[3].price}
            />
          </>
        ) : (
          <h2>Loading...</h2>
        )} */}
      </div>
    </div>
  );
};

export default ItemList;
