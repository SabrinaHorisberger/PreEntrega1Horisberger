import { useState } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';


const ItemDetail = ({item}) => {

const [amountProducts, setAmountProducts] = useState (0);

const [stock, setStock] = useState(item ? item.stock : 0);

const disponible = stock === 0 ? "no stock" : stock;

const maxProducts = disponible === amountProducts ? "none" : "block";

 return(
       
       <>
      
       <div className="item-card">
       <img src= {item.imageUrl} alt={item.name} className= "item-image"/>
        <div className="item-details">
           <h3 className="item-name">{item.name}</h3>
           <h3 className="item-price">{item.description}</h3>
           <p>Precio: ${item.price}</p>
           <p>stock:{disponible}</p>
           <div>
              <button onClick={() => setAmountProducts (amountProducts > 1 ? amountProducts -1:0 )} >
                 -
              </button>
              <span> {amountProducts} </span>
              <button onClick={() => setAmountProducts (amountProducts < disponible ? amountProducts + 1 : amountProducts )} >
                  +
              </button>
           </div>
           <Link to = {`/products/itemDetail/${item.id}`} >
              more about this product
           </Link>
         </div>  
       </div>
       </>
   )

};

export default ItemDetail;


