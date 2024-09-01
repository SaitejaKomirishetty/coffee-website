import { Button } from '@/components/ui/button';
import coffeeBanner from '../assets/coffee-banner.png'
import handDrawn from '../assets/hand-drawn.png';

import React from 'react';

const Instant = () => {
    return (
        <>
            <div className='bg-gray-50 py-20 mx-auto'>
                <div className='container'>
                    <div className='grid gap-10 md:grid-cols-2 md:gap-0 items-center'>
                        <div className='flex flex-col gap-9 ps-40'>
                            <h1 className='text-6xl text-gray-900 font-bold'>
                                Instant Coffee At Your Home
                            </h1>
                            <p className='text-lg py-2 text-gray-600'>
                                dolor sit, amet consectetur adipisicing elit.
                                Facere vero sed laboriosam quasi. Ex voluptas,
                                sapiente iusto vero perspiciatis repellendus
                                cupiditate aliquam. Et, molestiae consectetur.
                            </p>
                            <Button className='rounded-lg w-fit tracking-wide p-6 shadow-lg hover:scale-105 transition-all text-lg font-normal'>
                                Download Your App
                            </Button>
                        </div>
                        <div className='flex mx-auto relative'>
                            <img
                                src={coffeeBanner}
                                className='rounded-3xl border-2 z-20 border-gray-100  -rotate-12 w-[250px] '
                            />
                            <img
                                src={coffeeBanner}
                                className='rounded-3xl border-2 z-20 border-gray-100 absolute top-0 left-20 w-[250px]'
                            />
                            <img
                                src={handDrawn}
                                className=' z-10 md:w-[600px] md:max-w-xl absolute -bottom-8 left-1 md:top-0 md:-left-[90px]'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Instant;
