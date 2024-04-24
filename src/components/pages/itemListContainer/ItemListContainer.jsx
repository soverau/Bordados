import { useEffect, useState } from "react";
import { products } from "../../productsMock.js";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const { name } = useParams();
  console.log(name);

  useEffect(() => {
    let filteredProducts = products.filter(
      (product) => product.category === name
    );

    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        setTimeout(() => {
          resolve(name ? filteredProducts : products);
        }, 2000);
      } else {
        reject({ status: 400, message: "There are no matches." });
      }
    });

    getProducts
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        setError(error);
      });
  }, [name]);
  console.log(error);
  return <ItemList items={items} error={error} />;
};

export default ItemListContainer;
