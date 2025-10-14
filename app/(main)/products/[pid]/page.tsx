import ProductGallary from '@/components/product/ProductGallary';
import ProductSummaryInfo from '@/components/product/ProductSummaryInfo';
import { fetchFromSupabase } from '@/utils/helpers'
import { Product } from '@/types/Product';
import { notFound } from 'next/navigation';
import React from 'react';
import { Metadata } from 'next';
import { isNumber } from '@/utils/useful-functions';

async function getProduct(pid: string): Promise<Product> {
    const data: Product[] = await fetchFromSupabase('products', {
        filters: {
            'id': `eq.${pid}`
        },
        cache: 'no-store'
    })
    const product = data?.[0];
    return product
}
export async function generateMetadata({ params }: { params: Promise<{ pid: string }> }): Promise<Metadata> {
    const { pid } = await params;
    const product = await getProduct(pid);
    return { title: product.name, description: product.description }
}
const SingleProduct = async ({ params }: { params: Promise<{ pid: string }> }) => {
    const { pid } = await params;
    if (!isNumber(pid)) notFound();
    const product = await getProduct(pid);
    if (!product) notFound();
    return (
        <div className='container mt-12 grid grid-cols-1 xl:grid-cols-[4fr_8fr] gap-4 pb-24'>
            <ProductGallary src={product.image_url} alt={product.name} />
            <ProductSummaryInfo product={product} />
        </div>
    )
}

export default SingleProduct