import React, { useEffect, useState } from "react";
import youtubeApi from '../api/youtube.js';

const Gallery = () => {
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
      let videoArray = [];
      response?.data?.items.map((video, index) => {
        videoArray.push({
          videoId: video?.contentDetails?.videoId,
          title: video?.snippet?.title,
          description: video?.snippet?.description,
        })
      })
      setVideoIDArray(videoArray);
    };
    getVideos();
  }, [])
  

  return (
    <div className="gallery">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/NF92Wqefgv8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      {videoIDArray.map(({videoId, title, description}) => (
        <iframe id={videoId} width="560" height="315" src={"https://www.youtube.com/embed/" + videoId} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      ))}
    </div>
  )
}

export default Gallery;