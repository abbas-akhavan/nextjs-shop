import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import useAppStore from '@/store/useAppStore'

const Cart = () => {
    const cart = useAppStore(state => state.cart)
    return (
        <Button variant='secondary' className='size-9 relative' asChild>
            <Link href='/cart'>
                <ShoppingCartIcon className='!size-6' />
                {
                    cart.length > 0
                        ? <span className='bg-red-600 absolute -top-1 -right-1 text-white size-4 rounded-sm text-xs flex items-center justify-center'>
                            {cart.length}
                        </span>
                        : <></>
                }
            </Link>
        </Button>
    )
}

export default Cart