import React from "react";
import { usePlaylist } from "../context/playlistContext";

const PlaylistQueue = () => {
  const { playlistVideos } = usePlaylist();
  let playlistkey = localStorage.getItem("playlistkey");
  console.log(playlistVideos[playlistkey], playlistVideos, playlistkey, "cjdc");
  return (
    <div className='w-[400px] border-solid border-2 border-slate-500 rounded-lg p-3 flex flex-col gap-2 items-start justify-center'>
      {playlistVideos[playlistkey].map((video, index) => {
        return (
          <div className='flex gap-1 p-1 hover:bg-slate-300 cursor-pointer'>
            <img
              key={index}
              src={video.thumbnail}
              className=' w-24 h-16 rounded-lg object-cover'
              alt='video-thumbnail'
            />
            <div>
              <div className='text-text1 font-bold'>{video.title}</div>
              <div className='text-text2'>{video.creator}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlaylistQueue;
