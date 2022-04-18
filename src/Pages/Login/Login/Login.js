import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loging';
import SocialLogIn from '../SocialLogIn/SocialLogIn';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    

    let from = location.state?.from?.pathname || '/'

    let errorMassage;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const handleEmailValue = event => {
        setEmail(event.target.value)
    }

    const handlePasswordValue = event => {
        setPassword(event.target.value)
    }

    if(error){
        errorMassage = error.message;
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleLogInSubmit = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)

    }
    
    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }

    return (
        <div className='w-50 mx-auto'>
            <div className='mt-5 mb-4'>
                <SocialLogIn></SocialLogIn>
            </div>
            <p className='text-center fs-4'>or</p>
            <h2 className='text-center text-primary'>Please Login</h2>
            <Form onSubmit={handleLogInSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailValue} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3 " controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordValue} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='primary mx-auto d-block mb-3 w-100' variant="primary" type="submit">
                    Login
                </Button>
               
            </Form>
            {
                <p className='text-danger'>{errorMassage}</p>
            }
            <p>Are you new to Dentist Service Care <Link to="/register" className='text-primary pe-auto text-decoration-none'>Please Register</Link> </p>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            <ToastContainer />

        </div>
    );
};

export default Login;