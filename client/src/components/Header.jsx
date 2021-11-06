import React from "react";
import { AppBar, Toolbar, Box, useTheme, useMediaQuery } from "@mui/material";

import logo from "../assets/images/blueprint-logo.png";

import Navigation from "./Navigation";

const Header = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <AppBar position="fixed" color="inherit">
        <Toolbar variant="regular" sx={{ height: "15vh" }}>
          <Box>
            <img src={logo} alt="Logo" height={isSmall ? "40px" : "60px"} />
          </Box>
          <Box sx={{ flexGrow: 0.9 }}></Box>
          <Navigation />
        </Toolbar>
      </AppBar>
      <Box height="15vh"></Box>
    </>
  )
}

export default Header;