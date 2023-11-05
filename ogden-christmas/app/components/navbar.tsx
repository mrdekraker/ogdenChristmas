'use client' 

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

type Props = {};

const Navbar = (props: Props) => {
  const pathname = usePathname();

  const christmasColors = () => {
    const text = "OGDEN CHRISTMAS POPTACULAR!";
    return text.split('').map((char, index) => {
      const color = index % 2 === 0 ? 'text-red-500' : 'text-green-500';
      return <span className={color} key={index}>{char}</span>;
    });
  };

  const isLinkActive = (path: string) => {
    return pathname === path ? 'active' : '';
  };

  return (
    <header className="mb-5 border">
      <nav className="flex justify-center items-center w-full text-slate-100">
        <div className="hidden sm:block">
          <Link href="/">
            <Image src="/ogden-logo.png" alt="Ogden Logo" width={360} height={360}
              style={{
                height: 'auto',
                width: 'auto',
            }}
            />
          </Link>
        </div>
        <div className="flex items-center gap-2 md:gap-10 text-xl md:text-2xl mt-2" style={{ transform: 'translateY(-7px)' }}>
          <Link passHref href="/" className="hover:text-slate-200">
            <div className={`link ${isLinkActive('/')}`}>Home</div>
          </Link>
          <Link passHref href="/grades/first" className="hover:text-slate-200">
            <div className={`link ${isLinkActive('/grades/first')}`}>First</div>
          </Link>
          <Link passHref href="/grades/second" className="hover:text-slate-200">
            <div className={`link ${isLinkActive('/grades/second')}`}>Second</div>
          </Link>
          <Link passHref href="/grades/third" className="hover:text-slate-200">
            <div className={`link ${isLinkActive('/grades/third')}`}>Third</div>
          </Link>
          <Link passHref href="/grades/fourth" className="hover:text-slate-200">
            <div className={`link ${isLinkActive('/grades/fourth')}`}>Fourth</div>
          </Link>
          <Link passHref href="/grades/fifth" className="hover:text-slate-200">
            <div className={`link ${isLinkActive('/grades/fifth')}`}>Fifth</div>
          </Link>
          
        </div>
      </nav>
      <div className="flex justify-center gap-8 mb-4 mx-10 text-center text-slate-100">
        <div className="basis-2/3 md:mt-3">
          <div className="flex flex-col">
            <h1 className="font-bold text-3xl md:text-5xl">Ogden Presents:</h1>
            <h1 className="font-bold text-3xl md:text-5xl">{christmasColors()}</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
