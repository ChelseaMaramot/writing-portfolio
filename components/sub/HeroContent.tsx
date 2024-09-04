"use client";
import React from 'react'
// @ts-ignore
import Typewriter from 'typewriter-effect';
import { TypeAnimation } from 'react-type-animation';
import { useTypewriter, Cursor } from 'react-simple-typewriter';


const HeroContent = () => {

    const name = 'Roya';

    const [text] = useTypewriter({
        words: [name, 'Writer', 'Poet', 'Storyteller'],
        loop: false,
    });  

  return (
    <div className='h-[100vh] flex flex-col items-center justify-center'>
      <div className='text-7xl text-white flex items-center justify-center'>
        I'm&nbsp;<span style={{ color: '#25EEFA', fontWeight: 'bold' }}>{text}</span><span><Cursor></Cursor></span>
      </div>
      <div className='flex flex-row justify-center mt-6 space-x-3'> 
        <button type="button" className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>Connect with me</button>
        <button type="button" className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>My resume</button>
      </div>
   </div>
  )
}

export default HeroContent


