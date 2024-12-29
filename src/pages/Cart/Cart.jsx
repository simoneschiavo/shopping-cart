import { useLocation } from "react-router-dom";

export default function Cart() {
  const location = useLocation();
  const cart = location.state?.cart || [];

  return (
    <>
      <Header cartCount={cart.length} />
      <main>
        <h1>Your Bag</h1>
        {cart === [] && "There's nothing in your bag."}
        {cart !== [] && <CartItems cart={cart} />}
      </main>
    </>
  );
}
