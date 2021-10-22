import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";

import logo from "../assets/images/IMG_20211014_172013_181-removebg-preview.png";

import Navigation from "./Navigation";

const Header = () => {
  return (
    <>
    <AppBar position="absolute" color="inherit" gutterBottom>
      <Toolbar variant="regular" sx={{ height: "15vh" }}>
        <Box>
        <img src={logo} alt="Logo" height="60px" />
        </Box>
        <Box sx={{ flexGrow: 0.8 }}></Box>
        <Navigation />
      </Toolbar>
    </AppBar>
    <Box height="15vh"></Box>
    </>
  )
}

export default Header;