import React from "react";
// import { usePlaylist } from "./context/playlistContext";
import PlaylistQueue from "./component/PlaylistQueue";
import VideoComponent from "./component/VideoComponent";

const PlaylistPage = () => {
  //   const { playlistkey } = usePlaylist();

  return (
    <div className='flex flex-col gap-y-6 lg:flex lg:flex-row lg:gap-x-4'>
      <VideoComponent />
      <PlaylistQueue />
    </div>
  );
};

export default PlaylistPage;
