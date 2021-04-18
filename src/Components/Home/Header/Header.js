import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from "../../../Assets/img1.jpg";
import img2 from "../../../Assets/img2.jpg";
import img3 from "../../../Assets/img3.jpg";

const Header = () => {
    return (
        <div style={{position: 'absolute', top:'0', zIndex: '-1'}}>
            <Carousel fade>
                <Carousel.Item>
                <img
                className="d-block"
                src={img1}
                alt="First slide"
                style={{width:"100%", height:"80vh"}}
                />
                    <Carousel.Caption>
                    <h2>Cut Your Hair With Safety</h2>
                    <h5>We are assured you that we protect you from COVID-19 During In Salon.</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                className="d-block"
                src={img2}
                alt="First slide"
                style={{width:"100%", height:"80vh"}}
                />
                    <Carousel.Caption>
                    <h2>We Have Best Beard Expert</h2>
                    <h5>In Your Town We Have The Best Beard Expert</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                className="d-block"
                src={img3}
                alt="First slide"
                style={{width:"100%", height:"80vh"}}
                />
                    <Carousel.Caption>
                    <h2>Premium Hair Cut</h2>
                    <h5>We Are Offering You The Premium Quality Hair Cut.</h5>
                    </Carousel.Caption>
                </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Header;