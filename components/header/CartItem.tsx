import { CartItem } from '@/types/AppStateTypes'
import Image from 'next/image';
import React from 'react'
import CartButton from '../shared/CartButton';
import Price from '../shared/Price';
import Link from 'next/link';

const CartItemComponent = ({ cartItem }: { cartItem: CartItem }) => {
    const { product, quantity } = cartItem;
    return (
        <div className='flex flex-col gap-2 border-b border-gray-600 pb-2 last:border-0' key={product.id}>
            <div className='flex gap-2'>
                <Link href={`/products/${product.id}`} className='shrink-0'>

                    <Image className='rounded-sm' src={product.image_url} alt={product.name} width={90} height={90} />
                </Link>
                <div className='text-sm line-clamp-2 h-10'>{product.name}</div>
            </div>
            <div className='flex items-center gap-3'>
                <CartButton product={product} />
                <Price value={product.price * quantity} />
            </div>
        </div>
    )
}

export default CartItemComponent