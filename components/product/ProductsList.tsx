'use client'
import { Product } from '@/types/Product';
import { fetchFromSupabaseWithAxios } from '@/utils/helpers';
import { BarsArrowDownIcon, CheckIcon } from '@heroicons/react/24/solid';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import CollabsibleContent from '../shared/CollabsibleContent';
import SortItem from './SortItem';
import ProductItemCard from './ProductItemCard';
import { Category } from '@/types/Category';
import CategoryFilterItem from './CategoryFilterItem';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import toast from 'react-hot-toast';
import ProductItemCardSkelrton from '../skeletons/ProductItemCardSkelrton';
import Spiner from '../Spiner';

const ProductsList = () => {
    // http://localhost:3005/products?category_id=eq.1&order=price.desc
    const router = useRouter()
    const searchParams = useSearchParams();
    const filters = Object.fromEntries(searchParams.entries())
    const productPerPage = 10;
    const loadMoreRef = useRef<HTMLDivElement | null>(null);
    const [floorPrice, setFloorPrice] = useState(() => {
        const priceParam = searchParams.get('and');
        if (priceParam?.includes('price')) {
            const floorAndCeilPrice = priceParam.match(/\d+/g);
            if (floorAndCeilPrice?.length === 2) {
                return floorAndCeilPrice[0]
            }
            else {
                return ''
            }
        } else {
            return ''
        }
    })
    const [ceilPrice, setCeilPrice] = useState(() => {
        const priceParam = searchParams.get('and');
        if (priceParam?.includes('price')) {
            const floorAndCeilPrice = priceParam.match(/\d+/g);
            if (floorAndCeilPrice?.length === 2) {
                return floorAndCeilPrice[1]
            }
            else {
                return ''
            }
        } else {
            return ''
        }
    })

    function handleFilters(key: string, value: string) {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set(key, value)
        } else {
            params.delete(key);
        }

        router.push(`?${params.toString()}`)
    }
    function handleChangeCheckBox(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.checked) {
            handleFilters('category_id', `eq.${e.target.value}`)
        } else {
            handleFilters('category_id', '')
        }

    }
    function handleApplyPrice() {
        if (ceilPrice.trim() && floorPrice.trim()) {
            handleFilters('and', `(price.gte.${floorPrice},price.lte.${ceilPrice})`)
        } else if (ceilPrice.trim() || floorPrice.trim()) {
            toast.error('لطفا هر دو مقدار را وارد کنید')
        } else {
            handleFilters('and', '')
        }
    }

    function handlePriceChange(key: string, value: string) {
        if (Number(value) || value === '') {
            if (key === 'floor') {
                setFloorPrice(value)
            } else if (key === 'ceil') {
                setCeilPrice(value)
            }
        }
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
    const {
        error: categoryError,
        isLoading: categoryIsLoading,
        data: categories
    } = useQuery<{ data: Category[], totalRows: number, currentRow: number }>({
        queryKey: ['categories'],
        queryFn: () => fetchFromSupabaseWithAxios('categories', {
            select: '*'
        })
    })

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
                <div className='border rounded-md border-slate-700 bg-slate-800 sticky top-20 p-4'>
                    <div className='text-lg font-semibold'>فیلترها</div>
                    <CollabsibleContent title='دسته بندی'>
                        <CategoryFilterItem
                            key='all-category'
                            title='همه کالاها'
                            active={!searchParams.get('category_id')}
                            onClick={() => handleFilters('category_id', '')}
                        />
                        {
                            categories?.data.map(category => (
                                <CategoryFilterItem
                                    key={category.id}
                                    title={category.name}
                                    active={searchParams.get('category_id') === `eq.${category.id}`}
                                    onClick={() => handleFilters('category_id', `eq.${category.id}`)}
                                />
                            ))
                        }
                    </CollabsibleContent>
                    <CollabsibleContent title='محدوده قیمت'>
                        <div className='flex flex-col items-center gap-3'>
                            <div className='flex gap-2 items-center w-full'>
                                <span className='w-4 shrink-0'>از</span>
                                <Input className='border-slate-600 ltr' value={floorPrice} onChange={(e) => handlePriceChange('floor', e.target.value)} />
                                <span>تومان</span>
                            </div>
                            <div className='flex gap-2 items-center w-full'>
                                <span className='w-4 shrink-0'>تا</span>
                                <Input className='border-slate-600 ltr' value={ceilPrice} onChange={(e) => handlePriceChange('ceil', e.target.value)} />
                                <span>تومان</span>
                            </div>
                            <Button className='border border-slate-700 bg-transparent hover:bg-slate-950' onClick={handleApplyPrice}>اعمال محدوده قیت</Button>
                        </div>

                    </CollabsibleContent>
                </div>
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