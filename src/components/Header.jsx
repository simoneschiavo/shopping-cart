import logoIpsum from "../assets/Logoipsum.svg";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cart } = useCart();
  const cartCount = cart.length;

  return (
    <header className="sticky top-0 flex justify-between items-center p-6 text-xs z-10 bg-white">
      <Link to="/">
        <img src={logoIpsum} alt="logo" />
      </Link>
      <nav>
        <ul className="flex gap-4 items-center">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/products">PRODUCTS</Link>
          </li>
          <li>
            <Link to="/cart" className="flex items-center gap-2">
              BAG {cartCount > 0 && <span>({cartCount})</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
