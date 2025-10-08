import ProductGallary from '@/components/product/ProductGallary';
import ProductSummaryInfo from '@/components/product/ProductSummaryInfo';
import { fetchFromSupabase } from '@/utils/helpers'
import { Product } from '@/types/Product';
import { notFound } from 'next/navigation';
import React from 'react'

const SingleProduct = async ({ params }: { params: Promise<{ pid: string }> }) => {
    const { pid } = await params;
    const data: Product[] = await fetchFromSupabase('products', {
        filters: {
            'id': `eq.${pid}`
        },
        cache: 'no-store'
    })
    const product = data?.[0];
    if (!product) notFound();
    return (
        <div className='container mt-7 grid grid-cols-1 xl:grid-cols-[4fr_8fr] gap-4 pb-20'>
            <ProductGallary src={product.image_url} alt={product.name} />
            <ProductSummaryInfo product={product} />
        </div>
    )
}

export default SingleProduct