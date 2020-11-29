import React from "react";

const VideoItem = ({ video }) => {
  const videoSrc = `https://www.youtube.com/embed/${video.videoId}`;
  return (
    <div key={video.videoId} className="column">
      <div className="ui embed segment">
        <iframe title="video player" src={videoSrc} />
      </div>
    </div>
  );
};

export default VideoItem;
