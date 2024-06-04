import { Card, Typography } from "@mui/material";
import React from "react";
import { mensClothing } from "../constants";

const capitalizeFirstLetter = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const CategoryCard = ({ category }) => {
  const capitalizedCategory = capitalizeFirstLetter(category);

  return (
    <>
      <Card
        sx={{
          position: "relative",
          width: "850px",
          height: "400px",
          borderRadius: "25px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: category === mensClothing ? "#2BD9AF" : "#FF5E84",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: "32px",
            fontWeight: 700,
            textAlign: "center",
            color: "#FFFFFF",
          }}
        >
          {capitalizedCategory}
        </Typography>
      </Card>
    </>
  );
};

export default CategoryCard;
