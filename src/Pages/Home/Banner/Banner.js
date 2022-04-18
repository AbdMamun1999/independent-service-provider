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
                    <p>In addition to your daily home dental care routine, regular cleanings by a hygienist/ dentist are essential to maintaining your oral health. .</p>
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
                    <p>Dental Implants are a modern alternative to dentures. They can be used to replace a single tooth, or they can be used as part of a bridge to replace several teeth.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 heightImg"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Fillings tooth</h3>
                    <p>
                    To treat a cavity, we will remove the decayed portion of your tooth and then "fill" the area on the tooth where the decayed material was removed
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;