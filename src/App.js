// import "./App.css";
import VideoList from "./component/VideoList";
import { Routes, Route, useNavigate } from "react-router-dom";
import PlaylistPage from "./PlaylistPage";
// import { usePlaylist } from "./context/playlistContext";

function App() {
  // const { playlistKeys } = usePlaylist();
  const navigate = useNavigate();
  return (
    <div className='p-8'>
      <div
        className='text-text1 text-[40px] font-bold pb-4 cursor-pointer'
        onClick={() => {
          navigate("/");
        }}
      >
        Video Player
      </div>
      <Routes>
        <Route path='/' element={<VideoList />} />
        <Route path='/playlist/:id' element={<PlaylistPage />} />
      </Routes>
    </div>
  );
}

export default App;
