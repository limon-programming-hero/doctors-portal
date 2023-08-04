import React from 'react';
import HomeService from './HomeService';
import img1 from './../../../assets/images/fluoride.png';
import img2 from './../../../assets/images/cavity.png';
import img3 from './../../../assets/images/whitening.png';

const HomeServices = () => {
    const HomeServiceData = [
        {
            img: img1,
            title: 'Fluoride Treatment',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            img: img2,
            title: 'Cavity Filling',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            img: img3,
            title: 'Teeth Whitening',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
    ]
    return (
        <div className='text-center my-10 px-10'>
            <h4 className='text-sm text-secondary font-bold'>OUR SERVICES</h4>
            <h1 className='text-3xl'>Services We Provide</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10'>
                {HomeServiceData.map((data, i) => <HomeService key={i} info={data}></HomeService>)}
            </div>
        </div>
    );
};

export default HomeServices;