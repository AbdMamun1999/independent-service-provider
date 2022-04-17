import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loging = () => {
    return (
        <div className='w-100 d-flex justity-content-center align-items-center'>
            <Spinner animation="border" size="sm" variant="primary"/>
        </div>
    );
};

export default Loging;