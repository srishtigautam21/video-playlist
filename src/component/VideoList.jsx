import React from "react";
import { usePlaylist } from "../context/playlistContext";
import { PlaylistIcon } from "../assests/allsvg";
import { useNavigate } from "react-router-dom";

const VideoList = () => {
  const { playlistVideos, playlistKeys, setPlaylistKey } = usePlaylist();
  const navigate = useNavigate();

  // let playlistLength = [];
  // playlistKeys.forEach((play) => {
  //   playlistLength.push(playlistVideos[play].length);
  // });
  console.log(playlistVideos, playlistKeys);
  const handlePlaylist = (playlistKey) => {
    setPlaylistKey(playlistKey);
    navigate("/playlist");
  };

  return (
    <div className='flex gap-[20px] p-4 '>
      {playlistKeys.map((play, index) => {
        let playlistLength = playlistVideos[play].length;
        let videoList = playlistVideos[play];
        return (
          <div
            className='relative cursor-pointer'
            onClick={() => handlePlaylist(play)}
          >
            <img
              key={index}
              src={videoList[0].thumbnail}
              className=' w-80 h-48 rounded-lg'
              alt='video-thumbnail'
            />
            <div className='bg-slate-800 opacity-50 w-28 absolute left-52 top-0 z-50 h-[95%] rounded-tr-lg rounded-br-lg flex flex-col gap-2 items-center justify-center'>
              <span className=' text-white'>
                <PlaylistIcon />
              </span>
              {/* {playlistLength.map((length) => ( */}
              <span className='text-white'>{playlistLength} videos</span>
              {/* ))} */}
            </div>
          </div>
        );
      })}
      {/* <div className='bg-slate-800 opacity-50 w-28 absolute left-56 top-4 z-50 h-[85%] rounded-tr-lg rounded-br-lg flex flex-col gap-2 items-center justify-center'>
        <span className=' text-white'>
          <PlaylistIcon />
        </span>
        {playlistLength.map((length) => (
          <span className='text-white'>{length} videos</span>
        ))}
      </div> */}
    </div>
  );
};

export default VideoList;
