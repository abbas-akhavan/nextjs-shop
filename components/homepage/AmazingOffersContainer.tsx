import { AmazingOffer } from '@/types/AmazingOffer';
import React from 'react'
import AmazingSlider from './AmazingSlider';
import Image from 'next/image';
import Timer from '../shared/Timer';
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { supabase } from '@/utils/supabaseClient';
import { fetchFromSupabase } from '@/utils/supabase-ssr';

const AmazingOffersContainer = async () => {
    const amazingOffers: AmazingOffer[] = await fetchFromSupabase('amazing_offers', {
        'select': '*,products(*)'
    });
    return (
        <div className='mt-5'>
            <div className='bg-red-600 py-4 rounded-xl relative'>
                <div className='flex md:hidden gap-2 pb-3 px-4'>
                    <Image src='/Amazing.svg' alt='پیشنهاد شگفت انگیز' width={27} height={27} />
                    <Image src='/MobileAmazing.svg' alt='پیشنهاد شگفت انگیز' width={108} height={20} />
                    <Timer endTime='2025-09-28T23:59:59' />
                    <Link href='/incredible-offers' className='flex mr-auto text-xs items-center'>همه <ChevronLeftIcon className='size-3' /></Link>
                </div>
                <AmazingSlider items={amazingOffers} />
            </div>
        </div>
    )
}

export default AmazingOffersContainer