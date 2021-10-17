import React from "react";
import { Typography, Card, CardActionArea, CardContent, CardMedia, Grid, Container, Button} from "@mui/material";
import Slider from "./Slider"
const cards = [1, 2, 3];
// Home Page
// -Intro Video
// -Photo Slider
// -Club Intro (Description)

const Home = () => {
    return(
        <div className="home">
            <Container maxWidth="lg" style={{marginTop:'100px'}}>
                <Container maxWidth="lg" style={{border: "25px solid orange", marginBottom: "40px"}}>
                    <Slider/>
                </Container>

                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="240"
                                image="https://source.unsplash.com/1280x720/?lamborghini'"
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