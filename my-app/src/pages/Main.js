import React from 'react'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Front from '../components/Front'

const Main = () => {
  return (
    <>
    <Navbar/>
    <Front/>
    <div className='bg-dark  w-100 h-100 d-flex'>
      <div className='w-50'>
      <video class="w-100  p-3h-100" controls>
        <source src="#plyr-play" type="video/mp4"/>
        Your browser does not support the video tag.
    </video>
      </div>
      <div className='w-50'>
   <h1 className='text-white fw-bold fs-3 p-5'>"A brief Quotestatement from Code IT's founder and CEO."</h1>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Main