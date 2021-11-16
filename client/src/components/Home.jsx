import React from "react";
import Gallery from "./Gallery"
import { Box, Divider } from "@mui/material";
import Slider from "./Slider"

// Home Page
// -Intro Video
// -Photo Slider
// -Club Intro (Description)

//const cards = [1, 2, 3];

const Home = () => {
  return (
    <Box className="home" alignItems="center">
      <Slider />
      <Divider />
      <br />
      <Gallery isHome={true}/>
    </Box>
  )
}

export default Home;