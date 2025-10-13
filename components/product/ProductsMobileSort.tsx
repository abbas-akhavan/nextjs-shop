'use client'
import React, { useState } from 'react'
import MobileBottomModal from '../ui/MobileBottomModal'
import SortItem from './SortItem'
import { BarsArrowDownIcon } from '@heroicons/react/24/solid'
import { useSearchParams } from 'next/navigation'

const ProductsMobileSort = ({ handleFilters }: { handleFilters: (key: string, value: string) => void }) => {
    const [open, setOpen] = useState(false)
    const searchParams = useSearchParams();
    function handleCilck(key: string, value: string) {
        handleFilters(key, value);
        setOpen(false)
    }
    return (
        <MobileBottomModal
            open={open}
            onOpenChange={setOpen}
            title='مرتب سازی بر اساس'
            triggerContent={
                <span className='flex gap-2 items-center text-xs border border-slate-700 rounded-full py-2 px-3'>
                    <BarsArrowDownIcon className='w-5 h-5' />
                    مرتب سازی :
                </span>
            }
        >
            <SortItem
                active={searchParams.get('order') === 'price.asc'}
                onClick={() => handleCilck('order', 'price.asc')}>
                ارزانترین
            </SortItem>
            <SortItem
                active={searchParams.get('order') === 'price.desc'}
                onClick={() => handleCilck('order', 'price.desc')}>
                گرانترین
            </SortItem>
            <SortItem
                active={searchParams.get('order') === 'created_at.desc'}
                onClick={() => handleCilck('order', 'created_at.desc')}>
                جدیدترین
            </SortItem>
        </MobileBottomModal>
    )
}

export default ProductsMobileSort