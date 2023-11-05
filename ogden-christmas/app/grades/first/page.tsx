import React from 'react'
import Lyrics from './lyrics'

type Props = {}

const firstGrade = (props: Props) => {
  return (
    <main className="flex flex-col items-center justify-center px-4 md:px-0 w-full flex-grow">
      <h1 className="text-4xl md:text-7xl font-bold text-slate-200 text-center">Frosty The Snowman!</h1>
      <div className="flex flex-col justify-center items-center overflow-auto w-full">
        <div className="lyrics w-full md:w-1/2 flex flex-col items-center mb-4 md:mb-2 overflow-auto">
          <div className="w-full flex flex-col md:flex-row">
            <iframe 
              className="my-2 px-1 md:h-[200px] md:w-1/2"
              width="100%" 
              height="200" 
              src="https://www.youtube.com/embed/VhT3OXr27UQ?si=GXKxP8YfRMr2Hp33" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            >
            </iframe>
            <iframe 
              className="my-2 px-1 md:h-[200px] md:w-1/2"
              width="100%" 
              height="200" 
              src="https://www.youtube.com/embed/8hINXuDyyvs?si=Wen3XQbPxNAKkDBz" 
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

export default firstGrade


{/* <div className="flex flex-col items-center justify-center px-4 md:px-0">
      <h1 className="text-4xl md:text-7xl font-bold text-slate-200 mb-9 text-center">Frosty The Snowman!</h1>
      <div className="overflow-auto h-[calc(100vh - 10rem)] w-full">
        <div className="flex flex-col md:flex-row w-full md:w-[100vw]">
          <div className="overflow-auto w-full md:w-1/2 flex flex-col items-center mb-4 md:mb-0">
            <iframe 
            className="mb-4 md:h-[280px]"
              width="100%" 
              height="200" 
              src="https://www.youtube.com/embed/VhT3OXr27UQ?si=GXKxP8YfRMr2Hp33" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            >
            </iframe>
            <iframe 
            className="md:h-[280px]"
              width="100%" 
              height="200" 
              src="https://www.youtube.com/embed/8hINXuDyyvs?si=Wen3XQbPxNAKkDBz" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
            </iframe>
            <Lyrics />
          </div>
          <div className="lyrics h-[40vh] w-full md:w-1/2 overflow-auto">
            <Lyrics />
          </div>
        </div>
      </div>
    </div> */}