import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import about from '../../../Assets/about.jpg';

const About = () => {
    return (
        <div className="row d-flex align-items-center" style={{background: '#F2EEE9', marginRight:'0',marginBottom:'10vh'}}>

            <div className="col-md-6">
                <img src={about} style={{width:'100%', height:"75vh"}} alt="About"/>
            </div>

            <div className="col-md-6 p-5">
                    <h2 className="mb-5">About Us</h2>
                    <p>We started as a small beauty studio in Islington, London. Our main idea was to create the best beauty studio in the world. Can there be compromises in the best studio in the world? Our answer is always no, we care about the best quality, we hire the best specialists and provide the best customer service. This approach allowed us to grow and create awesome team that is passionate about everything we do.</p>
                    <Button className="animation mt-3" as={Link} to="/about" variant="outline-dark">Explore More</Button>
            </div>
        </div>
    );
};

export default About;