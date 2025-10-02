'use client'
import { fetchFromSupabase } from '@/lib/helpers/supabase-ssr';
import useAppStore from '@/store/useAppStore';
import { CartItem } from '@/types/AppStateTypes';
import { supabase } from '@/utils/supabaseClient';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const CartDetails = () => {
    const user = useAppStore(state => state.user);
    const router = useRouter();
    const { data, isLoading, error } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const { data: cartId } = await supabase.rpc('get_or_create_active_cart');
            const cartItems: CartItem[] = await fetchFromSupabase('cart_items', {
                select: 'quantity,product:products(*)',
                filters: {
                    'cart_id': `eq.${cartId}`
                },
                userToken: user?.token
            })
            return cartItems
        },
        refetchOnWindowFocus: true,
        refetchInterval: 10000
    })
    useEffect(() => {
        if (!user) router.push('/auth/login')
    }, [])

    return (
        <div className='container grid grid-cols-[1fr_300px] gap-3'>
            <div>
                <div>سبد خرید شما</div>
            </div>

            <aside></aside>
        </div>
    )
}

export default CartDetails