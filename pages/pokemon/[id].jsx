import { pokeapi } from '../../API';
import { Layout } from '../../components/layouts';
import Link from 'next/link';
import Image from 'next/image';

export default function PokemonPage({pokemon}){
  console.log(pokemon);
  return (
    
    <Layout title={pokemon.name}>

      <section className="flex w-full max-w-[1440px] mx-auto space-x-10 my-5">

        <div className=" max-w-xs w-full p-10 bg-neutral-800 rounded-xl">

          <Image

            src={pokemon.sprites.other.dream_world.front_default}
            alt="pokemon.jpg"
            width={200}
            height={200}

          />

        </div>

        <div className="flex flex-col space-y-5  w-full p-10 bg-neutral-800 rounded-xl">

          <div className="flex items-center w-full justify-between">

            <h1 className='font-semibold capitalize text-3xl'>{pokemon.name}</h1>
            <p className='px-4 text-center max-w-max border rounded-2xl border-rose-400 py-1'>Save in favorites</p>

          </div>

          <p className='text-lg'>Sprites:</p>

          <div className="flex w-full items-center !space-x-20">

            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width={120}
              height={120}
            />

            <Image
              src={pokemon.sprites.back_default}
              alt={pokemon.name}
              width={120}
              height={120}
            />

            <Image
              src={pokemon.sprites.front_shiny}
              alt={pokemon.name}
              width={120}
              height={120}
            />

            <Image
              src={pokemon.sprites.back_shiny}
              alt={pokemon.name}
              width={120}
              height={120}
            />

          </div>

        </div>

      </section>

    </Layout>

  )

}


export const getStaticPaths = async () => {

  const pokemons151 = [...Array(151)].map( (value,index) =>  ({params: {id: `${index+1}`}}) );

  return {
    paths: pokemons151,
    fallback: false
  }

}

export const getStaticProps = async ({params:{id}}) => {

  const {data} = await pokeapi.get(`/pokemon/${id}`);

  return {
    props:{
      pokemon : data
    }
  }
}