import { Product } from '@/types/Product'
import React from 'react'
import ProductSummaryInfoAside from './ProductSummaryInfoAside';

interface Props {
    product: Product;
}
const ProductSummaryInfo = ({ product }: Props) => {
    return (
        <div className='flex flex-col gap-4'>
            <h1 className='text-lg font-semibold'>{product.name}</h1>
            <div className='grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-4'>
                <div className='text-justify'>
                    <p className='text-sm !leading-6 sm:text-base sm:!leading-7'>{product.description}</p>
                </div>
                <ProductSummaryInfoAside product={product} />
            </div>
        </div>
    )
}

export default ProductSummaryInfo