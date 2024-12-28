import logoIpsum from "../assets/Logoipsum.svg";

export default function Header() {
  return (
    <header className="sticky top-0 flex justify-between items-center p-6 text-xs">
      <img src={logoIpsum} alt="logo" />
      <nav>
        <ul className="flex gap-4">
          <li>HOME</li>
          <li>PRODUCTS</li>
          <li>CART</li>
        </ul>
      </nav>
    </header>
  );
}
