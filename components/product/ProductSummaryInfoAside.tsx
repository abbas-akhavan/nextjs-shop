'use client'
import { Product } from '@/types/Product';
import { BuildingStorefrontIcon } from '@heroicons/react/24/outline';
import React from 'react'
import Price from '../shared/Price';
import { Button } from '../ui/button';
import useAppStore from '@/store/useAppStore';

interface Props {
    product: Product;
}
const ProductSummaryInfoAside = ({ product }: Props) => {
    const addToCart = useAppStore(state => state.addToCart)
    function handleAddToCart() {
        addToCart(product);
    }
    return (
        <div className='bg-slate-700 h-fit p-2 rounded-md sticky top-20 border border-slate-500 flex flex-col gap-3'>
            <div className='font-semibold'>فروشنده</div>
            <div className='flex gap-2'>
                <BuildingStorefrontIcon className='w-6 h-6' />
                <span>دیجی کالا</span>
            </div>
            <hr className='border-slate-500' />
            <div className='flex justify-end'>
                <Price value={product.price} />
            </div>
            <Button onClick={handleAddToCart} className='bg-digikala hover:bg-digikala'>افزودن به سبد خرید</Button>
        </div>
    )
}

export default ProductSummaryInfoAside