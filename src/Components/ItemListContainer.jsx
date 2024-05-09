import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { mockItem } from "../Data/util";
import "./ItemListContainer.css";

const ItemListContainer = () => {
    const [ item, setItem ] = useState (null);

    useEffect(() => {
        const fetchItem = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));

            setItem(mockItem);
        };

        fetchItem();
    }, []);



    return (
        <>
           
            <h2 className="products-list-heading">this are our products at the moment...</h2>
          
          <div className="item-lists">
              { item ? (item.map ((item) => {
                    return <ItemDetail key= {item.id} item={item} />;
                })
            ) : (
                <p className="hold">hold on a second...</p>
            
            )}
         </div> 
         </> 
       
    );
};


export default ItemListContainer;

