import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { titles } from "../constants";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          justifyContent: "center",
          backgroundColor: "#F5F5F5",
          color: "#0E0E0E",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "50px",
              fontWeight: "700",
              cursor: "pointer",
              padding: "15px",
            }}
          >
            {titles.appTitle}
          </Typography>
        </Link>
        {/* Add other header elements like navigation links here */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
