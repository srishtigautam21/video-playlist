import React from "react";
import { useParams, useLocation } from "react-router-dom";

const VideoComponent = () => {
  const { id } = useParams();
  const { state } = useLocation();
  //   const { vide} = state;
  console.log(id, state, state.title);
  return (
    <div className='h-[90vh] w-[70%]'>
      <iframe
        src={`https://www.youtube.com/embed/${id}?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3`}
        className='w-[100%] h-[100%]'
        title={state.title}
        frameBorder='0'
        allowFullScreen
        allow='accelerometer; clipboard-write; encrypted-media; gyroscope'
      ></iframe>
    </div>
  );
};

export default VideoComponent;
