import { useState } from "react";

import "./styles/app.scss";
import "./App.css";
import Song from "./components/song";
import Player from "./components/player";
import ChillHop from "./components/util";
import Library from "./components/library";
function App() {
  //state
  const [songs, setSongs] = useState(ChillHop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs} />
    </div>
  );
}

export default App;
