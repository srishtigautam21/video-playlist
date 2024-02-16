import React from "react";
import { usePlaylist } from "../context/playlistContext";
import { PlaylistIcon } from "../assests/allsvg";

const VideoList = () => {
  const { playlistVideos } = usePlaylist();
  let playlistKeys = Object.keys(playlistVideos);
  let playlistLength = 0;
  playlistKeys.forEach((play) => {
    playlistLength = playlistVideos[play].length;
  });
  console.log(playlistVideos, playlistLength);
  return (
    <div className='flex gap-[20px] p-4 relative'>
      {playlistKeys.map((play, index) => {
        let videoList = playlistVideos[play];
        return (
          <img
            key={index}
            src={videoList[0].thumbnail}
            className=' w-80 h-48 rounded-lg'
            alt='video-thumbnail'
          />
        );
      })}
      <div className='bg-slate-800 opacity-50 w-28 absolute left-56 top-4 z-50 h-[85%] rounded-tr-lg rounded-br-lg'>
        <span className='text-white flex items-center justify-center h-[100%]'>
          {playlistLength}
        </span>
        <PlaylistIcon />
      </div>
    </div>
  );
};

export default VideoList;
