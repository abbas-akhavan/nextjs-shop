import React from 'react'

const Grid2BannerSkeleton = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-12'>
            {
                Array.from({ length: 2 }, (_, i) => (
                    <div key={i} className='rounded-xl w-full aspect-[5/2] skeleton-bg'>

                    </div>
                ))
            }
        </div>
    )
}

export default Grid2BannerSkeleton