import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div>
                <h3>1. Difference between authorizatio and authentication</h3>
                <p className='px-4'>authentication is the process of verifying who a user is, while authorization is the process of verifying what they have access to.</p>
                <div className='w-75 mx-auto d-flex  justify-content-between'>
                    <div>
                        <h4 className='text-center'>Authorization:</h4>
                        <ul>
                            <li>Determines what users can and cannot access</li>
                            <li>While in authorization process, person's or user's authorities are checked for accessing the resources.</li>
                            <li>While in this process, users or persons are validated.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-center'>Authentication</h4>
                        <ul>
                            <li>Determines whether users are who they claim to be</li>
                            <li>In authentication process, the identity of users are checked for providing the access to the system.</li>
                            <li>	In authentication process, users or persons are verified.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <h4>2. Why are you usign firebase</h4>
                <p className='px-4'>
                    Firebase, Backend-as-a-Service, is a platform by Google that provides functionalities and helps with the backend development of your Android, iOS, or web and even some products that support Unity3D too.
                    Firebase have many services.But I use firebase authentication for web.Because Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                </p>
            </div>
        </div>
    );
};

export default Blogs;