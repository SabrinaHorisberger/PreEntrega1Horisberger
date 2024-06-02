import { useContext, useState, useEffect } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const ItemDetail = ({ item, onAdd }) => {
   const { addItem } = useContext(CartContext);
   const [amountProducts, setAmountProducts] = useState(1);
   const [stock, setStock] = useState(item ? item.stock : 0);
   const [visible, setVisible] = useState(true);

   useEffect(() => {
      setStock(item ? item.stock : 0);
   }, [item]);

   const disponible = stock === 0 ? "no stock" : stock;

   const addToCart = () => {
      if (amountProducts <= stock && amountProducts > 0) {
         setStock(stock - amountProducts);
         if (typeof onAdd === 'function') {
            onAdd(item, amountProducts);  
         }
         addItem(item, amountProducts);
         setAmountProducts(1);
         setVisible(false);
         console.log("You added " + amountProducts + " products to the cart!");
      }
   };

   return (
      <div className="item-card">
         <img src={item.imageUrl} alt={item.name} className="item-image" />
         <div className="item-details">
            <h3 className="item-name">{item.name}</h3>
            <p>Precio: ${item.price}</p>
            <p>Stock: {disponible}</p>
            <div>
               <button onClick={() => setAmountProducts(amountProducts > 1 ? amountProducts - 1 : 1)}>
                  -
               </button>
               <span> {amountProducts} </span>
               <button onClick={() => setAmountProducts(amountProducts < stock ? amountProducts + 1 : amountProducts)}>
                  +
               </button>
            </div>
            <div>
               {visible ? (
                  <button type="button" onClick={addToCart}>Add to cart</button>
               ) : (
                  <Link to="/cart">Finish purchase</Link>
               )}
            </div>
            <Link to={`/products/itemDetail/${item.id}`}>
               More about this product
            </Link>
         </div>
      </div>
   );
};

export default ItemDetail;


