// import { ProductCard } from "../../common/productCard/ProductCard";
// import Product1 from "/src/assets/images/DMC_CATEGORIES_16x9_Ratio_DESKTOP-MOBILE_720px_GOS_KN-1.jpg";
import { useEffect, useState } from "react";
import { products } from "../../productsMock.js";
import ItemList from "./ItemList.jsx";
import { useParams, useNavigate } from "react-router-dom";

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

// const ItemListContainer = ({ greeting }) => {
//   return (
//     <div className="container">
//       <h1 className="p-5">{greeting}</h1>
//       <div className="container">
//         <div className="row">
//           <ProductCard
//             image={Product1}
//             titulo={"Kits"}
//             descripcion={
//               "Some quick example text to build on the card title and make up the bulk of the card content."
//             }
//           />
//           <ProductCard
//             image={Product1}
//             titulo={"Patrone"}
//             descripcion={
//               "Some quick example text to build on the card title and make up the bulk of the card content."
//             }
//           />
//           <ProductCard
//             image={Product1}
//             titulo={"Hilos"}
//             descripcion={
//               "Some quick example text to build on the card title and make up the bulk of the card content."
//             }
//           />
//           <ProductCard
//             image={Product1}
//             titulo={"Accesorio"}
//             descripcion={
//               "Some quick example text to build on the card title and make up the bulk of the card content."
//             }
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

export default ItemListContainer;
