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

interface Props {
    product: Product;
}
const ProductSummaryInfoAside = ({ product }: Props) => {
    const addToCart = useAppStore(state => state.addToCart)
    const user = useAppStore(state => state.user)
    const router = useRouter();
    async function handleAddToCart() {
        if (!user) return router.push('/auth/login')

        const { data: cartId } = await supabase.rpc('get_or_create_active_cart');
        const { data, error } = await supabase.rpc('add_item_to_cart', {
            _cart_id: cartId,
            _product_id: product.id,
            _qty: 1
        });
        if (error) {
            toast.error(error.message)
            return
        }
        addToCart(product);
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
            <Button onClick={handleAddToCart} className='bg-digikala hover:bg-digikala'>افزودن به سبد خرید</Button>
        </div>
    )
}

export default ProductSummaryInfoAside