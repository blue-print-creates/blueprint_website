import React from "react";
import { AppBar, Toolbar, ButtonGroup, Button, Box } from "@mui/material";

import logo from "../assets/images/IMG_20211014_172013_181-removebg-preview.png";

import Navigation from "./Navigation";

const Header = () => {
  return (
    <AppBar position="static" color="inherit" gutterBottom>
      <Toolbar variant="regular">
        <img src={logo} alt="Logo" height="100px" />
        <Box sx={{ flexGrow: 0.9 }}></Box>
        <Navigation />
      </Toolbar>
    </AppBar>
  )
}

export default Header;