import React, { memo } from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { mensClothing } from "../constants";

const ProductCard = memo(
  ({ product }) => {
    return (
      <Card
        sx={{
          position: "relative",
          width: "400px",
          height: "600px",
          background: "#FFFFFF",
          boxShadow: "10px 15px 20px rgba(0, 0, 0, 0.15)",
          borderRadius: "25px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            position: "absolute",
            top: "20px",
            left: "20px",
            right: "20px",
            fontSize: "22px",
            fontWeight: 700,
          }}
        >
          {product.title}
        </Typography>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            mx: 6,
            mt: "120px",
          }}
        >
          <CardMedia
            component="img"
            height="300px"
            maxWidth="80%"
            maxHeight="100px"
            image={product.image}
            alt={product.title}
          />
        </Box>
        <CardContent
          sx={{
            padding: "20px",
            height: "160px",
            background:
              product.category === mensClothing ? "#2BD9AF" : "#FF5E84",
            borderRadius: "25px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#0E42FD",
              fontWeight: 700,
              fontSize: "22px",
            }}
          >
            Rs {product.price}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 4,
              fontWeight: 500,
              WebkitBoxOrient: "vertical",
            }}
          >
            {product.description}
          </Typography>
        </CardContent>
      </Card>
    );
  },
  (prevProps, nextProps) => prevProps.product.id === nextProps.product.id
);

export default ProductCard;
