import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export const PokemonCard = ({pokemon}) => {
  return (

    <div className='transition-all bg-neutral-800 p-10 rounded-lg max-w-max mx-auto translate-y-0 hover:-translate-y-2'>

      <Link href={`/pokemon/${pokemon.id}`} passHref>
        <a>
          <Image
            src={pokemon.image}
            alt={pokemon.name+"svg"}
            width={150}
            height={150}
          />
          <p className='text-center text-lg font-semibold'>{`#${pokemon.id} - ${pokemon.name}`}</p>
        </a>
      </Link>

    </div>
  
  )
}
