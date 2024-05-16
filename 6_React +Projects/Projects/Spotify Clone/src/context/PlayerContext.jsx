import { createContext } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import { songsData } from "../assets/assets";

export const PlayerContext=createContext();
const PlayerContextProvider=(props)=>{
    const audioRef=useRef();
    const seekBg=useRef();
    const seekBar=useRef();

    const setVolumn=useRef(); //used to chaneg bg of volumn and control
    const setVolumnBg=useRef();
    
    
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
    
    //So we can play any song ny there id
    const playWithId= async (id)=>{
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setPlayStatus(true);
    }

    //song previous and next function
    const previous=async ()=>{
         if(track.id >0){
            await setTrack(songsData[track.id-1]);
            await audioRef.current.play()
            setPlayStatus(true);
         }
    }

    const next=async ()=>{
        if(track.id < songsData.length -1){
           await setTrack(songsData[track.id+1]);
           await audioRef.current.play()
           setPlayStatus(true);
        }
   }
   //handel seekSong function 
   const seekSong=async (e)=>{
           audioRef.current.currentTime=(e.nativeEvent.offsetX /seekBg.current.offsetWidth )*audioRef.current.duration
   }

   //handel Volumn control function 
   const seekVolumn = (e) => {
    const newVolume = Math.floor((e.nativeEvent.offsetX / setVolumnBg.current.offsetWidth) * 100);

    setVolumn.current.style.width=newVolume +"%";
     audioRef.current.volume=newVolume/100;
    
  };

  //Handel volume by scrolling
  const scrollVolume=async(e)=>{
    console.log(e);
  }
  

    
   useEffect(()=>{
    setTimeout(()=>{
        audioRef.current.ontimeupdate=() =>{
            seekBar.current.style.width=(Math.floor(audioRef.current.currentTime /audioRef.current.duration *100)) + "%";
            if(audioRef.current.currentTime ===audioRef.current.duration ){
                     const randomTrack=(Math.floor(Math.random()*8))+1
                    setTrack(songsData[randomTrack]);
                     audioRef.current.play()
                    setPlayStatus(true);
                    audioRef.current.autoplay=true;
            }
            setTime({
                curTime:{
                    sec:Math.floor(audioRef.current.currentTime % 60 ),
                    min:Math.floor(audioRef.current.currentTime / 60 )
                },
                totTime:{
                    sec:Math.floor(audioRef.current.duration % 60 ),
                    min:Math.floor(audioRef.current.duration / 60 )
                }
            })
        }
      
    },1000);
   },[audioRef])

    const contextValue={
        audioRef,seekBar,seekBg,setVolumn,setVolumnBg,
        track,setTrack,
        playStatus,setPlayStatus,
        time,setTime,
        play,pause,
        playWithId,
        previous,next,
        seekSong,
        seekVolumn,
        scrollVolume
    }
    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}
export default PlayerContextProvider