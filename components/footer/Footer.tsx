'use client'
import React from 'react'
import Logo from '../header/Logo'
import { Button } from '../ui/button'
import { ChevronUpIcon, PhoneIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import ScrollUpButton from './ScrollUpButton'
import useMediaQuery from '@/hooks/useMediaQuery'
import { usePathname } from 'next/navigation'

const advantages = [
    {
        id: 'advantage-1',
        image_url: '/footer/express-delivery.svg',
        title: 'امکان تحویل اکسپرس'
    },
    {
        id: 'advantage-2',
        image_url: '/footer/cash-on-delivery.svg',
        title: 'امکان پرداخت در محل'
    },
    {
        id: 'advantage-3',
        image_url: '/footer/support.svg',
        title: '7 روز هفته ، 24 ساعته'
    },
    {
        id: 'advantage-4',
        image_url: '/footer/days-return.svg',
        title: 'هفت روز ضمانت بازگشت کالا'
    },
    ,
    {
        id: 'advantage-5',
        image_url: '/footer/original-products.svg',
        title: 'ضمانت اصل بودن کالا'
    }
];
const menuItems = [
    // راهنمای خرید از دیجی‌کالا (DigiKala Shopping Guide)
    {
        category: "با دیجی‌کالا",
        items: [
            {
                title: "اتاق خبر دیجی‌کالا",
                url: "#",
                description: "آخرین اخبار و اطلاعیه‌های دیجی‌کالا"
            },
            {
                title: "فروش در دیجی‌کالا",
                url: "#",
                description: "راهنمای فروشندگان برای فروش در پلتفرم"
            },
            {
                title: "فرصت‌های شغلی",
                url: "#",
                description: "موقعیت‌های کاری موجود در دیجی‌کالا"
            },
            {
                title: "گزارش تخلف در دیجی‌کالا",
                url: "#",
                description: "گزارش موارد مشکوک و تخلف"
            },
            {
                title: "تماس با دیجی‌کالا",
                url: "#",
                description: "راه‌های ارتباط با پشتیبانی"
            },
            {
                title: "درباره دیجی‌کالا",
                url: "#",
                description: "معرفی شرکت و تاریخچه فعالیت"
            }
        ]
    },
    {
        category: "خدمات مشتریان",
        items: [
            {
                title: "پاسخ به پرسش‌های متداول",
                url: "#",
                description: "پاسخ سؤالات رایج کاربران"
            },
            {
                title: "رویه‌های بازگرداندن کالا",
                url: "#",
                description: "شرایط و نحوه مرجوع کردن محصولات"
            },
            {
                title: "شرایط استفاده",
                url: "#",
                description: "قوانین و مقررات استفاده از سایت"
            },
            {
                title: "حریم خصوصی",
                url: "#",
                description: "سیاست حفاظت از اطلاعات شخصی کاربران"
            },
            {
                title: "گزارش باگ",
                url: "#",
                description: "گزارش مشکلات فنی سایت"
            }
        ]
    },
    {
        category: "راهنمای خرید از دیجی‌کالا",
        items: [
            {
                title: "نحوه ثبت سفارش",
                url: "#",
                description: "راهنمای مرحله به مرحله ثبت سفارش"
            },
            {
                title: "رویه ارسال سفارش",
                url: "#",
                description: "اطلاعات مربوط به نحوه ارسال کالاها"
            },
            {
                title: "شیوه‌های پرداخت",
                url: "#",
                description: "روش‌های مختلف پرداخت آنلاین و غیر آنلاین"
            }
        ]
    }
];
const socialLinks = [
    {
        icon: '#instagram',
        url: '#'
    },
    {
        icon: '#twitter',
        url: '#'
    },
    {
        icon: '#linkedin',
        url: '#'
    },
    {
        icon: '#aparat',
        url: '#'
    },
]

const urlBlackList = [
    '/cart',
    '/products'
]

const Footer = () => {
    const isMobile = useMediaQuery(1024);
    const path = usePathname();
    console.log(path)
    const dontShowFooter = urlBlackList.find(url => path.startsWith(url))


    if (isMobile && dontShowFooter) return <></>
    return (
        <footer className='mt-10 border-t border-t-slate-700'>
            <div className='container py-4 md:py-7'>
                <div className='flex justify-center md:justify-between'>
                    <Logo />
                    <ScrollUpButton />
                </div>
                <div className='flex justify-between items-center text-xs mt-5 md:hidden'>
                    <div className='flex gap-2 items-center'>
                        <span className='bg-slate-700 rounded-full size-9 flex items-center justify-center'>
                            <PhoneIcon className='w-4 h-4' />
                        </span>
                        <div className='flex flex-col gap-2'>
                            <span>تماس با پشتیبانی</span>
                            <span className='text-slate-500'>7 روز هفته ، 24 ساعت</span>
                        </div>
                    </div>

                    <a className='bg-slate-700 rounded-full block py-2 px-4' href='tel:02161930000'>تماس</a>
                </div>
                <div className='hidden md:flex gap-3 text-xs mt-4'>
                    <span>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</span>|
                    <span>۰۲۱-۹۱۰۰۰۱۰۰</span>|
                    <span>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</span>
                </div>
                <div className='hidden md:flex justify-around mt-10'>
                    {
                        advantages.map((advantage, i) => (
                            <div key={advantage ? advantage.id : i} className='flex flex-col gap-2 items-center'>
                                <Image src={advantage ? advantage.image_url : ''} alt={advantage ? advantage.title : ''} width={56} height={56} />
                                <span className='text-xs'>{advantage?.title}</span>
                            </div>
                        ))
                    }
                </div>
                <div className='justify-between mt-14 hidden lg:flex'>
                    {
                        menuItems.map(category => (
                            <div className='flex flex-col gap-5 w-4/6' key={category.category}>
                                <div className='font-semibold'>{category.category}</div>
                                {
                                    category.items.map((categoryItem) => (
                                        <Link key={categoryItem.title} className='text-slate-400 text-sm' href={categoryItem.url}>{categoryItem.title}</Link>
                                    ))
                                }

                            </div>
                        ))
                    }
                    <div className='flex flex-col gap-5 shrink-0'>
                        <div className='flex flex-col gap-5'>همراه ما باشید!</div>
                        <div className='flex gap-5'>
                            {
                                socialLinks.map(item => (
                                    <Link key={item.icon} href={item.url}>
                                        <svg className='fill-slate-400 size-10'><use href={item.icon}></use></svg>
                                    </Link>
                                ))
                            }
                        </div><div className='flex flex-col gap-5'>با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید</div>
                        <div className='flex gap-2'>
                            <input placeholder='ایمیل شما' type="email" name="email" id="email" className='w-full bg-slate-800 py-2 px-3 rounded-sm focus:outline-none' />
                            <Button className='bg-slate-700 h-10 hover:bg-slate-800'>ثبت</Button>
                        </div>
                    </div>
                </div>
                <Accordion type='single' collapsible className='flex flex-col w-full md:hidden'>
                    {
                        menuItems.map((category, index) => (
                            <AccordionItem value={`item-${index}`} className=' border-b-slate-700 last:!border-b-0' key={category.category}>
                                <AccordionTrigger className='font-semibold'>{category.category}</AccordionTrigger>
                                <AccordionContent className='flex flex-col gap-3'>
                                    {
                                        category.items.map((categoryItem) => (
                                            <Link key={categoryItem.title} className='text-slate-400 text-sm' href={categoryItem.url}>{categoryItem.title}</Link>
                                        ))
                                    }
                                </AccordionContent>
                            </AccordionItem>
                        ))
                    }
                </Accordion>
            </div>
        </footer>
    )
}

export default Footer