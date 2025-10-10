'use client'
import { Product } from '@/types/Product'
import React, { useState } from 'react'
import ProductSummaryInfoAside from './ProductSummaryInfoAside';
import { Button } from '../ui/button';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

interface Props {
    product: Product;
}
const ProductSummaryInfo = ({ product }: Props) => {
    const [readMore, setRaedMore] = useState(false)
    return (
        <div className='flex flex-col gap-4'>
            <h1 className='text-lg font-semibold'>{product.name}</h1>
            <div className='grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-4  h-full'>
                <div className='text-justify flex flex-col items-center gap-4'>
                    <p className='text-sm !leading-6 sm:text-base sm:!leading-7'>
                        {
                            readMore
                                ? product.description
                                : `${product.description.slice(0, 400)} ...`
                        }
                    </p>
                    <Button onClick={() => setRaedMore(!readMore)} className='mx-auto bg-inherit hover:bg-inherit border border-slate-600 text-xs !leading-6 sm:text-sm sm:!leading-7'>
                        {
                            readMore
                                ? <span className='flex gap-2 items-center'>مشاهده کمتر <ChevronUpIcon className='w-4 h-4' /></span>
                                : <span className='flex gap-2 items-center'>مشاهده بیشتر <ChevronDownIcon className='w-4 h-4' /></span>
                        }
                    </Button>
                </div>
                <ProductSummaryInfoAside product={product} />
            </div>
        </div>
    )
}

export default ProductSummaryInfo