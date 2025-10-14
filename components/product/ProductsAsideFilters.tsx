import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import CollabsibleContent from '../shared/CollabsibleContent';
import CategoryFilterItem from './CategoryFilterItem';
import { useQuery } from '@tanstack/react-query';
import { Category } from '@/types/Category';
import { fetchFromSupabaseWithAxios } from '@/utils/helpers';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import toast from 'react-hot-toast';
import useScrollDown from '@/hooks/useSrollDown';

const ProductsAsideFilters = ({ handleFilters }: { handleFilters: (key: string, value: string) => void }) => {
    const scrollDown = useScrollDown()
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

    function handleChangeCheckBox(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.checked) {
            handleFilters('category_id', `eq.${e.target.value}`)
        } else {
            handleFilters('category_id', '')
        }

    }
    function handleApplyPrice() {
        if (ceilPrice.trim() && floorPrice.trim()) {
            handleFilters('and', `(price.gte.${floorPrice},price.lte.${ceilPrice})`)
        } else if (ceilPrice.trim() || floorPrice.trim()) {
            toast.error('لطفا هر دو مقدار را وارد کنید')
        } else {
            handleFilters('and', '')
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
        <div className={`border rounded-md border-slate-700 bg-slate-800 sticky p-4 ${scrollDown ? 'top-20' : 'top-[120px]'}`}>
            <div className='text-lg font-semibold'>فیلترها</div>
            <CollabsibleContent title='دسته بندی'>
                <CategoryFilterItem
                    key='all-category'
                    title='همه کالاها'
                    active={!searchParams.get('category_id')}
                    onClick={() => handleFilters('category_id', '')}
                />
                {
                    categories?.data.map(category => (
                        <CategoryFilterItem
                            key={category.id}
                            title={category.name}
                            active={searchParams.get('category_id') === `eq.${category.id}`}
                            onClick={() => handleFilters('category_id', `eq.${category.id}`)}
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
        </div>

    )
}

export default ProductsAsideFilters