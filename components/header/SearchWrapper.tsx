'use client'
import useDebounce from '@/hooks/useDebounce';
import useAppStore from '@/store/useAppStore';
import { fetchFromSupabase } from '@/utils/supabase-ssr';
import { ArrowUpRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useRef, useState } from 'react'
import Spiner from '../Spiner';
import { Product } from '@/types/Product';
import { useRouter } from 'next/navigation';
import SearchHistory from './SearchHistory';

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
        setShowSearchWrapper(false);
        setOverlay(false);
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    const { data: searchResults, error, isLoading } = useQuery<Product[]>({
        queryKey: ['searchTerm', debouncedSerchTerm],
        queryFn: () => fetchFromSupabase('products', {
            select: '*',
            filters: {
                'name': `ilike.*${debouncedSerchTerm}*`
            }
        }),
        enabled: !!debouncedSerchTerm
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
        <div ref={searchWrapperRef} className='absolute w-full rounded-sm bg-gray-700 shadow-md top-0 right-0 p-3 pt-0'>
            <input autoComplete='off' ref={searchInputRef} onChange={handleChangeSearchInput} className='w-full pt-3 pb-2 px-2 mb-3 rounded-sm border-b border-gray-400 bg-inherit focus:outline-none' type="text" name="search" id="search" />
            <div >
                {
                    (!debouncedSerchTerm && searchHistory.length > 0)
                        ? <SearchHistory searchHistory={searchHistory} hideSearchWrapper={hideSearchWrapper} />
                        : isLoading
                            ? <Spiner className='mx-auto w-6 h-6 my-7' />
                            : <ul>
                                {
                                    searchResults?.map(product => (
                                        <li onClick={() => handleClickWrapperItems(product)} key={product.id} className='flex gap-2 items-center py-1 cursor-pointer'>
                                            <MagnifyingGlassIcon className='w-5 h-5 shrink-0' />
                                            <span className=' line-clamp-1 h-7'>{product.name}</span>
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