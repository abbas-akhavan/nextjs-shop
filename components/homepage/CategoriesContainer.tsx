import { fetchFromSupabase } from '@/utils/helpers';
import { chunk } from '@/utils/useful-functions';
import { Category } from '@/types/Category';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const CategoriesContainer = async () => {
    const data: Category[] = await fetchFromSupabase('categories', {
        select: '*',
        cache: 'no-store'
    });
    const chunkedData: Category[][] = chunk<Category>(data, 2);
    return (
        <div className='flex flex-col items-center mt-8 overflow-hidden'>
            <h3 className='text-sm sm:text-xl'>خرید بر اساس دسته بندی</h3>
            <div className='overflow-auto overflow-y-hidden hide-scrollbar flex gap-6 md:gap-16 mt-8 max-w-full'>
                {
                    Array.from({ length: 2 }, (_, i) => (
                        chunkedData.map((group, i) => (
                            <div key={i} className='w-20 md:w-auto flex flex-col gap-6 md:gap-6 shrink-0'>
                                {
                                    group.map((category, i) => (
                                        <Link href={`products/${category.id}`} key={i} className='flex flex-col gap-3 items-center'>
                                            <Image className='rounded-full size-16 md:size-24' src={category.image_url} alt={category.name} width={85} height={85} />
                                            <span className='text-xs md:text-sm text-center'>{category.name}</span>
                                        </Link>
                                    ))
                                }
                            </div>
                        ))
                    ))
                }
            </div>
        </div>
    )
}

export default CategoriesContainer