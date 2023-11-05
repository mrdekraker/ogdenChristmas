import React from 'react'
import Lyrics from './lyrics'

type Props = {}

const SecondGrade = (props: Props) => {
  return (
    <main className="flex flex-col items-center justify-center px-4 md:px-0 w-full flex-grow">
      <h1 className="text-4xl md:text-7xl font-bold text-slate-200 text-center">Up On The Housetop!</h1>
      <div className="flex flex-col justify-center items-center overflow-auto w-full">
        <div className="lyrics w-full md:w-1/2 flex flex-col items-center mb-4 md:mb-2 overflow-auto">
          <div className="w-full flex flex-col md:flex-row">
            <iframe
              className="my-2 px-1 md:h-[200px] md:w-1/2"
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/ylFOmzAATSw?si=q5oT3Vy08tS4FonB" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            <iframe 
              className="my-2 px-1 md:h-[200px] md:w-1/2"
              width="100%" 
              height="200" 
              src="https://www.youtube.com/embed/yqu-m153SSo?si=WxhRCbmXYQWkj0cm" 
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

export default SecondGrade