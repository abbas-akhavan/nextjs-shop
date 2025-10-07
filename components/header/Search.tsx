'use client'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import SearchWrapper from './SearchWrapper';
import useAppStore from '@/store/useAppStore';

const Search = () => {
    const [showSearchWrapper, setShowSearchWrapper] = useState<boolean>(false);
    const setOverlay = useAppStore(state => state.setOverlay)

    function showSearchWrapperFn() {
        window.history.replaceState(null, "", "#search");
        setShowSearchWrapper(true);
        setOverlay(true)
        document.body.classList.add("overflow-hidden")
    }

    useEffect(() => {
        if (window.location.hash === '#search') {
            showSearchWrapperFn()
        }
    }, [])

    return (
        <div className='relative w-full md:w-[600px]'>
            <div onClick={() => showSearchWrapperFn()} className='w-full rounded-sm bg-gray-700 text-gray-400 text-sm pr-10 py-3 cursor-pointer relative'>
                <MagnifyingGlassIcon className='size-5 absolute top-1/2 -translate-y-1/2 right-3' />
                جستجو
            </div>
            {
                showSearchWrapper &&
                <SearchWrapper setShowSearchWrapper={setShowSearchWrapper} />
            }
        </div>
    )
}

export default Search