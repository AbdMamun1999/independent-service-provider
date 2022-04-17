import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, description,id } = service;
    const navigate = useNavigate()
    const handleToCheckOut = (id) =>{
        navigate(`services/${id}`)
    }
    console.log(id)

    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <h2>{name}</h2>
            <h4>Why {name}?</h4>
            <p>{description}</p>
            <button onClick={()=>handleToCheckOut(id)}>Check Out</button>
        </div>
    );
};

export default Service;