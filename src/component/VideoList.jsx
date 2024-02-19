import React from "react";
import { usePlaylist } from "../context/playlistContext";
import { PlaylistIcon } from "../assests/allsvg";
import { Link } from "react-router-dom";

const VideoList = () => {
  const { playlistVideos, playlistKeys, setPlaylistKey } = usePlaylist();
  // const navigate = useNavigate();

  // let playlistLength = [];
  // playlistKeys.forEach((play) => {
  //   playlistLength.push(playlistVideos[play].length);
  // });
  console.log(playlistVideos, playlistKeys);
  const handlePlaylist = (playlistKey, id) => {
    setPlaylistKey(playlistKey);
    localStorage.setItem("playlistkey", playlistKey);
    console.log(playlistKey, "key");
    // navigate(`/playlist/${id}`);
  };

  return (
    <div className='flex flex-col gap-[20px] p-4 md:flex md:flex-row md:gap-[20px] md:p-4 '>
      {playlistKeys.map((play, index) => {
        let playlistLength = playlistVideos[play].length;
        let videoList = playlistVideos[play];
        const { _id } = videoList[0];
        return (
          // <>
          //   <div className='rounded-tr-xl rounded-tl-xl bg-slate-500 w-[85%] h-4 flex items-center justify-center'></div>
          <Link
            to={`/playlist/${_id}`}
            state={videoList[0]}
            className='relative cursor-pointer'
            onClick={() => handlePlaylist(play)}
          >
            {/* <div className='rounded-tr-xl rounded-tl-xl bg-slate-500 w-[85%] h-4'></div> */}
            <img
              key={index}
              src={videoList[0].thumbnail}
              className=' w-56 h-40 mobile:w-80 mobile:h-48 rounded-lg mobile:z-50'
              alt='video-thumbnail'
            />
            <div className='bg-slate-800 opacity-50 w-24 mobile:w-28 absolute left-32 mobile:left-52 top-0 z-70 h-[95%] rounded-tr-lg rounded-br-lg flex flex-col gap-2 items-center justify-center'>
              <span className=' text-white'>
                <PlaylistIcon />
              </span>
              {/* {playlistLength.map((length) => ( */}
              <span className='text-white'>{playlistLength} videos</span>
              {/* ))} */}
            </div>
            {/* w-[55%] md:w-[90%] */}
            <div className='rounded-tr-xl rounded-tl-xl hidden sm:w-[50%] tab:w-[45%] md:w-[90%] bg-slate-300  h-2 sm:flex items-center justify-center absolute top-[-9px] left-[13px] z-0 opacity-95'></div>
          </Link>
          // </>
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
