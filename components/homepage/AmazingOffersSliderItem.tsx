'use client'
import Image from 'next/image'
import React from 'react'
import Price from '../shared/Price'
import Link from 'next/link'
import { AmazingOffer } from '@/types/AmazingOffer'
import DiscountPercent from '../shared/DiscountPercent'

const AmazingOffersSliderItem = ({ item, isFirst }: { item: AmazingOffer, isFirst: boolean }) => {
    const { products } = item;
    const disCountPercent = Math.floor((item.old_price - item.new_price) / item.old_price * 100);
    return (
        <Link href={`/products/${products.id}`}
            className={`bg-white flex flex-col p-2 text-xs gap-2 ${isFirst ? 'rounded-tr-md rounded-br-md' : ''}`}
        >
            <Image width={132} height={132} src={products.image_url} alt={products.name} className='mx-auto min-h-[132px] object-cover' />
            <h3 className='text-gray-500  line-clamp-2 leading-5 h-[40px]'>{products.name}</h3>
            <div className='text-gray-700 flex justify-between items-center'>
                <DiscountPercent value={disCountPercent} />
                <Price value={item.new_price} />
            </div>
            <div className='line-through text-gray-300 text-left pl-5'>{item.old_price}</div>
        </Link>
    )
}

export default AmazingOffersSliderItem