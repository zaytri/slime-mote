import Head from 'next/head'
import ProductComponent from '../components/Product'
import prisma from '@/prisma/client'

export default async function Home() {
  const staticData = await prisma.product.findMany({
    include: {
      category: true,
    },
  })

  const products = staticData.map(product => ({
    ...product,
    price: product.price.toString(),
  }))

  return (
    <div>
      <Head>
        <title>PlanetScale Next.js Quickstart</title>
        <meta name='description' content='PlanetScale Quickstart for Next.js' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='mx-auto max-w-4xl p-10'>
        <h1 className='mb-4 text-center text-6xl font-bold'>Next.js Starter</h1>
        <p className='mb-20 text-center text-xl'>
          🔥 Shop from the hottest items in the world 🔥
        </p>
        <div className='grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2  md:grid-cols-3'>
          {products.map(product => (
            <ProductComponent product={product} key={product.id} />
          ))}
        </div>
      </main>

      <footer></footer>
    </div>
  )
}
