"use client"

import React, {useState} from 'react';
import WorkCard from '../sub/WorkCard';
import { poems } from '@/data/poemsData';

const Work = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPoem, setSelectedPoem] = useState(null);

  const openModal = (poem) => {
    setSelectedPoem(poem)
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPoem(null);
  }


  return (
    <div id="work" className="grid mx-2 items-center bg-[#03001417 backdrop-blur-md">
      <div className="grid grid-cols-3 gap-3">
        {poems.slice(0,3).map((poem, index) => (
          <div key={index}>
                 <WorkCard src={poem.src} title={poem.title} />
          </div>
        ))
        }
      </div>
      <div className="grid grid-cols-2 gap-3">
        {poems.slice(3).map((poem, index) => (
          <div key={index+3}>
            <WorkCard src={poem.src} title={poem.title} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Work
