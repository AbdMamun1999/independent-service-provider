import React from 'react';
import { useParams } from 'react-router-dom';
import './CheckOut.css'

const CheckOut = () => {
    const {serviceId} = useParams()
    return (
        <div className='checkout-container'>
            <h2>This is CheckOut : {serviceId}
            </h2>
        </div>
    );
};

export default CheckOut;