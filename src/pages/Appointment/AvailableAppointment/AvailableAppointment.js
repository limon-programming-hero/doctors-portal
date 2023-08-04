import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import AppointmentModal from '../AppointmentModal/AppointmentModal';
// options means appointmentOption.json file
const AvailableAppointment = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
    return (
        <div className='mt-28 lg:px-16 px-10 mb-28'>
            <h3 className='font-semibold text-center text-secondary'>Available Services on {format(selectedDate, 'PP')}</h3>
            <p className='font-semibold text-center text-accent'>Please select a service</p>
            <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {appointmentOptions?.map(option =>
                    <AppointmentOption key={option._id} option={option} setTreatment={setTreatment}></AppointmentOption>
                )}
            </div>
            {
                treatment &&
                <AppointmentModal
                    treatment={treatment}
                    setTreatment={setTreatment}
                    selectedDate={selectedDate}
                ></AppointmentModal>
            }
        </div>
    );
};

export default AvailableAppointment;