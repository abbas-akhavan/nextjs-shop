'use client'
import React from 'react'

const Timer = ({ endTime }: { endTime: string }) => {
    function calculateTimeLeft() {
        const difference = new Date(endTime).getTime() - new Date().getTime();

        if (difference <= 0) return null;

        return {
            hours: 
        }
    }
    return (
        <div>Timer</div>
    )
}

export default Timer