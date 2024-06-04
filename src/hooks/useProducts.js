import { useState, useEffect } from "react";
import { getProducts } from "../utils/api";

const useProducts = (limit) => {
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(limit);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
    // eslint-disable-next-line
  }, []);

  return products;
};

export default useProducts;
