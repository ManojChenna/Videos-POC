import React, { useEffect, useState } from "react";
import VideoList from "./components/VideoList";
import Youtube from "./apis/Youtube";

export default function App() {
  const [videoItems, setVideoItems] = useState([]);
  useEffect(() => {
    const apicall = async () => {
      const { data } = await Youtube.get("/playlistItems", {
        params: {
          part: "contentDetails",
          playlistId: "PLgVMn8k8t5JOBBxAquyWcaFvonpH2ZcuI"
        }
      });
      setVideoItems(data.items);
    };
    apicall();
  }, []);
  return (
    <div>
      <div class="ui secondary  menu">
        <a class="active item">Home</a>
        <a class="item">Content</a>
        <a class="item">About US</a>
      </div>
      <VideoList items={videoItems} />
    </div>
  );
}
