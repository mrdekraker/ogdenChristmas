import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
type Props = {}


const Navbar = (props: Props) => {
  return (
    <header className="mb-5 border">
      <nav className="flex justify-center items-center w-full text-slate-100">
        <div className="hidden sm:block">
          <Link href="/">
            <Image src="/ogden-logo.png" alt="Ogden Logo" width={360} height={360} />
          </Link>
        </div>
        <div className="flex items-center gap-10 text-2xl mt-2" style={{ transform: 'translateY(-7px)' }}>
          <Link className="hover:text-slate-200" href="/grades/first">First</Link>
          <Link className="hover:text-slate-200" href="/grades/second">Second</Link>
          <Link className="hover:text-slate-200" href="/grades/third">Third</Link>
          <Link className="hover:text-slate-200" href="/grades/fourth">Fourth</Link>
          <Link className="hover:text-slate-200" href="/grades/fifth">Fifth</Link>
        </div>
      </nav>

      <div className="flex justify-center gap-8 mb-4 mx-10 text-center text-slate-100">
        <div className="basis-2/3 md:mt-3">
          <div className="flex flex-col">
            <h1 className="font-bold text-3xl md:text-5xl">Ogden Presents:</h1>
            <h1 className="font-bold text-3xl md:text-5xl"><span>OGDEN CHRISTMAS POPTACULAR!</span></h1>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar