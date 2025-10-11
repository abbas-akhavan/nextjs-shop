'use client'
import useDebounce from '@/hooks/useDebounce';
import useAppStore from '@/store/useAppStore';
import { fetchFromSupabase, fetchFromSupabaseWithAxios } from '@/utils/helpers';
import { ArrowRightIcon, ArrowUpRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useRef, useState } from 'react'
import Spiner from '../Spiner';
import { Product } from '@/types/Product';
import { useRouter } from 'next/navigation';
import SearchHistory from './SearchHistory';
import { Button } from '../ui/button';

type SearchWrapperProp = {
    setShowSearchWrapper: React.Dispatch<React.SetStateAction<boolean>>
}
const SearchWrapper = ({ setShowSearchWrapper }: SearchWrapperProp) => {
    const searchInputRef = useRef<HTMLInputElement>(null);
    const searchWrapperRef = useRef<HTMLDivElement>(null);
    const setOverlay = useAppStore(state => state.setOverlay);
    const addSearchHistory = useAppStore(state => state.addSearchHistory);
    const searchHistory = useAppStore(state => state.searchHistory);
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSerchTerm = useDebounce(searchTerm, 700);
    const router = useRouter();

    function handleChangeSearchInput(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchTerm(event.target.value)
    }
    function handleClickWrapperItems(product: Product) {
        hideSearchWrapper()
        addSearchHistory({ title: product.name, url: `/products/${product.id}` })
        router.push(`/products/${product.id}`);
    }
    function hideSearchWrapper() {
        document.body.classList.remove("overflow-hidden")
        setShowSearchWrapper(false);
        setOverlay(false);
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    const { data: searchResults, error, isLoading } = useQuery<{ data: Product[]; total: any }>({
        queryKey: ['searchTerm', debouncedSerchTerm],
        queryFn: () => fetchFromSupabaseWithAxios('products', {
            select: '*',
            filters: {
                'name': `ilike.*${debouncedSerchTerm}*`
            }
        }),
        enabled: !!debouncedSerchTerm,
        retry: 2,
        retryDelay: 5000,
        staleTime: 1000 * 60 * 3,
    })

    useEffect(() => {
        function handleClickOutSide(event: MouseEvent) {
            if (searchWrapperRef.current && !searchWrapperRef.current.contains(event.target as Node)) {
                hideSearchWrapper()
            }
        }
        document.addEventListener('mousedown', handleClickOutSide);

        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }

        return () => document.removeEventListener('mousedown', handleClickOutSide)
    }, []);

    return (
        <div ref={searchWrapperRef} className='fixed top-0 right-0 w-screen h-screen text-sm p-3 rounded-sm bg-slate-700 shadow-md md:h-auto md:text-base md:w-full md:absolute md:pt-0'>
            <div className='w-full relative mb-4 md:mb-3'>
                <Button onClick={hideSearchWrapper} className='top-1/2 right-0 -translate-y-1/2 bg-inherit absolute px-3 md:hidden shadow-none'>
                    <ArrowRightIcon className='!w-6 !h-6' />
                </Button>
                <input
                    autoComplete='off'
                    ref={searchInputRef}
                    onChange={handleChangeSearchInput}
                    className='w-full py-3 px-3 pr-10 rounded-sm border-slate-400 bg-slate-600 md:px-2 md:pt-3 md:bg-inherit md:border-b focus:outline-none' type="text" name="search" id="search" />
            </div>
            <div >
                {
                    (!debouncedSerchTerm && searchHistory.length > 0)
                        ? <SearchHistory searchHistory={searchHistory} hideSearchWrapper={hideSearchWrapper} />
                        : isLoading
                            ? <Spiner className='mx-auto w-6 h-6 my-7' />
                            : <ul>
                                {
                                    searchResults?.data?.map(product => (
                                        <li onClick={() => handleClickWrapperItems(product)} key={product.id} className='flex gap-2 items-center py-2 cursor-pointer md:py-1'>
                                            <MagnifyingGlassIcon className='w-5 h-5 shrink-0' />
                                            <span className=' line-clamp-1 h-5 md:h-7'>{product.name}</span>
                                            <ArrowUpRightIcon className='w-5 h-5 mr-auto shrink-0' />
                                        </li>))
                                }
                            </ul>
                }
            </div>
        </div>
    )
}

export default SearchWrapper