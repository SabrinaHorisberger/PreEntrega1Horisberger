import Menu from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <div>
      <Menu/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/products" element={<ItemListContainer />} />
  
      </Routes>
    </div>
  );
}

export default App;
