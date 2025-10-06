import { toPersianNumber } from '@/utils/useful-functions'
import React from 'react'

const DiscountPercent = ({ value }: { value: number }) => {
    return (
        <span className='bg-red-600 text-white rounded-full px-2 py-[2px] ltr'>{toPersianNumber(value)}%</span>
    )
}

export default DiscountPercent