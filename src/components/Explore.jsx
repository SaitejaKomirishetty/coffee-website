import { Button } from '@/components/ui/button';
import icon3 from '../assets/icon3.png';
import icon2 from '../assets/icon2.png';
import icon1 from '../assets/icon1.png';

import React from 'react';

const Explore = () => {
    return (
        <div className='bg-gray-50'>
            <div className='container flex flex-col items-center justify-center py-10 md:py-20 '>
                <h1 className='text-4xl font-bold'>Explore Our Alowishus</h1>
                <p className='text-center text-lg py-2 text-gray-600 '>
                    A drink from the 'My Alwoishus' bottled brews range OR grab
                    one of our delicious coffee's.
                </p>
            </div>
            <div className=' px-5 grid md:grid-cols-3 gap-10 w-4/5 mx-auto'>
                <div className=' shadow-2xl rounded-lg px-4 py-10 cursor-pointer hover:scale-110 transition-all'>
                    <h1 className='text-3xl text-gray-700 font-bold'>
                        Our catering
                    </h1>
                    <p className=' text-lg py-2 text-gray-600 '>
                        Alwoishus Catering, delicious drop off Catering
                    </p>
                    <div className='flex flex-col items-center justify-center'>
                        <img
                            src={icon1}
                            className='py-6 w-[200px] aspect-auto'
                        />
                        <Button className='rounded-lg tracking-wide p-6 shadow-lg hover:scale-105 transition-all text-lg font-normal'>
                            ORDER CATERING
                        </Button>
                    </div>
                </div>
                <div className=' shadow-2xl rounded-lg px-4 py-10 cursor-pointer hover:scale-110 transition-all'>
                    <h1 className='text-3xl text-gray-700 font-bold'>
                        The Food
                    </h1>
                    <p className=' text-lg py-2 text-gray-600 '>
                        Our entire menu is available as dine in or takeaway.
                    </p>
                    <div className='flex flex-col items-center justify-center'>
                        <img
                            src={icon2}
                            className='py-6 w-[200px] aspect-auto'
                        />
                        <Button className='rounded-lg tracking-wide p-6 shadow-lg hover:scale-105 transition-all text-lg font-normal'>
                            FOOD MENU
                        </Button>
                    </div>
                </div>
                <div className=' shadow-2xl rounded-lg px-4 py-10 cursor-pointer hover:scale-110 transition-all'>
                    <h1 className='text-3xl text-gray-700 font-bold'>
                        The Gelato
                    </h1>
                    <p className=' text-lg py-2 text-gray-600 '>
                        Life is like GELATO, enjoy it before it melts. Lorem,
                        ipsum.
                    </p>
                    <div className='flex flex-col items-center justify-center'>
                        <img
                            src={icon3}
                            className='py-6 w-[200px] aspect-auto'
                        />
                        <Button className='rounded-lg tracking-wide p-6 shadow-lg hover:scale-105 transition-all text-lg font-normal'>
                            DISCOVER
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;
