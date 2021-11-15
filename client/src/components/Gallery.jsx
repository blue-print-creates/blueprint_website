import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardActionArea, CardContent, Grid} from "@mui/material";
import youtubeApi from '../api/youtube.js';

const Gallery = ({isHome}) => {
  const [videoIDArray, setVideoIDArray] = useState([
    {
      videoId: "",
      title: "",
      description: "",
    }
  ]);

  useEffect(() => {
    const getVideos = async keyword => {
      const response = await youtubeApi.get();
      // console.log(response?.data?.items?.length);
      let videoArray = [];
      // eslint-disable-next-line array-callback-return
      response?.data?.items.slice(0, isHome ? 3 : response?.data?.items?.length).map((video, index) => {
        videoArray.push({
          videoId: video?.contentDetails?.videoId,
          title: video?.snippet?.title,
          description: video?.snippet?.description,
        })
      })
      setVideoIDArray(videoArray); 
    };
    getVideos();
  })
  

  return (
      <Box className="gallery" alignItems="center">
        <Grid style={{marginLeft: "-16px"}} container spacing={4} xs={12}>
          {videoIDArray.map(({videoId, title, description}) => (
            <Grid item key={videoId} xs={12} sm={6} md={4}>
              <Card>
                <CardActionArea >
                    
                      <iframe
                        id={videoId}
                        width="100%"
                        height="250" 
                        src={"https://www.youtube-nocookie.com/embed/" + videoId} 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        >
                      </iframe>
                  
                  <CardContent >
                      <Typography 
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis"
                        }}
                        variant="h6"
                        component="div"
                      >
                      {title}
                      </Typography>
                        <Typography 
                          style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                          }}
                          variant="body2" 
                          color="text.secondary"
                        >
                        {description}
                      </Typography>
                  </CardContent>
                  
                </CardActionArea>
              </Card>
            </Grid>
          ))}
          </Grid>
        </Box>
  )
}

export default Gallery;

