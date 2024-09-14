import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


const Footer = () => {
    const email = "roya9mota@gmail.com";
  return (
    <div id="footer" className='relative h-full w-full my-10 pt-2 z-25'>
        <div className='flex flex-col items-center align-items-center text-white'>
            <Link href="https://www.instagram.com/milkdippedsky/" target="_blank">
                <Image
                        src="/icons/instagram.png"
                        alt="Instagram"
                        width={30}
                        height={30}
                        className="mx-2 cursor-pointe filter invert"
                ></Image>
            </Link>
        <a href={`mailto:${email}`} className='my-2 hover:underline'>{email}</a>
        <div className=''>@2024 by Roya Motazedian</div>
        </div>
    </div>
  )
}

export default Footer
