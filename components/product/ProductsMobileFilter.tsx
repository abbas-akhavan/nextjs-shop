'use client'
import React, { useState } from 'react'
import MobileBottomModal from '../ui/MobileBottomModal'
import { BarsArrowDownIcon } from '@heroicons/react/24/solid'
import SortItem from './SortItem'
import { useSearchParams } from 'next/navigation'
import { FunnelIcon } from '@heroicons/react/24/outline'
import toast from 'react-hot-toast'
import { useQuery } from '@tanstack/react-query'
import { Category } from '@/types/Category'
import { fetchFromSupabaseWithAxios } from '@/utils/helpers'
import CollabsibleContent from '../shared/CollabsibleContent'
import CategoryFilterItem from './CategoryFilterItem'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const ProductsMobileFilter = ({ handleFilters }: { handleFilters: (key: string, value: string) => void }) => {
    const [open, setOpen] = useState(false)
    const searchParams = useSearchParams();
    const [floorPrice, setFloorPrice] = useState(() => {
        const priceParam = searchParams.get('and');
        if (priceParam?.includes('price')) {
            const floorAndCeilPrice = priceParam.match(/\d+/g);
            if (floorAndCeilPrice?.length === 2) {
                return floorAndCeilPrice[0]
            }
            else {
                return ''
            }
        } else {
            return ''
        }
    })
    const [ceilPrice, setCeilPrice] = useState(() => {
        const priceParam = searchParams.get('and');
        if (priceParam?.includes('price')) {
            const floorAndCeilPrice = priceParam.match(/\d+/g);
            if (floorAndCeilPrice?.length === 2) {
                return floorAndCeilPrice[1]
            }
            else {
                return ''
            }
        } else {
            return ''
        }
    })
    function handleApplyPrice() {
        if (ceilPrice.trim() && floorPrice.trim()) {
            handleFilters('and', `(price.gte.${floorPrice},price.lte.${ceilPrice})`);
            setOpen(false);
        } else if (ceilPrice.trim() || floorPrice.trim()) {
            toast.error('لطفا هر دو مقدار را وارد کنید')
        } else {
            handleFilters('and', '')
            setOpen(false)
        }
    }
    function handlePriceChange(key: string, value: string) {
        if (Number(value) || value === '') {
            if (key === 'floor') {
                setFloorPrice(value)
            } else if (key === 'ceil') {
                setCeilPrice(value)
            }
        }
    }
    function handleCilck(key: string, value: string) {
        handleFilters(key, value);
        setOpen(false)
    }

    const {
        error: categoryError,
        isLoading: categoryIsLoading,
        data: categories
    } = useQuery<{ data: Category[], totalRows: number, currentRow: number }>({
        queryKey: ['categories'],
        queryFn: () => fetchFromSupabaseWithAxios('categories', {
            select: '*'
        })
    })
    return (
        <MobileBottomModal
            fill={true}
            open={open}
            onOpenChange={setOpen}
            title='فیلترها'
            triggerContent={
                <span className='flex gap-2 items-center text-xs border border-slate-700 rounded-full py-2 px-3'>
                    <FunnelIcon className='w-5 h-5' />
                    فیلتر
                </span>
            }
        >
            <CollabsibleContent title='دسته بندی'>
                <CategoryFilterItem
                    key='all-category'
                    title='همه کالاها'
                    active={!searchParams.get('category_id')}
                    onClick={() => handleCilck('category_id', '')}
                />
                {
                    categories?.data.map(category => (
                        <CategoryFilterItem
                            key={category.id}
                            title={category.name}
                            active={searchParams.get('category_id') === `eq.${category.id}`}
                            onClick={() => handleCilck('category_id', `eq.${category.id}`)}
                        />
                    ))
                }
            </CollabsibleContent>
            <CollabsibleContent title='محدوده قیمت'>
                <div className='flex flex-col items-center gap-3'>
                    <div className='flex gap-2 items-center w-full'>
                        <span className='w-4 shrink-0'>از</span>
                        <Input className='border-slate-600 ltr' value={floorPrice} onChange={(e) => handlePriceChange('floor', e.target.value)} />
                        <span>تومان</span>
                    </div>
                    <div className='flex gap-2 items-center w-full'>
                        <span className='w-4 shrink-0'>تا</span>
                        <Input className='border-slate-600 ltr' value={ceilPrice} onChange={(e) => handlePriceChange('ceil', e.target.value)} />
                        <span>تومان</span>
                    </div>
                    <Button className='border border-slate-700 bg-transparent hover:bg-slate-950' onClick={handleApplyPrice}>اعمال محدوده قیت</Button>
                </div>

            </CollabsibleContent>
        </MobileBottomModal>
    )
}

export default ProductsMobileFilter