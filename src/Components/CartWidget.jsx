import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import './CardWidget.css';


const CartWidget = () => {
    const { getTotalProducts } = useContext(CartContext);
    const totalProducts = getTotalProducts()


    if (totalProducts > 0) {
        return (
            <Link to="/cart">
                <div style={{ position: 'relative' }}>
                    <i className="bi bi-cart4 shopcart"></i>
                    <span className="counter">{getTotalProducts()}</span>
                </div>
            </Link>
        );
    }

    return null;
};

export default CartWidget;
