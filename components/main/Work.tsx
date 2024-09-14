"use client"

import React, {useState} from 'react';
import WorkCard from '../sub/WorkCard';
import { poems } from '@/data/poemsData';
import WorkModal from '../sub/WorkModal';
import { select } from '@nextui-org/react';

interface Poem {
  src: string;
  title: string;
  content: string;
}

const Work = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPoem, setSelectedPoem] = useState<Poem | null>(null);

  const openModal = (poem: Poem) => {
    setSelectedPoem(poem)
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPoem(null);
  }

  return (
    <div id="work" className="grid mx-2 items-center bg-[#03001417 backdrop-blur-md ">
      <div id="work-offset" className="h-[90px]"></div>
      <div className="grid grid-cols-3 gap-3">
        {poems.slice(0,3).map((poem, index) => (
          <div key={index} onClick={() => openModal(poem)}>
                 <WorkCard src={poem.src} title={poem.title} />
          </div>
        ))
        }
      </div>
      <div className="grid grid-cols-2 gap-3">
        {poems.slice(3).map((poem, index) => (
          <div key={index+3} onClick={() => openModal(poem)}>
            <WorkCard src={poem.src} title={poem.title} />
          </div>
        ))}
      </div>

      <div className='h-full'>
        {selectedPoem && (
          <WorkModal
            isModalOpen={isModalOpen}
            onModalClose={closeModal}
            poem={selectedPoem}
          ></WorkModal>
        )}
      </div>

    </div>
  )
}

export default Work
