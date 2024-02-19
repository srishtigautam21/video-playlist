import { useContext, createContext, useState } from "react";
import { videos } from "../data/videos";
const PlaylistContext = createContext({});

const PlaylistProvider = ({ children }) => {
  const [playlistVideos, setPlaylistVideos] = useState(videos);
  let playlistKeys = Object.keys(playlistVideos);
  const [playlistkeys, setPlaylistKey] = useState("");

  let playlistkey = localStorage.getItem("playlistkey");
  // console.log("in context key", playlistkey);
  const [playlistArr, setPlaylistArr] = useState(playlistVideos[playlistkey]);

  const [selected, setSelected] = useState(playlistArr[0]._id);
  console.log(selected, "selected");

  const shufflePlaylist = (playlistArr) => {
    const tempPlaylistArr = [...playlistArr];
    for (let i = tempPlaylistArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tempPlaylistArr[i], tempPlaylistArr[j]] = [
        tempPlaylistArr[j],
        tempPlaylistArr[i],
      ];
    }
    console.log(tempPlaylistArr);
    setPlaylistArr(tempPlaylistArr);
    return tempPlaylistArr;
  };
  return (
    <PlaylistContext.Provider
      value={{
        playlistVideos,
        setPlaylistVideos,
        playlistKeys,
        playlistkeys,
        setPlaylistKey,
        shufflePlaylist,
        playlistArr,
        setPlaylistArr,
        selected,
        setSelected,
        playlistkey,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { usePlaylist, PlaylistProvider };
