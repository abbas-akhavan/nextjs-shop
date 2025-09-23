import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface ServiceItem {
    id: string;
    title: string;
    icon: string;
    link: string;
}

const services: ServiceItem[] = [
    {
        id: "car",
        title: "خرید خودرو",
        icon: "https://dkstatics-public.digikala.com/digikala-bellatrix/a469bd11155ddaa9fb60a2f560ea8546312c3224_1740999767.png",
        link: "/services/car",
    },
    {
        id: "handicraft",
        title: "صنایع‌دستی",
        icon: "https://dkstatics-public.digikala.com/digikala-bellatrix/17b8ecb283f7454c1893be19df8db59fb7949775_1757759831.jpg",
        link: "/services/handicraft",
    },
    {
        id: "goldcoin",
        title: "سکه طلا بفروش",
        icon: "https://dkstatics-public.digikala.com/digikala-bellatrix/b8b0bb89093a5c60e047aa222d864814031cb142_1757747575.png",
        link: "/services/goldcoin",
    },
    {
        id: "plus",
        title: "اشتراک پلاس",
        icon: "https://dkstatics-public.digikala.com/digikala-bellatrix/78ccd40cbf305fb067de78ddab5be84f69589c8d_1669150455.png",
        link: "/services/plus",
    },
    {
        id: "school",
        title: "بازگشت به مدرسه",
        icon: "https://dkstatics-public.digikala.com/digikala-bellatrix/91694dd53bead9ebe1040ac0e074ee8404f6d2ee_1755936611.png",
        link: "/services/school",
    },
    {
        id: "credit",
        title: "دریافت اعتبار",
        icon: "https://dkstatics-public.digikala.com/digikala-bellatrix/fd692c26cb058898affefef35c3d5e45673c4e0f_1758544316.png",
        link: "/services/credit",
    },
    {
        id: "digitalgold",
        title: "طلای‌دیجیتال بدون‌کارمزد",
        icon: "https://dkstatics-public.digikala.com/digikala-bellatrix/139deecc67bc7f12c6d984955c59957dc7e49385_1753977953.png",
        link: "/services/digitalgold",
    },
    {
        id: "aftoon17",
        title: "آفتون 17 ببر",
        icon: "https://dkstatics-public.digikala.com/digikala-bellatrix/4bb0b7006012e541a6a4002242d1bfe863296e4f_1713545982.png",
        link: "/services/aftoon17",
    },
    {
        id: "supermarket",
        title: "سوپرمارکت",
        icon: "https://dkstatics-public.digikala.com/digikala-bellatrix/ae38dbd3afc0bf8a3f61b02417dbb526ba3a4882_1757749119.png",
        link: "/services/supermarket",
    }
];


async function getData() {
    await new Promise(resolve => setTimeout(resolve, 3000))
    return services
}
const ServicesContainer = async () => {
    const data = await getData();
    return (
        <div className='mt-5 flex justify-around gap-6 overflow-auto overflow-y-hidden hide-scrollbar'>
            {
                data.map(service => (
                    <Link key={service.id} href={service.link} className='flex flex-col gap-2 items-center w-14 shrink-0'>
                        <Image className=' rounded-full' src={service.icon} alt={service.title} width={52} height={52} />
                        <span className='text-xs md:text-sm text-center'>{service.title}</span>
                    </Link>
                ))
            }
            <div className='flex flex-col gap-2 items-center w-14 shrink-0'>
                <div className='size-[52px] rounded-full flex items-center justify-center bg-slate-400'>
                    <EllipsisHorizontalIcon className='size-8' />
                </div>
                <span className='text-sm md:text-sm text-center'>بیشتر</span>
            </div>
        </div >
    )
}

export default ServicesContainer