import { useState, useEffect } from "react";

export default function DefaultProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getRequestsWithNativeFetch(
          "https://fakestoreapi.com/products"
        );
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {products && products.map((product) => <div key={product.id}><ProductCard product={product} /></div>)}
    </div>
  );
}
