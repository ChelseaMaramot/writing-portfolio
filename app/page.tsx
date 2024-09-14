import { Main } from "next/document";
import Image from "next/image";
import Hero from "@/components/main/Hero";
import Work from "@/components/main/Work";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className='flex flex-col'>
        <Hero></Hero>
        <Work></Work>
      </div>
    </main>
  )
}