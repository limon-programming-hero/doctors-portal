import React from 'react';
const AppointmentOption = ({ option, setTreatment }) => {
    const { name, slots } = option;
    return (
        <div className="card shadow-xl mt-8">
            <div className="card-body text-center">
                <h2 className="font-bold text-secondary">{name}</h2>
                <p>{slots[0]}</p>
                <p>{slots.length === 0 ? 'Try another day' : `${slots.length} ${slots.length > 1 ? 'spaces' : 'space'} available`}</p>
                <div className="card-actions justify-center">
                    <label disabled={slots.length === 0 && `disabled`} htmlFor="appointment_service_modal" className='font-bold btn border-none text-white bg-gradient-to-l from-primary to-secondary' onClick={() => { setTreatment(option) }}>Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;