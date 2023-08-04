import React from 'react';
import { format } from 'date-fns';

const AppointmentModal = ({ treatment, setTreatment, selectedDate }) => {
    const { name, slots } = treatment;
    const HandlerAppointmentBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const PatientName = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const submitData = {
            treatment: name,
            slot,
            PatientName,
            phone,
            email
        }
        console.log(submitData);
        // TODO: send data to the server when doing backend processing
        setTreatment(null);
    }
    return (
        <>
            <input type="checkbox" id="appointment_service_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="appointment_service_modal" className="btn btn-circle btn-sm absolute top-3 right-3 ">X</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form action="submit" onSubmit={HandlerAppointmentBooking} className='mt-5'>
                        <input name='date' type="text" value={format(selectedDate, "PP")} disabled className="input input-bordered w-full m-1" />
                        <select name='slot' className="select select-bordered w-full m-1 bg-gray-200">
                            {slots.map((slot, i) =>
                                <option value={slot} key={i}>{slot}</option>
                            )}
                        </select>
                        <input name='name' type="text" placeholder="Full Name" className="input input-bordered w-full my-2 mx-1" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full my-2 mx-1" />
                        <input name='email' type="text" placeholder="Email" className="input input-bordered w-full my-2 mx-1" />
                        <input type="submit" value="SUBMIT" className="input input-bordered w-full my-2 mx-1 bg-accent text-white" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default AppointmentModal;