import React from 'react'
import Slider from './Slider';

const SliderContainer = async () => {
    const res = await fetch('https://zpuenityjokfjhmutjjv.supabase.co/rest/v1/sliders', {
        headers: {
            apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
            Authorization: `Bearer ${process.env.SUPABASE_ANON_KEY}`
        },
        cache: 'no-store'
    });
    const data = await res.json();
    // const data = await new Promise(resolve => setTimeout(() => resolve(res.json()), 180000));
    return (
        <div className='relative group mt-5'>
            <Slider items={data} />
        </div>
    )
}

export default SliderContainer  