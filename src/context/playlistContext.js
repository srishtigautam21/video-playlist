import { useContext, createContext, useState } from "react";
import { videos } from "../data/videos";
const PlaylistContext = createContext({});

const PlaylistProvider = ({ children }) => {
  const [playlistVideos, setPlaylistVideos] = useState(videos);
  let playlistKeys = Object.keys(playlistVideos);
  const [playlistkey, setPlaylistKey] = useState("");
  return (
    <PlaylistContext.Provider
      value={{
        playlistVideos,
        setPlaylistVideos,
        playlistKeys,
        playlistkey,
        setPlaylistKey,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { usePlaylist, PlaylistProvider };
