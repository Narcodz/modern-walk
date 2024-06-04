import React, { useState, useEffect } from "react";
import { getProductsByCategory } from "../utils/api";
import ProductCard from "../components/ProductCard";
import { Grid, Stack, Typography, CircularProgress } from "@mui/material";
import { useLocation } from "react-router-dom";

const capitalizeFirstLetter = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const ProductPage = () => {
  const location = useLocation();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const capitalizedCategory = capitalizeFirstLetter(location.state.category);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductsByCategory(location.state.category);
        setCategoryProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, [location.state.category]);

  return (
    <Stack sx={{ marginBottom: "60px" }}>
      <Typography
        variant="h1"
        sx={{
          textAlign: "left",
          marginLeft: "100px",
          fontSize: "30px",
          fontWeight: "700",
        }}
      >
        {capitalizedCategory}
      </Typography>
      {loading ? (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ height: "300px" }}
        >
          <CircularProgress />
        </Grid>
      ) : (
        <Grid
          container
          spacing={3}
          sx={{ marginLeft: "auto", marginRight: "auto", padding: "54px" }}
        >
          {categoryProducts.map((product) => (
            <Grid Item key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Stack>
  );
};

export default ProductPage;
