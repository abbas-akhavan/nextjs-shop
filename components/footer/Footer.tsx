import React from 'react'
import Logo from '../header/Logo'
import { Button } from '../ui/button'
import { ChevronUpIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
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
    return (
        <footer className='mt-10 border-t border-t-slate-600 hidden md:block'>
            <div className='container py-7'>
                <div className='flex justify-between'>
                    <Logo />
                    <Button className='border border-slate-700 bg-transparent hover:bg-slate-950'>
                        بازگشت به بالا
                        <ChevronUpIcon className='!size-4' />
                    </Button>
                </div>
                <div className='flex gap-3 text-xs mt-4'>
                    <span>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</span>|
                    <span>۰۲۱-۹۱۰۰۰۱۰۰</span>|
                    <span>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</span>
                </div>
                <div className='flex justify-around mt-10'>
                    {
                        advantages.map((advantage, i) => (
                            <div key={advantage ? advantage.id : i} className='flex flex-col gap-2 items-center'>
                                <Image src={advantage ? advantage.image_url : ''} alt={advantage ? advantage.title : ''} width={56} height={56} />
                                <span className='text-xs'>{advantage?.title}</span>
                            </div>
                        ))
                    }
                </div>
                <div className='flex justify-between mt-14'>
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
            </div>
        </footer>
    )
}

export default Footer