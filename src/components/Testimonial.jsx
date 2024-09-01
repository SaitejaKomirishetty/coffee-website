import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper/modules';

import girl1 from '../assets/girl1.png';
import girl2 from '../assets/girl2.png';

import { Star } from 'lucide-react';

const Testimonial = () => {
    return (
        <div className='bg-gray-50'>
            <div className='container py-10  '>
                <div className='container flex flex-col items-center justify-center py-5 '>
                    <h1 className='text-4xl font-bold'>Client Testimonial </h1>
                    <p className='text-center text-lg py-2 text-gray-600 '>
                        A drink from the 'My Alwoishus' bottled brews range OR
                        grab one of our delicious coffee's.
                    </p>
                </div>

                <div class='mb-5 flex items-center justify-center gap-x-6'>
                    <div class='hidden sm:block -space-x-2 overflow-hidden'>
                        <img
                            class='inline-block h-12 w-12 rounded-full ring-2 ring-white'
                            src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
                            alt=''
                        />
                        <img
                            class='inline-block h-12 w-12 rounded-full ring-2 ring-white'
                            src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
                            alt=''
                        />
                        <img
                            class='inline-block h-12 w-12 rounded-full ring-2 ring-white'
                            src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80'
                            alt=''
                        />
                        <img
                            class='inline-block h-12 w-12 rounded-full ring-2 ring-white'
                            src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
                            alt=''
                        />
                        <img
                            class='inline-block h-12 w-12 rounded-full ring-2 ring-white'
                            src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
                            alt=''
                        />
                    </div>
                    <div class='boder-none sm:border-l-2 border-black sm:pl-8'>
                        <div class='flex justify-center sm:justify-start'>
                            <h3 class='text-2xl font-semibold mr-2'>4.6</h3>

                            <Star fill='yellow' stroke='' />
                        </div>
                        <div>
                            <h3 class='text-sm'>Rated by 25k on google.</h3>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <Swiper
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[FreeMode]}
                        className='mySwiper'
                    >
                        <div className='container'>
                            <SwiperSlide>
                                <div className='max-w-sm pb-20'>
                                    <div className='shadow-lg rounded overflow-hidden flex flex-col items-center p-0 hover:scale-105 transition-all  cursor-pointer '>
                                        <div className='bg-gray-100 w-full'>
                                            <img
                                                src={girl1}
                                                className='w-[250px] aspect-square'
                                                height={350}
                                                width={350}
                                            />
                                        </div>
                                        <div className=' p-4'>
                                            <div className='grid grid-cols-2 items-center'>
                                                <h1 className='font-semibold text-xl'>
                                                    Mlestiae consectetur
                                                </h1>
                                                <div className='flex gap-1'>
                                                    <Star
                                                        fill='yellow'
                                                        width={25}
                                                        strokeWidth={0}
                                                    />
                                                    <Star
                                                        fill='yellow'
                                                        width={25}
                                                        strokeWidth={0}
                                                    />
                                                    <Star
                                                        fill='yellow'
                                                        width={25}
                                                        strokeWidth={0}
                                                    />
                                                    <Star
                                                        fill='yellow'
                                                        width={25}
                                                        strokeWidth={0}
                                                    />
                                                    <Star
                                                        fill='yellow'
                                                        width={25}
                                                        strokeWidth={0}
                                                    />
                                                </div>
                                            </div>
                                            <p className='text-lg py-2 text-gray-600 pt-4'>
                                                dolor sit, amet consectetur
                                                adipisicing elit. Facere vero
                                                sed laboriosam quasi. Ex
                                                voluptas, sapiente iusto vero
                                                perspiciatis repellendus
                                                cupiditate aliquam. Et,
                                                molestiae consectetur.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='max-w-sm '>
                                    <div className='shadow-lg rounded overflow-hidden flex flex-col items-center p-0 hover:scale-105 transition-all cursor-pointer '>
                                        <div className='bg-gray-100 w-full'>
                                            <img
                                                src={girl2}
                                                className='w-[250px] aspect-square'
                                            />
                                        </div>
                                        <div className=' p-4'>
                                            <div className='grid grid-cols-2 items-center'>
                                                <h1 className='font-semibold text-xl'>
                                                    consectetur Mlestiae
                                                </h1>
                                                <div className='flex gap-1'>
                                                    <Star
                                                        fill='yellow'
                                                        width={25}
                                                        strokeWidth={0}
                                                    />
                                                    <Star
                                                        fill='yellow'
                                                        width={25}
                                                        strokeWidth={0}
                                                    />
                                                    <Star
                                                        fill='yellow'
                                                        width={25}
                                                        strokeWidth={0}
                                                    />
                                                    <Star
                                                        fill='yellow'
                                                        width={25}
                                                        strokeWidth={0}
                                                    />
                                                    <Star
                                                        fill='yellow'
                                                        width={25}
                                                        strokeWidth={0}
                                                    />
                                                </div>
                                            </div>
                                            <p className='text-lg py-2 text-gray-600 pt-4'>
                                                dolor sit, amet consectetur
                                                adipisicing elit. Facere vero
                                                sed laboriosam quasi. Ex
                                                voluptas, sapiente iusto vero
                                                perspiciatis repellendus
                                                cupiditate aliquam. Et,
                                                molestiae consectetur.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='max-w-sm '>
                                    <div className='shadow-lg rounded overflow-hidden flex flex-col items-center p-0 hover:scale-105 transition-all cursor-pointer '>
                                        <div className='bg-gray-100 w-full'>
                                            <img
                                                src={girl1}
                                                className='w-[250px] aspect-square'
                                                height={350}
                                                width={350}
                                            />
                                        </div>
                                        <div className=' p-4'>
                                            <div className='grid grid-cols-2 items-center'>
                                                <h1 className='font-semibold text-xl'>
                                                    Mlestiae consectetur
                                                </h1>
                                                <div className='flex gap-1'>
                                                    <Star
                                                        fill='yellow'
                                                        width={25}
                                                        strokeWidth={0}
                                                    />
                                                    <Star
                                                        fill='yellow'
                                                        width={25}
                                                        strokeWidth={0}
                                                    />
                                                    <Star
                                                        fill='yellow'
                                                        width={25}
                                                        strokeWidth={0}
                                                    />
                                                    <Star
                                                        fill='yellow'
                                                        width={25}
                                                        strokeWidth={0}
                                                    />
                                                    <Star
                                                        fill='yellow'
                                                        width={25}
                                                        strokeWidth={0}
                                                    />
                                                </div>
                                            </div>
                                            <p className='text-lg py-2 text-gray-600 pt-4'>
                                                dolor sit, amet consectetur
                                                adipisicing elit. Facere vero
                                                sed laboriosam quasi. Ex
                                                voluptas, sapiente iusto vero
                                                perspiciatis repellendus
                                                cupiditate aliquam. Et,
                                                molestiae consectetur.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='max-w-sm '>
                                    <div className='shadow-lg rounded overflow-hidden flex flex-col items-center p-0 hover:scale-105 transition-all cursor-pointer '>
                                        <div className='bg-gray-100 w-full'>
                                            <img
                                                src={girl2}
                                                className='w-[250px] aspect-square'
                                            />
                                        </div>
                                        <div className=' p-4'>
                                            <div className='grid grid-cols-2 items-center'>
                                                <h1 className='font-semibold text-xl'>
                                                    consectetur Mlestiae
                                                </h1>
                                                <div className='flex gap-1'>
                                                    <Star
                                                        fill='yellow'
                                                        width={25}
                                                        strokeWidth={0}
                                                    />
                                                    <Star
                                                        fill='yellow'
                                                        width={25}
                                                        strokeWidth={0}
                                                    />
                                                    <Star
                                                        fill='yellow'
                                                        width={25}
                                                        strokeWidth={0}
                                                    />
                                                    <Star
                                                        fill='yellow'
                                                        width={25}
                                                        strokeWidth={0}
                                                    />
                                                    <Star
                                                        fill='yellow'
                                                        width={25}
                                                        strokeWidth={0}
                                                    />
                                                </div>
                                            </div>
                                            <p className='text-lg py-2 text-gray-600 pt-4'>
                                                dolor sit, amet consectetur
                                                adipisicing elit. Facere vero
                                                sed laboriosam quasi. Ex
                                                voluptas, sapiente iusto vero
                                                perspiciatis repellendus
                                                cupiditate aliquam. Et,
                                                molestiae consectetur.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='max-w-sm '>
                                    <div className='shadow-lg rounded overflow-hidden flex flex-col items-center p-0 hover:scale-105 transition-all cursor-pointer '>
                                        <div className='bg-gray-100 w-full'>
                                            <img
                                                src={girl1}
                                                className='w-[250px] aspect-square'
                                                height={350}
                                                width={350}
                                            />
                                        </div>
                                        <div className=' p-4'>
                                            <div className='grid grid-cols-2 items-center'>
                                                <h1 className='font-semibold text-xl'>
                                                    Mlestiae consectetur
                                                </h1>
                                                <div className='flex gap-1'>
                                                    <Star
                                                        fill='yellow'
                                                        width={25}
                                                        strokeWidth={0}
                                                    />
                                                    <Star
                                                        fill='yellow'
                                                        width={25}
                                                        strokeWidth={0}
                                                    />
                                                    <Star
                                                        fill='yellow'
                                                        width={25}
                                                        strokeWidth={0}
                                                    />
                                                    <Star
                                                        fill='yellow'
                                                        width={25}
                                                        strokeWidth={0}
                                                    />
                                                    <Star
                                                        fill='yellow'
                                                        width={25}
                                                        strokeWidth={0}
                                                    />
                                                </div>
                                            </div>
                                            <p className='text-lg py-2 text-gray-600 pt-4'>
                                                dolor sit, amet consectetur
                                                adipisicing elit. Facere vero
                                                sed laboriosam quasi. Ex
                                                voluptas, sapiente iusto vero
                                                perspiciatis repellendus
                                                cupiditate aliquam. Et,
                                                molestiae consectetur.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
