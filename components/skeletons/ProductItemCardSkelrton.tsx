import React from 'react'

const ProductItemCardSkelrton = () => {
    return (
        <div className='bg-slate-800 rounded-sm flex flex-col gap-2'>
            <div className='w-full h-[229] skeleton-bg rounded-sm mx-auto'></div>
            <div className=' p-2 flex flex-col gap-2'>
                <div className='h-4 w-full skeleton-bg rounded-sm'></div>
                <div className='h-4 w-1/2 skeleton-bg rounded-sm'></div>
                <div className='h-2 w-10 skeleton-bg rounded-sm'></div>
            </div>
        </div>
    )
}

export default ProductItemCardSkelrton