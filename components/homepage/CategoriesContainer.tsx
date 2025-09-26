import { Category } from '@/types/Category';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


const categories: Category[] = [
    {
        id: "category1",
        title: "موبایل",
        image_url: "https://dkstatics-public.digikala.com/digikala-mega-menu/09a98a13c782e12a245930b4515d243b17734a33_1740299441.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/categories/mobile",
    },
    {
        id: "category2",
        title: "لپ تاپ",
        image_url: "https://dkstatics-public.digikala.com/digikala-mega-menu/7cf1fed6dac6bdfd1b888db6bf8f443ea680244b_1748692252.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/categories/mobile",
    },
    {
        id: "category3",
        title: "لوازم تحریر",
        image_url: "https://dkstatics-public.digikala.com/digikala-mega-menu/56caeb8b238d670d0c8829cdfd4ed5f181cec7be_1755420656.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/categories/stationery",
    },
    {
        id: "category4",
        title: "طلا و نقزه",
        image_url: "https://dkstatics-public.digikala.com/digikala-mega-menu/78135af4274ad7b7fcdaec7e5912689e5f5db96a_1740299548.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/categories/jewel",
    },
    {
        id: "category5",
        title: "تجهیزات پزشکی و سلامت",
        image_url: "https://dkstatics-public.digikala.com/digikala-mega-menu/deb3f514c62761797eb6a49e1559268b8bce3219_1740299561.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/categories/medical-health-equipment",
    },
    {
        id: "category6",
        title: "کتاب و هنر",
        image_url: "https://dkstatics-public.digikala.com/digikala-mega-menu/0cdf9c404e509371c3177a334be948a7e500419c_1740299574.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/categories/book",
    },
    {
        id: "category7",
        title: "کالای دیجیتال",
        image_url: "https://dkstatics-public.digikala.com/digikala-mega-menu/151ec29bae111afd3b6a0e71cec5c4c26f1c3014_1740299456.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/categories/digital-product",
    },
    {
        id: "category8",
        title: "ورزش و سفر",
        image_url: "https://dkstatics-public.digikala.com/digikala-mega-menu/4d4582205d0d5045c2bd94c5e910bbb49ae4fd4e_1740299590.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/categories/sport",
    },
    {
        id: "category1",
        title: "موبایل",
        image_url: "https://dkstatics-public.digikala.com/digikala-mega-menu/09a98a13c782e12a245930b4515d243b17734a33_1740299441.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/categories/mobile",
    },
    {
        id: "category2",
        title: "لپ تاپ",
        image_url: "https://dkstatics-public.digikala.com/digikala-mega-menu/7cf1fed6dac6bdfd1b888db6bf8f443ea680244b_1748692252.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/categories/mobile",
    },
    {
        id: "category3",
        title: "لوازم تحریر",
        image_url: "https://dkstatics-public.digikala.com/digikala-mega-menu/56caeb8b238d670d0c8829cdfd4ed5f181cec7be_1755420656.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/categories/stationery",
    },
    {
        id: "category4",
        title: "طلا و نقزه",
        image_url: "https://dkstatics-public.digikala.com/digikala-mega-menu/78135af4274ad7b7fcdaec7e5912689e5f5db96a_1740299548.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/categories/jewel",
    },
    {
        id: "category5",
        title: "تجهیزات پزشکی و سلامت",
        image_url: "https://dkstatics-public.digikala.com/digikala-mega-menu/deb3f514c62761797eb6a49e1559268b8bce3219_1740299561.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/categories/medical-health-equipment",
    },
    {
        id: "category6",
        title: "کتاب و هنر",
        image_url: "https://dkstatics-public.digikala.com/digikala-mega-menu/0cdf9c404e509371c3177a334be948a7e500419c_1740299574.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/categories/book",
    },
    {
        id: "category7",
        title: "کالای دیجیتال",
        image_url: "https://dkstatics-public.digikala.com/digikala-mega-menu/151ec29bae111afd3b6a0e71cec5c4c26f1c3014_1740299456.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/categories/digital-product",
    },
    {
        id: "category8",
        title: "ورزش و سفر",
        image_url: "https://dkstatics-public.digikala.com/digikala-mega-menu/4d4582205d0d5045c2bd94c5e910bbb49ae4fd4e_1740299590.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        link: "/categories/sport",
    },
]
async function getData() {
    await new Promise(resolve => setTimeout(resolve, 3000))
    return categories
}

function chunk<T>(array: T[], size: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size))
    }

    return result
}
const CategoriesContainer = async () => {
    const data = await getData();
    const chunkedData: Category[][] = chunk<Category>(data, 2);
    return (
        <div className='flex flex-col items-center mt-8 overflow-hidden'>
            <h3 className='text-sm sm:text-xl'>خرید بر اساس دسته بندی</h3>
            <div className='overflow-auto overflow-y-hidden hide-scrollbar flex gap-8 md:gap-16 mt-8 max-w-full'>
                {
                    chunkedData.map((group, i) => (
                        <div key={i} className='flex flex-col gap-6 md:gap-6 shrink-0'>
                            {
                                group.map((category, i) => (
                                    <Link href={category.link} key={i} className='flex flex-col gap-3 items-center'>
                                        <Image className='rounded-full size-20 md:size-24' src={category.image_url} alt={category.title} width={85} height={85} />
                                        <span className='text-xs md:text-sm '>{category.title}</span>
                                    </Link>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoriesContainer