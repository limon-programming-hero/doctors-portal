import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import PrimaryButton from '../../../Component/PrimaryButton/PrimaryButton';
import doctorBg from '../../../assets/images/appointment.png'

const HomeAppointment = () => {
    return (
        <div style={{ backgroundImage: `url(${doctorBg})` }} className="hero lg:max-h-[525px] border-2 bg-accent text-white mt-32 px-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className='hidden md:flex lg:flex lg:w-1/2'>
                    <img className='-mt-36 ' src={doctor} alt='doctor' />
                </div>
                <div className='w-full lg:w-1/2 py-4'>
                    <p className='text-secondary font-bold my-2'>Appointment</p>
                    <h1 className="text-3xl font-semibold">Make an appointment Today</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default HomeAppointment;