import { CartItem } from '@/types/AppStateTypes'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import CartButton from '../shared/CartButton';
import Price from '../shared/Price';

const CartDetailsItem = ({ cartItem }: { cartItem: CartItem }) => {
    const { product, quantity } = cartItem;
    return (
        <div className='flex gap-2 border-b border-slate-700 last:border-0 py-5'>
            <Link href={`/products/${product.id}`} className='shrink-0'>
                <Image className='rounded-sm size-24' src={product.image_url} alt={product.name} width={100} height={100} />
            </Link>
            <div className='flex flex-col justify-between gap-3'>
                <div className='text-xs h-8 md:text-sm line-clamp-2 md:h-10'>{product.name}</div>
                <div className='flex items-center gap-3'>
                    <CartButton product={product} />
                    <Price value={product.price * quantity} />
                </div>
            </div>
        </div>
    )
}

export default CartDetailsItem