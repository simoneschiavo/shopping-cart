import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import CartItems from "./CartItems";

export default function Cart() {
  const location = useLocation();
  const cart = location.state?.cart || [];

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <>
      <Header cartCount={cart.length} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-bold  uppercase">Shopping Bag</h1>
            <p className="text-lg">
              Total: ${calculateTotal()}
            </p>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">There's nothing in your bag.</p>
            </div>
          ) : (
            <div className="overflow-hidden border-b border-gray-200">
              <CartItems cart={cart} />
            </div>
          )}
        </div>
      </main>
    </>
  );
}
