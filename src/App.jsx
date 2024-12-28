// import { useState } from 'react'
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <section className="flex flex-col items-center justify-center gap-1 text-center">
        <h1 className="text-3xl font-bold">Fake Products for Fake Money</h1>
        <p className="text-sm">
          Save big with up to 70% off our best selling fake products
        </p>
        <button className="my-4 px-8 py-2 bg-blue-700 text-white text-sm hover:bg-blue-800">
          Shop now
        </button>
      </section>
      <section className="flex flex-nowrap gap-2 px-6 h-96">
        <div className="flex-1 relative bg-t-shirt bg-cover bg-center h-full">
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-2 bg-white text-sm hover:bg-gray-200">
            Shop T-shirts
          </button>
        </div>
        <div className="flex-1 relative bg-jeans bg-cover bg-center h-full">
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-2 bg-white text-sm hover:bg-gray-200">
            Shop Jeans
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
