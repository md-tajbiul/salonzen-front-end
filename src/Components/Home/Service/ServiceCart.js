import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './ServiceCart.css';


const ServiceCart = ({service}) => {

    const history = useHistory();

    const handleBook = () => {
        history.push(`/checkout/${service._id}`)
    }

    return (
        <div className="col-md-4 d-flex justify-content-center align-items-center">

        <div className="card animation" style={{width: '20rem', height:"13rem", marginBottom:"2rem", border:"1px solid #F2EEE9"}}>
            <div className="card-body ">
                    <h5 className="card-title">{service.title}</h5>
                    <h6 className="card-title">{service.price}</h6>
                    <p className="card-text">{service.description}</p>
            </div>
                    <Button variant="dark" onClick={handleBook} style={{border:"none", borderRadius:"15px", background:"#6C757D"}}>Click To Book</Button>
        </div>
        </div>
    );
};

export default ServiceCart;