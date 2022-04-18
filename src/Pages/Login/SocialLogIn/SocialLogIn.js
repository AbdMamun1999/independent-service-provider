import React from 'react';
import google from '../../../images/logo/google.png'
import github from '../../../images/logo/gitHub.png'
import './SocialLogin.css'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);

    const navigate = useNavigate()

    if(user || userGit){
        navigate('/')
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
    }

    const handleSignInWithGitHub = () =>{
        signInWithGithub()
    }
    return (
        <div className='socialmedia-container'>
            <button
                onClick={handleSignInWithGoogle}
                className='
                d-flex justify-content-center align-items-center google' height="10px">
                <img src={google} alt="" />
                <span>Sign in with Google</span>
            </button>
            <button 
                onClick={handleSignInWithGitHub}
            className='d-flex justify-content-center align-items-center github' height="10px">
                <img src={github} alt="" />
                <span>Sing in with GitHub</span>
            </button>
        </div>
    );
};

export default SocialLogIn;