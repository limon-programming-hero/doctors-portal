import React from 'react';
import PrimaryButton from '../../../Component/PrimaryButton/PrimaryButton';
import serviceBannerImg from './../../../assets/images/treatment.png'

const HomeServiceBanner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex flex-col md:flex-row lg:flex-row lg:justify-even lg:px-24 px-10 gap-10">
                <div className='w-full md:w-1/2 lg:w-1/2'>
                    <img src={serviceBannerImg} className="rounded-lg shadow-2xl" alt='services' />
                </div>
                <div className='w-full md:w-1/2 lg:w-1/2'>
                    <h1 className="text-3xl font-bold">Exceptional Dental <br /> Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default HomeServiceBanner;