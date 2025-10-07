'use client'
import { Product } from '@/types/Product';
import { BuildingStorefrontIcon } from '@heroicons/react/24/outline';
import React from 'react'
import Price from '../shared/Price';
import { Button } from '../ui/button';
import useAppStore from '@/store/useAppStore';
import { useRouter } from 'next/navigation';
import Spiner from '../Spiner';
import CartButton from '../shared/CartButton';
import toast from 'react-hot-toast';

interface Props {
    product: Product;
}
const ProductSummaryInfoAside = ({ product }: Props) => {
    const addToCart = useAppStore(state => state.addToCart)
    const cart = useAppStore(state => state.cart)
    const user = useAppStore(state => state.user)
    const productInCart = useAppStore(state => state.cart.cartItems.find((cartItem) => cartItem.product.id === product.id))
    const router = useRouter();
    async function handleAddToCart() {
        if (!user) return router.push('/auth/login')
        const result = await addToCart(product);
        if (result) toast.success('کالا به سبد اضافه شد')
    }
    return (
        <div className='bg-slate-700 h-fit p-2 rounded-md sticky top-20 border border-slate-500 flex flex-col gap-3'>
            <div className='font-semibold'>فروشنده</div>
            <div className='flex gap-2'>
                <BuildingStorefrontIcon className='w-6 h-6' />
                <span>دیجی کالا</span>
            </div>
            <hr className='hidden lg:block border-slate-500' />
            <div className='fixed bottom-0 left-0 w-full flex flex-row-reverse justify-between bg-slate-700 py-4 px-3 md:p-3 border-t border-slate-500 gap-3 lg:border-none lg:flex-col lg:static lg:bg-inherit lg:p-0'>
                <div className='flex justify-end'>
                    <Price value={product.price} />
                </div>
                <div>
                    {
                        productInCart && productInCart?.quantity > 0
                            ? <CartButton product={product} />
                            : <Button disabled={cart.loading} onClick={handleAddToCart} className='bg-digikala hover:bg-digikala lg:w-full py-6'>
                                {
                                    cart.loading
                                        ? <Spiner />
                                        : 'افزودن به سبد خرید'
                                }
                            </Button>
                    }
                </div>

            </div>
        </div>
    )
}

export default ProductSummaryInfoAside