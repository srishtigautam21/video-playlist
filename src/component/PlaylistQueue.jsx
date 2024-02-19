import React, { useState, useEffect } from "react";
import { usePlaylist } from "../context/playlistContext";
import { Link } from "react-router-dom";
import { ShuffleIcon } from "../assests/allsvg";

const PlaylistQueue = () => {
  const {
    playlistVideos,
    shufflePlaylist,
    playlistArr,
    setPlaylistArr,
    selected,
    setSelected,
    // playlistkey,
  } = usePlaylist();

  let playlistkey = localStorage.getItem("playlistkey");

  // const [playlistArr, setPlaylistArr] = useState(playlistVideos[playlistkey]);
  // // const [selected, setSelected] = useState(playlistVideos[playlistkey][0]._id);
  // const [selected, setSelected] = useState(playlistArr[0]._id);

  // let shuffledPlaylist = playlistVideos[playlistkey];
  useEffect(() => {
    setPlaylistArr(playlistVideos[playlistkey]);
    setSelected(playlistVideos[playlistkey][0]._id);
  }, []);
  let shuffledPlaylist = [];
  const handleShuffle = () => {
    shuffledPlaylist = shufflePlaylist(playlistArr);
    console.log("here", shuffledPlaylist);
  };
  if (shuffledPlaylist.length === 0) {
    shuffledPlaylist = [...playlistArr];
  }
  // }, [playlistArr]);

  console.log(
    playlistArr,
    playlistVideos,
    playlistkey,
    "cjdc",
    shuffledPlaylist
  );
  return (
    // w-[400px]
    <div className='w-[100%] lg:w-[30%] border-solid border-2 border-slate-500 rounded-lg p-3 flex flex-col gap-2 items-start justify-center lg:justify-start'>
      <div className='flex items-center justify-between w-[100%]'>
        <div className='text-text2 font-bold text-[22px]'>{playlistkey}</div>
        <div className='cursor-pointer pr-5' onClick={() => handleShuffle()}>
          <ShuffleIcon />
        </div>
      </div>
      {/* playlistArr */}
      {shuffledPlaylist?.map((video, index) => {
        return (
          <Link
            to={`/playlist/${video._id}`}
            state={video}
            className='flex gap-1 p-1 hover:bg-slate-200 w-[95%] cursor-pointer xl:gap-2 xl:p-2'
            style={{
              backgroundColor: selected === video._id ? "lightgrey" : "",
            }}
            onClick={() => setSelected(video._id)}
          >
            <img
              key={index}
              src={video.thumbnail}
              className=' w-24 h-16 rounded-lg object-cover xl:w-[136px] xl:h-24'
              alt='video-thumbnail'
            />
            <div className='xl:flex flex-col justify-between'>
              <div className='text-text1 font-bold xl:text-[22px]'>
                {video.title}
              </div>
              <div className='text-text2 xl:text-[20px] xl:font-semibold'>
                {video.creator}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PlaylistQueue;
