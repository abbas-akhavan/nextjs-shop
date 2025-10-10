import { debounce } from "@/utils/useful-functions"
import { useEffect, useState } from "react"

export default function useMediaQuery(width: number): boolean {
    const [isMobile, setIsMobile] = useState(true)

    useEffect(() => {
        function checkMedia() {
            if (window.innerWidth < width) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }
        checkMedia();

        const handleResize = debounce(checkMedia, 200)
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [width])


    return isMobile
}