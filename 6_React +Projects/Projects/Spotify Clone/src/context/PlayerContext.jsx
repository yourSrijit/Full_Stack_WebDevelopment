import { createContext } from "preact";
import { useRef, useState } from "preact/hooks";
import { songsData } from "../assets/assets";

export const PlayerContext=createContext();
const PlayerContextProvider=(props)=>{
    const audioRef=useRef();
    const seekBg=useRef();
    const seekBar=useRef();
    
    const[track,setTrack]=useState(songsData[5]);
    const [playStatus,setPlayStatus]=useState(false);
    const[time,setTime]=useState({
        curTime:{
            sec:0,
            min:0
        },
        totTime:{
            sec:0,
            min:0
        }
    })

    const play=()=>{
        audioRef.current.play();
        setPlayStatus(true);
    }
    const pause=()=>{
        audioRef.current.pause();
        setPlayStatus(false);
    }

    const contextValue={
        audioRef,seekBar,seekBg,
        track,setTrack,
        playStatus,setPlayStatus,
        time,setTime,
        play,pause
    }
    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}
export default PlayerContextProvider