import React from "react";
import { Typography, Card, CardActionArea, CardContent, CardMedia, Grid, Container } from "@mui/material";
import Slider from "./Slider"
const cards = [1, 2, 3];
// Home Page
// -Intro Video
// -Photo Slider
// -Club Intro (Description)

const Home = () => {
  return (
    <div className="home">
      <div style={{ marginTop: '5px' }}>
        <div style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", marginBottom: "20px" }}>
          <Slider/>
        </div>
      </div>

      <Container>
        <Grid container spacing={2}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345, boxShadow: " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="240"
                    image="https://images.unsplash.com/photo-1561518776-e76a5e48f731?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8MjkzNzQ3ODB8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60"
                    alt="Cars"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Cars
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      The first production car with a recorded speed was the 1894 Benz Velo that had a top speed of just 12 mph.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default Home;