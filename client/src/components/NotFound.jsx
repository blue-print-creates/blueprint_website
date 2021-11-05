import React from 'react';
import { Typography, Link, Box, Button, Card, CardContent, CardMedia} from "@mui/material";

function NotFound() {
  return (
    <div className="not-found">
      <Box style={{display: "flex", justifyContent: "center" }}>
          <Card style={{width: '400px'}}>
            <CardMedia
              component="img"              
              alt="1"
              image="https://i.pinimg.com/originals/cd/cb/c6/cdcbc63feb921bab19929dc7be37c928.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Looks like you don't belong here go to your
                <Link to="/">
                  <Button>
                      <Typography variant="body2" color="primary">
                        Home
                      </Typography>
                  </Button>
                </Link>
              </Typography>
            </CardContent>
          </Card>
      </Box>
    </div>
  )
}

export default NotFound;
