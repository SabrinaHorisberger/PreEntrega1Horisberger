import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import "./ItemListContainer.css";
import  {db} from '../firebase.js';
import { collection, getDocs } from 'firebase/firestore';

const ItemListContainer = () => {
    const [ item, setItem ] = useState ([]);

    useEffect(() => {
        const fetchItem = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));

           const mockItemCollection = collection(db, "mockItem");
           const mockItemSnapshot = await getDocs (mockItemCollection); 
           const mockItemList = mockItemSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
           setItem(mockItemList);
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

