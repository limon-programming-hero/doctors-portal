import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import HomeServices from '../HomeServices/HomeServices';
import HomeServiceBanner from '../HomeServiceBanner/HomeServiceBanner';
import HomeAppointment from '../HomeAppointment/HomeAppointment';
import HomeTestimonial from '../HomeTestimonial/HomeTestimonial';
import HomeContact from '../HomeContact/HomeContact';

const Home = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <HomeServices></HomeServices>
            <HomeServiceBanner></HomeServiceBanner>
            <HomeAppointment></HomeAppointment>
            <HomeTestimonial></HomeTestimonial>
            <HomeContact></HomeContact>
        </div>
    );
};

export default Home;