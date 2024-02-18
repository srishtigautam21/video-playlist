import { useContext, createContext, useState } from "react";
import { videos } from "../data/videos";
const PlaylistContext = createContext({});

const PlaylistProvider = ({ children }) => {
  const [playlistVideos, setPlaylistVideos] = useState(videos);
  let playlistKeys = Object.keys(playlistVideos);
  const [playlistkey, setPlaylistKey] = useState("");
  // const [playlistArr, setPlaylistArr] = useState([]);
  const shufflePlaylist = (playlistArr) => {
    for (let i = playlistArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [playlistArr[i], playlistArr[j]] = [playlistArr[j], playlistArr[i]];
    }
    console.log(playlistArr);
    // setPlaylistArr(playlistArr);
    return playlistArr;
  };
  return (
    <PlaylistContext.Provider
      value={{
        playlistVideos,
        setPlaylistVideos,
        playlistKeys,
        playlistkey,
        setPlaylistKey,
        shufflePlaylist,
        // playlistArr,
        // setPlaylistArr,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { usePlaylist, PlaylistProvider };
