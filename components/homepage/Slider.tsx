'use client'
import React, { useEffect, useState } from 'react';
import { SliderItem } from '@/types/SliderItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from 'next/image';
import { Button } from '../ui/button';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import SliderCustomNextPrev from './SliderCustomNextPrev';
import Link from 'next/link';

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = ({ items }: { items: SliderItem[] }) => {
    const [isMounted, setIsMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const checkSize = () => setIsMobile(window.innerWidth <= 1024);
        checkSize();
        window.addEventListener('resize', checkSize);
        return () => window.removeEventListener('resize', checkSize);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <Swiper
                slidesPerView={1}
                modules={[Navigation, Autoplay, Pagination]}
                pagination={{ clickable: true }}
                navigation={{
                    nextEl: '.home-slider-custom-next',
                    prevEl: '.home-slider-custom-prev'
                }}
                autoplay={{ delay: 5000 }}
                loop
            >
                {
                    items.map(item => (
                        <SwiperSlide key={item.id}>
                            <Link href={item.link} className='block mx-auto w-[96%] lg:w-full relative min-h-[180px] h-[40vw] lg:h-[300px] xl:h-[400px]'>
                                {
                                    isMobile
                                        ? <Image
                                            src={item.mobile_image_url}
                                            alt={item.title}
                                            priority
                                            fill
                                            className='object-cover block lg:hidden rounded-md'
                                        />
                                        : <Image
                                            src={item.image_url}
                                            alt={item.title}
                                            priority
                                            fill
                                            className='object-cover hidden lg:block'
                                        />
                                }

                            </Link>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className='absolute bottom-6 right-6 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                <SliderCustomNextPrev behaviour='prev'>
                    <ChevronRightIcon className='size-4' />
                </SliderCustomNextPrev>
                <SliderCustomNextPrev behaviour='next'>
                    <ChevronLeftIcon className='size-4' />
                </SliderCustomNextPrev>
            </div>
        </>
    )
}

export default Slider