import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import { Navlink } from './Navlink';

const links = [

  {
    text: "Favorites",
    href: "/favorites"
  },

  {
    text: "contact",
    href: "/"
  }

];



export const Navbar = () => {

  return (

    <nav className='w-full  bg-neutral-800 '>

      <div className="flex flex-col px-5 md:px-20 items-center md:flex-row w-full max-w-[1440px] justify-between">

      <Link href="/" passHref>
        
        <a>
          <Image
            className='cursor-pointer'
            src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/104.png"}
            alt = "pokeimage.jpg"
            width={90}
            height={90}
          />
        </a>

      </Link>
        
        <div className="flex max-w-max items-center flex-wrap gap-5">

          {
            links.map(link => (
              <Navlink key={link.href} href={link.href} text={link.text} />
            ))
          }

        </div>

      </div>

    </nav>

  )

}
