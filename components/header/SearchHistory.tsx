'use client'
import useAppStore from '@/store/useAppStore'
import { searchHistory } from '@/types/AppStateTypes'
import { ClockIcon, TrashIcon } from '@heroicons/react/24/outline'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'
import React from 'react'

const SearchHistory = ({ searchHistory, hideSearchWrapper }: { searchHistory: searchHistory[], hideSearchWrapper: () => void }) => {
    const clearSearchHistory = useAppStore(state => state.clearSearchHistory);
    const router = useRouter();

    function handleSearchHistoryItems(url: string) {
        hideSearchWrapper()
        router.push(url);
    }

    return (
        <div className='mt-2'>
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <ClockIcon className='w-5 h-6' />
                    آخرین جستجوهای شما
                </div>
                <TrashIcon onClick={clearSearchHistory} className='w-5 h-6 cursor-pointer' />
            </div>
            <div className='flex gap-2 mt-4 flex-wrap'>
                {
                    searchHistory.map(item => (
                        <span key={item.title} onClick={() => handleSearchHistoryItems(item.url)} className='flex gap-2 items-center border border-gray-500 rounded-full py-2 px-3 text-sm cursor-pointer'>
                            {
                                item.title.length < 20
                                    ? item.title
                                    : `${item.title.slice(0, 20)} ...`
                            }
                            <ChevronLeftIcon className='w-4 h-4' />
                        </span>
                    ))
                }
            </div>
        </div>
    )
}

export default SearchHistory