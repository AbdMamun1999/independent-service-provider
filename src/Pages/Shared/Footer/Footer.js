import React from 'react';
import './Footer.css';

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <div className='bg-dark mt-5 text-white p-5'>
            <div className='footer-flex'>
                <p className='text-white copy-right'><small>copy right &copy {date}</small></p>
                <div>
                    <h4>
                        CONTACT
                    </h4>
                    <div>
                        <p>
                            <span>Phone: 0170000000</span>
                        </p>
                        <p>
                        <span>Email: abc@gmail.com</span>
                        </p>
                    </div>
                </div>
                <div>
                    <h4>ADDRESS</h4>
                    <address>Maniknagar,Mugda,Dhaka</address>
                </div>
            </div>
        </div>
    );
};

export default Footer;