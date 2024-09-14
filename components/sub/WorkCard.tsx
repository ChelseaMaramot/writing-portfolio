import React from 'react'
import Image from 'next/image';


interface Props {
  src: string;
  title: string;
}

const WorkCard = ({ src, title }: Props) => {
  return (
    <div className="relative m-1 w-full h-48 md:h-64 lg:h-80 flex justify-center border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        layout="fill"  
        objectFit="cover" 
        className="w-full h-full"
      />
      <a className="group absolute w-full h-full top-0 left-0  bg-[#030014] opacity-50 z-10 duration-300  hover:opacity-100 hover:bg-[#25EEFA] flex items-center justify-center">
        <div className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100">{title}</div>
      </a>
      
    </div>
  )
}

export default WorkCard
