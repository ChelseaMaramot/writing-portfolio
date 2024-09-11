import React from 'react'
import Image from 'next/image';

const Page = () => {

  const email = "roya9mota@gmail.com";

  return (
   <div className='flex flex-row h-screen w-full px-[60px] items-center justify-center'>
    <Image src='/roya_milk.png' alt="Roya" width={500} height={500} className="object-cover"></Image>
    <div className='flex items-center justify-center -ml-32 max-w-md min-w-[300px]'>
      <p className='text-white  text-xl'>
        Hi!
        <br /><br />
        My name is Roya and I am a freelance writer based in Canada. I am currently taking my masters
        in English at McMaster University.
        <br /><br />
        Feel free to contact me on:
        <a href={`mailto:${email}`} className='text-[#25EEFA] hover:underline'> {email} </a>
        or follow me on 
        <a href="https://www.instagram.com/milkdippedsky/" className='text-[#25EEFA] hover:underline'> Instagram</a>.
      </p>
    </div>
    
   </div>
  )
}

export default Page
