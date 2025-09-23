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
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';
import Timer from '../shared/Timer';
import SliderCustomNextPrev from './SliderCustomNextPrev';

const AmazingSlider = ({ items }: { items: AmazingOffer[] }) => {
    return (
        <>
            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: '.amazing-slider-custom-next',
                    prevEl: '.amazing-slider-custom-prev',
                    disabledClass: 'md:hidden'
                }}
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
                <SwiperSlide className='!hidden md:!block'>
                    <Link href='/incredible-offers' className='flex flex-col items-center'>
                        <Image src='/Amazings.svg' alt='پیشنهاد شگفت انگیز' width={88} height={88} />
                        <Timer endTime='2025-09-26T23:59:59' />
                        <Image src='/Amazing.svg' alt='پیشنهاد شگفت انگیز' width={88} height={88} />
                        <span className='flex gap-1 items-center'>مشاهده همه <ChevronLeftIcon className='size-4' /></span>
                    </Link>
                </SwiperSlide>
                {
                    items.map((item, index) => (
                        <SwiperSlide key={item.id} className={`${index === 0 ? 'pr-3 md:pr-0' : ''}`}>
                            <AmazingOffersSliderItem item={item} isFirst={index === 0} />
                        </SwiperSlide>
                    ))
                }
                <SwiperSlide className='pl-4'>
                    <Link href='/incredible-offers'
                        className={`bg-white text-gray-800 flex flex-col items-center justify-center gap-3 rounded-tl-md rounded-bl-md h-[248px]`}
                    >
                        <ArrowLeftCircleIcon className='size-14 text-cyan-500' />
                        <div className='text-xs'>مشاهده همه</div>
                    </Link>
                </SwiperSlide>
            </Swiper>
            <SliderCustomNextPrev className='hidden md:inline-flex amazing-slider-custom-prev absolute top-1/2 -translate-y-1/2 right-1 z-10'>
                <ChevronRightIcon className='size-4' />
            </SliderCustomNextPrev>
            <SliderCustomNextPrev className='hidden md:inline-flex amazing-slider-custom-next absolute top-1/2 -translate-y-1/2 left-1 z-10'>
                <ChevronLeftIcon className='size-4' />
            </SliderCustomNextPrev>
        </>

    )
}

export default AmazingSlider