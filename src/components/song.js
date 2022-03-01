import React from "react";

function Song({ currentSong }) {
  return (
    <div>
      <div className="song-container">
        <img alt={currentSong.name} src={currentSong.cover}></img>
        <h2>{currentSong.name}</h2>
        <h3>{currentSong.artist}</h3>
      </div>
    </div>
  );
}

export default Song;
