import React from "react";
import { usePlaylist } from "../context/playlistContext";

const PlaylistQueue = () => {
  const { playlistVideos, playlistKey } = usePlaylist();
  return (
    <div className='w-[40%] border-solid border-2 border-slate-500 rounded-lg p-3'>
      {playlistVideos[playlistKey].map((video, index) => {
        return (
          <div>
            <img
              key={index}
              src={video.thumbnail}
              className=' w-12 h-9 rounded-lg'
              alt='video-thumbnail'
            />
          </div>
        );
      })}
    </div>
  );
};

export default PlaylistQueue;
