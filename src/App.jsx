// import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Link } from "react-router-dom";

function App() {
  const cartCount = JSON.parse(localStorage.getItem("cart"))?.length || 0;

  return (
    <>
      <Header cartCount={cartCount} />
      <section className="flex flex-col items-center justify-center gap-1 text-center">
        <h1 className="text-3xl font-bold">Fake Products for Fake Money</h1>
        <p className="text-sm">
          Save big with up to 70% off our best selling fake products
        </p>
        <Link to="/products">
          <button className="my-4 px-8 py-2 bg-blue-700 text-white text-sm hover:bg-blue-800">
            Shop now
          </button>
        </Link>
      </section>
      <section className="flex flex-nowrap gap-2 px-6 h-96">
        <div className="flex-1 relative bg-t-shirt bg-cover bg-center h-full">
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-2 bg-white text-sm hover:bg-gray-200">
            Shop clothes
          </button>
        </div>
        <div className="flex-1 relative bg-electronics bg-cover bg-center h-full">
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-2 bg-white text-sm hover:bg-gray-200">
            Shop electronics
          </button>
        </div>
      </section>
      <footer className="mt-auto p-4 text-center text-xs text-gray-500">
        © 2024 FakeStore. All rights are fake.
      </footer>
    </>
  );
}

export default App;
