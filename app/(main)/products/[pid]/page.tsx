import { fetchFromSupabase } from '@/lib/helpers/supabase-ssr'
import { Product } from '@/types/Product';
import React from 'react'

const SingleProduct = async ({ params }: { params: { pid: string } }) => {
    const { pid } = await params;
    const data: Product[] = await fetchFromSupabase('products', {
        filters: {
            'id': `eq.${pid}`
        }
    })
    const product: Product = data[0];
    return (
        <div className='grid grid-cols-[4fr_8fr]'>
            <div></div>
        </div>
    )
}

export default SingleProduct