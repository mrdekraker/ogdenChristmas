import React from 'react'

type Props = {}

const videoGrid = (props: Props) => {
  return (
    <div className="border grid grid-cols-1 lg:grid-cols-3 w-full lg:w-5/6">
      {/* Video 1 */}
      <div>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/ZXNO8Be4Q6Y?si=Gvv0Sc_NMg5iRrbQ" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      </div>
      {/* Video 2 */}
      <div>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/98Gk-OsMblM?si=bTArVj7QAKwrZXQ7" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      </div>
      {/* Video 3 */}
      <div>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/07bfU8NRdqc?si=aeZ3_ux0btYUs4Su" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      </div>
      {/* Video 4 */}
      <div>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/MATHaxdghQk?si=EvfSYDDYRD3emPF7" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      </div>
      {/* Video 5 */}
      <div>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/hULyHfs6BTE?si=QWVBfXF4E5EueKAM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      </div>
      {/* Video 6 */}
      <div>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/UyF1rwlPdDc?si=6Pe6r-KMnHj7OC3P" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      </div>
      {/* Video 7 */}
      <div>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/cs8Dz8I38n0?si=ttfHEOugeaD9QBau" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      </div>
      {/* Video 8 */}
      <div>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/sVEIeIMiOEE?si=FDKfuvyfFX3DqdZp" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      </div>
      {/* Video 9 */}
      <div>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/Ipx_MSaMrCY?si=QVsN4fPgZ6LMIVbA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      </div>
    </div>
  )
}

export default videoGrid