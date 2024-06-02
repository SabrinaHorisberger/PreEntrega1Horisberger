import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { doc, getDoc } from "firebase/firestore"; 
import { db } from "../firebase";
import ItemDetail from './ItemDetail';
import { CartContext } from './CartContext';

async function fetchProductById(id) {
    const docRef = doc(db, "mockItem", id);
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
        const noProduct = "sin producto";
        return noProduct;
    }
}

function ItemDetailProduct() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    fetchProductById(id)
      .then((product) => setItem(product))
      .catch((error) => console.error("Error fetching product: ", error));
  }, [id]);

  if (!item) {
    return <div>Cargando producto...</div>;
  } else if (item === "sin producto") {
    return <div>El producto seleccionado no existe!</div>;
  }

  const onAdd = (item, amount) => {
    addItem(item, amount);  
  };

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
  </div>
  );
}

export default ItemDetailProduct;
