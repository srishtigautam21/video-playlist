import React from "react";
// import { usePlaylist } from "./context/playlistContext";
import PlaylistQueue from "./component/PlaylistQueue";
import VideoComponent from "./component/VideoComponent";
import { useLocation } from "react-router-dom";

const PlaylistPage = () => {
  const { state } = useLocation();
  console.log(state);
  //   const { playlistkey } = usePlaylist();

  return (
    <div className='flex flex-col gap-y-6 lg:flex lg:flex-row lg:gap-x-4 '>
      <VideoComponent />
      <PlaylistQueue />
      <div className='lg:hidden'>
        <div className='flex flex-col text-[20px]  text-text1 font-bold sm:flex sm:flex-row sm:justify-between sm:text-[25px]'>
          <div>{state.title}</div>
          <div>{state.views} views</div>
        </div>
        <div className='flex items-center gap-1'>
          <img
            src={state.creatorDp}
            className='w-[50px] h-[50px] rounded-[50%]'
            alt='creatorDp'
          />
          <div className='text-text2 font-semibold'>{state.creator}</div>
        </div>
        <div className='lg:w-[95%]  lg:text-text1 lg:font-semibold mb-4'>
          {state.description}
        </div>
      </div>
    </div>
  );
};

export default PlaylistPage;
