import { fetchFromSupabase } from '@/utils/supabase-ssr'
import { Product } from '@/types/Product'
import React from 'react'

const page = async () => {
    const products: Product[] = await fetchFromSupabase('products', {
        select: '*'
    })
    return (
        <div>
            {
                products.map(product => (
                    <h2 key={product.id}>{product.name}</h2>
                ))
            }
        </div>
    )
}

export default page