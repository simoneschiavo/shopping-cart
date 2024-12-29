import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import DefaultProducts from "./DefaultProducts";
import { useState, useEffect } from "react";

export default function Products() {
  const { category } = useParams();
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <>
      <Header cartCount={cart.length} />
      {category === "electronics" ? (
        <Electronics />
      ) : category === "clothes" ? (
        <Clothes />
      ) : (
        <DefaultProducts handleAddToCart={handleAddToCart} />
      )}
    </>
  );
}
