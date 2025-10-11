'use client'
import { Product } from '@/types/Product';
import { fetchFromSupabaseWithAxios } from '@/utils/helpers';
import { BarsArrowDownIcon, StarIcon } from '@heroicons/react/24/solid';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef } from 'react'
import { Button } from '../ui/button';
import { chunk, toPersianNumber } from '@/utils/useful-functions';
import Image from 'next/image';
import Price from '../shared/Price';
import Link from 'next/link';

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
        data,
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
        staleTime: 0,
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
                <div className='border rounded-md border-slate-700 h-[500px] sticky top-20'>

                </div>
            </aside>
            <section>
                <div className='flex gap-2 py-2 border-b border-slate-700 text-sm items-center'>
                    <span className='flex gap-2 items-center'><BarsArrowDownIcon className='w-6 h-6' /> مرتب سازی :</span>
                    <span className={`cursor-pointer ${searchParams.get('order') === 'price.asc' ? 'text-cyan-400' : 'text-slate-300'}`} onClick={() => handleFilters('order', 'price.asc')}>ارزانترین</span>
                    <span className={`cursor-pointer ${searchParams.get('order') === 'price.desc' ? 'text-cyan-400' : 'text-slate-300'}`} onClick={() => handleFilters('order', 'price.desc')}>گرانترین</span>
                </div>
                <div className='grid grid-cols-5 gap-3 mt-3'>
                    {
                        data?.pages.map((page) => (
                            page?.data.map(product => (
                                <Link href={`/products/${product.id}`} className=' bg-slate-800 border border-slate-700 shadow-md rounded-md overflow-hidden flex flex-col' key={product.id}>
                                    <Image className='' src={product.image_url} alt={product.name} width={229} height={229} />
                                    <div className='p-2 flex flex-col gap-2'>
                                        <h3 className='line-clamp-2 h-8 text-xs'>{product.name}</h3>
                                        <div className='flex gap-1 items-center justify-end'>
                                            <span className='text-xs'>{toPersianNumber(4.4)}</span>
                                            <StarIcon className='w-4 h-4 text-yellow-400' />
                                        </div>
                                        <div className='flex justify-end'>
                                            <Price value={product.price} />
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ))
                    }
                </div>
                <div ref={loadMoreRef}></div>
            </section>
        </div>
    )
}

export default ProductsList