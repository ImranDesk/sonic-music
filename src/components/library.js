import React from "react";
import LibrarySong from "./librarySong";

const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div songs={songs} className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            setSongs={setSongs}
            audioRef={audioRef}
            id={song.id}
            key={song.id}
            setCurrentSong={setCurrentSong}
            song={song}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
