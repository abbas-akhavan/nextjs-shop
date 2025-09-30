'use client'
import { Product } from '@/types/Product';
import { BuildingStorefrontIcon } from '@heroicons/react/24/outline';
import React from 'react'
import Price from '../shared/Price';
import { Button } from '../ui/button';
import useAppStore from '@/store/useAppStore';
import { useRouter } from 'next/navigation';
import { supabase } from '@/utils/supabaseClient';
import toast from 'react-hot-toast';
import Spiner from '../Spiner';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';

interface Props {
    product: Product;
}
const ProductSummaryInfoAside = ({ product }: Props) => {
    const addToCart = useAppStore(state => state.addToCart)
    const removeFromCart = useAppStore(state => state.removeFromCart)
    const cart = useAppStore(state => state.cart)
    const user = useAppStore(state => state.user)
    const productInCart = useAppStore(state => state.cart.cartItems.find((cartItem) => cartItem.product.id === product.id))
    const router = useRouter();
    function handleAddToCart() {
        if (!user) return router.push('/auth/login')
        addToCart(product);
    }
    function handleRemoveFromCart() {
        if (!user) return router.push('/auth/login')
        removeFromCart(product.id);
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
            {
                productInCart && productInCart?.quantity > 0
                    ? <div className='bg-slate-500 flex gap-3 p-2 rounded-sm items-center w-fit mx-auto text-sm h-9'>
                        <PlusIcon className='w-4 h-4 cursor-pointer' onClick={handleAddToCart} />
                        {
                            cart.loading
                                ? <Spiner />
                                : productInCart.quantity
                        }
                        <MinusIcon className='w-4 h-4 cursor-pointer' onClick={handleRemoveFromCart} />
                    </div>
                    : <Button disabled={cart.loading} onClick={handleAddToCart} className='bg-digikala hover:bg-digikala'>
                        {
                            cart.loading
                                ? <Spiner />
                                : 'افزودن به سبد خرید'
                        }
                    </Button>
            }
        </div>
    )
}

export default ProductSummaryInfoAside