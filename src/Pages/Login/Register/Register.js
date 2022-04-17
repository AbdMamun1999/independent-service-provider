import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
// import './Register.css'

const Register = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [errors,setErrors] = useState('')
    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const handleEmailValue = event =>{
        setEmail(event.target.value)
      }

      const handlePasswordValue = event =>{
          setPassword(event.target.value)
      }

      const handleConfirmPasswordValue = event =>{
          setConfirmPassword(event.target.value)
      }

      

      const handleRegisterSubmit = event =>{
          event.preventDefault()
          if(password===confirmPassword){
            createUserWithEmailAndPassword(email,password)
          }
      }


    return (
        <div className="w-50 mx-auto">
            <h2 className='text-center text-primary'>Please Register</h2>
            <form onSubmit={handleRegisterSubmit}>
                
                <div className="mb-3">
                    <input onBlur={handleEmailValue} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" required/>
                </div>
                <div className="mb-3">
                    <input onBlur={handlePasswordValue} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
                </div>
                <div className='mb-3'>
                    <input onBlur={handleConfirmPasswordValue} className="form-control" type="password" placeholder="Confirm password" required/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" >Check me out</label>
                </div>
                <div className="d-grid gap-2 col-12 mx-auto mb-3">
                    <button className="btn btn-primary" type="submit">Button</button>
                </div>
            </form>
            <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' >Please Login</Link> </p>
        </div>
    );
};

export default Register;