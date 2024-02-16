import { useContext, createContext, useState } from "react";
import { videos } from "../data/videos";
const PlaylistContext = createContext({});

const PlaylistProvider = ({ children }) => {
  const [playlistVideos, setPlaylistVideos] = useState(videos);
  return (
    <PlaylistContext.Provider value={{ playlistVideos, setPlaylistVideos }}>
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { usePlaylist, PlaylistProvider };
