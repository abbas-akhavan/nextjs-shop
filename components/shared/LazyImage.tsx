'use client'
import Image, { ImageProps } from 'next/image';
import React, { useEffect, useRef, useState } from 'react'

interface LazyImageProps {
    src: string;
    alt: string;
    width: number
    height: number;
    className?: string;

}
const LazyImage = ({ src, alt, width, height, className }: LazyImageProps) => {
    const imgRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        if (!imgRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '100px', // قبل از اینکه تصویر وارد ویو شود، شروع به لود می‌کند
                threshold: 0.1,
            }
        );

        observer.observe(imgRef.current);

        return () => {
            observer.disconnect();
        };
    }, [])
    return (
        <img
            ref={imgRef}
            src={isVisible ? src : undefined} // اگر visible نبود، src نده
            alt={alt}
            width={width}
            height={height}
            className={className ? className : ''}

        />
    )
}

export default LazyImage