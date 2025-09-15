'use client'
import React from 'react'
import { ClockLoader } from 'react-spinners'

const LoadingComponent = () => {
    return (
        <ClockLoader loading={true} color='#fff' />
    )
}

export default LoadingComponent