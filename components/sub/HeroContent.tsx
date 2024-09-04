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
   <div className='text-6xl text-white flex items-center justify-center h-[100vh]'>
    I'm&nbsp;<span style={{ color: '#25EEFA', fontWeight: 'bold' }}>{text}</span><span><Cursor></Cursor></span>
   </div>
  )
}

export default HeroContent


