import { fetchFromSupabase } from '@/utils/helpers';
import { PartnerShip } from '@/types/PartnerShip';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Grid4BannerContainer = async () => {
    const data: PartnerShip[] = await fetchFromSupabase('partner_ships', {
        select: '*',
        filters: {
            'banner_type': 'eq.square'
        },
        cache: 'no-store'
    })
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-5'>
            {
                data.map(partnerShip => (
                    <Link key={partnerShip.id} href={partnerShip.url}>
                        <Image className='rounded-xl w-full' src={partnerShip.image_url} alt={partnerShip.title} width={322} height={242} />
                    </Link>
                ))
            }
        </div>
    )
}

export default Grid4BannerContainer