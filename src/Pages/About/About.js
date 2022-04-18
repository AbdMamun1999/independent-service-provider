import React from 'react';
import aboutImage from '../../images/about-image/about-image.png'
import './About.css'

const About = () => {
    return (
        <div className='background p-5'>
            <div className="container bg-white p-3">
                <div className='text-center'>
                    <img src={aboutImage} alt="" className='about-image' />
                    <h6 className='mt-3'>Abdullah Al Mamun</h6>
                </div>
                <div className='w-75 mx-auto mt-3'>
                    <p>
                        My name is Abdullah Al Mamun. I am studying in the second year of BBA in Government Titumir College. But in the future I want to be a programmer. So I am working hard now and learning the program regularly.So I am purchasing the programming hero course. Since I am starting with web development I want to complete this course well. And the next step of the course I want to get a chance at scic. And first I want to manage a job so that I can master everything I am learning. Can do.And the job will be the second step in my learning. So I'm working hard.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;