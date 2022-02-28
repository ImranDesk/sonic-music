import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
const Player = ({ isPlaying, setIsPlaying, currentSong }) => {
  //ref
  const audioRef = useRef(null);
  //event handlers

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();

      setIsPlaying(!isPlaying);
    }
  };
    const timeUpdateHandler =(e) =>{
      const current = e.target.currentTime;
      
    }
  //state
    const[songInfo, setSongInfo]=useState({
      currentTime:null,
      duration:null,
    })
  return (
    <div className="player">
      <div className="time-control">
        <p>Start time</p>
        <input type="range" />
        <p>End time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon size="2x" className="skip-back" icon={faAngleLeft} />
        <FontAwesomeIcon
          size="2x"
          onClick={playSongHandler}
          className="play"
          icon={faPlay}
        />
        <FontAwesomeIcon
          size="2x"
          className="skip-forward"
          icon={faAngleRight}
        />
      </div>
      <audio onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
};

export default Player;
