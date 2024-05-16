import React from 'react'
import {Route, Routes, useLocation } from 'react-router-dom'
import Home from './Home'
import DisplayAlbum from './DisplayAlbum'
import { useEffect, useRef } from 'preact/hooks';
import { albumsData } from '../assets/assets';

function Display() {
  const displayRef=useRef();
  const location=useLocation();
  const isAlbum=location.pathname.includes("album");
  const albumId=isAlbum ? location.pathname.slice(-1) : " ";
  const bgCol=albumsData[Number(albumId)].bgColor;


  useEffect(()=>{
    if(isAlbum){
        displayRef.current.style.background=`linear-gradient(${bgCol},#121212)`
    }
    else{
      displayRef.current.style.background=`#121212`
    }
  },[bgCol])

  return (
    <div className='w-[100%] px-6 m-2 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0' ref={displayRef}>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/album/:id' element={<DisplayAlbum/>} />
        </Routes>

    </div>
  )
}

export default Display