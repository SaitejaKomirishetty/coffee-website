import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import cafe from '../assets/cafe.png';
import hero1 from '../assets/hero1.png';
import coffeeMid from '../assets/coffee-mid.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { Button } from '@/components/ui/button';

const Banner = () => {
    return (
        <>
            <div className='bg-gray-100'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className='mySwiper'
                >
                    <SwiperSlide
                        data-aos='fade-up-left'
                        className='cursor-pointer'
                    >
                        <div className='container md:pt-20 md:pb-10'>
                            <div className='flex flex-col md:grid grid-cols-2'>
                                <div className=''>
                                    <h1 className='text-6xl md:text-8xl font-bold py-4'>
                                        Alwoishus Delicious Coffee
                                        <img
                                            className='mx-2 inline w-[80px] aspect-square'
                                            src={cafe}
                                        />
                                    </h1>
                                    <p className='py-4'>
                                        A drink from the 'My Alwoishus' bottled
                                        brews range OR grab one of our delecious
                                        coffee's.
                                    </p>
                                    <div className='flex gap-4 py-6'>
                                        <Button className='p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide '>
                                            Download App
                                        </Button>
                                        <Button
                                            variant='outline'
                                            className='p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide '
                                        >
                                            Shop Coffee
                                        </Button>
                                    </div>
                                </div>
                                <div className='relative'>
                                    <img src={hero1} className='w-[600px] h-[800px]' />
                                    <img
                                        className='absolute top-5 right-10 w-[100px] h-[100px]'
                                        src={cafe}
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide
                        data-aos='fade-up-left'
                        className='cursor-pointer'
                    >
                        <div className='container md:pt-20 md:pb-10'>
                            <div className='flex flex-col md:grid grid-cols-2'>
                                <div className=''>
                                    <h1 className='text-6xl md:text-8xl font-bold py-4'>
                                        Alwoishus Delicious Coffee
                                        <img
                                            className='mx-2 inline w-[80px] aspect-square'
                                            src={cafe}
                                        />
                                    </h1>
                                    <p className='py-4'>
                                        A drink from the 'My Alwoishus' bottled
                                        brews range OR grab one of our delecious
                                        coffee's.
                                    </p>
                                    <div className='flex gap-4 py-6'>
                                        <Button className='p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide '>
                                            Download App
                                        </Button>
                                        <Button
                                            variant='outline'
                                            className='p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide '
                                        >
                                            Shop Coffee
                                        </Button>
                                    </div>
                                </div>
                                <div className=''>
                                    <img
                                        className='w-[600px] h-[600px]'
                                        src={coffeeMid}
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default Banner;
