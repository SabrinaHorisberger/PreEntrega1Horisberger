import { useContext } from "react";
import { CartContext} from "./CartContext";

const Cart = () => {
    const {cart, removeItem, clear, getTotalProducts, getSumProducts} = useContext (CartContext);

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                  <table className="table">
                       <tbody>
                         {cart.map(item => (
                            <tr>
                                <td><img src= {item.imageUrl} alt= {item.name} width= {120}/></td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td><i className="bi bi-trash3" width={32}></i></td>
                            </tr>
                         ))}
                        </tbody>
                   </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;
 