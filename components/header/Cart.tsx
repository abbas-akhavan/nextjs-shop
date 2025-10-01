'use client'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import useAppStore from '@/store/useAppStore'
import { HoverCard, HoverCardContent } from '@radix-ui/react-hover-card'
import { HoverCardTrigger } from '../ui/hover-card'
import { toPersianNumber } from '@/lib/helpers/useful-functions'
import Image from 'next/image'
import Price from '../shared/Price'
import CartButton from '../shared/CartButton'

const Cart = () => {
    const cart = useAppStore(state => state.cart)
    const cartCount = cart.cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    const totalPrice = cart.cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.product.price), 0)
    const user = useAppStore(state => state.user);

    if (!user) return <></>;
    return (
        <HoverCard openDelay={50} closeDelay={100}>
            <HoverCardTrigger asChild>
                <Button className='size-9 relative border border-slate-600 bg-transparent hover:bg-gray-900' asChild>
                    <Link href='/cart'>
                        <ShoppingCartIcon className='!size-6' />
                        {
                            cart.cartItems.length > 0
                                ? <span className='bg-red-600 absolute -top-1 -right-1 text-white size-4 rounded-sm text-xs flex items-center justify-center'>
                                    {cartCount}
                                </span>
                                : <></>
                        }
                    </Link>
                </Button>
            </HoverCardTrigger>
            {
                cartCount > 0 &&
                <HoverCardContent className='w-96 bg-gray-700 shadow-md rounded-md' align='end'>
                    <div className='p-2 text-sm'>{toPersianNumber(cartCount)} کالا</div>
                    <hr className='border-gray-600' />
                    <div className='p-3 max-h-64 overflow-y-auto flex flex-col gap-3'>
                        {
                            cart.cartItems.map(({ product, quantity }) => (
                                <div className='flex flex-col gap-2 border-b border-gray-600 pb-2 last:border-0' key={product.id}>
                                    <div className='flex gap-2'>
                                        <Image className='rounded-sm' src={product.image_url} alt={product.name} width={90} height={90} />
                                        <div className='text-sm line-clamp-2 h-10'>{product.name}</div>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <CartButton product={product} />
                                        <Price value={product.price * quantity} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <hr className='border-gray-600' />
                    <div className='px-3 py-2 flex justify-between items-center'>
                        <div>
                            <div className='text-xs text-gray-400 mb-2'>مبلغ قابل پرداخت</div>
                            <Price value={totalPrice} />
                        </div>
                        <Button className='bg-digikala'>ثبت سفارش</Button>
                    </div>
                </HoverCardContent>
            }
        </HoverCard>
    )
}

export default Cart