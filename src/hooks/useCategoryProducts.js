import React, { useEffect, useState } from "react";
import { getProductsByCategory } from "../utils/api";

const useCategoryProducts = (categoryType) => {
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductsByCategory(categoryType);
        setCategoryProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return categoryProducts;
};

export default useCategoryProducts;
