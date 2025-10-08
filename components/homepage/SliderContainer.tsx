import React from 'react'
import Slider from './Slider';
import { fetchFromSupabase } from '@/utils/helpers';
import { SliderItem } from '@/types/SliderItem';

const SliderContainer = async () => {
    const sliders: SliderItem[] = await fetchFromSupabase('sliders', {
        select: '*',
        cache: 'no-store'
    });
    // const data = await new Promise(resolve => setTimeout(() => resolve(res.json()), 180000));
    return (
        <div className='relative group mt-5 min-h-[180px] h-[40vw] lg:h-[300px] xl:h-[400px]'>
            <Slider items={sliders} />
        </div>
    )
}

export default SliderContainer  