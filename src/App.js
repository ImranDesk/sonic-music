import { useState, useRef } from "react";

import "./styles/app.scss";
import "./App.css";
import Song from "./components/song";
import Player from "./components/player";
import ChillHop from "./components/util";
import Library from "./components/library";
function App() {
  //ref
  const audioRef = useRef(null);
  //state
  const [songs, setSongs] = useState(ChillHop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  //state
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration: duration });
  };

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library
      setSongs={setSongs}
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
      />
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
