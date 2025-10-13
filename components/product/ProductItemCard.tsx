import { Product } from '@/types/Product'
import { toPersianNumber } from '@/utils/useful-functions'
import { StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Price from '../shared/Price'

const ProductItemCard = ({ product }: { product: Product }) => {
    return (
        <Link href={`/products/${product.id}`} className=' bg-slate-800 border border-slate-700 shadow-md rounded-md overflow-hidden flex lg:flex-col'>
            <Image className='size-28 lg:size-auto' src={product.image_url} alt={product.name} width={229} height={229} />
            <div className='p-2 flex flex-col gap-2 w-full items-end'>
                <h3 className='line-clamp-2 h-8 text-xs self-start'>{product.name}</h3>
                <div className='flex gap-1 items-center justify-end'>
                    <span className='text-xs'>{toPersianNumber(4.4)}</span>
                    <StarIcon className='w-4 h-4 text-yellow-400' />
                </div>
                <div className='flex justify-end'>
                    <Price value={product.price} />
                </div>
            </div>
        </Link>
    )
}

export default ProductItemCard