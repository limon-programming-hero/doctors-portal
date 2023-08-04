import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import TestimonialCard from './TestimonialCard';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';

const HomeTestimonial = () => {
    const cardInfo = [
        {
            details: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            home: 'California',
            img: people1
        },
        {
            details: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            home: 'California',
            img: people2
        },
        {
            details: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            home: 'California',
            img: people3
        },
    ]
    return (
        <div className='px-10 my-24'>
            <div className="flex flex-row justify-between">
                <div>
                    <p className='text-secondary'>Testimonial</p>
                    <h3 className='text-2xl'>What Our Patients Says</h3>
                </div>
                <div>
                    <img className='w-24 lg:w-36' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-7'>
                {cardInfo.map((data, i) => <TestimonialCard key={i} info={data}></TestimonialCard>)}
            </div>
        </div>
    );
};

export default HomeTestimonial;