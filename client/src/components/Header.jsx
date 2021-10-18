import React from "react";
import { AppBar, Toolbar, ButtonGroup, Button, Box } from "@mui/material";

import logo from "../assets/images/blueprint-logo.png";

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