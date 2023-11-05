import React from 'react'

import Videos from './videos'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="flex text-2xl font-bold text-slate-300 text-center">
        Vocal Warm Ups
      </h1>
      <div className="w-full px-2 lg:w-2/3 flex flex-col items-center">
        <p className="mb-4 text-lg text-slate-100 text-center">
          It is important to warm up your voice before singing. Here are some vocal warm ups to help you get ready to sing! Remember to stay relaxed and hydrated while you sing.
        </p>
        <h2 className="text-slate-100 ">Remember these 3 things!</h2>
        <ul className="text-slate-100 mb-6">
          <li><strong>1. Posture:</strong> Stand up straight, chest up, chin down</li>
          <li><strong>2. Breathing:</strong> Breath deep from your belly. Belly out, shoulders down.</li>
          <li><strong>3. Start Soft:</strong> Begin by humming or doing lip trills gently, then move on to the slightly more challenging exercises.</li>
        </ul>
        {/* 3x3 grid of embedded YouTube */}
      </div>
      <Videos />
    </main>
  )
}
