import Head from "next/head";
import { Navbar } from "../UI";

export const Layout = ({title,children}) => {

  return (

    <>

      <Head>

        <title>{title}</title>
        <meta name="author" content="David Ayala" />
        <meta name="description" content={`Pokemon ${title} Info`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        
      </Head>

      <Navbar />

      <main className="min-h-screen w-full flex px-5 md:px-20 flex-col">
        {children}
      </main>

    </>
    
  )

}
