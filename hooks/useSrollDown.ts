import { debounce } from "@/utils/useful-functions";
import { useEffect, useRef, useState } from "react";

export default function useScrollDown(): boolean {
    let lastScroll = useRef(0);
    const [scrollDown, setScrollDown] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const currentScroll = window.scrollY;
            if (currentScroll > lastScroll.current) {
                console.log('scrolldown')
                setScrollDown(true)
            } else if (currentScroll < lastScroll.current) {
                console.log('scrollup')
                setScrollDown(false)
            }
            lastScroll.current = currentScroll;
        }

        const handleScrollEvent = debounce(handleScroll, 50)
        window.addEventListener('scroll', handleScrollEvent)

        return () => {
            window.removeEventListener('scroll', handleScrollEvent)
        }
    }, [])

    return scrollDown
}