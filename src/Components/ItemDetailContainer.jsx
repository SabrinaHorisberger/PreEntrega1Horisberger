import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const fetchImtems = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            const producto = 
            resolve(doc)
         }, 2000)
    })
};
 
const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchImtems ();
            setItem (data);
            setLoading (false);
        };

        fetchData;
    }, []);
}

export default ItemDetailContainer;