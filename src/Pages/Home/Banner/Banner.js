import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

import banner1 from '../../../images/banner/image-1.jpg'
import banner2 from '../../../images/banner/image-2.jpg'
import banner3 from '../../../images/banner/image-3.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100 heightImg"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Root Canal</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 heightImg"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='text-dark'>Modern Technology For Dental Treatment</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 heightImg"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Putin tooth</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;