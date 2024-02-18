import React from "react";
import { useParams, useLocation } from "react-router-dom";

const VideoComponent = () => {
  const { id } = useParams();
  const { state } = useLocation();
  //   const { vide} = state;
  console.log(id, state, state.title);
  return (
    <div className='p-2 h-[50vh] w-[100%] md:h-[90vh] lg:h-[90vh] lg:w-[70%] flex flex-col gap-2'>
      {/* className='h-[50vh] w-[100%] md:h-[90vh] lg:h-[90vh] lg:w-[70%] ' */}
      <div>
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=0&modestbranding=1&rel=0&iv_load_policy=3`}
          // className='w-[100%] h-[100%]
          className='h-[50vh] w-[100%] md:h-[90vh] lg:h-[90vh] lg:w-[100%] '
          // lg:w-[100%] lg:h-[50vh]
          title={state.title}
          allowFullScreen
          allow='accelerometer; clipboard-write; encrypted-media; gyroscope'
        ></iframe>
      </div>
      <div className='hidden lg:flex lg:flex-col lg:gap-2'>
        <div className='flex items-center justify-between text-text1 font-bold text-[25px]'>
          <div>{state.title}</div>
          <div>{state.views} views</div>
        </div>
        <div className='flex items-center gap-1'>
          <img
            src={state.creatorDp}
            className='w-[50px] h-[50px] rounded-[50%]'
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

export default VideoComponent;
