import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoriesSkeleton = () => {
    return (
        <div className='flex flex-col items-center mt-8 overflow-hidden'>
            <h3 className='text-sm sm:text-2xl'>خرید بر اساس دسته بندی</h3>
            <div className='overflow-auto overflow-y-hidden hide-scrollbar flex gap-8 md:gap-16 mt-8'>
                {
                    Array.from({ length: 9 }, (_, i) => (
                        <div key={i} className='flex flex-col gap-6 md:gap-6 shrink-0'>
                            {
                                Array.from({ length: 2 }, (category, i) => (
                                    <div key={i} className='flex flex-col gap-3 items-center'>
                                        <div className='skeleton-bg rounded-full size-20 md:size-[95px]' />
                                        <span className='skeleton-bg w-14 h-3 rounded-sm'></span>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoriesSkeleton