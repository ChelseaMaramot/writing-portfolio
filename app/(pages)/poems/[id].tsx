import React from 'react'
import { useRouter } from 'next/router'

const poems = {
    poem1: {
        title: 'Poem 1 Title',
        content: 'This is the content of poem 1.',
      },
      poem2: {
        title: 'Poem 2 Title',
        content: 'This is the content of poem 2.',
      },
      poem3: {
        title: 'Poem 3 Title',
        content: 'This is the content of poem 3.',
      },
      poem4: {
        title: 'Poem 4 Title',
        content: 'This is the content of poem 4.',
      },
      poem5: {
        title: 'Poem 5 Title',
        content: 'This is the content of poem 5.',
      },
}


const PoemPage = () => {
    const router = useRouter();
    const {id} = router.query;
    const poem = poems[id as keyof typeof poems];

    if (!poem) {
        return <p>Poem not found</p>
    }

    return (
        <div>
            <h1>{poem.title}</h1>
            <p>{poem.content}</p>
        </div>
    )
}