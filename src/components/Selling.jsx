import { Button } from '@/components/ui/button';
import mid1 from '../assets/mid1.png';
import mid2 from '../assets/mid2.png';
import mid3 from '../assets/mid3.png';

import React from 'react';

const Selling = () => {
    return (
        <>
            <div className='bg-gray-50'>
                <div className='container flex flex-col items-center justify-center py-20 '>
                    <h1 className='text-6xl font-bold'>Best Selling Coffee</h1>
                    <p className='text-center text-2xl md:w-[800px] py-4 text-gray-600 '>
                        A drink from the 'My Alwoishus' bottled brews range OR
                        grab one of our delicious coffee's.
                    </p>
                </div>
                <div className='container py-10 md:py-20'>
                    <div className=' grid md:grid-cols-3 gap-40 md:gap-16  '>
                        <div className='shadow-xl hover:shadow-2xl rounded-lg px-12 py-8 cursor-pointer hover:scale-110 transition-all relative '>
                            <div className='grid grid-cols-2 gap-6 py-3 items-end'>
                                <img
                                    className='absolute -right-4 w-[280px] aspect-square'
                                    src={mid1}
                                />
                                <div>
                                    <p className='text-lg text-gray-500'>
                                        #1 Selling
                                    </p>
                                    <h1 className='text-3xl py-2 text-gray-700 font-bold'>
                                        Double Espresso
                                    </h1>
                                </div>
                            </div>
                            <p className='text-lg py-2 text-gray-600'>
                                ipsum dolor sit amet consectetur adipisicing
                                elit. Commodi, voluptate minus animi impedit
                                rerum quasi quae eius quo unde sapiente?
                                Asperiores possimus aspernatur eum deleniti.
                            </p>
                            <div className='flex gap-6 items-center justify-between py-2'>
                                <p className='font-semibold text-2xl'>$7.99</p>
                                <Button className='rounded-lg tracking-wide shadow-lg hover:scale-105 transition-all text-lg font-normal'>
                                    ORDER NOW
                                </Button>
                            </div>
                        </div>
                        <div className='shadow-xl hover:shadow-2xl rounded-lg px-12 py-8 cursor-pointer hover:scale-110 transition-all relative '>
                            <div className='grid grid-cols-2 gap-6 py-3 items-end'>
                                <img
                                    className='absolute -right-4 w-[280px] aspect-square'
                                    src={mid2}
                                />
                                <div>
                                    <p className='text-lg text-gray-500'>
                                        #1 Selling
                                    </p>
                                    <h1 className='text-3xl py-2 text-gray-700 font-bold'>
                                        Double Espresso
                                    </h1>
                                </div>
                            </div>
                            <p className='text-lg py-2 text-gray-600'>
                                ipsum dolor sit amet consectetur adipisicing
                                elit. Commodi, voluptate minus animi impedit
                                rerum quasi quae eius quo unde sapiente?
                                Asperiores possimus aspernatur eum deleniti.
                            </p>
                            <div className='flex gap-6 items-center justify-between py-2'>
                                <p className='font-semibold text-2xl'>$5.99</p>
                                <Button className='rounded-lg tracking-wide shadow-lg hover:scale-105 transition-all text-lg font-normal'>
                                    ORDER NOW
                                </Button>
                            </div>
                        </div>
                        <div className='shadow-xl hover:shadow-2xl rounded-lg px-12 py-8 cursor-pointer hover:scale-110 transition-all relative '>
                            <div className='grid grid-cols-2 gap-6 py-3 items-end'>
                                <img
                                    className='absolute -right-4 w-[280px] aspect-square'
                                    src={mid3}
                                />
                                <div>
                                    <p className='text-lg text-gray-500'>
                                        #1 Selling
                                    </p>
                                    <h1 className='text-3xl py-2 text-gray-700 font-bold'>
                                        Double Espresso
                                    </h1>
                                </div>
                            </div>
                            <p className='text-lg py-2 text-gray-600'>
                                ipsum dolor sit amet consectetur adipisicing
                                elit. Commodi, voluptate minus animi impedit
                                rerum quasi quae eius quo unde sapiente?
                                Asperiores possimus aspernatur eum deleniti.
                            </p>
                            <div className='flex gap-6 items-center justify-between py-2'>
                                <p className='font-semibold text-2xl'>$6.99</p>
                                <Button className='rounded-lg tracking-wide shadow-lg hover:scale-105 transition-all text-lg font-normal'>
                                    ORDER NOW
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Selling;
