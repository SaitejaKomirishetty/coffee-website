import { Button } from '@/components/ui/button';
import coffeeMid1 from '../assets/coffee-mid.png';

import React from 'react';

const Order = () => {
    return (
        <>
            <div className='bg-gray-50 py-20 mx-auto'>
                <div className='container'>
                    <div className='grid md:grid-cols-2 items-center'>
                        <div>
                            <img
                                src={coffeeMid1}
                                className='w-[600] aspect-square'
                            />
                        </div>
                        <div className='flex flex-col gap-9'>
                            <h1 className='text-6xl text-gray-900 font-bold'>
                                Order Your Favorite Coffee
                            </h1>
                            <p className='text-lg py-2 text-gray-600'>
                                dolor sit, amet consectetur adipisicing elit.
                                Facere vero sed laboriosam quasi. Ex voluptas,
                                sapiente iusto vero perspiciatis repellendus
                                cupiditate aliquam. Et, molestiae consectetur.
                            </p>
                            <Button className='rounded-lg w-fit tracking-wide p-6 shadow-lg hover:scale-105 transition-all text-lg font-normal'>
                                Order Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Order;
