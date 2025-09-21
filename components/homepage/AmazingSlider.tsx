'use client'
import { AmazingOffer } from '@/types/AmazingOffer'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import React from 'react'

import 'swiper/css';
import "swiper/css/navigation";
import AmazingOffersSliderItem from './AmazingOffersSliderItem';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

const AmazingSlider = ({ items }: { items: AmazingOffer[] }) => {
    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 2.3
                },
                480: {
                    slidesPerView: 3.3
                },
                768: {
                    slidesPerView: 4.3
                },
                1024: {
                    slidesPerView: 5.3
                },
                1280: {
                    slidesPerView: 7.3
                },
                1536: {
                    slidesPerView: 9.3
                }
            }}
            spaceBetween={5}
        >
            <SwiperSlide>
                <Link href='/incredible-offers' className='flex flex-col items-center'>
                    <Image src='/Amazings.svg' alt='پیشنهاد شگفت انگیز' width={88} height={88} />
                    <Image src='/Amazing.svg' alt='پیشنهاد شگفت انگیز' width={88} height={88} />
                    <span className='flex gap-1 items-center'>مشاهده همه <ChevronLeftIcon className='size-4' /></span>
                </Link>
            </SwiperSlide>
            {
                items.map((item, index) => (
                    <SwiperSlide >
                        <AmazingOffersSliderItem item={item} isFirst={index === 0} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default AmazingSlider