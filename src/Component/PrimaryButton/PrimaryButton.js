import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className="btn border-none text-white bg-gradient-to-l from-primary to-secondary">{children}</button>
    );
};

export default PrimaryButton;