import "./nav.css";
import Logo from "../../public/iconoDos.png";
import CartWiget from "./CartWidget";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <img className="logo" src={Logo} alt="logo" />

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products"> Products </Link>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Contact us</a>{" "}
        </li>
      </ul>
      <div className="card">
        <CartWiget />
      </div>
    </nav>
  );
};

export default Menu;
