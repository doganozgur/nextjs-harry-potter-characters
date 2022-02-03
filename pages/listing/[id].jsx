import Image from "next/image"
import Link from "next/link"

export default function ListingPage ({ data }) {
    return ( 
        <div className="mt-10">
          <Link href="/listing" passHref={true}><u className="cursor-pointer">Back</u></Link>
          <h3 className='text-xl font-bold mb-2'>{data.title}</h3>
          <div className="text-center max-w-sm mx-auto">
            <Image
              src={data.image}
              width={300}
              height={300}
              objectFit="contain"
              alt={data.character}
              className="rounded-3xl"
            />
            <div>
              <h4 className="text-2xl font-semibold my-4">{data.nickname}</h4>
              <p className='text-lg'><strong>Hogwarts House:</strong> {data.hogwartsHouse}</p>
              <p className='text-lg'><strong>Interpreted By:</strong> {data.interpretedBy}</p>
            </div>
          </div>
        </div>
    );
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(`https://fedeperin-harry-potter-api-en.herokuapp.com/characters/${id}`)
  const data = await res.json()
  return {
    props: { data }, // will be passed to the page component as props
  }
}

export async function getStaticPaths() {
  const res = await fetch("https://fedeperin-harry-potter-api-en.herokuapp.com/characters")
  const data = await res.json()

  const paths = data.map((post) => {
    const id = post.id

      return {
          params: { id: id.toString() },
      }
  })

  return { paths, fallback: false }
}