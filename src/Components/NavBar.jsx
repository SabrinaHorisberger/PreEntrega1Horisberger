import "../nav.css";
import Logo from "../../public/icono.png";
import CartWiget from "./CartWidget";

const Menu = () => {
  return (
    <nav>
      <img class="logo" src={Logo} alt="" />
      <ul>
        <li>
          <a href="#">Hi there</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Contact us</a>{" "}
        </li>
      </ul>
      <div ClassName= "card">
        <CartWiget />
      </div>
    </nav>
  );
};

export default Menu;
