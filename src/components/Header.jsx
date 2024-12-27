import logoIpsum from "../assets/Logoipsum.svg";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 text-xs">
      <img src={logoIpsum} alt="logo" />
      <nav>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
}
