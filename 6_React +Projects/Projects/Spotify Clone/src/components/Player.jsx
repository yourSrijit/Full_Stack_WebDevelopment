import React from 'react'

import { assets } from '../assets/assets'
import { useContext, useState,useEffect } from 'preact/hooks'
import { PlayerContext } from '../context/PlayerContext'
import { FiVolumeX ,FiVolume,FiVolume1 ,FiVolume2} from "react-icons/fi"; 


function Player() {
  const{seekBg,
    seekBar,
    playStatus,
    play,
    pause,
    track,
    time,
    previous,
    next,
    seekSong,
    setVolumn,seekVolumn,setVolumnBg,audioRef,vol,setVol}=useContext(PlayerContext);
    
    const del=()=>{  //nothing just experimental purpose
        console.log("Hi srijit");
    }

  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12 rounded-sm' src={track.image} alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0,12)}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-4 items-center'>
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
          <img onClick={()=>{previous()}} className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
          
          {playStatus ?
           <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" /> :
           <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
          }
         

          <img onClick={()=>{next()}} className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
          <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
        </div>

      <div className='flex items-center gap-5'> 
      <p>{time.curTime.min}:{time.curTime.sec}</p>
      <div onClick={seekSong} ref={seekBg} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
             <hr ref={seekBar} className='h-1 border-none w-10 bg-green-600 rounded-full'/>                                 
      </div>
      {
        !time.totTime.min == 0 && <p>{time.totTime.min}:{time.totTime.sec}</p>
      }
      
      </div>
      </div>
       
       <div className='hidden lg:flex items-center gap-2 opacity-75'>
        <img className='w-4' src={assets.plays_icon} alt="" />
        <img className='w-4' src={assets.mic_icon} alt="" />
        <img className='w-4' src={assets.queue_icon} alt="" />
        <img className='w-4' src={assets.speaker_icon} alt="" />     
      
        {/* Dynamic Volume   */}
      <div onClick={()=>{
          if(vol!=0){
            audioRef.current.volume=0;
            setVol(0);
          }
          else{
            audioRef.current.volume=0.5;
            setVol(.5);
          }
        }}>
        {
          vol==0 ? <FiVolumeX /> : (vol <.3 ? <FiVolume /> : (vol<.55 ? <FiVolume1/> : <FiVolume2 />))
        }
      </div>
        

        <div ref={setVolumnBg} onClick={seekVolumn} onScroll={del} className='w-20 bg-gray-300 rounded-md overflow-y-auto h-100  cursor-pointer' >
         <div ref={setVolumn}  className='w-10  h-1 rounded bg-green-600 '></div>
        </div>
        
        <img className='w-4' src={assets.mini_player_icon} alt="" />
        <img className='w-4' src={assets.zoom_icon} alt="" />

       </div>


    </div>
  )
}

export default Player