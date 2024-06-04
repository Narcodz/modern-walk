import React from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import {
  homePageProductLimit,
  mensClothing,
  mensClothingRoute,
  titles,
  womensClothing,
  womensClothingRoute,
} from "../constants";
import { Box, Stack, Typography } from "@mui/material";
import useCategories from "../hooks/useCategories";
import CategoryCard from "../components/CategoryCard";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const products = useProducts(homePageProductLimit);
  const categories = useCategories();
  const navigate = useNavigate();

  const filteredCategories = categories.filter(
    (category) => category === mensClothing || category === womensClothing
  );

  var a = 10;
  (function () {
    console.log(a);
    var a = 5;
  })();

  const navigateToProducts = (category) => {
    navigate(
      category === mensClothing ? mensClothingRoute : womensClothingRoute,
      {
        state: { category },
      }
    );
  };

  return (
    <Stack spacing={6} sx={{ marginTop: "20px", marginBottom: "20px" }}>
      <Stack spacing={4}>
        <Typography
          variant="h1"
          sx={{ textAlign: "left", fontSize: "30px", fontWeight: "700" }}
        >
          {titles.flashSalesTitle}
        </Typography>
        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: "50px",
            marginBottom: "60px",
          }}
        >
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Box>
      </Stack>
      <Stack spacing={4}>
        <Typography
          sx={{ textAlign: "left", fontSize: "30px", fontWeight: "700" }}
        >
          {titles.categoriesTitle}
        </Typography>
        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: "50px",
            cursor: "pointer",
          }}
        >
          {/* Render CategoryCard components with onClick handler */}
          {filteredCategories.map((category) => (
            <Box onClick={() => navigateToProducts(category)}>
              <CategoryCard key={category} category={category} />
            </Box>
          ))}
        </Box>
      </Stack>
    </Stack>
  );
};

export default HomePage;
