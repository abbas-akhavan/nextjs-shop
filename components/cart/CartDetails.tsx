'use client'
import { fetchFromSupabase } from '@/lib/helpers/supabase-ssr';
import useAppStore from '@/store/useAppStore';
import { CartItem } from '@/types/AppStateTypes';
import { supabase } from '@/utils/supabaseClient';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import CartButton from '../shared/CartButton';
import Price from '../shared/Price';
import LoadingComponent from '../LoadingComponent';

const CartDetails = () => {
    const user = useAppStore(state => state.user);
    const router = useRouter();
    const { data: cartItems, isLoading, error } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const { data: cartId } = await supabase.rpc('get_or_create_active_cart');
            const cartItems: CartItem[] = await fetchFromSupabase('cart_items', {
                select: 'quantity,product:products(*)',
                filters: {
                    'cart_id': `eq.${cartId}`
                },
                userToken: user?.userInfo?.token
            })
            return cartItems
        },
        refetchOnWindowFocus: true,
        refetchInterval: 10000
    })
    useEffect(() => {
        if (!user.isLoading && !user.userInfo) router.push('/auth/login')
    }, [])

    if (user.isLoading || isLoading) return <LoadingComponent />

    if (error) return <div>{error.message}</div>
    return (
        <div className='container grid grid-cols-[1fr_300px] gap-3'>
            <div>
                <div>سبد خرید شما</div>
                <div className='flex flex-col gap-2'>
                    {
                        cartItems?.map(({ product, quantity }) => (
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
            </div>

            <aside></aside>
        </div>
    )
}

export default CartDetails