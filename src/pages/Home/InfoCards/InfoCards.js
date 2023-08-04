import React from 'react';
import InfoCard from './InfoCard';
import clockImg from './../../../assets/icons/clock.svg';
import locationImg from './../../../assets/icons/marker.svg';
import PhoneImg from './../../../assets/icons/phone.svg';

const InfoCards = () => {
    const infoCardData = [{
        img: clockImg,
        title: 'Opening Hours',
        details: 'Lorem Ipsum is simply dummy text of the pri',
        bg: 'bg-gradient-to-l from-primary to-secondary'
    },
    {
        img: locationImg,
        title: 'Visit our location',
        details: 'Brooklyn, NY 10036, United States',
        bg: 'bg-accent'
    },
    {
        img: PhoneImg,
        title: 'Contact us now',
        details: '+000 123 456789',
        bg: 'bg-gradient-to-l from-primary to-secondary'
    }
    ]
    return (
        <div className='my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-10'>
            {infoCardData.map((data, i) => <InfoCard key={i} info={data}></InfoCard>)}
        </div>
    );
};

export default InfoCards;