import logoIpsum from "../assets/Logoipsum.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 flex justify-between items-center p-6 text-xs z-10 bg-white">
      <Link to="/"><img src={logoIpsum} alt="logo" /></Link>
      <nav>
        <ul className="flex gap-4">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/products">PRODUCTS</Link></li>
          <li><Link to="/cart">CART</Link></li>
        </ul>
      </nav>
    </header>
  );
}
