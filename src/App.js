import "./App.css";
import VideoList from "./component/VideoList";
import { Routes, Route } from "react-router-dom";
import PlaylistPage from "./PlaylistPage";
// import { usePlaylist } from "./context/playlistContext";

function App() {
  // const { playlistKeys } = usePlaylist();
  return (
    <div className='p-8'>
      <div className='text-text1 text-[40px] font-bold'>Video Player</div>
      <Routes>
        <Route path='/' element={<VideoList />} />
        <Route path='/playlist/:id' element={<PlaylistPage />} />
      </Routes>
    </div>
  );
}

export default App;
