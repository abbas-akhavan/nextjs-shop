'use client'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react'

const Search = () => {
    const [showSearchComponent, setShowSearchComponent] = useState(false);
    return (
        <div className='relative w-full md:w-[500px]'>
            <div onClick={() => setShowSearchComponent(true)} className='w-full rounded-sm bg-gray-700 text-gray-400 text-sm pr-10 py-3 cursor-pointer relative'>
                <MagnifyingGlassIcon className='size-5 absolute top-1/2 -translate-y-1/2 right-3' />
                جستجو
            </div>
            <div className='absolute w-full rounded-sm bg-gray-700 shadow-md top-0 right-0 p-3 pt-0'>
                <input className='w-full pt-3 pb-2 px-2 mb-3 rounded-sm border-b border-gray-400 bg-inherit focus:outline-none' type="text" name="search" id="search" />
                <div>
                    <ul>
                        {
                            Array.from({ length: 4 }, (_, i) => (
                                <li key={i} className='flex gap-2 items-center py-2 cursor-pointer'>
                                    <MagnifyingGlassIcon className='w-5 h-5' />
                                    <span>موبایل سامسونگ</span>
                                    <ArrowUpRightIcon className='w-5 h-5 mr-auto' />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Search