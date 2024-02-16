import React from "react";
// import { usePlaylist } from "./context/playlistContext";
import PlaylistQueue from "./component/PlaylistQueue";

const PlaylistPage = () => {
  //   const { playlistkey } = usePlaylist();

  return (
    <div className='flex gap-4'>
      {/* <VideoComponent /> */}
      <PlaylistQueue />
    </div>
  );
};

export default PlaylistPage;
