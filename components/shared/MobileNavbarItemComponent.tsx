'use client'
import { MobileNavbarItem } from '@/types/MobileNavbarItem';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Badge from './Badge';

const MobileNavbarItemComponent = ({ item, badge }: { item: MobileNavbarItem, badge?: number }) => {
    const path = usePathname();
    const showBadge = badge && badge > 0;
    return (
        <Link href={item.url} className='flex flex-col gap-1 items-center relative'>
            {
                path === item.url
                    ? item.activeIcon
                    : item.icon
            }
            <span className='text-xs'>{item.title}</span>
            {
                showBadge && <Badge value={badge} className='absolute top-0 -right-2' />
            }
        </Link>
    )
}

export default MobileNavbarItemComponent