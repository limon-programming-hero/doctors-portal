import React from 'react';

const TestimonialCard = ({ info }) => {
    const { details, name, home, img } = info;
    return (
        <div className="card shadow-xl p-3">
            <div className="card-body">
                <p>{details}</p>
                <div className="card-actions justify-start mt-7">
                    <div className="avatar w-20">
                        <div className="rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                            <img className='w-3/4' src={img} alt='patient' />
                        </div>
                    </div>
                    <div className='flex flex-col my-auto mx-4'>
                        <p>{name}</p>
                        <small>{home}</small>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TestimonialCard;