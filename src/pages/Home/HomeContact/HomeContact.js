import React from 'react';
import inputBg from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Component/PrimaryButton/PrimaryButton';
const HomeContact = () => {
    return (
        <div style={{ backgroundImage: `url(${inputBg})` }} className='my-5 py-24 px-10 text-center text-white'>
            <p className='text-secondary font-semibold'>Contact Us</p>
            <h3 className='text-2xl'>Stay connected with us</h3>
            <form className='flex flex-col w-3/4 md:w-[450px] lg:w-[450px] mx-auto my-4'>
                <input className='rounded-md p-2' type="email" placeholder='email' />
                <input className='my-4 rounded-md p-2' type="text" placeholder='subject' />
                <textarea className="textarea textarea-bordered " placeholder="Your Message"></textarea>
            </form>
            <PrimaryButton>Submit</PrimaryButton>
        </div>
    );
};

export default HomeContact;