'use client'
import useAppStore from '@/store/useAppStore'
import { Product } from '@/types/Product'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import Spiner from '../Spiner'
import { TrashIcon } from '@heroicons/react/24/outline'

const CartButton = ({ product }: { product: Product }) => {
    const addToCart = useAppStore(state => state.addToCart)
    const removeFromCart = useAppStore(state => state.removeFromCart)
    const [addToCartLoading, setAddToCartLoading] = useState(false);
    const productInCart = useAppStore(state => state.cart.cartItems.find((cartItem) => cartItem.product.id === product.id))
    function handleAddToCart() {
        setAddToCartLoading(true)
        addToCart(product).then(res => {
            setAddToCartLoading(false)
        })
    }
    function handleRemoveFromCart() {
        setAddToCartLoading(true)
        removeFromCart(product.id).then(res => {
            setAddToCartLoading(false)
        });
    }
    return (
        <div className='border border-slate-600 flex gap-3 p-2 rounded-sm items-center w-fit text-sm h-9'>
            <PlusIcon className='w-4 h-4 cursor-pointer' onClick={handleAddToCart} />
            {
                addToCartLoading
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