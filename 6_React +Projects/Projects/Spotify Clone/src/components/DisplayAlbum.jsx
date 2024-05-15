import React from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom'
import { albumsData, assets,songsData } from '../assets/assets';

function DisplayAlbum() {
    let {id}=useParams();
    let albumData=albumsData[id];
  return (
    <>
    <NavBar/>
    <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
        <img className='w-48 rounded-md' src={albumData.image} alt="" />
        <div className='felx flex-col'>
            <p className='font-bold'>Playlist</p>
            <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
            <h4 className='font-semibold'>{albumData.desc}</h4>
            <p className='mt-1 flex gap-3'>
                <img className='inline-block w-8 cursor-pointer' src={assets.spotify_logo} alt="" />
                <b className='cursor-pointer'>Spotify</b>
                1,326,589 Likes 
                <b>50 songs</b>
                About 2hr 25 min
            </p>

        </div>
    </div>

    <div className='grid grid-cols-3 sm:grid-cols-4 mt-4 pl-2 text-[#a7a7a7] mb-3'>
        <p> <b className='mr-4'>#</b>Title </p>
        <p>Album</p>
        <p className='hidden sm:block'>Date Added</p>
        <img className='m-auto w-4' src={assets.clock_icon} alt="" />
    </div>
    <hr className='mb-4'/>
    {
        songsData.map((item,index)=>(
            <div className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer' key={index}>
                <p className='text-white'>
                    <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                    <img className='inline w-10 mr-5' src={item.image} alt="" />
                    {item.name}
                </p>
                <p className='text-[15px]'>{albumData.name}</p>
                <p className='text-[15px] hidden sm:block'>{Math.floor(Math.random()*29)+1} days ago</p>
                <p className='text-[15px] text-center'>{item.duration}</p>
            </div>

        ))
    }

    </>
  )
}

export default DisplayAlbum