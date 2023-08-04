import React from 'react';

const InfoCard = ({ info }) => {
    const { img, title, details, bg } = info;
    return (
        <div className={`card card-side shadow-xl ${bg} px-10 text-white`}>
            <figure><img src={img} alt="information" /></figure>
            <div className="card-body">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className='text-sm'>{details}</p>
            </div>
        </div>
    );
};

export default InfoCard;