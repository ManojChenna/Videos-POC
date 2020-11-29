import React, { useEffect } from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ items }) => {
  console.log(items);
  const renderedItems = items.map((item) => {
    return <VideoItem key={item.id} video={item.contentDetails} />;
  });

  return <div className="ui stackable five column grid">{renderedItems}</div>;
};

export default VideoList;
