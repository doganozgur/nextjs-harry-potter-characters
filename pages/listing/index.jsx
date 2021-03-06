import Head from 'next/head'
import Link from "next/link"
import Image from "next/image"

export default function Listing({ characters }) {
  return (
    <div>
      <Head>
        <title>Characters - Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='max-w-3xl mx-auto my-5'>
        <h1 className='text-4xl mb-10 font-bold'>Characters</h1>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-7'>
            {characters.map((character) => (
              <div key={character.id}>
                <Link passHref={true} href={`/listing/${character.id}`}>
                  <a>
                    <Image
                      src={character.image}
                      alt={`Photo of ${character.character}`}
                      width={500}
                      height={500}
                      objectFit='cover'
                      className='rounded-2xl cursor-pointer'
                    />
                  </a>
                </Link>
                <div className='text-center'>
                  <Link passHref={true} href={`/listing/${character.id}`}>
                    <h4 className="text-xl font-semibold cursor-pointer mb-2">{character.nickname}</h4>
                  </Link>
                  <p className='text-gray-600 text-sm'><strong>Hogwarts House:</strong> {character.hogwartsHouse}</p>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const url = "https://fedeperin-harry-potter-api-en.herokuapp.com/characters"
  const res = await fetch(url);
  const data = await res.json()
  return {
    props: {characters: data},
  }
}