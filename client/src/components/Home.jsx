import React from "react";
import { Typography } from "@mui/material";

// Home Page
// -Intro Video
// -Photo Slider
// -Club Intro (Description)

const Home = () => {
    return(
        <div className="home">
            <Typography variant="h1" color="primary">
                Home Page
            </Typography>
            <Typography variant="h2" color="secondary">
                Welcome
            </Typography>
        </div>
    )
}

export default Home;