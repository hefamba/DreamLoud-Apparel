import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { useState } from 'react';
import First from '../assets/First.jpg';
import Second from '../assets/Second.jpg';
import Third from '../assets/Third.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={First}
                    alt="First slide"
                    style={{ width: '100%' }}
                />
                <Carousel.Caption>
                    <h2 style={{color:'black'}}>Shop for the latest Apparel</h2>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Second}
                    alt="Second slide"
                    style={{ width: '100%' }}
                />

                <Carousel.Caption>
                <h2 >Wide variety from top to bottom</h2>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Third}
                    alt="Third slide"
                    style={{ width: '100%' }}
                />

                <Carousel.Caption>
                    <h2>Check out our new releases</h2>
                    
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}





export default ControlledCarousel;