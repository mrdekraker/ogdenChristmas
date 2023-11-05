import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const Navbar = (props: Props) => {

  const christmasColors = () => {
    const text = "OGDEN CHRISTMAS POPTACULAR!";
    return text.split('').map((char, index) => {
      const color = index % 2 === 0 ? 'text-red-500' : 'text-green-500';
      return <span className={color} key={index}>{char}</span>;
    });
  };

  return (
    <header className="border-b-2 mb-2">
      <nav className="flex justify-center items-center w-full text-slate-100 px-2 md:px-0">
        <div className="hidden sm:block">
          <Link href="/">
            <Image
              src="/ogden-logo.png"
              alt="Ogden Logo"
              width={360}
              height={360}
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </Link>
        </div>
        <div className="flex items-center gap-2 md:gap-10 text-xl md:text-2xl mt-2" style={{ transform: 'translateY(-7px)' }}>
          <Link href="/grades/first" className="hover:text-slate-200">First</Link>
          <Link href="/grades/second" className="hover:text-slate-200">Second</Link>
          <Link href="/grades/third" className="hover:text-slate-200">Third</Link>
          <Link href="/grades/fourth" className="hover:text-slate-200">Fourth</Link>
          <Link href="/grades/fifth" className="hover:text-slate-200">Fifth</Link>
          <Link href="/" className="hover:text-slate-200">Home</Link>
        </div>
      </nav>

      <div className="flex justify-center gap-8 mb-4 mx-2 md:mx-10 text-center text-slate-100">
        <div className="basis-2/3 md:mt-3">
          <div className="flex flex-col">
            <h1 className="font-bold text-3xl md:text-5xl">Ogden Presents:</h1>
            <h1 className="font-bold text-3xl md:text-5xl">{christmasColors()}</h1>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar