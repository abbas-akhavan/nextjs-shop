import React from 'react'

const AmazingOffersSkeleton = () => {
    return (
        <div className="h-[268px] container mx-auto mt-5 px-2">
            <div className="skeleton-bg w-full h-full rounded-xl flex gap-2 p-4 overflow-hidden">
                {
                    Array.from({ length: 13 }, (_, index) => (
                        <div key={index} className='bg-slate-400 h-full rounded-sm flex flex-col gap-2 p-2'>
                            <div className='size-[132px] skeleton-bg rounded-sm mx-auto'></div>
                            <div className='h-4 w-2/3 skeleton-bg rounded-sm'></div>
                            <div className='h-4 w-1/2 skeleton-bg rounded-sm'></div>
                            <div className='h-2 w-full skeleton-bg rounded-sm mt-3'></div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AmazingOffersSkeleton