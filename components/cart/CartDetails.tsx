'use client'
import useAppStore from '@/store/useAppStore';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import Price from '../shared/Price';
import LoadingComponent from '../LoadingComponent';
import { Button } from '../ui/button';
import CartDetailsItem from './CartDetailsItem';

const CartDetails = () => {
    const user = useAppStore(state => state.user);
    const cart = useAppStore(state => state.cart);
    const totalPrice = cart.cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.product.price), 0)
    const cartCount = cart.cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    const router = useRouter();

    useEffect(() => {
        if (!user.isLoading && !user.userInfo) router.push('/auth/login')
    }, [user])

    return (
        <div className='container mt-8 min-h-[300px] relative md:my-14'>
            {
                (user.isLoading)
                    ? <LoadingComponent className='absolute' />
                    : (cartCount > 0)
                        ? <div className='grid grid-cols-1 md:grid-cols-[1fr_300px] gap-3 max-w-[1200px] mx-auto'>
                            <section>
                                <div className='font-semibold md:text-lg'>سبد خرید شما</div>
                                <div className='flex flex-col gap-2'>
                                    {
                                        cart.cartItems?.map((cartItem) => (
                                            <CartDetailsItem key={cartItem.product.id} cartItem={cartItem} />
                                        ))
                                    }
                                </div>
                            </section>

                            <aside className='border-t border-slate-700 md:border-none'>
                                <div className='sticky top-20'>
                                    <div className='rounded-lg px-5 py-5 flex flex-col gap-3 md:border md:border-slate-700 md:py-3'>
                                        <div className='text-sm flex justify-between'>
                                            <span>{`قیمت کالاها (${cartCount})`}</span>
                                            <Price value={totalPrice} />
                                        </div>
                                        <Button className='hidden md:inline-flex bg-digikala py-5 hover:bg-digikala'>تایید و ثبت سفارش</Button>
                                    </div>
                                </div>
                            </aside>
                            <div className='fixed bottom-[61px] left-0 w-full flex flex-row justify-between bg-slate-900 p-3 border-t border-slate-700 gap-3 md:hidden'>
                                <Button className=' bg-digikala py-5 hover:bg-digikala'>تایید و ثبت سفارش</Button>
                                <div className='text-sm flex flex-col items-center gap-2'>
                                    <span className='text-xs text-gray-400'>جمع سبد خرید</span>
                                    <Price value={totalPrice} />
                                </div>
                            </div>
                        </div>
                        : <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center w-max'>
                            <Image src='/images/empty-cart.svg' alt='empty cart' width={200} height={150} />
                            <div className='md:text-xl font-semibold text-center'>سبد خرید شما خالی است !</div>
                        </div>
            }

        </div>
    )
}

export default CartDetails