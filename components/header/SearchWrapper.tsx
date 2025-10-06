'use client'
import useDebounce from '@/hooks/useDebounce';
import useAppStore from '@/store/useAppStore';
import { debounce } from '@/utils/debounce';
import { fetchFromSupabase } from '@/utils/supabase-ssr';
import { ArrowUpRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useRef, useState } from 'react'
import Spiner from '../Spiner';
import { Product } from '@/types/Product';

type SearchWrapperProp = {
    setShowSearchWrapper: React.Dispatch<React.SetStateAction<boolean>>
}
const SearchWrapper = ({ setShowSearchWrapper }: SearchWrapperProp) => {
    const searchInputRef = useRef<HTMLInputElement>(null);
    const searchWrapperRef = useRef<HTMLDivElement>(null);
    const setOverlay = useAppStore(state => state.setOverlay)
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSerchTerm = useDebounce(searchTerm, 1000);

    function handleChangeSearchInput(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchTerm(event.target.value)
    }

    const { data, error, isLoading } = useQuery<Product[]>({
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
                setShowSearchWrapper(false)
                setOverlay(false)
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
            <input ref={searchInputRef} onChange={handleChangeSearchInput} className='w-full pt-3 pb-2 px-2 mb-3 rounded-sm border-b border-gray-400 bg-inherit focus:outline-none' type="text" name="search" id="search" />
            <div>
                {
                    isLoading
                        ? <Spiner />
                        : <ul>
                            {
                                data?.map(product => (
                                    <li key={product.id} className='flex gap-2 items-center py-2 cursor-pointer'>
                                        <MagnifyingGlassIcon className='w-5 h-5 shrink-0' />
                                        <span>{product.name}</span>
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