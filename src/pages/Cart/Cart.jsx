import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import CartItems from "./CartItems";
import { useState } from "react";

export default function Cart() {
  const location = useLocation();
  const [cart, setCart] = useState(location.state?.cart || []);

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleRemoveItem = (itemId) => {
    const newCart = cart.filter((item) => item.id !== itemId);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <>
      <Header cartCount={cart.length} cart={cart} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">There's nothing in your bag.</p>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center">
                <h1 className="text-lg font-bold  uppercase">Shopping Bag</h1>
                <p className="text-lg">Total: ${calculateTotal()}</p>
              </div>
              <div className="overflow-hidden border-b border-gray-200">
                <CartItems cart={cart} handleRemoveItem={handleRemoveItem} />
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}
