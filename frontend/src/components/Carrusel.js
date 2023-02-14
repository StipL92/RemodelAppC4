import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../images/Carrusel1.png';
import carousel2 from '../images/Carrusel2.png';
import carousel3 from '../images/Carrusel3.png';
import carousel4 from '../images/Carrusel4.png';
import carousel5 from '../images/Carrusel5.png';

function Carrusel() {
    return (
        <>
            <div className='divisor'>
                <div class='centrar mt-5 mb-5'>
                    <Carousel variant="dark">
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carruselh"
                                src={carousel1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carruselh"
                                src={carousel2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carruselh"
                                src={carousel3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carruselh"
                                src={carousel4}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carruselh"
                                src={carousel5}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Carrusel;