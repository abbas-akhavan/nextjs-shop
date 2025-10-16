import { fetchFromSupabase } from '@/utils/helpers';
import { PartnerShip } from '@/types/PartnerShip';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import LazyImage from '../shared/LazyImage';

const Grid2BannerContainer = async () => {
    const data: PartnerShip[] = await fetchFromSupabase('partner_ships', {
        select: '*',
        filters: {
            'banner_type': 'eq.rectangle'
        },
        cache: 'no-store'
    });
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-12'>
            {
                data.map(partnerShip => (
                    <Link key={partnerShip.id} href={partnerShip.url}>
                        <LazyImage className='rounded-xl w-full' src={partnerShip.image_url} alt={partnerShip.title} width={820} height={328} />
                    </Link>
                ))
            }
        </div>
    )
}

export default Grid2BannerContainer