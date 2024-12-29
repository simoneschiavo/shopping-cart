import Header from "../../components/Header";
import CartItems from "./CartItems";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    alert("Hey, it's a fake website. No way you wish to pay for real");
  };

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="space-y-4 sm:space-y-8">
          {cart.length === 0 ? (
            <div className="text-center py-8 sm:py-12">
              <p className="text-gray-500">There's nothing in your bag.</p>
              <Link to="/products">
                <button className="my-4 px-6 sm:px-8 py-3 sm:py-2 w-full sm:w-auto bg-blue-700 text-white text-base sm:text-sm hover:bg-blue-800">
                  Shop now
                </button>
              </Link>
            </div>
          ) : (
            <>
              <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
                <h1 className="text-xl sm:text-lg font-bold uppercase">
                  Shopping Bag
                </h1>
                <p className="text-xl sm:text-lg">Total: ${calculateTotal()}</p>
              </div>
              <div className="overflow-x-auto border-b border-gray-200">
                <CartItems cart={cart} handleRemoveItem={removeFromCart} />
              </div>
              <button
                className="my-4 sm:my-8 px-6 sm:px-8 py-3 sm:py-2 w-full bg-blue-700 text-white text-base sm:text-sm hover:bg-blue-800"
                onClick={handleCheckout}
              >
                Go to checkout
              </button>
            </>
          )}
        </div>
      </main>
    </>
  );
}
