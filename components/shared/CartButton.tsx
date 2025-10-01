'use client'
import useAppStore from '@/store/useAppStore'
import { Product } from '@/types/Product'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Spiner from '../Spiner'
import { TrashIcon } from '@heroicons/react/24/outline'

const CartButton = ({ product }: { product: Product }) => {
    const addToCart = useAppStore(state => state.addToCart)
    const removeFromCart = useAppStore(state => state.removeFromCart)
    const cart = useAppStore(state => state.cart)
    const productInCart = useAppStore(state => state.cart.cartItems.find((cartItem) => cartItem.product.id === product.id))
    function handleAddToCart() {
        addToCart(product);
    }
    function handleRemoveFromCart() {
        removeFromCart(product.id);
    }
    return (
        <div className='bg-slate-500 flex gap-3 p-2 rounded-sm items-center w-fit mx-auto text-sm h-9'>
            <PlusIcon className='w-4 h-4 cursor-pointer' onClick={handleAddToCart} />
            {
                cart.loading
                    ? <Spiner />
                    : productInCart?.quantity
            }
            {
                productInCart?.quantity === 1
                    ? <TrashIcon className='w-4 h-4 cursor-pointer' onClick={handleRemoveFromCart} />
                    : <MinusIcon className='w-4 h-4 cursor-pointer' onClick={handleRemoveFromCart} />
            }
        </div>
    )
}

export default CartButton