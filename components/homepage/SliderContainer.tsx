import React from 'react'
import Slider from './Slider';
import { fetchFromSupabase } from '@/utils/supabase-ssr';
import { SliderItem } from '@/types/SliderItem';

const SliderContainer = async () => {
    const sliders: SliderItem[] = await fetchFromSupabase('sliders', {
        select: '*',
        next: {
            revalidate: 0
        }
    });
    // const data = await new Promise(resolve => setTimeout(() => resolve(res.json()), 180000));
    return (
        <div className='relative group mt-5'>
            <Slider items={sliders} />
        </div>
    )
}

export default SliderContainer  