import React from 'react'
import Image from 'next/image';

const Page = () => {

  const email = "roya9mota@gmail.com";

  return (
   <div className='flex flex-col md:flex-row h-screen w-full items-center justify-center'>
    <div className='flex items-center justify-center mx-3'>
      <Image src='/roya_milk.png' alt="Roya" width={200} height={200} className="object-cover"></Image>
    </div>
    <div className='flex items-center justify-center max-w-md min-w-[300px]'>
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
