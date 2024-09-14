import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417 backdrop-blur-md z-50 sm:px-5 md:px-10]'>

        <div className='w-full h-full flex flex-row items-center justify-between px-[60px]'>
            
            <div className='float-left text-gray-200 text-base md:text-lg lg:text-xl tracking-[0.3em]'>
                <Link href="/" className='cursor-pointer'>ROYA MOTAZEDIAN</Link>
            </div>
        
            <div className='flex flex-row text-[13px] sm:text-[10px] lg:text-lg gap-10 float-right border-[#7042f861] rounded-full text-gray-200'>
                <Link href="/#work" className='cursor-pointer'>Work</Link>
                <Link href="/about" className='cursor-pointer'>About</Link>
            </div>
        </div>


    </div>
  )
}
export default Navbar
