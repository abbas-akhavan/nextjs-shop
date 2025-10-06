import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import SearchWrapper from './SearchWrapper';
import useAppStore from '@/store/useAppStore';

const Search = () => {
    const [showSearchWrapper, setShowSearchWrapper] = useState<boolean>(false);
    const setOverlay = useAppStore(state => state.setOverlay)

    function handleOnCilckSearch() {
        setShowSearchWrapper(true);
        setOverlay(true)
    }

    return (
        <div className='relative w-full md:w-[500px]'>
            <div onClick={handleOnCilckSearch} className='w-full rounded-sm bg-gray-700 text-gray-400 text-sm pr-10 py-3 cursor-pointer relative'>
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