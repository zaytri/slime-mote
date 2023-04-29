import { Category } from '@prisma/client'
import Image from 'next/image'

export type PropProduct = {
  price: string
  id: number
  name: string
  description: string
  image: string
  category_id: number
  category: Category | null
}

type Props = {
  product: PropProduct
}

export default function Product({ product }: Props) {
  const { name, description, price, image, category } = product

  return (
    <div
      className='max-w-[250px] overflow-hidden rounded shadow-lg'
      key={product.id}
    >
      <Image
        className='w-full'
        width={250}
        height={250}
        objectFit='cover'
        src={image}
        alt={name}
      />
      <div className='px-6 py-4'>
        <div className='mb-2 text-xl font-bold'>{name}</div>
        <p className='text-base text-gray-700'>{description}</p>
        <p className='text-xl text-gray-900'>${price}</p>
      </div>
      <div className='px-6 pb-2 pt-4'>
        <span className='mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700'>
          {category?.name}
        </span>
      </div>
    </div>
  )
}
