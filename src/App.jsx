import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/header/Header";
import Home from "./components/Home";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import { Layout } from "./components/layout/Layout.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />

            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
