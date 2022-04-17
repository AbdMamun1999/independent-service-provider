import React from 'react';
import { Link } from 'react-router-dom';
// import './Register.css'

const Register = () => {
    return (
        <div className="w-50 mx-auto">
            <h2 className='text-center text-primary'>Please Register</h2>
            <form>
                <div className='mb-3'>
                    <input className="form-control" type="text" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" >Check me out</label>
                </div>
                <div className="d-grid gap-2 col-12 mx-auto mb-3">
                    <button className="btn btn-primary" type="button">Button</button>
                </div>
            </form>
            <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' >Please Login</Link> </p>
        </div>
    );
};

export default Register;