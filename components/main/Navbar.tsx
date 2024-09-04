import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417 backdrop-blur-md z-50 px-10]'>

        <div className='w-full h-full flex flex-row items-center justify-between px-[60px]'>
            
            <div className='float-left text-gray-200 text-xl tracking-[0.3em] '>
                <a>ROYA MOTAZEDIAN</a>
            </div>
        
            <div className='flex flex-row gap-10 float-right border-[#7042f861] rounded-full text-gray-200'>
                <a href="#Work" className='cursor-pointer'>Work</a>
                <a href="#About" className='cursor-pointer'>About</a>
            </div>
        </div>


    </div>
  )
}

export default Navbar
