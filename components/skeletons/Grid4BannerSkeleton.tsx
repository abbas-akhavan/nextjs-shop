import React from 'react'

const Grid4BannerSkeleton = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-5'>
            {
                Array.from({ length: 4 }, (_, index) => (
                    <div className='skeleton-bg rounded-lg aspect-[365/274]'></div>
                ))
            }
        </div>
    )
}

export default Grid4BannerSkeleton