import React from 'react'
import Lyrics from './lyrics'

type Props = {}

const ThirdGrade = (props: Props) => {
  return (
    <main className="flex flex-col items-center justify-center px-4 md:px-0 w-full flex-grow">
      <h1 className="text-4xl md:text-7xl font-bold text-slate-200 text-center mb-6">12 Days of Christmas!</h1>
      <p>On the Karaoke version of this song: Listen for the drum sticks, then come in. The count is going to be 1 - 2 - 1 2 3 4</p>
      <div className="flex flex-col justify-center items-center overflow-auto w-full">
        <div className="lyrics w-full md:w-1/2 flex flex-col items-center mb-4 md:mb-2 overflow-auto">
          <div className="w-full flex flex-col md:flex-row">
            <iframe
              className="my-2 px-1 md:h-[200px] md:w-1/2"
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/5FWRyh4GSB8?si=_bPvUGODAH7nVx5-"
              title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            <iframe 
              className="my-2 px-1 md:h-[200px] md:w-1/2"
              width="100%" 
              height="200" 
              src="https://www.youtube.com/embed/ez09JrIGy6g?si=i3LPzgH-0O-CFkMc" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
            </iframe>
          </div>
          <div className="h-[40vh] w-full">
            <Lyrics />
          </div>
        </div>
      </div>
    </main>
  )
}

export default ThirdGrade