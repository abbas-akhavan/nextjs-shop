'use client'
import { Product } from '@/types/Product';
import { fetchFromSupabaseWithAxios } from '@/utils/helpers';
import { BarsArrowDownIcon } from '@heroicons/react/24/solid';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef } from 'react'
import SortItem from './SortItem';
import ProductItemCard from './ProductItemCard';
import ProductItemCardSkelrton from '../skeletons/ProductItemCardSkelrton';
import Spiner from '../Spiner';
import ProductsAsideFilters from './ProductsAsideFilters';

const ProductsList = () => {
    // http://localhost:3005/products?category_id=eq.1&order=price.desc
    const router = useRouter()
    const searchParams = useSearchParams();
    const filters = Object.fromEntries(searchParams.entries())
    const productPerPage = 10;
    const loadMoreRef = useRef<HTMLDivElement | null>(null);

    function handleFilters(key: string, value: string) {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set(key, value)
        } else {
            params.delete(key);
        }

        router.push(`?${params.toString()}`)
    }

    const {
        data: products,
        isFetching,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
        status,
        error,
    } = useInfiniteQuery<{ data: Product[], totalRows: number, currentRow: number }>({
        queryKey: ["products", searchParams.toString()],
        queryFn: ({ pageParam }) => fetchFromSupabaseWithAxios('products', {
            select: '*',
            filters: {
                ...filters,
                limit: `${productPerPage}`,
                offset: `${(pageParam)}`
            }
        }),
        getNextPageParam: (lastPage, allPages) => {
            const totalPages = Math.ceil(lastPage.totalRows / productPerPage);
            const currentPage = Math.ceil((lastPage.currentRow + 1) / productPerPage)

            return (currentPage < totalPages ? (lastPage.currentRow + 1) : undefined);
        },
        initialPageParam: 0,
        refetchOnWindowFocus: false
    });

    useEffect(() => {
        if (!loadMoreRef.current) return

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
                    fetchNextPage();
                }
            })
        })

        if (loadMoreRef.current) observer.observe(loadMoreRef.current);

        return () => {
            if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
        }
    }, [fetchNextPage, hasNextPage, isFetchingNextPage])

    return (
        <div className='container grid grid-cols-[300px_1fr] gap-3 my-5'>
            <aside>
                <ProductsAsideFilters handleFilters={handleFilters} />
            </aside>
            <section>
                <div className='flex gap-2 py-2 border-b border-slate-700 text-sm items-center'>
                    <span className='flex gap-2 items-center'><BarsArrowDownIcon className='w-6 h-6' /> مرتب سازی :</span>
                    <SortItem
                        active={searchParams.get('order') === 'price.asc'}
                        onClick={() => handleFilters('order', 'price.asc')}>
                        ارزانترین
                    </SortItem>
                    <SortItem
                        active={searchParams.get('order') === 'price.desc'}
                        onClick={() => handleFilters('order', 'price.desc')}>
                        گرانترین
                    </SortItem>
                    <SortItem
                        active={searchParams.get('order') === 'created_at.desc'}
                        onClick={() => handleFilters('order', 'created_at.desc')}>
                        جدیدترین
                    </SortItem>
                    <span className='mr-auto text-slate-300'>
                        {
                            isFetching
                                ? <Spiner />
                                : `${products?.pages[0].totalRows} کالا`

                        }
                    </span>
                </div>
                {
                    <div className='grid lg:grid-cols- xl:grid-cols-5 gap-3 mt-3'>
                        {
                            isFetching && !isFetchingNextPage
                                ? Array.from({ length: 5 }, (_, index) => (
                                    <ProductItemCardSkelrton key={index} />
                                ))
                                : products?.pages.map((page) => (
                                    page?.data.map(product => (
                                        <ProductItemCard key={product.id} product={product} />
                                    ))
                                ))
                        }
                    </div>
                }
                {
                    isFetchingNextPage
                        ? <div className='grid grid-cols-5 gap-3 mt-3'>
                            {
                                Array.from({ length: 5 }, (_, index) => (
                                    <ProductItemCardSkelrton key={index} />
                                ))
                            }
                        </div>
                        : <></>
                }
                <div ref={loadMoreRef}></div>
            </section>
        </div>
    )
}

export default ProductsList