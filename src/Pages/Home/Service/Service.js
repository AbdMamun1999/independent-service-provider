import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, description,id,img } = service;
    const navigate = useNavigate()
    const handleToCheckOut = (id) =>{
        navigate(`services/${id}`)
    }
    console.log(id)

    return (
        <div className=' border p-3 border-rounded'>
            <h2 className='fs-5 pt-3'>{name}</h2>
            <p>{description}</p>
            <button className='mx-auto d-block' onClick={()=>handleToCheckOut(id)}>Check Out</button>
        </div>
    );
};

export default Service;