'use client'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import useAppStore from '@/store/useAppStore'
import { HoverCard, HoverCardContent } from '@radix-ui/react-hover-card'
import { HoverCardTrigger } from '../ui/hover-card'
import { toPersianNumber } from '@/utils/useful-functions'
import Price from '../shared/Price'
import CartItemComponent from './CartItem'
import { usePathname } from 'next/navigation'
import Badge from '../shared/Badge'

const Cart = () => {
    const cart = useAppStore(state => state.cart)
    const cartCount = cart.cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    const totalPrice = cart.cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.product.price), 0)
    const user = useAppStore(state => state.user);
    const url = usePathname()

    if (!user) return <></>;
    return (
        <HoverCard openDelay={50} closeDelay={100}>
            <HoverCardTrigger asChild>
                <Button className='hidden md:inline-flex size-9 relative border border-slate-600 bg-transparent hover:bg-gray-900' asChild>
                    <Link href='/cart'>
                        <ShoppingCartIcon className='!size-6' />
                        {
                            cart.cartItems.length > 0
                                ? <Badge value={cartCount} className='absolute -top-1 -right-1' />
                                : <></>
                        }
                    </Link>
                </Button>
            </HoverCardTrigger>
            {
                (cartCount > 0 && !(url === '/cart')) &&
                <HoverCardContent sideOffset={5} className='hidden md:block w-96 bg-slate-700 shadow-md rounded-md data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom-5 data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-bottom-5' align='end'>
                    <div className='p-2 text-sm'>{toPersianNumber(cartCount)} کالا</div>
                    <hr className='border-slate-500' />
                    <div className='p-3 max-h-64 overflow-y-auto flex flex-col gap-3'>
                        {
                            cart.cartItems.map((cartItem) => (
                                <CartItemComponent key={cartItem.product.id} cartItem={cartItem} />
                            ))
                        }
                    </div>
                    <hr className='border-slate-600' />
                    <div className='px-3 py-2 flex justify-between items-center'>
                        <div>
                            <div className='text-xs text-gray-400 mb-2'>مبلغ قابل پرداخت</div>
                            <Price value={totalPrice} />
                        </div>
                        <Button className='bg-digikala'>ثبت سفارش</Button>
                    </div>
                </HoverCardContent>
            }
        </HoverCard >
    )
}

export default Cart