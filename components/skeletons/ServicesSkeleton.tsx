import React from 'react'

const ServicesSkeleton = () => {
    return (
        <div className='mt-5 flex justify-around gap-6 overflow-auto overflow-y-hidden hide-scrollbar'>
            {
                Array.from({ length: 13 }, (_, index) => (
                    <div className='flex flex-col gap-2 items-center w-14 shrink-0'>
                        <div className='size-[52px] rounded-full skeleton-bg'>
                        </div>
                        <span className='text-sm text-center skeleton-bg w-full h-4 rounded-md'></span>
                    </div>
                ))
            }

        </div>
    )
}

export default ServicesSkeleton