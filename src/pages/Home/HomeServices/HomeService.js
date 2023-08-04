import React from 'react';

const HomeService = ({ info }) => {
    const { img, title, details } = info;
    return (
        <div className="card p-2 shadow-md">
            <figure><img src={img} alt="teeth" /></figure>
            <div className="card-body">
                <h2 className="card-title mx-auto">{title}</h2>
                <p className='mx-auto'>{details}</p>
            </div>
        </div>
    );
};

export default HomeService;