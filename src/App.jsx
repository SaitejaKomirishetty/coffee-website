import { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Explore from './components/Explore';
import Order from './components/Order';
import Selling from './components/Selling';
import Instant from './components/Instant';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

function App() {

    return (
        <>
            <Header />
            <Banner />
            <section id='cafe-menu'>
                <Explore />
            </section>
            <Order />
            <section id='best-sellers'>
                <Selling />
            </section>
            <section id='instant-coffee'>
                <Instant />
            </section>
            <section id='testimonials'>
                <Testimonial />
            </section>
            <Footer />
        </>
    );
}

export default App;
