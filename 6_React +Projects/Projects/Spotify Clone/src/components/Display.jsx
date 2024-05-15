import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from './Home'
import DisplayAlbum from './DisplayAlbum'

function Display() {
  return (
    <div className='w-[100%] px-6 m-2 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/album/:id' element={<DisplayAlbum/>} />
        </Routes>

    </div>
  )
}

export default Display