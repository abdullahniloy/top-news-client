import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../assets/img/img1.jpg';
import img2 from '../../../assets/img/img2.jpg';
const Carosel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>

                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Carosel;