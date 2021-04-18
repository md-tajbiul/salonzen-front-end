import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import course from '../../../Assets/course.jpg';

const Academy = () => {
    return (
        <div className="row d-flex align-items-center" style={{background: '#F2EEE9', marginRight:'0',marginBottom:'10vh'}}>

            <div className="col-md-6 p-5">
                    <h2 className="mb-5">Academy</h2>
                    <p>Our talented specialists are ready to share their secrets. Don’t loose this opportunity, join our courses. Out team will share all their secrets and their 15 year experience. All our courses include some theory and a lot of practice, personalised approach and state-of-the-art program. You can choose course for beginner or advanced level based on your experience and skill set.</p>
                    <Button as={Link} to="/academy" variant="outline-dark" className="animation mt-3">View Course</Button>
            </div>

            <div className="col-md-6">
                <img src={course} style={{width:'100%', height:"75vh"}} alt="About"/>
            </div>

        </div>
    );
};

export default Academy;