import logoIpsum from "../assets/Logoipsum.svg";

export default function Header() {
  return (
    <header>
      <img src={logoIpsum} alt="logo" />
      <nav className="navbar">
        <ul>
          <li className="font-bold">Home</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
}
