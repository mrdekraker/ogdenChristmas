import React from 'react'
import Lyrics from './lyrics'

type Props = {}

const FifthGrade = (props: Props) => {
  return (
    <main className="flex flex-col items-center justify-center px-4 md:px-0 w-full flex-grow">
      <h1 className="text-4xl md:text-7xl font-bold text-slate-200 text-center mb-6">All I Want For Christmas</h1>
      <div className="flex flex-col justify-center items-center overflow-auto w-full">
        <div className="lyrics w-full md:w-1/2 flex flex-col items-center mb-4 md:mb-2 overflow-auto">
          <div className="w-full flex flex-col md:flex-row">
            <iframe
              className="my-2 px-1 md:h-[200px] md:w-1/2"
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/RmUWWVZw28E?si=xHOj-mFoW6SWIjn3"
              title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            <iframe
              className="my-2 px-1 md:h-[200px] md:w-1/2"
              width="100%" height="200"
              src="https://www.youtube.com/embed/l3iEnBThkIc?si=aECf2Mp63diemxcY&amp;start=11"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
          <div className="h-[40vh] w-full">
            <Lyrics />
          </div>
        </div>
      </div>
    </main>
  )
}

export default FifthGrade