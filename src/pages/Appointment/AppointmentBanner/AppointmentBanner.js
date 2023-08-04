import React from 'react';
import chair from './../../../assets/images/chair.png';
import bgImage from '../../../assets/images/bg.png'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <div style={{ backgroundImage: `url(${bgImage})` }} className="hero bg-center bg-origin-content bg-cover bg-no-repeat px-10 py-8">
            <div className="hero-content flex-col-reverse md:flex-row lg:flex-row">
                <div className='pr-10'>
                    <DatePicker
                        selected={selectedDate}
                        dateFormat='PP'
                        onChange={(date) => setSelectedDate(date)}
                        inline
                    />

                </div>
                <div className='lg:w-1/2'>
                    <img src={chair} className="rounded-lg shadow-xl" alt='chair' />
                </div>
            </div>
        </div>

    );
};

export default AppointmentBanner;