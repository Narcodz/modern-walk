import React from "react";
import Header from "./Header";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box textAlign="center">
      <Header />
      <Box mt={5} display="inline-block">
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
