'use client'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Search = () => {
    return (
        <div className='relative w-full md:w-[500px]'>
            <div className='w-full rounded-sm bg-gray-700 text-gray-400 text-sm pr-10 py-3 cursor-pointer relative'>
                <MagnifyingGlassIcon className='size-5 absolute top-1/2 -translate-y-1/2 right-3' />
                جستجو
            </div>
        </div>
    )
}

export default Search