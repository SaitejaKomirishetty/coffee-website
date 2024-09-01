import { useState } from 'react';
import { Button, Dialog, DialogPanel, PopoverGroup } from '@headlessui/react';
import {
    Bars3Icon,
    XMarkIcon,
    ShoppingBagIcon,
} from '@heroicons/react/24/outline';
import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import logo from '../assets/logo.png';

import useSmoothScroll from './hooks/useSmoothScroll';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    useSmoothScroll();

    return (
        <header className='bg-gray-100 px-3 md:px-10 sticky top-0 z-40'>
            <nav
                aria-label='Global'
                className='mx-auto pb-50 flex items-center justify-between py-6'
            >
                <div className='flex lg:flex-1'>
                    <a href='#home' className='-m-1.5 p-1.5'>
                        <span className='sr-only'>Your Company</span>
                        <img src={logo} className='h-8 w-auto' />
                    </a>
                </div>
                <div className='flex lg:hidden'>
                    <button
                        type='button'
                        onClick={() => setMobileMenuOpen(true)}
                        className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
                    >
                        <span className='sr-only'>Open main menu</span>
                        <Bars3Icon aria-hidden='true' className='h-6 w-6' />
                    </button>
                </div>
                <PopoverGroup className='hidden lg:flex lg:gap-x-12'>
                    <a
                        href='#cafe-menu'
                        className='text-lg font-medium leading-6 text-gray-900'
                    >
                        Cafe Menu
                    </a>
                    <a
                        href='#best-sellers'
                        className='text-lg font-medium leading-6 text-gray-900'
                    >
                        Best Sellers
                    </a>
                    <a
                        href='#instant-coffee'
                        className='text-lg font-medium leading-6 text-gray-900'
                    >
                        Instant Coffee
                    </a>
                    <a
                        href='#testimonials'
                        className='text-sm font-semibold leading-6 text-gray-900'
                    >
                        Client Testimonials
                    </a>
                </PopoverGroup>
                <div className='hidden lg:flex lg:flex-1 lg:justify-end items-center gap-5'>
                    <a
                        href='#cart'
                        className='text-sm font-semibold leading-6 text-gray-900'
                    >
                        <ShoppingBagIcon
                            width={35}
                            className='cursor-pointer bg-gray-50 hover:bg-gray-200 shadow-gray-300 shadow-md hover:shadow-2xl rounded-full p-2 hover:scale-105 transition-all'
                        />
                    </a>
                    <Button className='bg-black text-white leading-6 rounded-lg p-3 shadow-lg hover:scale-105 transition-all'>
                        BUY GIFT VOUCHERS
                    </Button>
                </div>
            </nav>
            <Dialog
                open={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                className='lg:hidden'
            >
                <div className='fixed inset-0 z-50' />
                <DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
                    <div className='flex items-center justify-between'>
                        <a href='#home' className='-m-1.5 p-1.5'>
                            <span className='sr-only'>Your Company</span>
                            <img alt='' src={logo} className='h-8 w-auto' />
                        </a>
                        <button
                            type='button'
                            onClick={() => setMobileMenuOpen(false)}
                            className='-m-2.5 rounded-md p-2.5 text-gray-700'
                        >
                            <span className='sr-only'>Close menu</span>
                            <XMarkIcon aria-hidden='true' className='h-6 w-6' />
                        </button>
                    </div>
                    <div className='mt-6 flow-root'>
                        <div className='-my-6 divide-y divide-gray-500/10'>
                            <div className='space-y-2 py-6'>
                                <a
                                    href='#cafe-menu'
                                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                                >
                                    Cafe Menu
                                </a>
                                <a
                                    href='#best-sellers'
                                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                                >
                                    Best Sellers
                                </a>
                                <a
                                    href='#instant-coffee'
                                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                                >
                                    Instant Coffee
                                </a>
                                <a
                                    href='#testimonials'
                                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                                >
                                    Client Testimonials
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
};

export default Header;
