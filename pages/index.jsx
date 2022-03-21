import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { pokeapi } from '../API'
import { Layout } from '../components/layouts'
import { PokemonCard } from '../components/Pokemon'

export default function Home({pokemons}) {

  return (

    <Layout title={"Pokemon App"}>
      
      <section className="grid grid-cols-3 my-10 w-full gap-x-5 gap-y-10">
        {
          pokemons.map( pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
                  
        }
      </section>

    </Layout>

  )

}

export const getStaticProps = async (ctx) => {

  const {data:{results : pokemons}} = await pokeapi.get("/pokemon?limit=151");
  pokemons.forEach((pokemon,i) => {
    pokemon.id = i+1;
    pokemon.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`;
  });

  return {

    props:{
      pokemons
    }

  }

}
