import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { useState } from "react";
import DefaultProducts from "./DefaultProducts";

export default function Products() {
  const { category } = useParams();

  return (
    <>
      <Header />
      {category === "electronics" ? (
        <Electronics />
      ) : category === "clothes" ? (
        <Clothes />
      ) : (
        <DefaultProducts />
      )}
    </>
  );
}
