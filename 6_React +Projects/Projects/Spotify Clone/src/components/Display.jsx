import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from './Home'

function Display() {
  return (
    <div className='w-[100%] px-6 m-2 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
        <Routes>
            <Route path='/' element={<Home/>} />

        </Routes>

    </div>
  )
}

export default Display