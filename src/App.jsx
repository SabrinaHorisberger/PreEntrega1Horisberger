import Menu from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ItemDetailProduct from "./Components/ItemDetailProduct";
import CartComtextProvider from "./Components/CartContext";
import Cart from "./Components/Cart";

function App() {
  return (
    <div>
      <CartComtextProvider>
          <Menu/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/products" element={<ItemListContainer />} />
            <Route exact path="/products/itemDetail/:id" element={<ItemDetailProduct />} />
            <Route exact path="/cart" element={<Cart/>} />
         </Routes>
       </CartComtextProvider>
    </div>
  );
}

export default App;
