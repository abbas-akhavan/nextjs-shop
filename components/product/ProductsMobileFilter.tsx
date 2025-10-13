'use client'
import React, { useState } from 'react'
import MobileBottomModal from '../ui/MobileBottomModal'
import { BarsArrowDownIcon } from '@heroicons/react/24/solid'
import SortItem from './SortItem'

// const ProductsMobileFilter = ({ handleFilters }) => {
//     const [open, setOpen] = useState(false)
//     function handleCilck() {
//         console.log('click shod')
//         setOpen(false)
//     }
//     return (
//         <MobileBottomModal
//             open={open}
//             onOpenChange={setOpen}
//             title='فیلترها'
//             triggerContent={<span className='flex gap-2 items-center'><BarsArrowDownIcon className='w-6 h-6' /> مرتب سازی :</span>}
//         >
//             <SortItem
//                 active={searchParams.get('order') === 'price.asc'}
//                 onClick={() => handleFilters('order', 'price.asc')}>
//                 ارزانترین
//             </SortItem>
//             <SortItem
//                 active={searchParams.get('order') === 'price.desc'}
//                 onClick={() => handleFilters('order', 'price.desc')}>
//                 گرانترین
//             </SortItem>
//             <SortItem
//                 active={searchParams.get('order') === 'created_at.desc'}
//                 onClick={() => handleFilters('order', 'created_at.desc')}>
//                 جدیدترین
//             </SortItem>
//         </MobileBottomModal>
//     )
// }

// export default ProductsMobileFilter