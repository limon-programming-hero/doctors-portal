import React from 'react';
import BannerImg from './../../../assets/images/chair.png';
import bgImage from '../../../assets/images/bg.png'
import PrimaryButton from './../../../Component/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${bgImage})` }} className="hero bg-center bg-origin-content bg-cover bg-no-repeat px-10 py-8">
            <div className="hero-content flex-col-reverse md:flex-row lg:flex-row">
                <div className='lg:w-1/2 pr-10'>
                    <h1 className="text-3xl font-bold">Your New Smile Starts<br /> Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
                <div className='lg:w-1/2'>
                    <img src={BannerImg} className="rounded-lg shadow-xl" alt='chair' />
                </div>
            </div>
        </div>
    );
};

export default Banner;