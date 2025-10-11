import { fetchFromSupabase } from '@/utils/helpers'
import React from 'react'
import ProductsList from '@/components/product/ProductsList'

const page = async () => {
    // const products: Product[] = await fetchFromSupabase('products', {
    //     select: '*'
    // })


    return (
        <ProductsList />
    )
}

export default page