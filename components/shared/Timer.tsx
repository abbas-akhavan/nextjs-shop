'use client'
import { TimerObject } from '@/types/TimerObject';
import { toPersianNumber } from '@/utils/useful-functions';
import React, { useEffect, useState } from 'react'

const Timer = ({ endTime }: { endTime: string }) => {
    const [timeLeft, setTimeLeft] = useState<TimerObject | null>({ hours: 0, minutes: 0, seconds: 0 })
    function calculateTimeLeft(): TimerObject | null {
        const difference = new Date(endTime).getTime() - new Date().getTime();

        if (difference <= 0) return null;
        return {
            hours: Math.floor(difference / (1000 * 60 * 60)),
            minutes: Math.floor(difference / (1000 * 60) % 60),
            seconds: Math.floor(difference / (1000) % 60),
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000)

        return () => {
            clearInterval(timer);
        }
    }, [])

    if (!timeLeft) return <p>شگفت انگیز تمام شده</p>
    return (
        <div className='flex gap-1 ltr my-1'>
            {
                Object.values(timeLeft).map((value, index, arr) => (
                    <div className='flex gap-1' key={index}>
                        <span className='bg-white text-gray-800 rounded-sm size-6 text-sm flex items-center justify-center'>
                            {toPersianNumber(Number(String(value).padStart(2, "0")))}
                        </span>
                        {
                            !(index === (arr.length - 1)) && <span>:</span>
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Timer